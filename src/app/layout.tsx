import '../styles/globals.css';

import Script from 'next/script';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Sipho Mahlangu - Software Development Services',
  url: 'https://mahlangu.dev',
  image: 'https://mahlangu.dev/images/hero_portrait_2.jpg',
  //   logo: 'https://mahlangu.dev/images/logo_mrbuild.svg',
  description:
    'Professional web development, cloud solutions, and data-driven software services for businesses and individuals worldwide.',
  founder: {
    '@type': 'Person',
    name: 'Sipho Omotola Mahlangu',
    sameAs: [
      'https://www.linkedin.com/in/sipho-mahlangu/',
      'https://github.com/Psyfo',
    ],
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'ZA',
  },
  areaServed: 'Worldwide',
  serviceType: [
    'Custom Web Applications',
    'Cloud Architecture & Deployment',
    'Data Analytics Solutions',
    'API Development & Integration',
  ],
};

export const metadata = {
  metadataBase: new URL('https://mahlangu.dev'),
  title: 'Sipho Mahlangu - Professional Web & Software Development Services',
  description:
    'Offering tailored web applications, cloud architecture, and data analytics solutions to help businesses scale and succeed.',
  keywords: [
    'Software Development Services',
    'Web Applications',
    'Cloud Solutions',
    'API Integration',
    'Data Analytics',
    'Sipho Omotola Mahlangu',
    'Sipho Mahlangu',
    'Sipho',
    'Mahlangu',
    'Omotola',
  ],
  openGraph: {
    title: 'Sipho Mahlangu | Professional Web & Software Development Services',
    description:
      'High-quality software solutions including web apps, cloud architecture, and data analytics for businesses worldwide.',
    url: 'https://mahlangu.dev',
    siteName: 'Sipho Mahlangu | Software Development Services',
    images: [
      {
        url: 'https://mahlangu.dev/images/hero_portrait_2.jpg',
        width: 1200,
        height: 630,
        alt: 'Sipho Mahlangu | Software Development Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sipho Mahlangu | Web & Software Development Services',
    description:
      'Custom web applications, cloud solutions, and data analytics for businesses worldwide.',
    images: ['https://mahlangu.dev/images/hero_portrait.jpg'],
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
