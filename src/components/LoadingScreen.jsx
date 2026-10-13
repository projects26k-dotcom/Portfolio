import { motion } from 'framer-motion';

const LoadingScreen = () => (
  <motion.div
    className="loading-screen"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0, scale: 1.03 }}
    transition={{ duration: 0.45, ease: 'easeInOut' }}
    aria-label="Loading portfolio"
    role="status"
  >
    <motion.div
      className="loading-pencil"
      animate={{ rotate: [-8, 8, -8], y: [0, -9, 0] }}
      transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    >
      ✎
    </motion.div>
    <p className="loading-name">P<span>B</span><i>.</i></p>
    <p className="loading-copy">Drawing the portfolio…</p>
    <div className="loading-track" aria-hidden="true"><motion.div className="loading-fill" initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ duration: 1.35, ease: 'easeInOut' }} /></div>
  </motion.div>
);

export default LoadingScreen;
