'use client';

import { motion } from 'framer-motion';

const subtitles = [
  'Senior Full Stack Engineer',
  'AI Engineering',
  'Distributed Systems',
];

export default function HeroSection2() {
  return (
    <section
      id='hero-section'
      className='relative flex bg-[var(--color-background)] w-full h-[100svh] overflow-hidden'
    >
      {/* Subtle dot-grid backdrop */}
      <div
        aria-hidden
        className='absolute inset-0 opacity-[0.35] pointer-events-none'
        style={{
          backgroundImage:
            'radial-gradient(var(--color-border) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className='z-10 flex flex-col justify-center items-start mx-auto px-6 w-full max-w-4xl'
      >
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 }}
          className='mb-4 font-cmd text-[var(--color-accent)] text-sm'
        >
          <span className='text-[var(--color-foreground)]/50'>~/$</span> whoami
        </motion.p>
        <motion.h1
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          className='mb-5 font-cmd font-bold text-[var(--color-foreground)] text-4xl sm:text-5xl md:text-6xl'
        >
          Sipho Omotola Mahlangu
        </motion.h1>
        <div className='flex md:flex-row flex-col md:flex-wrap md:items-baseline max-w-3xl'>
          {subtitles.map((line, i) => (
            <motion.span
              key={line}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.45,
                ease: 'easeOut',
                delay: 0.35 + i * 0.1,
              }}
              className='font-cmd font-light text-[var(--color-foreground)]/80 text-base sm:text-lg whitespace-nowrap'
            >
              {line}
              {i < subtitles.length - 1 && (
                <span className='hidden md:inline mx-3 text-[var(--color-accent)]'>
                  |
                </span>
              )}
            </motion.span>
          ))}
        </div>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.55 }}
          className='mt-6 max-w-xl font-cmd text-[var(--color-foreground)]/60 text-sm leading-relaxed'
        >
          I design event-driven backends and AI-native systems, and I keep them
          boring in production.
          <span
            aria-hidden
            className='inline-block bg-[var(--color-accent)] blink ml-1.5 w-[0.5em] h-[0.95em] align-[-0.1em]'
          />
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.7 }}
          className='flex flex-wrap items-center gap-3 mt-8'
        >
          <a
            href='#contact'
            className='bg-[var(--color-accent)] hover:opacity-90 px-5 py-2.5 rounded font-cmd text-[var(--color-accent-contrast)] text-sm transition-opacity'
          >
            Get in touch
          </a>
          <a
            href='https://github.com/Psyfo'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:bg-[var(--color-accent)]/5 px-5 py-2.5 border border-[var(--color-border)] hover:border-[var(--color-accent)] rounded font-cmd text-[var(--color-foreground)]/80 text-sm transition-colors'
          >
            GitHub ↗
          </a>
          <span className='ml-1 font-cmd text-[var(--color-foreground)]/40 text-xs'>
            Cape Town, ZA · Remote
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href='#now'
        aria-label='Scroll to the now section'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.5 },
          y: { delay: 1.2, duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
        }}
        className='bottom-6 left-1/2 z-10 absolute font-cmd text-[var(--color-foreground)]/40 hover:text-[var(--color-accent)] text-xs -translate-x-1/2 transition-colors'
      >
        ▼ scroll
      </motion.a>
    </section>
  );
}
