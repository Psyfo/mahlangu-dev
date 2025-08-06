const projects = [
  {
    name: 'Academic Workload Management System',
    stack: 'Express.js, MongoDB, Angular, GraphQL',
    description:
      'Improved scheduling and reporting for university workloads by 30%.',
  },
  {
    name: 'Carina Pereira Cosmetics Academy',
    stack: 'Next.js, Express.js, GA4, Tailwind CSS',
    description: 'SEO-optimized site with future-ready booking support.',
  },
  {
    name: 'Sinoza Website',
    stack: 'Node.js, EJS',
    description: 'Clean static site with templated dynamic assets.',
  },
];

export default function Projects() {
  return (
    <section className='max-w-4xl mx-auto px-6 py-12'>
      <h2 className='text-2xl font-bold mb-4'>Projects</h2>
      <div className='space-y-6'>
        {projects.map(({ name, stack, description }) => (
          <div key={name}>
            <h3 className='text-xl font-semibold'>{name}</h3>
            <p className='text-sm text-gray-500'>{stack}</p>
            <p className='mt-1'>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
