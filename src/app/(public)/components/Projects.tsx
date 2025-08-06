'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    name: 'Academic Workload Management System',
    stack: 'Express.js, MongoDB, Angular, GraphQL',
    description:
      'Improved scheduling and reporting for university workloads by 30%.',
  },
  {
    name: 'Carina Pereira Cosmetics Academy',
    stack: 'Next.js, Express.js, GA4, Tailwind CSS',
    description: 'SEO-optimized site with future-ready booking support.',
  },
  {
    name: 'Sinoza Investments Website',
    stack: 'Node.js, EJS',
    description: 'Clean static site with templated dynamic assets.',
  },
  {
    name: 'Portfolio Command Palette',
    stack: 'Next.js, Tailwind CSS, Framer Motion, TypeScript',
    description:
      'Implemented a fast, keyboard-navigable cmd+k palette for navigating a developer portfolio.',
  },
  {
    name: 'DabinoPalmApp',
    stack: 'Android (Java/Kotlin)',
    description:
      'Proof-of-concept Android app for palm vein authentication to enable secure biometric payments.',
  },
  {
    name: 'Delyvr v0',
    stack: 'C#, .NET (Xamarin/MAUI)',
    description:
      'Early-stage mobile prototype for a delivery coordination platform, featuring real-time order tracking and rider-client interaction.',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50%' });

  return (
    <section ref={ref} id='projects' className='max-w-4xl mx-auto px-6 py-12'>
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='text-2xl font-bold mb-4'
      >
        Projects
      </motion.h2>
      <div className='space-y-6'>
        {projects.map(({ name, stack, description }, i) => (
          <motion.div
            key={name}
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
              delay: 0.3 + i * 0.2,
            }}
          >
            <h3 className='text-xl font-semibold'>{name}</h3>
            <p className='text-sm text-gray-500'>{stack}</p>
            <p className='mt-1'>{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
