import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import SectionDivider from './components/SectionDivider';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Toolbox from './components/Toolbox';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Process from './components/Process';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Background3D from './components/Background3D';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This is intentionally time-based so a slow image or 3D asset can never
    // leave the visitor on the loading screen.
    const timeout = window.setTimeout(() => setLoading(false), 3000);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Let in-page links use Lenis rather than the browser's instant hash jump.
    const handleAnchorClick = (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;

      const hash = link.getAttribute('href');
      const target = hash && document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target, {
        offset: -84,
        duration: 1.35,
        easing: (t) => 1 - Math.pow(1 - t, 4),
      });
      window.history.replaceState(null, '', hash);
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <AnimatePresence mode="wait">{loading && <LoadingScreen key="loading-screen" />}</AnimatePresence>
      <Background3D />
      <ScrollProgress />
      <BackToTop />
      <Header />
      
      <main className="relative z-10">
        <Hero isReady={!loading} />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Services />
        <Toolbox />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Process />
        <SectionDivider />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
