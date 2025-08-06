export default function ContactSection() {
  return (
    <section
      id='contact'
      className='max-w-2xl mx-auto px-6 py-16 text-center border-t border-[var(--color-border)]'
    >
      <h2 className='text-2xl font-bold mb-6'>Get in Touch</h2>
      <p className='text-lg mb-8'>
        Whether you&apos;re looking to collaborate, build something awesome, or
        just say hello — my inbox is always open.
      </p>

      <div className='flex flex-col gap-4 items-center justify-center font-[var(--font-cmd)] text-sm'>
        <a
          href='mailto:omotolamahlangu@gmail.com'
          className='hover:underline text-[var(--color-accent)]'
        >
          omotolamahlangu@gmail.com
        </a>
        <a
          href='https://www.linkedin.com/in/sipho-mahlangu/'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:underline text-[var(--color-accent)]'
        >
          LinkedIn → sipho-mahlangu
        </a>
        <a
          href='https://github.com/Psyfo'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:underline text-[var(--color-accent)]'
        >
          GitHub → @Psyfo
        </a>
        <p className='text-[var(--color-foreground)]'>📞 +263 776 092 688</p>
      </div>
    </section>
  );
}
