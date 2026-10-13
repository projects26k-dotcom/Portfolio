import { motion } from 'framer-motion';

const Doodles = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
    <motion.svg className="absolute top-[12%] left-[4%] w-16 text-[#e85045]" viewBox="0 0 80 80" fill="none" animate={{ rotate: [0, 8, -5, 0], y: [0, -8, 0] }} transition={{ duration: 7, repeat: Infinity }}>
      <path d="M40 6l5 27 28 7-28 6-5 28-6-28-27-6 27-7 6-27z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </motion.svg>
    <motion.svg className="absolute top-[18%] right-[7%] w-20 text-[#3d9d76] hidden md:block" viewBox="0 0 100 70" fill="none" animate={{ rotate: [-4, 4, -4] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
      <path d="M5 36c13-23 27 15 41-9 11-19 20 19 48-9M14 55c15-4 27 8 43 1" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </motion.svg>
    <motion.div className="absolute bottom-[6%] right-[8%] hidden lg:block rotate-[-9deg] rounded-md border-2 border-[#26314a]/20 bg-[#ffd04a] px-4 py-3 text-sm font-bold text-[#26314a] shadow-[3px_3px_0_#26314a]">
      powered by curiosity ✦
    </motion.div>
  </div>
);

export default Doodles;
