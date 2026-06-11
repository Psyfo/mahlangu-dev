'use client';

import { motion } from 'framer-motion';

import SectionHeading from './SectionHeading';

const paragraphs = [
  'Senior Full Stack Engineer with 10+ years designing and operating high-throughput, distributed systems in cloud-native environments.',
  'I specialise in event-driven architectures, real-time data platforms, and scalable backend systems — built reliably, and kept boring in production.',
  'Currently focused on AI-enabled applications and agentic systems: combining large language models, knowledge-driven workflows, and solid backend platforms into software that can reason about its work.',
];

export default function About() {
  return (
    <section id='about' className='mx-auto px-6 py-24 md:py-32 max-w-3xl'>
      <SectionHeading>About</SectionHeading>
      <div className='space-y-5'>
        {paragraphs.map((text, i) => (
          <motion.p
            key={i}
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 + i * 0.1 }}
            className='text-[var(--color-foreground)]/85 text-lg md:text-xl leading-relaxed'
          >
            {text}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
