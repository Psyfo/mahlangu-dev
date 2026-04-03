'use client';

import { motion } from 'framer-motion';

const subtitles = [
  'Senior Full Stack Engineer',
  'Distributed Systems',
  'Fintech & Cloud',
];

export default function HeroSection2() {
  return (
    <section
      id='hero-section'
      className='relative flex md:flex-row flex-col items-stretch bg-[var(--color-background)] w-screen h-screen overflow-hidden'
    >
      {/* Left: Text Content */}
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
        className='z-10 flex flex-col justify-center items-start px-8 py-12 w-full md:w-1/2 h-1/2 md:h-full'
      >
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
          className='mb-6 font-cmd font-bold text-[var(--color-foreground)] text-4xl sm:text-5xl md:text-6xl'
        >
          Sipho Omotola Mahlangu
        </motion.h1>
        <div className='mt-4 max-w-3xl'>
          <div className='flex md:flex-row flex-col md:flex-wrap md:items-baseline'>
            {subtitles.map((line, i) => (
              <motion.span
                key={line}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  ease: 'easeOut',
                  delay: 1.1 + i * 0.2,
                }}
                className='font-cmd font-light text-[var(--color-foreground)]/80 text-base sm:text-lg whitespace-nowrap'
              >
                {line}
                {i < subtitles.length - 1 && (
                  <span className='hidden md:inline mx-3 text-[var(--color-foreground)]/40'>
                    |
                  </span>
                )}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right: Background Image with soft entrance + full overlay shim */}
      <div className='relative w-full md:w-1/2 h-1/2 md:h-full'>
        {/* Background Image enters softly from the right */}
        <motion.div
          aria-hidden
          className='absolute inset-0 bg-cover bg-center will-change-transform'
          style={{
            backgroundImage: "url('/images/hero_portrait_2.jpg')",
            backgroundPosition: 'center 20%',
          }}
          initial={{ x: 40, opacity: 0, scale: 1.04 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.45 }}
        />
        {/* Shim covers 100% width; gradient fades out to the right */}
        <motion.div
          aria-hidden
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '100%', opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.6 }}
          className='left-0 absolute inset-y-0 pointer-events-none'
        >
          <div className='bg-gradient-to-r from-[var(--color-background)]/95 to-transparent w-full h-full' />
        </motion.div>
      </div>
    </section>
  );
}
