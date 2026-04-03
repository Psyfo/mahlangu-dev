'use client';

import '../styles/globals.css';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center bg-[var(--color-background)] min-h-screen'>
      <h1 className='mb-2 font-bold text-[var(--color-accent)] text-3xl'>
        404 – Not Found
      </h1>
      <p className='mb-6 text-[var(--color-foreground)] text-base text-center'>
        This page doesn&apos;t exist.
        <br />
        Head back{' '}
        <Link href='/' className='text-[var(--color-accent)] underline'>
          home
        </Link>
        .
      </p>
      <div className='border-[var(--color-accent)] border-t-4 border-opacity-60 rounded-full w-8 h-8 animate-spin'></div>
    </div>
  );
}
