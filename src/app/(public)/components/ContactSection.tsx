'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const contacts = [
  {
    type: 'email',
    label: 'omotola@afrogenitor.com',
    href: 'mailto:omotola@afrogenitor.com',
    note: 'General & Recruitment',
  },
  {
    type: 'linkedin',
    label: 'linkedin.com/in/sipho-mahlangu',
    href: 'https://www.linkedin.com/in/sipho-mahlangu/',
    note: 'Connect',
  },
  {
    type: 'github',
    label: 'github.com/Psyfo',
    href: 'https://github.com/Psyfo',
    note: 'Work',
  },
  {
    type: 'phone',
    label: '+27 84 731 6783',
    href: 'tel:+27847316783',
    note: 'Cape Town, ZA',
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section
      ref={ref}
      id='contact'
      className='mx-auto px-6 py-20 border-[var(--color-border)] border-t max-w-2xl'
    >
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='mb-3 font-bold text-[var(--midnight-green)] text-2xl'
      >
        Get in Touch
      </motion.h2>
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        className='mb-10 text-[var(--color-foreground)]/70 text-base'
      >
        Open to senior engineering roles, contract work, and technical
        collaborations — particularly in fintech, distributed systems, and
        AI-applied product engineering. Recruiters welcome.
      </motion.p>

      <div className='flex flex-col gap-3'>
        {contacts.map(({ type, label, href, note }, i) => (
          <motion.a
            key={label}
            href={href}
            target={type !== 'email' && type !== 'phone' ? '_blank' : undefined}
            rel={
              type !== 'email' && type !== 'phone'
                ? 'noopener noreferrer'
                : undefined
            }
            initial={{ x: -30, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.35,
              ease: 'easeOut',
              delay: 0.35 + i * 0.12,
            }}
            className='group flex justify-between items-center hover:bg-[var(--color-accent)]/5 px-4 py-3 border border-[var(--color-border)] hover:border-[var(--color-accent)] rounded transition-colors duration-200'
          >
            <span className='font-cmd text-[var(--color-accent)] text-sm group-hover:underline'>
              {label}
            </span>
            <span className='font-cmd text-[var(--color-foreground)]/50 text-xs'>
              {note}
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
