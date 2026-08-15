'use client';

import { motion } from 'framer-motion';

import SectionHeading from './SectionHeading';

type Entry = {
  verb: string;
  text: string;
  link?: { label: string; href: string; external?: boolean };
};

// The /now page, as a file the shell can read. Verbs lead; detail lives in
// the Projects slides below. public/now.md mirrors this list for anyone who
// actually curls it; update both together.
const entries: Entry[] = [
  {
    verb: 'building',
    text: 'BYO Pulse, a city-parameterised civic platform. Bulawayo is live; the next city is warming up.',
    link: { label: 'byopulse.com', href: 'https://byopulse.com', external: true },
  },
  {
    verb: 'growing',
    text: 'uVelaphi, the Digital Ancestor: 1,100+ customs, names, dishes, and garments, and counting.',
    link: { label: 'uvelaphi.com', href: 'https://uvelaphi.com', external: true },
  },
  {
    verb: 'shipping',
    text: 'design-led sites and storefronts for clients, end to end: architecture, build, deploy.',
  },
  {
    verb: 'exploring',
    text: 'agentic systems that earn trust: grounded answers, eval gates in CI, humans in the loop.',
  },
  {
    verb: 'open-to',
    text: 'contract work, collaborations, and interesting problems.',
    link: { label: 'get in touch', href: '#contact' },
  },
];

export default function Now() {
  return (
    <section id='now' className='mx-auto px-6 py-24 md:py-32 max-w-3xl'>
      <SectionHeading>Now</SectionHeading>
      <motion.p
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        className='mb-8 font-cmd text-[var(--color-accent)] text-sm'
      >
        <span className='text-[var(--color-foreground)]/50'>~/$</span> cat
        now.md
        <span className='ml-3 text-[var(--color-foreground)]/40'>
          # 2026-08
        </span>
      </motion.p>
      <ul className='space-y-5'>
        {entries.map((e, i) => (
          <motion.li
            key={e.verb}
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
              delay: 0.15 + i * 0.08,
            }}
            className='font-cmd text-base md:text-lg leading-relaxed'
          >
            <span className='mr-3 text-[var(--color-accent)]'>$</span>
            <span className='font-bold text-[var(--color-foreground)]'>
              {e.verb}
            </span>{' '}
            <span className='text-[var(--color-foreground)]/70'>{e.text}</span>
            {e.link && (
              <>
                {' '}
                <a
                  href={e.link.href}
                  target={e.link.external ? '_blank' : undefined}
                  rel={e.link.external ? 'noopener noreferrer' : undefined}
                  className='text-[var(--color-accent)] hover:underline whitespace-nowrap'
                >
                  {e.link.label} {e.link.external ? '↗' : '→'}
                </a>
              </>
            )}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
