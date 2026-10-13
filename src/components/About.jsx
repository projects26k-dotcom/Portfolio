import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import SkillCube3D from './SkillCube3D';

const skills = [
  'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React', 'Node.js', 'Photoshop', 'WordPress', 'Three.js', 'API', 'Postman'
];

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section id="about" ref={ref} className="py-24 px-6 relative z-10 overflow-hidden">
      <motion.div style={{ y: yBg }} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="crayon-title text-3xl md:text-4xl font-bold"><span className="text-accent text-xl mr-2">01.</span> About Me</h2>
          <div className="crayon-line flex-grow" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-ink/75 text-lg leading-relaxed mb-6">
              I'm a Web developer with over 3 years of experience building digital products. 
              Based in Neo-Seattle, I specialize in the React and Node.js ecosystems, crafting 
              performant, scalable backends paired with rich, interactive frontends.
            </p>
            <p className="text-ink/75 text-lg leading-relaxed mb-8">
              I have a deep passion for motion design, 3D experiences, and bridging the gap between 
              aesthetics and robust engineering. When I'm not coding, I'm exploring generative art 
              or optimizing web performance.
            </p>
            <div className="mb-8 inline-flex -rotate-1 items-center gap-3 rounded-lg border-2 border-[#26314a]/20 bg-[#ccebdc] px-4 py-3 text-sm font-bold text-[#26314a] shadow-[3px_3px_0_rgba(38,49,74,.18)]">
              <span className="text-xl">✎</span> Currently sketching ideas in React + Three.js
            </div>
            
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="px-4 py-2 rounded-full bg-[#fff4d4] border-2 border-[#26314a]/15 text-sm text-accent font-bold hover:bg-[#ffd04a] hover:-rotate-2 transition-all cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative perspective-1000"
          >
            <div className="aspect-square w-full max-w-sm mx-auto relative paper-card overflow-hidden glass-panel group">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay pointer-events-none" />
              <div className="w-full h-full flex items-center justify-center bg-[#fff1d8] cursor-grab active:cursor-grabbing">
                 <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
                   <SkillCube3D />
                 </Canvas>
              </div>
              <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/50 transition-colors duration-500 rounded-2xl z-20 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
