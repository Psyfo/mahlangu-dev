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

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system' | null>(null);

  useEffect(() => {
    setTheme(getInitialTheme());
  }, []);

  useEffect(() => {
    if (!theme) return;
    if (theme === 'system') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  if (!theme) return null; // Wait until theme is loaded

  return (
    <div className='flex items-center gap-2'>
      <select
        value={theme}
        onChange={(e) =>
          setTheme(e.target.value as 'light' | 'dark' | 'system')
        }
        className='px-2 py-1 rounded border border-[var(--midnight-green)] bg-[var(--color-background)] text-xs'
        aria-label='Switch theme'
      >
        <option value='system'>System</option>
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>
      </select>
    </div>
  );
};

export default ThemeSwitcher;
