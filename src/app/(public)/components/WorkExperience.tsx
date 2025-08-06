const jobs = [
  {
    title: 'Data Science Lecturer',
    company: 'Midlands State University',
    duration: 'Sep 2024 – Present',
    location: 'Gweru, Zimbabwe',
    description: [
      'Lectured 100+ tertiary students in Data Science modules (R Programming, Computer Vision, etc).',
    ],
  },
  {
    title: 'Freelance Full Stack Developer',
    company: 'Self-Employed',
    duration: 'Jan 2022 – Present',
    location: 'Remote',
    description: [
      'Built 10+ MVPs for clients in fashion, healthcare, and education.',
      'Notable: Lukhanyo Mdingi Archive (Shopify), Carina Pereira Portfolio (Next.js)',
    ],
  },
  // Add the rest similarly...
];

export default function WorkExperience() {
  return (
    <section className='max-w-4xl mx-auto px-6 py-12'>
      <h2 className='text-2xl font-bold mb-6'>Work Experience</h2>
      <div className='space-y-8'>
        {jobs.map(({ title, company, duration, location, description }) => (
          <div key={title}>
            <h3 className='text-xl font-semibold'>
              {title} — {company}
            </h3>
            <p className='text-sm text-gray-500'>
              {location} | {duration}
            </p>
            <ul className='list-disc list-inside mt-2 text-[var(--color-foreground)]'>
              {description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
