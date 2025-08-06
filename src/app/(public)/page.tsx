import Hero from './components/HeroSection';

export default function Home() {
  return (
    // This is the main page of the application
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Hero />
    </main>
  );
}
