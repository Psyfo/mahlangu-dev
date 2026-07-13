import CommandPalette from '@/components/CommandPalette';

import About from './components/About';
import ContactSection from './components/ContactSection';
import Education from './components/Education';
import Experience from './components/Experience';
import HeroSection2 from './components/HeroSection2';
import Interests from './components/Interests';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';

export default function HomePage() {
  return (
    <>
      <CommandPalette />
      <main className='min-h-screen'>
        <HeroSection2 />
        <About />
        <TechnicalSkills />
        <Experience />
        <Projects />
        <Interests />
        <Education />
        <ContactSection />
      </main>
    </>
  );
}
