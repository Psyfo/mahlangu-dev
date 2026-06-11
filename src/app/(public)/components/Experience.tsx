'use client';

import { motion } from 'framer-motion';

import SectionHeading from './SectionHeading';

const entries = [
  {
    role: 'Senior Full Stack Engineer',
    focus: 'Real-time data infrastructure, event-driven microservices',
    period: '2025 — Present',
  },
  {
    role: 'Independent Contract Engineer',
    focus: 'Full-stack products for startups and SMEs, end-to-end ownership',
    period: '2022 — 2025',
  },
  {
    role: 'Data Science Lecturer',
    focus: 'Applied data science, mentored 100+ students',
    period: '2024 — 2025',
  },
  {
    role: 'Software Developer',
    focus: 'Full-stack platforms and self-managed infrastructure',
    period: '2017 — 2021',
  },
];

export default function Experience() {
  return (
    <section id='experience' className='mx-auto px-6 py-12 max-w-4xl'>
      <SectionHeading>Experience</SectionHeading>
      <div className='flex flex-col'>
        {entries.map(({ role, focus, period }, i) => (
          <motion.div
            key={role}
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 + i * 0.08 }}
            className='flex sm:flex-row flex-col sm:justify-between sm:items-baseline gap-1 py-4 border-[var(--color-border)] border-b first:border-t'
          >
            <div>
              <h3 className='font-semibold text-[var(--color-foreground)] text-lg'>
                {role}
              </h3>
              <p className='text-[var(--color-foreground)]/60 text-sm'>
                {focus}
              </p>
            </div>
            <span className='font-cmd text-[var(--color-accent)] text-sm whitespace-nowrap'>
              {period}
            </span>
          </motion.div>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className='mt-6 text-[var(--color-foreground)]/50 text-sm'
      >
        The full history lives on{' '}
        <a
          href='https://www.linkedin.com/in/sipho-mahlangu/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-[var(--color-accent)] hover:underline'
        >
          LinkedIn
        </a>{' '}
        — this site is about who I am and how to reach me.
      </motion.p>
    </section>
  );
}
