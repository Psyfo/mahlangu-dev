'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const jobs = [
  {
    title: 'Data Science Lecturer',
    company: 'Midlands State University',
    duration: 'Sep 2024 – Present',
    location: 'Gweru, Zimbabwe',
    description: [
      'Lectured 100+ tertiary students in Data Science modules including R Programming, Computer Vision, Advanced Data Warehousing, and Data Mining.',
    ],
  },
  {
    title: 'Freelance Full Stack Developer',
    company: 'Self-Employed',
    duration: 'Jan 2022 – Present',
    location: 'Remote',
    description: [
      'Delivered web and mobile solutions for clients in fashion, healthcare, education, and professional services.',
      'Developed the Lukhanyo Mdingi Archive Website (Shopify Liquid).',
      'Built the Carina Pereira Portfolio Website using Next.js and GA4.',
      'Created MVPs and tools using Node.js, Angular, and MongoDB.',
      'Integrated cloud services (AWS S3, Azure) and analytics tools.',
    ],
  },
  {
    title: 'Full Stack Developer (Contract)',
    company: 'E2E Enterprises',
    duration: '2023 – 2024',
    location: 'Remote',
    description: [
      'Built an MVP for a healthcare booking web app using Node.js, MongoDB, and Angular.',
      'Enabled patients to book appointments with nearby doctors through a responsive UI.',
    ],
  },
  {
    title: 'Web Developer (Contract)',
    company: 'Lukhanyo Mdingi Fashion',
    duration: 'Aug 2023 – Feb 2024',
    location: 'Remote',
    description: [
      'Developed a Shopify-integrated archive website using Shopify Liquid, HTML/CSS, and JavaScript.',
      'Enhanced brand visibility with curated galleries and e-commerce functionality.',
    ],
  },
  {
    title: 'Tech Solutions Advisor & Software Developer',
    company: 'Mobisynco',
    duration: 'Jan 2017 – Dec 2021',
    location: 'Durban, South Africa',
    description: [
      'Delivered custom web solutions (Node.js, Angular) for SMEs.',
      'Managed cloud platforms (CentOS, Debian).',
      'Configured e-commerce setups and heavily modified Shopify themes.',
    ],
  },
  {
    title: 'Part-time Teaching Assistant',
    company: 'Durban University of Technology',
    duration: '2017 – 2018',
    location: 'Durban, South Africa',
    description: [
      'Tutored C#/.NET and software development courses.',
      'Managed Moodle classes and online invigilation.',
      'Designed a prototype workload management system (Node.js, GraphQL, MongoDB).',
    ],
  },
  {
    title: 'Tech Startup Advisor',
    company: 'Delyvr',
    duration: '2017 – 2018',
    location: 'Remote',
    description: [
      'Co-planned pitch decks and secured angel investment.',
      'Configured Azure cloud infrastructure for MVP development.',
    ],
  },
  {
    title: 'Exam Center Facilitator & IT Trainer',
    company: 'Multimedia Tecknowledge',
    duration: 'Aug 2008 – Dec 2013',
    location: 'Bulawayo, Zimbabwe',
    description: [
      'Trained candidates in Microsoft Server and CompTIA certifications, achieving 95% pass rate.',
      'Maintained Prometric/Pearson VUE testing center with 99.9% uptime.',
      'Built in-house lab infrastructure using Microsoft Active Directory.',
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
      className='max-w-4xl mx-auto px-6 py-12'
    >
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='text-2xl font-bold mb-6'
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
              <h3 className='text-xl font-semibold'>
                {title} — {company}
              </h3>
              <p className='text-sm text-gray-500'>
                {location} | {duration}
              </p>
              <ul className='list-disc list-inside mt-2 text-[var(--color-foreground)]'>
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
          )
        )}
      </div>
    </section>
  );
}
