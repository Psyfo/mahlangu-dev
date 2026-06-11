import { NextResponse } from 'next/server';

const ZEPTOMAIL_TEMPLATE_URL = 'https://api.zeptomail.eu/v1.1/email/template';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Simple per-IP rate limit; fine for a single long-lived Node process
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

export async function POST(req: Request) {
  const token = process.env.ZEPTOMAIL_TOKEN;
  const toAddress = process.env.CONTACT_TO_ADDRESS;
  if (!token || !toAddress) {
    console.error('Contact form is missing ZeptoMail configuration');
    return NextResponse.json(
      { error: 'Contact form is not configured. Please email me directly.' },
      { status: 503 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim();
  const message = String(body.message ?? '').trim();
  const honeypot = String(body.company ?? '').trim();

  // Bots fill the hidden field; pretend success and drop it
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!name || name.length > 120) {
    return NextResponse.json({ error: 'Please provide your name.' }, { status: 400 });
  }
  if (!EMAIL_RE.test(email) || email.length > 200) {
    return NextResponse.json({ error: 'Please provide a valid email.' }, { status: 400 });
  }
  if (message.length < 10 || message.length > 5000) {
    return NextResponse.json(
      { error: 'Message must be between 10 and 5000 characters.' },
      { status: 400 },
    );
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many messages — please try again later or email me directly.' },
      { status: 429 },
    );
  }

  const res = await fetch(ZEPTOMAIL_TEMPLATE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Zoho-enczapikey ${token}`,
    },
    body: JSON.stringify({
      template_alias: process.env.ZEPTOMAIL_TEMPLATE_ALIAS ?? 'portfolio-contact',
      from: {
        address: process.env.ZEPTOMAIL_FROM_ADDRESS ?? 'no-reply@mahlangu.dev',
        name: 'mahlangu.dev',
      },
      to: [{ email_address: { address: toAddress, name: 'Sipho Mahlangu' } }],
      reply_to: [{ address: email, name }],
      merge_info: {
        name,
        email,
        message,
        submitted_at: new Date().toUTCString(),
      },
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    console.error(`ZeptoMail send failed (${res.status}): ${detail}`);
    return NextResponse.json(
      { error: 'Could not send your message right now. Please email me directly.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
