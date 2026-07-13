import '../styles/globals.css';

import Script from 'next/script';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sipho Omotola Mahlangu',
  url: 'https://mahlangu.dev',
  image: 'https://mahlangu.dev/images/hero_portrait_2.jpg',
  description:
    'Senior Full Stack Engineer specializing in distributed systems, event-driven architectures, and AI-enabled applications — agentic systems, LLM workflows, and scalable backend platforms.',
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

// Applies a saved explicit theme before first paint to avoid a flash
const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`;

export const metadata = {
  metadataBase: new URL('https://mahlangu.dev'),
  title: 'Sipho Mahlangu — Senior Full Stack Engineer | AI & Distributed Systems',
  description:
    'Senior Full Stack Engineer with 10+ years building high-throughput distributed systems — now focused on AI-enabled applications, agentic systems, and intelligent software architectures.',
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
      'Sipho Mahlangu — Senior Full Stack Engineer | AI & Distributed Systems',
    description:
      'Senior Full Stack Engineer specializing in distributed systems and AI-enabled applications — agentic systems, LLM workflows, and scalable backend platforms.',
    url: 'https://mahlangu.dev',
    siteName: 'Sipho Mahlangu',
    images: [
      {
        url: 'https://mahlangu.dev/images/og-card.png',
        width: 1200,
        height: 630,
        alt: 'Sipho Mahlangu, Senior Full Stack Engineer: AI Engineering, Agentic Systems, Distributed Systems',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Sipho Mahlangu — Senior Full Stack Engineer | AI & Distributed Systems',
    description:
      'Senior Full Stack Engineer specializing in distributed systems and AI-enabled applications — agentic systems, LLM workflows, and scalable backend platforms.',
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
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
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
