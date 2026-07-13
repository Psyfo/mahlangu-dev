'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

import SectionHeading from './SectionHeading';

type Highlight = { label: string; text: string };
type ClientLink = { label: string; sub: string; href?: string };

type Project = {
  id: string;
  title: string;
  href?: string;
  linkLabel?: string;
  image: { src: string; alt: string; width: number; height: number };
  description: ReactNode;
  highlights?: Highlight[];
  clients?: ClientLink[];
  tags?: string[];
};

const projects: Project[] = [
  {
    id: 'byopulse',
    title: 'BYO Pulse',
    href: 'https://byopulse.com',
    linkLabel: 'byopulse.com →',
    image: {
      src: '/images/projects/byopulse-showcase.png',
      alt: 'BYO Pulse on desktop, tablet, and mobile',
      width: 1600,
      height: 900,
    },
    description: (
      <>
        Bulawayo&rsquo;s civic utility: official city information, aggregated so
        a resident can answer{' '}
        <em>
          Where do I go? Who do I call? How do I do this? What&rsquo;s happening
          nearby?
        </em>{' '}
        Fast on any phone, without an account: 800+ mapped places, council
        notices, events, and per-suburb pages.
      </>
    ),
    highlights: [
      {
        label: 'Grounded agent',
        text: 'Ask Byo answers only from the site’s own sourced corpus. Out-of-corpus questions get a refusal that routes back to search, never a guess; answers are link-free by design, with sources rendered as verifiable chips.',
      },
      {
        label: 'Curated pipeline',
        text: 'Daily scrapers open refresh PRs, LLM enrichment passes machine gates and golden-case evals in CI, community submissions wait for human moderation, and every surface shows its source and checked date.',
      },
    ],
    tags: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Neon Postgres',
      'Drizzle',
      'Groq',
      'Vercel',
    ],
  },
  {
    id: 'uvelaphi',
    title: 'uVelaphi',
    href: 'https://uvelaphi.com',
    linkLabel: 'uvelaphi.com →',
    image: {
      src: '/images/projects/uvelaphi-showcase.png',
      alt: 'uVelaphi on desktop, tablet, and mobile',
      width: 1600,
      height: 900,
    },
    description: (
      <>
        The Digital Ancestor: the customs of a continent, recorded for a
        generation raised between worlds. 1,100+ entries across customs, names,
        dishes, and garments answer what to do, when, with whom, and above all{' '}
        <em>why</em>.
      </>
    ),
    highlights: [
      {
        label: 'Labelled by trust',
        text: 'Every entry shows how far it has been verified, from an AI-aggregated first draft, to community-affirmed, to elder-verified. A machine draft never poses as settled knowledge, and the conversational Ask the Elder ships as a clearly marked preview.',
      },
      {
        label: 'Built for the diaspora',
        text: 'Multiple countries and peoples are the point, not the exception. A guided path narrows a continent of customs down to your moment, and a Name Decoder reads what any African name carries.',
      },
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'clients',
    title: 'Client builds',
    image: {
      src: '/images/projects/client-sites.png',
      alt: 'Client builds: Carina Pereira, Lukhanyo Mdingi, Miracle Fertility, and Watchdog Media',
      width: 1600,
      height: 1000,
    },
    description: (
      <>
        Design-led marketing sites and storefronts for studios, boutiques, and
        clinics, delivered end to end: architecture, build, and deploy. Private
        repositories, public live sites.
      </>
    ),
    clients: [
      {
        label: 'carinapereira.com',
        sub: 'beauty academy',
        href: 'https://carinapereira.com',
      },
      {
        label: 'lukhanyomdingi.co.za',
        sub: 'fashion e-commerce',
        href: 'https://lukhanyomdingi.co.za',
      },
      {
        label: 'miraclefertility.de',
        sub: 'fertility care',
        href: 'https://miraclefertility.de',
      },
      {
        label: 'watchdogmedia.co.za',
        sub: 'film production',
        href: 'https://watchdogmedia.co.za',
      },
      {
        label: 'mobisynco.com',
        sub: 'industrial engineering',
        href: 'https://mobisynco.com',
      },
    ],
    tags: [
      'beauty',
      'fashion e-commerce',
      'healthcare',
      'film production',
      'industrial',
    ],
  },
];

function ProjectCard({ project: p }: { project: Project }) {
  const frame = (
    <Image
      src={p.image.src}
      alt={p.image.alt}
      width={p.image.width}
      height={p.image.height}
      className='w-full h-auto'
    />
  );

  return (
    <div>
      <div className='flex sm:flex-row flex-col sm:justify-between sm:items-baseline gap-1 mb-4'>
        <h3 className='font-semibold text-[var(--color-foreground)] text-lg'>
          {p.title}
        </h3>
        {p.href && p.linkLabel && (
          <a
            href={p.href}
            target='_blank'
            rel='noopener noreferrer'
            className='font-cmd text-[var(--color-accent)] text-sm hover:underline whitespace-nowrap'
          >
            {p.linkLabel}
          </a>
        )}
      </div>

      {p.href ? (
        <a
          href={p.href}
          target='_blank'
          rel='noopener noreferrer'
          className='block border border-[var(--color-border)] rounded-lg overflow-hidden'
        >
          {frame}
        </a>
      ) : (
        <div className='border border-[var(--color-border)] rounded-lg overflow-hidden'>
          {frame}
        </div>
      )}

      <p className='mt-5 text-[var(--color-foreground)]/85 leading-relaxed'>
        {p.description}
      </p>

      {p.highlights && (
        <ul className='space-y-3 mt-4'>
          {p.highlights.map((h) => (
            <li
              key={h.label}
              className='text-[var(--color-foreground)]/60 text-sm leading-relaxed'
            >
              <span className='font-cmd text-[var(--color-accent)]'>
                {h.label}:
              </span>{' '}
              {h.text}
            </li>
          ))}
        </ul>
      )}

      {p.clients && (
        <ul className='flex flex-wrap gap-x-6 gap-y-2 mt-4'>
          {p.clients.map((c) => (
            <li key={c.label} className='text-sm'>
              {c.href ? (
                <a
                  href={c.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-cmd text-[var(--color-accent)] hover:underline'
                >
                  {c.label}
                </a>
              ) : (
                <span className='font-cmd text-[var(--color-foreground)]/60'>
                  {c.label}
                </span>
              )}
              <span className='text-[var(--color-foreground)]/40'>
                {' '}
                {c.sub}
              </span>
            </li>
          ))}
        </ul>
      )}

      {p.tags && (
        <div className='flex flex-wrap gap-2 mt-5'>
          {p.tags.map((t) => (
            <span
              key={t}
              className='bg-[var(--color-accent)]/10 px-2.5 py-0.5 border border-[var(--color-border)] rounded font-cmd text-[var(--color-foreground)]/70 text-xs'
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function Chevron({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
    >
      <polyline points={dir === 'left' ? '15 18 9 12 15 6' : '9 18 15 12 9 6'} />
    </svg>
  );
}

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const count = projects.length;

  const goTo = useCallback(
    (i: number) => {
      const track = trackRef.current;
      if (!track) return;
      const clamped = Math.max(0, Math.min(count - 1, i));
      track.scrollTo({ left: clamped * track.clientWidth, behavior: 'smooth' });
    },
    [count],
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setActive(Math.round(track.scrollLeft / track.clientWidth));
      });
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      track.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goTo(active + 1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goTo(active - 1);
    }
  };

  return (
    <section id='projects' className='mx-auto px-6 py-12 max-w-4xl'>
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
      >
        <div className='flex justify-between items-center gap-4 mb-6'>
          <SectionHeading>Projects</SectionHeading>
          <div className='flex items-center gap-3 shrink-0'>
            <span className='font-cmd text-[var(--color-foreground)]/50 text-sm tabular-nums'>
              {String(active + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
            </span>
            <div className='flex gap-2'>
              <button
                type='button'
                onClick={() => goTo(active - 1)}
                disabled={active === 0}
                aria-label='Previous project'
                className='place-items-center grid border border-[var(--color-border)] rounded-md w-9 h-9 text-[var(--color-foreground)]/70 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/40 transition-colors disabled:opacity-30 disabled:pointer-events-none cursor-pointer'
              >
                <Chevron dir='left' />
              </button>
              <button
                type='button'
                onClick={() => goTo(active + 1)}
                disabled={active === count - 1}
                aria-label='Next project'
                className='place-items-center grid border border-[var(--color-border)] rounded-md w-9 h-9 text-[var(--color-foreground)]/70 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/40 transition-colors disabled:opacity-30 disabled:pointer-events-none cursor-pointer'
              >
                <Chevron dir='right' />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={trackRef}
          role='group'
          aria-roledescription='carousel'
          aria-label='Projects'
          tabIndex={0}
          onKeyDown={onKeyDown}
          className='flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/40'
        >
          {projects.map((p, i) => (
            <div
              key={p.id}
              role='group'
              aria-roledescription='slide'
              aria-label={`${i + 1} of ${count}: ${p.title}`}
              className='flex-shrink-0 px-0.5 basis-full min-w-full snap-center'
            >
              <ProjectCard project={p} />
            </div>
          ))}
        </div>

        <div className='flex justify-center gap-2 mt-8'>
          {projects.map((p, i) => (
            <button
              key={p.id}
              type='button'
              onClick={() => goTo(i)}
              aria-label={`Go to ${p.title}`}
              aria-current={active === i}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                active === i
                  ? 'w-6 bg-[var(--color-accent)]'
                  : 'w-2 bg-[var(--color-foreground)]/25 hover:bg-[var(--color-foreground)]/45'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
