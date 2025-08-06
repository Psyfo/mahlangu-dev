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
      className='prose dark:prose-invert max-w-3xl mx-auto px-6 py-30 md:py-50'
    >
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='mb-4 font-bold text-2xl text-[var(--midnight-green)]'
      >
        Professional Summary
      </motion.h2>
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
        className='text-lg md:text-xl'
      >
        Full Stack Developer with 8+ years of expertise in Node.js, Angular, and
        cloud architecture, now enhancing data-driven decision-making through
        Python/R analytics. Built 10+ scalable web applications and trained 200+
        students in Data Science and modern programming. Enthusiastic about
        bridging technical innovation with measurable business impact.
      </motion.p>
    </section>
  );
}
