import FloatingLogo from './FloatingLogo';
import Footer from './Footer';
import Header from './Header';

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <FloatingLogo />
    </>
  );
}
