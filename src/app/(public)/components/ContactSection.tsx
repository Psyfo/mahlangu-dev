'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.7 });

  return (
    <section
      ref={ref}
      id='contact'
      className='max-w-2xl mx-auto px-6 py-16 text-center border-t border-[var(--color-border)]'
    >
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='text-2xl font-bold mb-6'
      >
        Get in Touch
      </motion.h2>
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        className='text-lg mb-8'
      >
        Whether you&apos;re looking to collaborate, build something awesome, or
        just say hello — my inbox is always open.
      </motion.p>

      <div className='flex flex-col gap-4 items-center justify-center font-[var(--font-cmd)] text-sm'>
        {[
          {
            type: 'email',
            value: 'omotolamahlangu@gmail.com',
            href: 'mailto:omotolamahlangu@gmail.com',
            label: 'omotolamahlangu@gmail.com',
          },
          {
            type: 'linkedin',
            value: 'LinkedIn → sipho-mahlangu',
            href: 'https://www.linkedin.com/in/sipho-mahlangu/',
            label: 'LinkedIn → sipho-mahlangu',
          },
          {
            type: 'github',
            value: 'GitHub → @Psyfo',
            href: 'https://github.com/Psyfo',
            label: 'GitHub → @Psyfo',
          },
          {
            type: 'phone',
            value: '📞 +263 776 092 688',
            href: '',
            label: '📞 +263 776 092 688',
          },
        ].map((item, i) =>
          item.href ? (
            <motion.a
              key={item.type}
              href={item.href}
              target={item.type !== 'email' ? '_blank' : undefined}
              rel={item.type !== 'email' ? 'noopener noreferrer' : undefined}
              className='hover:underline text-[var(--color-accent)]'
              initial={{ x: -40, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.3,
                ease: 'easeOut',
                delay: 0.4 + i * 0.15,
              }}
            >
              {item.label}
            </motion.a>
          ) : (
            <motion.p
              key={item.type}
              className='text-[var(--color-foreground)]'
              initial={{ x: -40, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.3,
                ease: 'easeOut',
                delay: 0.4 + i * 0.15,
              }}
            >
              {item.label}
            </motion.p>
          )
        )}
      </div>
    </section>
  );
}
