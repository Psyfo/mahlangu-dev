'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className='flex flex-col items-center justify-center text-center py-20 px-4'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='mb-6'
      >
        <Image
          src='/images/head.jpg' // or "/logo-dark.svg" based on theme
          alt='Mahlangu.dev logo'
          width={80}
          height={80}
          className='rounded-full w-25'
          priority
        />
      </motion.div>

      <motion.h1
        className='text-4xl sm:text-5xl font-bold tracking-tight'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Sipho Mahlangu
      </motion.h1>

      <motion.p
        className='mt-4 max-w-xl text-lg text-gray-600 dark:text-gray-300'
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Full Stack Developer building fast, functional, and beautiful web
        applications.
      </motion.p>

      <motion.div
        className='mt-8'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <Link
          href='/projects'
          className='inline-block px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition'
        >
          View Projects
        </Link>
      </motion.div>
    </section>
  );
}
