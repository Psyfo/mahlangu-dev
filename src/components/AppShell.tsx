'use client';

import { useState } from 'react';

import Header from './Header';

function Spinner() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-[var(--color-background)]'>
      <h1 className='text-2xl font-bold text-[var(--color-accent)] mb-1'>
        Welcome Visitor
      </h1>
      <p className='text-sm text-[var(--color-foreground)] mb-6'>
        How can I help?
      </p>
      <div className='animate-spin rounded-full h-10 w-10 border-t-4 border-[var(--color-accent)] border-opacity-60'></div>
      <span className='mt-4 text-xs text-[var(--color-foreground)]/60'>
        Loading your experience…
      </span>
    </div>
  );
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [headerReady, setHeaderReady] = useState(false);

  return (
    <>
      <Header onReady={() => setHeaderReady(true)} />
      {headerReady ? children : <Spinner />}
    </>
  );
}
