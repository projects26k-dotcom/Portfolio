import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const notes = [
  ['“Pankaj brings an uncommon mix of thoughtful design instincts and serious engineering.”', 'Maya · Product Lead', '#ccebdc'],
  ['“The result was faster, clearer, and much more delightful to use.”', 'Jordan · Founder', '#fff0bd'],
  ['“A deeply collaborative builder who makes complex work feel simple.”', 'Sam · Design Director', '#dbe5ff'],
];

const Testimonials = () => (
  <section className="relative z-10 overflow-hidden px-6 py-24">
    <div className="mx-auto max-w-6xl">
      <ScrollReveal className="mb-12 flex items-center gap-4"><h2 className="crayon-title text-3xl font-bold md:text-4xl"><span className="mr-2 text-xl text-[#3d9d76]">04.</span> Kind Words</h2><div className="crayon-line flex-grow" /></ScrollReveal>
      <div className="grid gap-6 md:grid-cols-3">
        {notes.map(([quote, name, color], index) => <motion.figure key={name} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0, rotate: index === 1 ? 2 : index === 2 ? -2 : -1 }} viewport={{ once: true }} transition={{ delay: index * .12 }} className="relative border-2 border-[#26314a]/20 p-7 shadow-[5px_6px_0_rgba(38,49,74,.16)]" style={{ backgroundColor: color, borderRadius: index === 1 ? '22px 16px 22px 16px' : '16px 22px 16px 22px' }}>
          <span className="absolute -top-3 left-7 rotate-[-5deg] bg-[#e85045] px-3 py-1 font-display text-xl text-white">✦</span>
          <blockquote className="pt-3 text-lg font-bold leading-relaxed text-[#26314a]">{quote}</blockquote><figcaption className="mt-6 text-sm font-bold text-[#26314a]/60">— {name}</figcaption>
        </motion.figure>)}
      </div>
    </div>
  </section>
);

export default Testimonials;
