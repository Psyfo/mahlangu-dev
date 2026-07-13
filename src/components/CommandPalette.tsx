'use client';

import { Command } from 'cmdk';
import React, { useEffect, useRef, useState } from 'react';

const sections = [
  { id: 'hero-section', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'interests', label: 'Areas of Interest' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function CommandPalette() {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  // Open palette with Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      // Close on Escape
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll to section and close palette
  const handleSelect = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <Command.Dialog
      ref={ref}
      open={open}
      onOpenChange={setOpen}
      label='Command Palette'
      className='top-20 left-1/2 z-50 fixed bg-[var(--color-background)] shadow-lg border border-[var(--color-border)] rounded-lg w-full max-w-md -translate-x-1/2'
    >
      <Command.Input
        placeholder='Type to navigate…'
        className='bg-transparent px-4 py-3 border-[var(--color-border)] border-b outline-none w-full'
      />
      <Command.List>
        {sections.map((section) => (
          <Command.Item
            key={section.id}
            value={section.label}
            onSelect={() => handleSelect(section.id)}
            className='hover:bg-[var(--color-accent)]/10 px-4 py-2 cursor-pointer'
          >
            {section.label}
          </Command.Item>
        ))}
      </Command.List>
    </Command.Dialog>
  );
}
