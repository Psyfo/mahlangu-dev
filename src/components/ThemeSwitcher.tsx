'use client';

import React, { useEffect, useState } from 'react';

const getInitialTheme = (): 'light' | 'dark' | 'system' => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark' || saved === 'system') {
      return saved;
    }
  }
  return 'system';
};

export default function ThemeSwitcher({ onReady }: { onReady?: () => void }) {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system' | null>(() => {
    if (typeof window !== 'undefined') {
      return getInitialTheme();
    }
    return null;
  });

  useEffect(() => {
    if (!theme) return;
    if (theme === 'system') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
    localStorage.setItem('theme', theme);
    if (onReady) {
      console.log('ThemeSwitcher calling onReady');
      onReady();
    }
  }, [theme, onReady]);

  if (!theme) {
    console.log('ThemeSwitcher: theme not set, returning null');
    return null;
  }

  return (
    <div className='flex items-center gap-2'>
      <select
        value={theme}
        onChange={(e) =>
          setTheme(e.target.value as 'light' | 'dark' | 'system')
        }
        className='bg-[var(--color-background)] px-2 py-1 border border-[var(--midnight-green)] rounded text-xs'
        aria-label='Switch theme'
      >
        <option value='system'>System</option>
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>
      </select>
    </div>
  );
}
