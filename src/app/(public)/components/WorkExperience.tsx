'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const jobs = [
  {
    title: 'Data Science Lecturer',
    company: 'Midlands State University',
    duration: 'Sep 2024 – Present',
    location: 'Gweru, Zimbabwe',
    description: [
      'Lectured 100+ tertiary students in Data Science modules (R Programming, Computer Vision, etc).',
    ],
  },
  {
    title: 'Freelance Full Stack Developer',
    company: 'Self-Employed',
    duration: 'Jan 2022 – Present',
    location: 'Remote',
    description: [
      'Built 10+ MVPs for clients in fashion, healthcare, and education.',
      'Notable: Lukhanyo Mdingi Archive (Shopify), Carina Pereira Portfolio (Next.js)',
    ],
  },
  // Add the rest similarly...
];

export default function WorkExperience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50%' });

  return (
    <section
      id='work-experience'
      ref={ref}
      className='max-w-4xl mx-auto px-6 py-12'
    >
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='text-2xl font-bold mb-6'
      >
        Work Experience
      </motion.h2>
      <div className='space-y-8'>
        {jobs.map(
          ({ title, company, duration, location, description }, jobIdx) => (
            <motion.div
              key={title}
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
                delay: 0.3 + jobIdx * 0.3,
              }}
            >
              <h3 className='text-xl font-semibold'>
                {title} — {company}
              </h3>
              <p className='text-sm text-gray-500'>
                {location} | {duration}
              </p>
              <ul className='list-disc list-inside mt-2 text-[var(--color-foreground)]'>
                {description.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ x: -40, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      ease: 'easeOut',
                      delay: 0.5 + jobIdx * 0.3 + i * 0.3,
                    }}
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
}
