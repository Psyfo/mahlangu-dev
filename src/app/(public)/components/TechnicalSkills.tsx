'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = {
  'Programming Languages': ['TypeScript', 'Python', 'R', 'C#', 'SQL'],
  Frameworks: ['Node.js', 'Express', 'Angular', 'Next.js'],
  'DevOps & Cloud': [
    'Docker',
    'Git',
    'Linux (CentOS, Debian)',
    'AWS S3',
    'Azure',
  ],
  Certifications: ['CompTIA A+', 'Network+', 'MCTS (Windows 7, Server 2008)'],
  Languages: ['English (Native)'],
};

export default function TechnicalSkills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section
      id='technical-skills'
      ref={ref}
      className='max-w-4xl mx-auto px-6 py-12'
    >
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='text-2xl font-bold mb-4'
      >
        Technical Skills
      </motion.h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {Object.entries(skills).map(([category, items], catIdx) => (
          <motion.div
            key={category}
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
              delay: 0.3 + catIdx * 0.2,
            }}
          >
            <h3 className='text-xl font-semibold mb-2'>{category}</h3>
            <ul className='list-disc list-inside text-[var(--color-foreground)]'>
              {items.map((skill, skillIdx) => (
                <motion.li
                  key={skill}
                  initial={{ x: -40, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : {}}
                  transition={{
                    duration: 0.3,
                    ease: 'easeOut',
                    delay: 0.5 + catIdx * 0.2 + skillIdx * 0.3, // waits for previous to finish
                  }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
