import { motion } from 'framer-motion';

const ScrollReveal = ({ children, className, delay = 0 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

export default ScrollReveal;
