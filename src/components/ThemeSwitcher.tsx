'use client';

import React, { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

function getSavedTheme(): Theme {
  if (typeof window === 'undefined') return 'system';
  const saved = localStorage.getItem('theme');
  return saved === 'light' || saved === 'dark' ? saved : 'system';
}

export default function ThemeSwitcher() {
  // Server renders 'system'; the saved value is picked up on the client.
  // The pre-paint script in layout.tsx already applied it, so no flash.
  const [theme, setTheme] = useState<Theme>(getSavedTheme);

  useEffect(() => {
    if (theme === 'system') {
      document.documentElement.removeAttribute('data-theme');
      localStorage.removeItem('theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value as Theme)}
      className='bg-[var(--color-background)] px-2 py-1 border border-[var(--color-border)] rounded text-[var(--color-foreground)] text-xs cursor-pointer'
      aria-label='Switch theme'
      suppressHydrationWarning
    >
      <option value='system'>System</option>
      <option value='light'>Light</option>
      <option value='dark'>Dark</option>
    </select>
  );
}
