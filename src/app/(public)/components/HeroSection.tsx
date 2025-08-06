'use client';

import { motion } from 'framer-motion';

const subtitles = [
  'Software Developer',
  'Technical Trainer',
  'Solutions Advisor',
];

export default function HeroSection() {
  return (
    <section
      id='hero-section'
      className='w-screen h-screen flex flex-col md:flex-row items-stretch bg-[var(--color-background)] overflow-hidden'
    >
      {/* Left: Text Content */}
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
        className='flex flex-col justify-center items-start px-8 py-12 w-full md:w-1/2 h-1/2 md:h-full z-10'
      >
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
          className='text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--color-foreground)] font-cmd mb-6'
        >
          Sipho Omotola Mahlangu
        </motion.h1>
        <div className='mt-4 max-w-3xl'>
          <div className='flex flex-col md:flex-row md:items-center md:gap-3'>
            {subtitles.map((line, i) => (
              <motion.span
                key={line}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  ease: 'easeOut',
                  delay: 1.1 + i * 0.2, // Stagger each line
                }}
                className='text-xl sm:text-xl font-light text-[var(--color-foreground)]/80 font-cmd'
              >
                {line}
                {/* Pipe separator for desktop, except after last item */}
                {i < subtitles.length - 1 && (
                  <span className='hidden md:inline mx-2 text-[var(--color-foreground)]/50'>
                    |
                  </span>
                )}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right: Portrait Background - Circle Clip */}
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        className='relative w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center'
        style={{
          backgroundColor: 'var(--color-background)',
        }}
      >
        <style>
          {`
            .hero-hex {
              width: 90%;
              aspect-ratio: 1 / 1;
              background-image: url('/images/hero_portrait_2.jpg');
              background-size: cover;
              background-position: center 20%;
              clip-path: circle(50% at 50% 50%);
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              box-shadow: 0 8px 32px 0 rgba(0,0,0,0.22);
              border: 6px solid var(--color-accent);
              z-index: 1;
            }
            .hero-hex::before {
              content: "";
              position: absolute;
              inset: -18px;
              border-radius: 50%;
              background: radial-gradient(circle, var(--color-accent) 0%, transparent 70%);
              opacity: 0.35;
              z-index: 0;
              pointer-events: none;
            }
            .hero-hex::after {
              content: "";
              position: absolute;
              inset: 0;
              background: rgba(0,0,0,0.20);
              clip-path: inherit;
              border-radius: 50%;
              z-index: 2;
              pointer-events: none;
            }
          `}
        </style>
        <div className='hero-hex' />
      </motion.div>
    </section>
  );
}
