import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Download, Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ['About', 'Services', 'Toolbox', 'Projects', 'Experience', 'Process', 'Contact'];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-4 glass"
    >
      <a href="#" className="font-display font-bold text-2xl tracking-tighter text-ink group flex items-center gap-1">
        P<span className="text-accent group-hover:rotate-12 transition-transform">B</span><span className="text-[#3d9d76]">.</span>
      </a>
      
      <nav className="hidden md:flex items-center gap-7 text-sm font-bold text-ink/70">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-accent transition-colors relative group">
            {link}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 rounded-xl border-2 border-[#26314a] bg-[#ffd04a] px-3.5 py-2 text-sm font-bold text-[#26314a] shadow-[3px_3px_0_#26314a] transition-all hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#26314a] focus:outline-none focus:ring-2 focus:ring-[#e85045] focus:ring-offset-2"
          aria-label="Download resume"
        >
          <Download size={16} strokeWidth={2.5} aria-hidden="true" />
          <span className="hidden sm:inline">Resume</span>
        </a>
        <button type="button" onClick={() => setMenuOpen((open) => !open)} className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[#26314a] bg-[#ffd04a] text-[#26314a]">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </div>
      <AnimatePresence>{menuOpen && <motion.nav initial={{ opacity: 0, y: -15, rotate: -2 }} animate={{ opacity: 1, y: 0, rotate: 0 }} exit={{ opacity: 0, y: -12 }} className="mobile-note-nav md:hidden">
        {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{link}</a>)}
      </motion.nav>}</AnimatePresence>
    </motion.header>
  );
};

export default Header;
