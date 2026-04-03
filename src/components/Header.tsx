'use client';

import React, { useCallback, useState } from 'react';

import ThemeSwitcher from './ThemeSwitcher';

const Header: React.FC<{ onReady?: () => void }> = ({ onReady }) => {
  const [ready, setReady] = useState(false);

  const handleThemeReady = useCallback(() => {
    setReady(true);
    if (onReady) onReady();
  }, [onReady]);

  return (
    <header className='top-0 left-0 z-50 fixed flex justify-between items-center bg-[var(--color-background)] px-6 py-3 border-[var(--color-border)] border-b w-full'>
      <ThemeSwitcher onReady={handleThemeReady} />
      {ready && (
        <span className='flex items-center gap-2 text-[var(--color-accent)] text-sm'>
          <span>Command Palette</span>
          <kbd className='hidden sm:inline bg-gray-100 px-2 py-1 border rounded text-xs'>
            Ctrl+K
          </kbd>
          <button
            className='sm:hidden bg-[var(--color-accent)] px-2 py-1 border rounded text-white text-xs'
            onClick={() =>
              window.dispatchEvent(
                new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }),
              )
            }
            aria-label='Open Command Palette'
          >
            Open
          </button>
        </span>
      )}
    </header>
  );
};

export default Header;
