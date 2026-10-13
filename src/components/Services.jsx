import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Layers, Zap, Code, MonitorSmartphone } from 'lucide-react';

const services = [
  {
    title: 'Frontend Development',
    description: 'Building responsive, user-friendly websites with HTML, CSS, Bootstrap, JavaScript, and React.',
    icon: <MonitorSmartphone size={24} className="text-accent" />
  },
  {
    title: 'Node.js & APIs',
    description: 'Creating reliable Node.js backends and integrating APIs, with Postman for testing and validation.',
    icon: <Code size={24} className="text-accent" />
  },
  {
    title: 'Interactive 3D Web',
    description: 'Developing engaging, interactive web experiences with React, JavaScript, and Three.js.',
    icon: <Layers size={24} className="text-accent" />
  },
  {
    title: 'Design & WordPress',
    description: 'Designing polished visuals in Photoshop and building easy-to-manage WordPress websites.',
    icon: <Zap size={24} className="text-accent" />
  }
];

const Services = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section id="services" ref={ref} className="py-24 px-6 relative z-10 overflow-hidden">
      <motion.div style={{ y: yBg }} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="crayon-title text-3xl md:text-4xl font-bold"><span className="text-[#3d9d76] text-xl mr-2">01.5</span> Expertise</h2>
          <div className="crayon-line flex-grow" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel paper-card p-8 relative group overflow-hidden hover:-translate-y-2 transition-transform"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="mb-6 w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-accent/50 transition-colors">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-ink mb-3">{service.title}</h3>
              <p className="text-ink/70 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
