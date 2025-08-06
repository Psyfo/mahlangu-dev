import CommandPalette from '@/components/CommandPalette';

import ContactSection from './components/ContactSection';
import Education from './components/Education';
import HeroSection from './components/HeroSection';
import ProfessionalSummary from './components/ProfessionalSummary';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';
import WorkExperience from './components/WorkExperience';

export default function HomePage() {
  return (
    <>
      <CommandPalette />
      <main className='min-h-screen'>
        <HeroSection />
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
