'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50%' });

  return (
    <section ref={ref} id='education' className='max-w-4xl mx-auto px-6 py-12'>
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='text-2xl font-bold mb-4 text-[var(--midnight-green)]' // midnight green
      >
        Education
      </motion.h2>
      <ul className='space-y-4'>
        {[
          {
            degree: 'BTech in Information Technology',
            school: 'Durban University of Technology, 2017–2018',
            award: 'Distinction',
          },
          {
            degree: 'ND in Information Technology',
            school: 'Durban University of Technology, 2014–2016',
            award: 'Distinction + Merit Award',
          },
          {
            degree: 'Certifications:',
            school: 'CompTIA A+, Network+, MCTS',
            award: '',
          },
        ].map((item, i) => (
          <motion.li
            key={item.degree + item.school}
            initial={{ x: -40, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.3,
              ease: 'easeOut',
              delay: 0.4 + i * 0.2,
            }}
          >
            <strong>{item.degree}</strong>
            <br />
            {item.school}
            {item.award && (
              <>
                {' '}
                — <em>{item.award}</em>
              </>
            )}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
