'use client';

import { useEffect, useRef, useState } from 'react';

import FloatingLogo from './FloatingLogo';
import Header from './Header';

function Spinner() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-[var(--color-background)]'>
      <h1 className='text-2xl font-bold text-[var(--color-accent)] mb-1 text-center'>
        Welcome Visitor
      </h1>
      <p className='text-sm text-[var(--color-foreground)] mb-6 text-center'>
        Building digital experiences, one line at a time.
      </p>
      <div className='animate-spin rounded-full h-10 w-10 border-t-4 border-[var(--color-accent)] border-opacity-60'></div>
      <span className='mt-4 text-xs text-[var(--color-foreground)]/60 text-center'>
        Loading your experience…
      </span>
    </div>
  );
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [headerReady, setHeaderReady] = useState(false);
  const [minDelayPassed, setMinDelayPassed] = useState(false);
  const splashShown = useRef(false);

  useEffect(() => {
    if (!splashShown.current) {
      const timer = setTimeout(() => setMinDelayPassed(true), 2000);
      return () => clearTimeout(timer);
    } else {
      setMinDelayPassed(true);
    }
  }, []);

  useEffect(() => {
    if (headerReady && minDelayPassed && !splashShown.current) {
      splashShown.current = true;
    }
  }, [headerReady, minDelayPassed]);

  const showContent = headerReady && minDelayPassed;

  return (
    <>
      <Header onReady={() => setHeaderReady(true)} />
      {showContent ? children : <Spinner />}
      <FloatingLogo />
    </>
  );
}
