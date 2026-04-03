'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function ThemeSwitcher({ onReady }: { onReady?: () => void }) {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system' | null>(null);
  const calledReady = useRef(false);

  // Read localStorage only after mount to avoid hydration mismatch
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark' || saved === 'system') {
      setTheme(saved);
    } else {
      setTheme('system');
    }
  }, []);

  useEffect(() => {
    if (!theme) return;
    if (theme === 'system') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
    localStorage.setItem('theme', theme);
    if (onReady && !calledReady.current) {
      calledReady.current = true;
      onReady();
    }
  }, [theme]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!theme) {
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
