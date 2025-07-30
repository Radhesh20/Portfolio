import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown, Menu, X, ExternalLink, Github, Mail, Phone, MapPin, Linkedin, Instagram, FileText } from 'lucide-react';
import Loader from './components/Loader';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="relative">
      {/* <Navigation /> */}
      {/* <Hero /> */}
      {/* <About /> */}
      {/* <Skills /> */}
      {/* <Projects /> */}
      {/* <Testimonials /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
      {/* <ScrollToTop /> */}
    </div>
  );
}

export default App;