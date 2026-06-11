export default function Footer() {
  return (
    <footer className='border-[var(--color-border)] border-t'>
      <div className='flex sm:flex-row flex-col justify-between items-center gap-3 mx-auto px-6 py-8 max-w-4xl font-cmd text-[var(--color-foreground)]/50 text-xs'>
        <span>
          © {new Date().getFullYear()} Sipho Omotola Mahlangu · Cape Town, ZA
        </span>
        <span className='flex items-center gap-4'>
          <a
            href='https://github.com/Psyfo'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-[var(--color-accent)] transition-colors'
          >
            github
          </a>
          <a
            href='https://www.linkedin.com/in/sipho-mahlangu/'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-[var(--color-accent)] transition-colors'
          >
            linkedin
          </a>
          <a
            href='mailto:omotola@afrogenitor.com'
            className='hover:text-[var(--color-accent)] transition-colors'
          >
            email
          </a>
        </span>
      </div>
    </footer>
  );
}
