import { motion } from 'framer-motion';
import { Code2, Palette, Boxes, Sparkles, Database, PenTool } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const tools = [
  ['React', 'Interfaces that feel fast and alive', Code2, '#e85045'],
  ['Three.js', 'Tiny worlds and memorable motion', Boxes, '#4a78c7'],
  ['Design systems', 'Order, consistency, and character', Palette, '#3d9d76'],
  ['Node.js', 'Reliable systems behind the scenes', Database, '#f0a431'],
  ['Motion', 'Interactions with a little magic', Sparkles, '#e85045'],
  ['Creative code', 'Ideas made tangible in the browser', PenTool, '#4a78c7'],
];

const Toolbox = () => (
  <section id="toolbox" className="relative z-10 overflow-hidden px-6 py-24">
    <div className="mx-auto max-w-6xl">
      <ScrollReveal className="mb-12 flex items-center gap-4"><h2 className="crayon-title text-3xl font-bold md:text-4xl"><span className="mr-2 text-xl text-[#e85045]">01.8</span> My Creative Toolbox</h2><div className="crayon-line flex-grow" /></ScrollReveal>
      <ScrollReveal className="mb-9 max-w-2xl text-lg text-ink/70" delay={0.08}>A few of the crayons I reach for when shaping a digital experience.</ScrollReveal>
      <div className="toolbox-tray grid gap-5 p-6 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map(([name, detail, Icon, color], index) => <motion.button key={name} initial={{ opacity: 0, scale: .88 }} whileInView={{ opacity: 1, scale: 1, rotate: index % 2 ? 1 : -1 }} whileHover={{ y: -8, rotate: 0 }} viewport={{ once: true }} className="tool-crayon text-left" type="button">
          <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[#26314a]" style={{ backgroundColor: color }}><Icon size={23} color="#fff9ed" /></span>
          <strong className="block font-display text-xl text-[#26314a]">{name}</strong><span className="mt-1 block text-sm font-semibold text-[#26314a]/65">{detail}</span>
        </motion.button>)}
      </div>
    </div>
  </section>
);

export default Toolbox;
