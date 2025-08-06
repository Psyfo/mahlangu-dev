'use client';

import { Command } from 'cmdk';
import React, { useEffect, useRef, useState } from 'react';

const sections = [
  { id: 'hero-section', label: 'Home' },
  { id: 'professional-summary', label: 'Professional Summary' },
  { id: 'technical-skills', label: 'Technical Skills' },
  { id: 'work-experience', label: 'Work Experience' },
  { id: 'projects', label: 'Projects' },
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
      className='fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-md z-50 bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg shadow-lg'
    >
      <Command.Input
        placeholder='Type to navigate…'
        className='w-full px-4 py-3 border-b border-[var(--color-border)] bg-transparent outline-none'
      />
      <Command.List>
        {sections.map((section) => (
          <Command.Item
            key={section.id}
            value={section.label}
            onSelect={() => handleSelect(section.id)}
            className='px-4 py-2 cursor-pointer hover:bg-[var(--color-accent)]/10'
          >
            {section.label}
          </Command.Item>
        ))}
      </Command.List>
    </Command.Dialog>
  );
}
