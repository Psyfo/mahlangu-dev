'use client';

import React from 'react';

import ThemeSwitcher from './ThemeSwitcher';

const Header: React.FC = () => {
  return (
    <header className='fixed top-0 left-0 w-full flex justify-between items-center px-6 py-3 border-b border-[var(--color-border)] bg-[var(--color-background)] z-50'>
      <ThemeSwitcher />
      <span className='flex items-center gap-2 text-sm text-[var(--color-accent)]'>
        <span>Command Palette</span>
        <kbd className='px-2 py-1 bg-gray-100 rounded text-xs border hidden sm:inline'>
          Ctrl+K
        </kbd>
        <button
          className='px-2 py-1 bg-[var(--color-accent)] text-white rounded text-xs border sm:hidden'
          onClick={() =>
            window.dispatchEvent(
              new KeyboardEvent('keydown', { key: 'k', ctrlKey: true })
            )
          }
          aria-label='Open Command Palette'
        >
          Open
        </button>
      </span>
    </header>
  );
};

export default Header;
