'use client';

import Image from 'next/image';

export default function FloatingLogo() {
  return (
    <div
      className='fixed bottom-4 right-4 z-50 flex items-center justify-center
                 w-12 h-12 md:w-20 md:h-20 rounded-full bg-[var(--color-background)]/80
                 shadow-lg border border-[var(--color-border)] backdrop-blur
                 overflow-hidden transition-all duration-300 hover:scale-105'
      aria-label='Mahlangu.dev logo'
    >
      <Image
        src='/images/mahlangu-dev-logo-trans.png'
        alt='Mahlangu.dev Logo'
        width={128}
        height={128}
        className='w-28 h-28 md:w-36 md:h-36 object-contain'
        priority
      />
    </div>
  );
}
