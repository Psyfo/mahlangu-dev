'use client';

import { motion } from 'framer-motion';

import SectionHeading from './SectionHeading';

const items = [
  {
    degree: 'BTech in Information Technology',
    school: 'Durban University of Technology',
    award: 'Distinction',
  },
  {
    degree: 'ND in Information Technology',
    school: 'Durban University of Technology',
    award: 'Distinction + Merit Award',
  },
  {
    degree: 'Certifications',
    school: 'CompTIA A+, Network+, MCTS',
    award: '',
  },
];

export default function Education() {
  return (
    <section id='education' className='mx-auto px-6 py-12 max-w-4xl'>
      <SectionHeading>Education</SectionHeading>
      <ul className='space-y-4'>
        {items.map((item, i) => (
          <motion.li
            key={item.degree + item.school}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 + i * 0.08 }}
          >
            <strong className='text-[var(--color-foreground)]'>
              {item.degree}
            </strong>
            <br />
            <span className='text-[var(--color-foreground)]/70'>
              {item.school}
              {item.award && (
                <>
                  {' '}
                  — <em className='text-[var(--color-accent)]'>{item.award}</em>
                </>
              )}
            </span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
