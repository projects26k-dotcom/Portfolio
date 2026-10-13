import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Nova Dashboard',
    description: 'A real-time analytics SaaS dashboard handling high-frequency data streams.',
    tech: ['React', 'WebSockets', 'D3.js', 'Tailwind'],
    github: '#',
    live: '#',
    color: 'from-blue-500/20 to-purple-500/20',
    label: 'data playground',
    number: '01'
  },
  {
    title: 'Pulse',
    description: 'Social fitness tracking app with real-time workout sharing and leaderboards.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Redis'],
    github: '#',
    live: '#',
    color: 'from-emerald-500/20 to-teal-500/20',
    label: 'move with joy',
    number: '02'
  },
  {
    title: 'Arcline',
    description: 'Generative art tool that allows users to create and export complex particle systems.',
    tech: ['WebGL', 'Three.js', 'React', 'GLSL'],
    github: '#',
    live: '#',
    color: 'from-orange-500/20 to-red-500/20',
    label: 'generative sketchbook',
    number: '03'
  },
  {
    title: 'DevSync',
    description: 'CLI and web utility for synchronizing local development environments across teams.',
    tech: ['Go', 'React', 'Docker', 'GraphQL'],
    github: '#',
    live: '#',
    color: 'from-indigo-500/20 to-cyan-500/20',
    label: 'team toolkit',
    number: '04'
  }
];

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="projects" ref={ref} className="py-24 px-6 relative z-10 overflow-hidden">
      <motion.div style={{ y: yBg }} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="crayon-title text-3xl md:text-4xl font-bold"><span className="text-[#4a78c7] text-xl mr-2">02.</span> Selected Work</h2>
          <div className="crayon-line flex-grow" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -12, rotate: index % 2 === 0 ? -1.2 : 1.2, scale: 1.015 }}
              whileTap={{ scale: 0.99 }}
              className="group relative paper-card overflow-hidden glass-panel h-[400px] flex flex-col justify-end p-8"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Background gradient/thumbnail placeholder */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />
              <span className="absolute top-7 left-7 z-10 -rotate-3 border-2 border-[#26314a] bg-[#ffd04a] px-3 py-1 text-xs font-bold text-[#26314a] shadow-[2px_2px_0_#26314a]">{project.label}</span>
              <span className="absolute top-5 right-7 z-10 text-5xl font-display font-bold text-[#26314a]/10">{project.number}</span>
              <div className="absolute inset-0 bg-[#fffaf1]/85 backdrop-blur-[2px] group-hover:bg-[#fffaf1]/65 group-hover:backdrop-blur-sm transition-all duration-500" />

              <div className="relative z-10 translate-z-[50px]">
                <div className="flex justify-between items-center mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <div className="flex gap-4">
                    <a href={project.github} className="text-ink/70 hover:text-accent transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.live} className="text-ink/70 hover:text-accent transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-ink mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                
                <p className="text-ink/75 mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 font-bold text-xs text-ink/55">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <a
                  href={project.live}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl border-2 border-[#26314a] bg-[#ffd04a] px-4 py-2 font-bold text-[#26314a] opacity-0 translate-y-4 shadow-[3px_3px_0_#26314a] transition-all duration-300 delay-100 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-[#e85045] hover:text-white"
                >
                  View project <span aria-hidden="true">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
