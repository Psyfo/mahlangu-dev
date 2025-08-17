'use client';

import { motion } from 'framer-motion';

const subtitles = [
  'Software Developer',
  'Technical Trainer',
  'Solutions Advisor',
];

export default function HeroSection2() {
  return (
    <section
      id='hero-section'
      className='w-screen h-screen flex flex-col md:flex-row items-stretch bg-[var(--color-background)] overflow-hidden relative'
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
                  delay: 1.1 + i * 0.2,
                }}
                className='text-xl sm:text-xl font-light text-[var(--color-foreground)]/80 font-cmd'
              >
                {line}
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
          className='absolute inset-y-0 left-0 pointer-events-none'
        >
          <div className='h-full w-full bg-gradient-to-r from-[var(--color-background)]/95 to-transparent' />
        </motion.div>
      </div>
    </section>
  );
}
