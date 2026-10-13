import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot, MeshWobbleMaterial, Octahedron, Dodecahedron } from '@react-three/drei';

function FloatingShape({ Component, args, color, position, speed = 1 }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5 * speed;
      meshRef.current.rotation.y += delta * 0.4 * speed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.2;
    }
  });

  return (
    <Component ref={meshRef} args={args} position={position}>
      <MeshWobbleMaterial color={color} wireframe attach="material" factor={0.5} speed={2} />
    </Component>
  );
}

const steps = [
  {
    title: '1. Discovery',
    description: 'Understanding your goals, audience, and the technical requirements of the project.',
    Shape: TorusKnot,
    args: [0.8, 0.2, 100, 16],
    color: '#e85045'
  },
  {
    title: '2. Architecture',
    description: 'Designing the technical foundation, database schemas, and state management flow.',
    Shape: Octahedron,
    args: [1, 0],
    color: '#4a78c7'
  },
  {
    title: '3. Execution',
    description: 'Writing clean, scalable code with a focus on performance and robust testing.',
    Shape: Dodecahedron,
    args: [1, 0],
    color: '#3d9d76'
  }
];

const Process = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="process" ref={ref} className="py-32 px-6 relative z-10 bg-[#fff1d8]/80 overflow-hidden">
      <motion.div style={{ y: yBg }} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="crayon-title text-4xl md:text-5xl font-bold mb-6">The Process</h2>
          <p className="text-ink/70 max-w-2xl mx-auto text-lg">
            A structured approach to transforming complex problems into elegant, functional digital products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center relative group"
            >
              <div className="h-[250px] w-full mb-6 relative z-10 pointer-events-none group-hover:scale-110 transition-transform duration-500">
                <Canvas camera={{ position: [0, 0, 4], fov: 50 }} style={{ background: 'transparent' }}>
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[5, 5, 5]} intensity={1} color={step.color} />
                  <FloatingShape 
                    Component={step.Shape} 
                    args={step.args} 
                    color={step.color} 
                    position={[0, 0, 0]}
                    speed={1 + index * 0.2}
                  />
                </Canvas>
                <div 
                  className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 blur-3xl opacity-20 -z-10 rounded-full group-hover:opacity-40 transition-opacity duration-500"
                  style={{ backgroundColor: step.color }}
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4" style={{ color: step.color }}>{step.title}</h3>
              <p className="text-ink/75 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Process;
