'use client';

import { motion } from 'framer-motion';

import SectionHeading from './SectionHeading';

const interests = [
  {
    title: 'AI Engineering & Agentic Systems',
    description:
      'Building AI-native software: agentic workflows, retrieval and knowledge graphs, and LLMs wired into real backend systems — with explainability and human oversight designed in from the start.',
  },
  {
    title: 'Distributed Systems & Real-Time Data',
    description:
      'Event-driven architectures, streaming pipelines, and the operational discipline that keeps high-throughput systems reliable at scale.',
  },
  {
    title: 'Personal Curiosities',
    description:
      'Web3 and decentralised infrastructure, applied statistics, and local-first AI — explored off the clock, occasionally escaping into side projects.',
  },
];

export default function Interests() {
  return (
    <section id='interests' className='mx-auto px-6 py-12 max-w-4xl'>
      <SectionHeading>Areas of Interest</SectionHeading>
      <div className='gap-6 grid grid-cols-1 md:grid-cols-3'>
        {interests.map(({ title, description }, i) => (
          <motion.div
            key={title}
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 + i * 0.1 }}
            className='hover:bg-[var(--color-accent)]/5 p-5 border border-[var(--color-border)] hover:border-[var(--color-accent)] rounded transition-colors'
          >
            <h3 className='mb-2 font-semibold text-[var(--color-foreground)] text-lg'>
              {title}
            </h3>
            <p className='text-[var(--color-foreground)]/70 text-sm leading-relaxed'>
              {description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
