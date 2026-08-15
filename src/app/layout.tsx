import '../styles/globals.css';

import Script from 'next/script';

import UmamiAnalytics from '@/components/UmamiAnalytics';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sipho Omotola Mahlangu',
  url: 'https://mahlangu.dev',
  image: 'https://mahlangu.dev/images/og-card.png',
  description:
    'Senior full stack engineer building event-driven backends and AI-native systems: grounded agents, LLM workflows, and platforms kept boring in production.',
  jobTitle: 'Senior Full Stack Engineer',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cape Town',
    addressCountry: 'ZA',
  },
  sameAs: [
    'https://www.linkedin.com/in/sipho-mahlangu/',
    'https://github.com/Psyfo',
  ],
  knowsAbout: [
    'AI Engineering',
    'Agentic Systems',
    'LLM Workflows',
    'Retrieval-Augmented Generation',
    'Model Context Protocol',
    'Distributed Systems',
    'Event-Driven Architecture',
    'Microservices',
    'Node.js',
    'NestJS',
    'TypeScript',
    'Kubernetes',
    'Google Cloud Platform',
    'PostgreSQL',
  ],
};

export const metadata = {
  metadataBase: new URL('https://mahlangu.dev'),
  title: 'Sipho Mahlangu · Senior Full Stack Engineer | AI & Distributed Systems',
  description:
    'I build event-driven backends and AI-native systems, and keep them boring in production. Currently building BYO Pulse and uVelaphi. Open for contract work and collaborations.',
  keywords: [
    'Senior Full Stack Engineer',
    'AI Engineer',
    'AI Engineering',
    'Agentic Systems',
    'LLM Workflows',
    'Distributed Systems',
    'Event-Driven Architecture',
    'Microservices',
    'NestJS',
    'Node.js',
    'Kubernetes',
    'Google Cloud',
    'Sipho Omotola Mahlangu',
    'Sipho Mahlangu',
    'mahlangu.dev',
  ],
  openGraph: {
    title:
      'Sipho Mahlangu · Senior Full Stack Engineer | AI & Distributed Systems',
    description:
      'I build event-driven backends and AI-native systems, and keep them boring in production. Currently building BYO Pulse and uVelaphi.',
    url: 'https://mahlangu.dev',
    siteName: 'Sipho Mahlangu',
    images: [
      {
        url: 'https://mahlangu.dev/images/og-card.png',
        width: 1200,
        height: 630,
        alt: '~/mahlangu.dev: Sipho Mahlangu, Senior Full Stack Engineer, AI and Distributed Systems',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Sipho Mahlangu · Senior Full Stack Engineer | AI & Distributed Systems',
    description:
      'I build event-driven backends and AI-native systems, and keep them boring in production. Currently building BYO Pulse and uVelaphi.',
    images: ['https://mahlangu.dev/images/og-card.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='canonical' href='https://mahlangu.dev' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-KZTX3JBNBR'
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KZTX3JBNBR');
          `}
        </Script>
        <UmamiAnalytics />
      </head>
      <body>{children}</body>
    </html>
  );
}
