import CommandPalette from '@/components/CommandPalette';

import ContactSection from './components/ContactSection';
import Education from './components/Education';
import HeroSection2 from './components/HeroSection2';
import ProfessionalSummary from './components/ProfessionalSummary';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';
import WorkExperience from './components/WorkExperience';

export default function HomePage() {
  return (
    <>
      <CommandPalette />
      <main className='min-h-screen'>
        <HeroSection2 />
        <ProfessionalSummary />
        <TechnicalSkills />
        <WorkExperience />
        <Projects />
        <Education />
        <ContactSection />
      </main>
    </>
  );
}
