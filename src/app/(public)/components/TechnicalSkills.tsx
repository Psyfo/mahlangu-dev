const skills = {
  'Programming Languages': ['TypeScript', 'Python', 'R', 'C#', 'SQL'],
  Frameworks: ['Node.js', 'Express', 'Angular', 'Next.js'],
  'DevOps & Cloud': [
    'Docker',
    'Git',
    'Linux (CentOS, Debian)',
    'AWS S3',
    'Azure',
  ],
  Certifications: ['CompTIA A+', 'Network+', 'MCTS (Windows 7, Server 2008)'],
  Languages: ['English (Native)'],
};

export default function TechnicalSkills() {
  return (
    <section className='max-w-4xl mx-auto px-6 py-12'>
      <h2 className='text-2xl font-bold mb-4'>Technical Skills</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className='text-xl font-semibold mb-2'>{category}</h3>
            <ul className='list-disc list-inside text-[var(--color-foreground)]'>
              {items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
