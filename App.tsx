import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Header
        onAboutClick={() => scrollTo(aboutRef)}
        onProjectsClick={() => scrollTo(projectsRef)}
        onServicesClick={() => scrollTo(servicesRef)}
        onTestimonialsClick={() => scrollTo(testimonialsRef)}
        onContactClick={() => scrollTo(contactRef)}
      />
      <main>
        <Hero onContactClick={() => scrollTo(contactRef)} />
        <div ref={aboutRef} className="scroll-mt-24">
          <About />
        </div>
        <div ref={projectsRef} className="scroll-mt-24">
          <Projects />
        </div>
        <div ref={servicesRef} className="scroll-mt-24">
          <Services />
        </div>
        <div ref={testimonialsRef} className="scroll-mt-24">
          <Testimonials />
        </div>
        <div ref={contactRef} className="scroll-mt-24">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;