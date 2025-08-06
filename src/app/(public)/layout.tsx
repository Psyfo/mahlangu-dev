import type { Metadata } from 'next';
import '../../styles/globals.css';

export const metadata: Metadata = {
  title: 'Sipho Mahlangu - Software Developer',
  description:
    'Portfolio of Sipho Mahlangu, a software developer specializing in web applications.',
  keywords: ['Sipho Mahlangu', 'Software Developer', 'Web Applications'],
  openGraph: {
    title: 'Sipho Mahlangu - Software Developer',
    description:
      'Portfolio of Sipho Mahlangu, a software developer specializing in web applications.',
    url: 'https://mahlangu.dev',
    siteName: 'Sipho Mahlangu - Software Developer',
    images: [
      {
        url: '/images/hero_portrait_2.jpg',
        width: 1200,
        height: 630,
        alt: 'Sipho Mahlangu - Software Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sipho Mahlangu - Software Developer',
    description:
      'Portfolio of Sipho Mahlangu, a software developer specializing in web applications.',
    images: ['/images/hero_portrait.jpg'],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sipho Omotola Mahlangu',
  url: 'https://mahlangu.dev',
  image: 'https://mahlangu.dev/images/hero_portrait_2.jpg',
  jobTitle: 'Software Developer',
  sameAs: [
    'https://www.linkedin.com/in/sipho-mahlangu/',
    'https://github.com/Psyfo',
  ],
  description:
    'Portfolio of Sipho Mahlangu, a software developer specializing in web applications, cloud, and data science.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
