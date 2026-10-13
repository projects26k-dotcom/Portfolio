import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const FeaturedProject = () => (
  <section className="relative z-10 px-6 py-16">
    <motion.div initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} className="featured-project mx-auto max-w-6xl overflow-hidden p-7 md:p-10">
      <div className="grid items-center gap-10 md:grid-cols-[1.1fr_.9fr]">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#ffd04a] px-3 py-1 text-xs font-bold text-[#26314a]"><Sparkles size={14} /> Featured little win</p>
          <h2 className="crayon-title mb-4 text-4xl font-bold md:text-5xl">Nova Dashboard</h2>
          <p className="mb-7 max-w-xl text-lg leading-relaxed text-ink/75">A real-time analytics workspace that turns a stream of complicated data into an interface people actually enjoy using.</p>
          <div className="mb-8 grid max-w-md grid-cols-3 gap-3">
            {[['40%', 'faster renders'], ['3', 'engineers led'], ['A+', 'performance']].map(([value, label]) => <div key={label} className="rounded-xl border-2 border-[#26314a]/15 bg-white/70 p-3 text-center"><strong className="block font-display text-2xl text-[#e85045]">{value}</strong><span className="text-xs font-bold text-ink/60">{label}</span></div>)}
          </div>
          <a href="#projects" className="inline-flex items-center gap-2 font-bold text-[#4a78c7] hover:text-[#e85045]">Peek at all projects <ArrowUpRight size={18} /></a>
        </div>
        <div className="relative mx-auto w-full max-w-md rotate-2 rounded-[22px] border-[7px] border-[#26314a] bg-[#76a9ab] p-4 shadow-[8px_9px_0_#26314a] transition-transform hover:rotate-0">
          <div className="rounded-lg bg-[#26314a] p-5">
            <div className="mb-5 flex gap-2"><span className="h-3 w-3 rounded-full bg-[#e85045]" /><span className="h-3 w-3 rounded-full bg-[#ffd04a]" /><span className="h-3 w-3 rounded-full bg-[#3d9d76]" /></div>
            <div className="grid grid-cols-5 items-end gap-2 h-36">{[35, 62, 48, 92, 74].map((height, index) => <motion.div key={height} initial={{ height: 0 }} whileInView={{ height: `${height}%` }} viewport={{ once: true }} transition={{ delay: .2 + index * .1 }} className="rounded-t-md bg-[#ffd04a]" />)}</div>
          </div>
          <div className="mt-4 flex justify-between px-2 text-sm font-bold text-[#26314a]"><span>live insights</span><span>↗ 24.8%</span></div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default FeaturedProject;
