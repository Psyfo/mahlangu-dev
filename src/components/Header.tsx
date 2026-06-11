'use client';

import React from 'react';

import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
  return (
    <header className='top-0 left-0 z-50 fixed flex justify-between items-center bg-[var(--color-background)]/85 backdrop-blur px-6 py-3 border-[var(--color-border)] border-b w-full'>
      <a
        href='#hero-section'
        className='font-cmd text-[var(--color-accent)] text-sm hover:opacity-80 transition-opacity'
      >
        <span className='text-[var(--color-foreground)]/50'>~/</span>
        mahlangu.dev
      </a>
      <span className='flex items-center gap-3 text-[var(--color-foreground)]/70 text-sm'>
        <button
          className='hidden sm:flex items-center gap-2 hover:text-[var(--color-accent)] transition-colors cursor-pointer'
          onClick={() =>
            window.dispatchEvent(
              new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }),
            )
          }
          aria-label='Open command palette'
        >
          <span>Navigate</span>
          <kbd className='bg-[var(--color-accent)]/10 px-2 py-0.5 border border-[var(--color-border)] rounded text-[var(--color-accent)] text-xs'>
            Ctrl+K
          </kbd>
        </button>
        <button
          className='sm:hidden bg-[var(--color-accent)] px-2 py-1 rounded text-[var(--color-accent-contrast)] text-xs'
          onClick={() =>
            window.dispatchEvent(
              new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }),
            )
          }
          aria-label='Open command palette'
        >
          Menu
        </button>
        <ThemeSwitcher />
      </span>
    </header>
  );
}
