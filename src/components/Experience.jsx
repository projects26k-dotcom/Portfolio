import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Lumen Labs',
    period: '2023 – Present',
    description: 'Spearheaded the migration of legacy dashboards to React, improving render performance by 40%. Led a team of 3 engineers in adopting Framer Motion for cohesive micro-interactions.'
  },
  {
    role: 'Software Engineer',
    company: 'Northwind Systems',
    period: '2021 – 2023',
    description: 'Developed scalable microservices in Node.js and built complex data visualization components using D3.js and React.'
  },
  {
    role: 'Junior Developer',
    company: 'Fieldstone Digital',
    period: '2019 – 2021',
    description: 'Collaborated with designers to implement pixel-perfect responsive layouts and integrated RESTful APIs.'
  }
];

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section id="experience" ref={ref} className="py-24 px-6 relative z-10 overflow-hidden">
      <motion.div style={{ y: yBg }} className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="crayon-title text-3xl md:text-4xl font-bold"><span className="text-[#f0a431] text-xl mr-2">03.</span> Experience</h2>
          <div className="crayon-line flex-grow" />
        </motion.div>

        <div className="relative border-l-2 border-[#26314a]/15 ml-4 md:ml-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 pl-8 relative group"
            >
              {/* Timeline dot */}
              <div className="absolute w-4 h-4 bg-[#ffd04a] border-2 border-[#26314a] rounded-full -left-[9px] top-1.5 z-10 group-hover:scale-150 transition-transform duration-300" />
              
              {/* Connector line glow on hover (simulate) */}
              <motion.div 
                className="absolute w-px h-full bg-gradient-to-b from-accent/50 to-transparent left-[-1px] top-4 hidden md:block"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
                style={{ originY: 0 }}
              />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-ink">
                  {exp.role} <span className="text-accent">@ {exp.company}</span>
                </h3>
                <span className="text-sm font-bold text-ink/55 mt-1 sm:mt-0">{exp.period}</span>
              </div>
              <p className="text-ink/75 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
