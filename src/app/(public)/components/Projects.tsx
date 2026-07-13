'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import SectionHeading from './SectionHeading';

const stack = [
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Neon Postgres',
  'Drizzle',
  'Groq',
  'Vercel',
];

const highlights = [
  {
    label: 'Grounded agent',
    text: 'Ask Byo answers only from the site’s own sourced corpus. Out-of-corpus questions get a refusal that routes back to search, never a guess; answers are link-free by design, with sources rendered as verifiable chips.',
  },
  {
    label: 'Curated pipeline',
    text: 'Daily scrapers open refresh PRs, LLM enrichment passes machine gates and golden-case evals in CI, community submissions wait for human moderation, and every surface shows its source and checked date.',
  },
];

export default function Projects() {
  return (
    <section id='projects' className='mx-auto px-6 py-12 max-w-4xl'>
      <SectionHeading>Projects</SectionHeading>
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
      >
        <div className='flex sm:flex-row flex-col sm:justify-between sm:items-baseline gap-1 mb-4'>
          <h3 className='font-semibold text-[var(--color-foreground)] text-lg'>
            BYO Pulse
          </h3>
          <a
            href='https://byopulse.com'
            target='_blank'
            rel='noopener noreferrer'
            className='font-cmd text-[var(--color-accent)] text-sm hover:underline whitespace-nowrap'
          >
            byopulse.com &rarr;
          </a>
        </div>
        <a
          href='https://byopulse.com'
          target='_blank'
          rel='noopener noreferrer'
          className='block border border-[var(--color-border)] rounded-lg overflow-hidden'
        >
          <Image
            src='/images/projects/byopulse-showcase.png'
            alt='BYO Pulse on desktop, tablet, and mobile'
            width={1600}
            height={900}
            className='w-full h-auto'
          />
        </a>
        <p className='mt-5 text-[var(--color-foreground)]/85 leading-relaxed'>
          Bulawayo&rsquo;s civic utility: official city information, aggregated
          so a resident can answer <em>Where do I go? Who do I call? How do I
          do this? What&rsquo;s happening nearby?</em> Fast on any phone,
          without an account: 800+ mapped places, council notices, events, and
          per-suburb pages.
        </p>
        <ul className='space-y-3 mt-4'>
          {highlights.map(({ label, text }) => (
            <li
              key={label}
              className='text-[var(--color-foreground)]/60 text-sm leading-relaxed'
            >
              <span className='font-cmd text-[var(--color-accent)]'>
                {label}:
              </span>{' '}
              {text}
            </li>
          ))}
        </ul>
        <div className='flex flex-wrap gap-2 mt-5'>
          {stack.map((item) => (
            <span
              key={item}
              className='bg-[var(--color-accent)]/10 px-2.5 py-0.5 border border-[var(--color-border)] rounded font-cmd text-[var(--color-foreground)]/70 text-xs'
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
