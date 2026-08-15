import CommandPalette from '@/components/CommandPalette';

import ContactSection from './components/ContactSection';
import HeroSection2 from './components/HeroSection2';
import Now from './components/Now';
import Projects from './components/Projects';

export default function HomePage() {
  return (
    <>
      <CommandPalette />
      <main className='min-h-screen'>
        <HeroSection2 />
        <Now />
        <Projects />
        <ContactSection />
      </main>
    </>
  );
}
