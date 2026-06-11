'use client';

import { motion } from 'framer-motion';

export default function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.h2
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className='mb-6 font-cmd font-bold text-[var(--color-foreground)] text-2xl'
    >
      <span className='mr-2 text-[var(--color-accent)]'>{'//'}</span>
      {children}
    </motion.h2>
  );
}
