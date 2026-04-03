'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = {
  'Backend & Systems': [
    'Node.js',
    'NestJS',
    'Express.js',
    'Microservices',
    'Event-Driven Architecture',
    'Distributed Systems',
    'REST APIs',
    'GraphQL',
  ],
  'Data & Storage': [
    'PostgreSQL',
    'MongoDB',
    'Python',
    'R',
    'Data Modeling',
    'Data Warehousing',
  ],
  'Cloud & Infrastructure': [
    'Google Cloud Platform (Pub/Sub)',
    'Kubernetes',
    'Docker',
    'AWS (S3)',
    'Azure',
    'Linux (Debian, CentOS)',
    'PM2',
  ],
  Frontend: ['Next.js', 'React', 'Angular', 'Tailwind CSS'],
  'AI & Developer Productivity': [
    'GitHub Copilot',
    'Cursor',
    'LLM-Augmented Workflows',
    'Constraint-Based Prompt Engineering',
    'AI Agents (Exploratory)',
  ],
  Certifications: ['CompTIA A+', 'Network+', 'MCTS'],
};

export default function TechnicalSkills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50%' });

  return (
    <section
      id='technical-skills'
      ref={ref}
      className='mx-auto px-6 py-12 max-w-4xl'
    >
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='mb-4 font-bold text-[var(--midnight-green)] text-2xl'
      >
        Technical Skills
      </motion.h2>
      <div className='gap-6 grid grid-cols-1 md:grid-cols-2'>
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
            <h3 className='mb-2 font-semibold text-xl'>{category}</h3>
            <ul className='text-[var(--color-foreground)] list-disc list-inside'>
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
