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
      className='mx-auto px-6 py-16 border-[var(--color-border)] border-t max-w-2xl text-center'
    >
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='mb-6 font-bold text-2xl'
      >
        Get in Touch
      </motion.h2>
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        className='mb-8 text-lg'
      >
        Whether you&apos;re looking to collaborate, build something awesome, or
        just say hello — my inbox is always open.
      </motion.p>

      <div className='flex flex-col justify-center items-center gap-4 font-[var(--font-cmd)] text-sm'>
        {[
          {
            type: 'email',
            value: 'omotola@afrogenitor.com',
            href: 'mailto:omotola@afrogenitor.com',
            label: 'omotola@afrogenitor.com',
          },
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
            value: '📞 +27 84 731 6783',
            href: '',
            label: '📞 +27 84 731 6783',
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
              key={item.value}
              href={item.href}
              target={item.type !== 'email' ? '_blank' : undefined}
              rel={item.type !== 'email' ? 'noopener noreferrer' : undefined}
              className='text-[var(--color-accent)] hover:underline'
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
              key={item.value}
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
          ),
        )}
      </div>
    </section>
  );
}
