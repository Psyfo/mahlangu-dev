import '../styles/globals.css';

import Script from 'next/script';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sipho Omotola Mahlangu',
  url: 'https://mahlangu.dev',
  image: 'https://mahlangu.dev/images/hero_portrait_2.jpg',
  description:
    'Senior Backend / Platform Engineer specializing in distributed systems, event-driven microservices, and cloud-native infrastructure in fintech environments.',
  jobTitle: 'Senior Backend Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'BCB Group',
  },
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
    'Node.js',
    'NestJS',
    'Distributed Systems',
    'Microservices',
    'Event-Driven Architecture',
    'Google Cloud Platform',
    'Kubernetes',
    'Fintech',
    'PostgreSQL',
    'TypeScript',
  ],
};

export const metadata = {
  metadataBase: new URL('https://mahlangu.dev'),
  title:
    'Sipho Mahlangu — Senior Backend Engineer | Distributed Systems & Fintech',
  description:
    'Senior Backend / Platform Engineer with 10+ years building high-throughput distributed systems and event-driven microservices in fintech and cloud-native environments.',
  keywords: [
    'Senior Backend Engineer',
    'Platform Engineer',
    'Distributed Systems',
    'Fintech Engineer',
    'NestJS',
    'Node.js',
    'Kubernetes',
    'Google Cloud',
    'Event-Driven Architecture',
    'Microservices',
    'Sipho Omotola Mahlangu',
    'Sipho Mahlangu',
    'mahlangu.dev',
  ],
  openGraph: {
    title:
      'Sipho Mahlangu — Senior Backend Engineer | Distributed Systems & Fintech',
    description:
      'Senior Backend / Platform Engineer specializing in high-throughput distributed systems, event-driven microservices, and cloud-native infrastructure.',
    url: 'https://mahlangu.dev',
    siteName: 'Sipho Mahlangu',
    images: [
      {
        url: 'https://mahlangu.dev/images/hero_portrait_2.jpg',
        width: 1200,
        height: 630,
        alt: 'Sipho Mahlangu — Senior Backend Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Sipho Mahlangu — Senior Backend Engineer | Distributed Systems & Fintech',
    description:
      'Senior Backend / Platform Engineer specializing in distributed systems, event-driven microservices, and cloud-native infrastructure in fintech.',
    images: ['https://mahlangu.dev/images/hero_portrait_2.jpg'],
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
      </head>
      <body>{children}</body>
    </html>
  );
}
