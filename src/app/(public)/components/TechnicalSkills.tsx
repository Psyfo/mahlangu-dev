'use client';

import { motion } from 'framer-motion';

import SectionHeading from './SectionHeading';

const skills = {
  'Backend & Systems': [
    'Node.js',
    'NestJS',
    'TypeScript',
    'Microservices',
    'Event-Driven Architecture',
    'Distributed Systems',
    'REST APIs',
    'GraphQL',
  ],
  'AI Engineering': [
    'Agentic Systems',
    'LLM Workflows',
    'Model Context Protocol (MCP)',
    'RAG',
    'Vector Search',
    'Knowledge Graphs',
    'LangGraph',
    'Local Inference (Ollama)',
    'Human-in-the-Loop & Explainability',
  ],
  'Cloud & Infrastructure': [
    'Google Cloud (Pub/Sub)',
    'Kubernetes',
    'Docker',
    'AWS (S3)',
    'Azure',
    'Linux',
  ],
  'Data & Storage': [
    'PostgreSQL',
    'MongoDB',
    'Neo4j',
    'Data Modeling',
    'Python',
    'R',
  ],
  Frontend: ['Next.js', 'React', 'Angular', 'Tailwind CSS'],
};

export default function TechnicalSkills() {
  return (
    <section id='skills' className='mx-auto px-6 py-12 max-w-4xl'>
      <SectionHeading>Skills</SectionHeading>
      <div className='space-y-8'>
        {Object.entries(skills).map(([category, items], catIdx) => (
          <motion.div
            key={category}
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.45,
              ease: 'easeOut',
              delay: 0.1 + catIdx * 0.05,
            }}
          >
            <h3 className='mb-3 font-cmd font-semibold text-[var(--color-foreground)]/90 text-base'>
              <span className='text-[var(--color-accent)]'>$ </span>
              {category}
            </h3>
            <div className='flex flex-wrap gap-2'>
              {items.map((skill) => (
                <span
                  key={skill}
                  className='bg-[var(--color-accent)]/5 px-3 py-1 border border-[var(--color-border)] rounded font-cmd text-[var(--color-foreground)]/80 text-sm'
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
