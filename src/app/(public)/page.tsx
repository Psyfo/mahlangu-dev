import CommandPalette from '@/components/CommandPalette';

import ContactSection from './components/ContactSection';
import HeroSection2 from './components/HeroSection2';
import Interests from './components/Interests';
import Now from './components/Now';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';

export default function HomePage() {
  return (
    <>
      <CommandPalette />
      <main className='min-h-screen'>
        <HeroSection2 />
        <Now />
        <TechnicalSkills />
        <Projects />
        <Interests />
        <ContactSection />
      </main>
    </>
  );
}
