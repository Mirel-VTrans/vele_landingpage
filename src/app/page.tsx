import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Partners from '../components/Partners';
import Contact from '../components/Contact';
import ClientWrapper from '../components/ClientWrapper';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <ClientWrapper>
      <>
        <Navbar />
        <main className="min-h-screen">
          <Hero />
          <About />
          <Services />
          <Partners />
          <Contact />
        </main>
      </>
    </ClientWrapper>
  );
}
