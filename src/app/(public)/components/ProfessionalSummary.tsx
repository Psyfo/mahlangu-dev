'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ProfessionalSummary() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50%' });

  return (
    <section
      ref={ref}
      id='professional-summary'
      className='dark:prose-invert mx-auto px-6 py-30 md:py-50 max-w-3xl prose'
    >
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='mb-4 font-bold text-[var(--midnight-green)] text-2xl'
      >
        Professional Summary
      </motion.h2>
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
        className='text-lg md:text-xl'
      >
        Senior Backend / Platform Engineer with 10+ years of experience
        designing and operating high-throughput, distributed systems in fintech
        and cloud-native environments.
      </motion.p>
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
        className='text-lg md:text-xl'
      >
        Specializes in event-driven microservices (Node.js, NestJS) running on
        real-time data pipelines, and Kubernetes-based infrastructure on Google
        Cloud. Proven ability to build scalable, reliable systems and optimize
        engineering workflows using modern tooling, including AI-assisted
        development.
      </motion.p>
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
        className='text-lg md:text-xl'
      >
        Background in data science and technical education, combining strong
        systems design with analytical problem-solving. Expanding focus into
        Web3 and AI-driven systems, particularly where they intersect with
        distributed architectures and real-time data.
      </motion.p>
    </section>
  );
}
