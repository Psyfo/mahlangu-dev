import { MotionConfig } from 'framer-motion';
import React from 'react';

import AppShell from '@/components/AppShell';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell>
      <MotionConfig reducedMotion='user'>{children}</MotionConfig>
    </AppShell>
  );
}
