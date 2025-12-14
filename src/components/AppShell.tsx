'use client';

import { useEffect, useRef, useState } from 'react';

import FloatingLogo from './FloatingLogo';
import Header from './Header';

function Spinner() {
  return (
    <div className='flex flex-col justify-center items-center bg-[var(--color-background)] min-h-screen'>
      <h1 className='mb-1 font-bold text-[var(--color-accent)] text-2xl text-center'>
        Welcome Visitor
      </h1>
      <p className='mb-6 text-[var(--color-foreground)] text-sm text-center'>
        Building digital experiences, one line at a time.
      </p>
      <div className='border-[var(--color-accent)] border-t-4 border-opacity-60 rounded-full w-10 h-10 animate-spin'></div>
      <span className='mt-4 text-[var(--color-foreground)]/60 text-xs text-center'>
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
    }
    // If splash was already shown, the timer won't run, leaving minDelayPassed false
    // which is correct behavior for subsequent renders
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
