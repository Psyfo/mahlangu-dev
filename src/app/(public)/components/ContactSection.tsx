'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import SectionHeading from './SectionHeading';

const links = [
  {
    label: 'omotola@afrogenitor.com',
    href: 'mailto:omotola@afrogenitor.com',
    note: 'email',
  },
  {
    label: 'linkedin.com/in/sipho-mahlangu',
    href: 'https://www.linkedin.com/in/sipho-mahlangu/',
    note: 'linkedin',
  },
  {
    label: 'github.com/Psyfo',
    href: 'https://github.com/Psyfo',
    note: 'github',
  },
];

type Status = 'idle' | 'sending' | 'sent' | 'error';

const inputClasses =
  'bg-[var(--color-background)] px-3 py-2 border border-[var(--color-border)] focus:border-[var(--color-accent)] rounded outline-none w-full font-cmd text-[var(--color-foreground)] text-sm transition-colors';

export default function ContactSection() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? 'Something went wrong.');
      }
      setStatus('sent');
      form.reset();
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  return (
    <section
      id='contact'
      className='mx-auto px-6 py-20 border-[var(--color-border)] border-t max-w-2xl'
    >
      <SectionHeading>Contact</SectionHeading>
      <motion.p
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        className='mb-8 text-[var(--color-foreground)]/70 text-base'
      >
        Open to senior engineering roles, contract work, and collaborations in
        AI engineering and distributed systems. Recruiters welcome.
      </motion.p>

      {/* Terminal-window form */}
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
        className='border border-[var(--color-border)] rounded-lg overflow-hidden'
      >
        <div className='flex items-center gap-2 bg-[var(--color-accent)]/5 px-4 py-2.5 border-[var(--color-border)] border-b'>
          <span className='bg-[var(--color-foreground)]/20 rounded-full w-2.5 h-2.5' />
          <span className='bg-[var(--color-foreground)]/20 rounded-full w-2.5 h-2.5' />
          <span className='bg-[var(--color-accent)] rounded-full w-2.5 h-2.5' />
          <span className='ml-2 font-cmd text-[var(--color-foreground)]/50 text-xs'>
            ~/contact — send-message
          </span>
        </div>

        {status === 'sent' ? (
          <div className='px-6 py-12 font-cmd text-center'>
            <p className='mb-2 text-[var(--color-accent)] text-lg'>
              ✓ Message sent
            </p>
            <p className='text-[var(--color-foreground)]/60 text-sm'>
              Thanks for reaching out — I&apos;ll get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className='space-y-4 p-6'>
            {/* Honeypot — humans never see or fill this */}
            <input
              type='text'
              name='company'
              tabIndex={-1}
              autoComplete='off'
              aria-hidden='true'
              className='hidden'
            />
            <div className='gap-4 grid grid-cols-1 sm:grid-cols-2'>
              <label className='block'>
                <span className='block mb-1.5 font-cmd text-[var(--color-accent)] text-xs'>
                  $ name:
                </span>
                <input
                  type='text'
                  name='name'
                  required
                  maxLength={120}
                  placeholder='Ada Lovelace'
                  className={inputClasses}
                />
              </label>
              <label className='block'>
                <span className='block mb-1.5 font-cmd text-[var(--color-accent)] text-xs'>
                  $ email:
                </span>
                <input
                  type='email'
                  name='email'
                  required
                  maxLength={200}
                  placeholder='you@example.com'
                  className={inputClasses}
                />
              </label>
            </div>
            <label className='block'>
              <span className='block mb-1.5 font-cmd text-[var(--color-accent)] text-xs'>
                $ message:
              </span>
              <textarea
                name='message'
                required
                minLength={10}
                maxLength={5000}
                rows={5}
                placeholder='What are we building?'
                className={`${inputClasses} resize-y`}
              />
            </label>
            {status === 'error' && (
              <p className='font-cmd text-red-500 text-sm' role='alert'>
                ✗ {error}
              </p>
            )}
            <button
              type='submit'
              disabled={status === 'sending'}
              className='bg-[var(--color-accent)] disabled:opacity-60 hover:opacity-90 px-5 py-2.5 rounded w-full sm:w-auto font-cmd text-[var(--color-accent-contrast)] text-sm transition-opacity cursor-pointer disabled:cursor-wait'
            >
              {status === 'sending' ? 'Sending…' : 'Send message ↵'}
            </button>
          </form>
        )}
      </motion.div>

      {/* Direct channels */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.25 }}
        className='flex flex-wrap gap-3 mt-6'
      >
        {links.map(({ label, href, note }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className='group hover:bg-[var(--color-accent)]/5 px-3 py-2 border border-[var(--color-border)] hover:border-[var(--color-accent)] rounded transition-colors'
          >
            <span className='mr-2 font-cmd text-[var(--color-foreground)]/40 text-xs'>
              {note}:
            </span>
            <span className='font-cmd text-[var(--color-accent)] text-sm group-hover:underline'>
              {label}
            </span>
          </a>
        ))}
      </motion.div>
    </section>
  );
}
