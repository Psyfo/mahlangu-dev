import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center bg-[var(--color-background)] px-6 min-h-screen font-cmd'>
      <p className='mb-2 text-[var(--color-accent)] text-sm'>
        <span className='text-[var(--color-foreground)]/50'>~/$</span> cd ./page
      </p>
      <h1 className='mb-3 font-bold text-[var(--color-foreground)] text-4xl'>
        404
      </h1>
      <p className='mb-8 text-[var(--color-foreground)]/60 text-sm text-center'>
        no such file or directory
      </p>
      <Link
        href='/'
        className='bg-[var(--color-accent)] hover:opacity-90 px-5 py-2.5 rounded text-[var(--color-accent-contrast)] text-sm transition-opacity'
      >
        cd ~
      </Link>
    </div>
  );
}
