import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Doodles from './Doodles';
import CrayonBoy3D from './CrayonBoy3D';

const Hero = ({ isReady }) => {
  const lines = ['Making the web feel alive.', 'Designing with bright ideas.', 'Turning sketches into screens.'];
  const [lineIndex, setLineIndex] = useState(0);
  useEffect(() => { const timer = window.setInterval(() => setLineIndex((index) => (index + 1) % lines.length), 3000); return () => window.clearInterval(timer); }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  const characterVariants = {
    hidden: { opacity: 0, x: 55, y: 20, rotate: 4, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 80, damping: 18, delay: 0.75 },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-16">
      <Doodles />
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          className="text-center lg:text-left pt-20 lg:pt-0"
          variants={containerVariants}
          initial="hidden"
          animate={isReady ? 'visible' : 'hidden'}
        >
          <motion.p variants={itemVariants} className="inline-flex items-center gap-2 text-[#3d9d76] font-bold mb-5 text-sm md:text-base uppercase tracking-[.18em]">
            <span className="w-3 h-3 rounded-full bg-[#ffd04a] border-2 border-[#26314a]" /> Hello, I’m
          </motion.p>
          <motion.h1 variants={itemVariants} className="crayon-title text-5xl md:text-7xl lg:text-8xl font-bold mb-3">
            Pankaj Bhardwaj.
          </motion.h1>
          <motion.h2 key={lineIndex} variants={itemVariants} className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#4a78c7] mb-6">{lines[lineIndex]}</motion.h2>
          <motion.p variants={itemVariants} className="max-w-xl text-lg md:text-xl text-ink/75 mb-10 mx-auto lg:mx-0">
            A Full-Stack Developer bridging the gap between robust engineering and immersive, interactive web experiences.
          </motion.p>
          <motion.div variants={itemVariants} className="mb-5 flex items-center justify-center gap-3 text-sm font-bold text-[#3d9d76] lg:justify-start">
            <span className="flex h-3 w-3 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3d9d76] opacity-60" /><span className="relative inline-flex rounded-full h-3 w-3 bg-[#3d9d76]" /></span>
            Available for select freelance collaborations
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="px-8 py-4 bg-[#e85045] border-2 border-[#26314a] text-white font-bold rounded-2xl hover:-rotate-1 hover:-translate-y-1 transition-all duration-300 text-center shadow-[4px_4px_0_#26314a]"
            >
              <span className="relative z-10">View Work</span>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-[#ffd04a] border-2 border-[#26314a] text-ink font-bold rounded-2xl hover:rotate-1 hover:-translate-y-1 transition-all duration-300 text-center shadow-[4px_4px_0_#26314a]"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Hand-drawn developer illustration */}
        <motion.div 
          className="h-[500px] w-full hidden lg:block relative"
          variants={characterVariants}
          initial="hidden"
          animate={isReady ? 'visible' : 'hidden'}
        >
          <div className="absolute inset-0 bg-[#ffd04a]/40 blur-3xl rounded-full scale-75" />
          <Canvas camera={{ position: [0, 0, 7], fov: 42 }} className="h-full w-full cursor-grab active:cursor-grabbing">
            <CrayonBoy3D />
          </Canvas>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
