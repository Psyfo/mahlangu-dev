import Script from 'next/script';

// Self-hosted Umami page-view analytics (cookieless, no PII collected).
// Renders nothing when NEXT_PUBLIC_UMAMI_WEBSITE_ID is unset, so local dev,
// CI and preview builds stay untracked. The website id is not a secret: it
// ships in the public HTML, but it is supplied at build time by the host
// (Coolify) rather than committed here.
export default function UmamiAnalytics() {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  if (!websiteId) return null;

  const src =
    process.env.NEXT_PUBLIC_UMAMI_SRC ??
    'https://analytics.lab.mahlangu.dev/script.js';

  return (
    <Script src={src} data-website-id={websiteId} strategy='afterInteractive' />
  );
}
