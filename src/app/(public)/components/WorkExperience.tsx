'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const jobs = [
  {
    title: 'Senior Backend Engineer',
    company: 'BCB Group',
    duration: 'Nov 2025 – Present',
    location: 'Remote',
    description: [
      'Own a core data aggregation domain, building scalable microservices to ingest, process, and distribute high-throughput, real-time streaming data from multiple external providers across distributed systems.',
      'Implement cloud-native, event-driven architecture using Google Cloud (Pub/Sub, Kubernetes).',
      'Develop and maintain services using NestJS and PostgreSQL, ensuring reliability and performance in production environments.',
    ],
  },
  {
    title: 'Backend / Full Stack Engineer (Contract-Based)',
    company: 'Self-Employed',
    duration: 'Jan 2022 – Nov 2025',
    location: 'Remote',
    description: [
      'Delivered contract-based engineering solutions for startups and SMEs across multiple domains.',
      'Designed and deployed full-stack applications using Next.js and Node.js for production environments.',
      'Built scalable backend services and APIs supporting business-critical workflows.',
      'Integrated cloud infrastructure (AWS S3, Azure, Backblaze) for reliable and scalable systems.',
      'Implemented analytics solutions (GA4, Python, R) enabling data-driven decision-making.',
      'Built SEO-optimized platforms improving traffic acquisition and conversion performance.',
      'Incorporated AI-assisted development workflows (GitHub Copilot, Cursor) using constraint-driven approaches to improve code generation quality and development speed.',
    ],
  },
  {
    title: 'Data Science Lecturer',
    company: 'Midlands State University',
    duration: 'Sep 2024 – Aug 2025',
    location: 'Gweru, Zimbabwe',
    description: [
      'Delivered applied instruction in Data Science, R Programming, Computer Vision, and Data Warehousing.',
      'Mentored 100+ students in analytical problem-solving and software engineering practices.',
      'Designed curriculum bridging statistical theory with real-world system implementation.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Mobisynco',
    duration: 'Jan 2017 – Dec 2021',
    location: 'Durban, South Africa',
    description: [
      'Developed and maintained full-stack systems using Node.js and Angular.',
      'Managed deployment and operation of cloud-hosted Linux environments.',
      'Delivered e-commerce and business platforms supporting SME operations.',
    ],
  },
];

export default function WorkExperience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50%' });

  return (
    <section
      id='work-experience'
      ref={ref}
      className='mx-auto px-6 py-12 max-w-4xl'
    >
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='mb-6 font-bold text-[var(--midnight-green)] text-2xl'
      >
        Work Experience
      </motion.h2>
      <div className='space-y-8'>
        {jobs.map(
          ({ title, company, duration, location, description }, jobIdx) => (
            <motion.div
              key={title}
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
                delay: 0.3 + jobIdx * 0.3,
              }}
            >
              <h3 className='font-semibold text-xl'>
                {title} — {company}
              </h3>
              <p className='text-gray-500 text-sm'>
                {location} | {duration}
              </p>
              <ul className='mt-2 text-[var(--color-foreground)] list-disc list-inside'>
                {description.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ x: -40, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      ease: 'easeOut',
                      delay: 0.5 + jobIdx * 0.3 + i * 0.3,
                    }}
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ),
        )}
      </div>
    </section>
  );
}
