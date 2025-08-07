'use client';

import '../styles/globals.css';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-[var(--color-background)]'>
      <h1 className='text-3xl font-bold text-[var(--color-accent)] mb-2'>
        404 – Page Not Found
      </h1>
      <p className='text-base text-center text-[var(--color-foreground)] mb-6'>
        Oops! The page you’re looking for doesn’t exist.
        <br />
        Let&apos;s get you back{' '}
        <Link href='/' className='underline text-[var(--color-accent)]'>
          home
        </Link>{' '}
      </p>
      <div className='animate-spin rounded-full h-8 w-8 border-t-4 border-[var(--color-accent)] border-opacity-60'></div>
    </div>
  );
}
