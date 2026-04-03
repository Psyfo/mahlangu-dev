'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const interests = [
  {
    title: 'Applied AI & Intelligent Systems',
    description:
      'Focused on deploying AI and large language models as functional components within production systems, not necessarily model training, but the application layer: LLM-augmented workflows, AI-assisted tooling, and intelligent automation that delivers measurable business value. Interested in how AI intersects with real-time data, distributed architectures, and developer productivity.',
  },
  {
    title: 'Web3 & Decentralized Infrastructure',
    description:
      'Exploring the systems layer of decentralized technology — on-chain protocols, smart contract infrastructure, and how distributed ledger architectures can be applied beyond speculation to create real-world utility. Particular interest in where Web3 intersects with identity, payments, and data ownership.',
  },
  {
    title: 'Fintech & Financial Systems Engineering',
    description:
      'Experienced in building high-throughput systems in financial contexts, with a strong interest in the infrastructure that underpins modern fintech: real-time payment rails, regulatory-compliant data pipelines, digital asset platforms, and the engineering disciplines required to operate them reliably at scale.',
  },
];

export default function Interests() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50%' });

  return (
    <section ref={ref} id='interests' className='mx-auto px-6 py-12 max-w-4xl'>
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='mb-6 font-bold text-[var(--midnight-green)] text-2xl'
      >
        Areas of Interest
      </motion.h2>
      <div className='space-y-8'>
        {interests.map(({ title, description }, i) => (
          <motion.div
            key={title}
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
              delay: 0.3 + i * 0.2,
            }}
          >
            <h3 className='mb-2 font-semibold text-xl'>{title}</h3>
            <p className='text-[var(--color-foreground)]/80 leading-relaxed'>
              {description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
