import { motion } from 'framer-motion';

const CrayonBoy = () => (
  <motion.div
    className="relative mx-auto flex h-full w-full max-w-[470px] items-center justify-center"
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
  >
    <svg viewBox="0 0 500 500" className="h-full w-full overflow-visible" role="img" aria-label="Wax crayon illustration of a developer at work">
      <defs>
        <filter id="crayonTexture">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="2" seed="12" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.3" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      <g filter="url(#crayonTexture)" stroke="#26314a" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M70 394c24-31 63-32 89-5M362 385c17-27 55-34 78-9" fill="none" stroke="#3d9d76" />
        <path d="M82 160l10-17 10 17 17 10-17 10-10 17-10-17-17-10 17-10z" fill="#ffd04a" />
        <path d="M394 116l8-14 8 14 14 8-14 8-8 14-8-14-14-8 14-8z" fill="#e85045" />
        <path d="M297 73c14-20 38-23 55-7" fill="none" stroke="#4a78c7" />

        <path d="M109 410h278l-18-138H129z" fill="#f0a431" />
        <path d="M128 286h242l-9 36H136z" fill="#26314a" />
        <path d="M155 304h178" stroke="#fff9ed" strokeWidth="4" opacity=".8" />
        <path d="M164 330h28M208 330h50M275 330h21" stroke="#e85045" strokeWidth="5" />

        <path d="M175 242c4-59 33-91 78-91s80 32 84 91v49H175z" fill="#4a78c7" />
        <path d="M174 245l-43 67 35 22 43-55M329 246l41 66-34 22-43-57" fill="#4a78c7" />
        <path d="M131 311l27 16M369 311l-26 17" fill="none" stroke="#f7c9a9" strokeWidth="14" />

        <circle cx="254" cy="150" r="70" fill="#f7c9a9" />
        <path d="M190 143c-6-55 35-90 85-78 36 9 52 38 47 75-21-12-42-25-63-46-9 27-35 44-69 49z" fill="#26314a" />
        <path d="M194 127c18-12 32-31 38-53M211 103c28-20 54-18 80 0" fill="none" stroke="#e85045" strokeWidth="7" />
        <path d="M220 154h8M278 154h8" strokeWidth="7" />
        <path d="M235 184c12 10 25 10 37 0" fill="none" stroke="#e85045" />
        <path d="M185 153h-27M323 153h-27" stroke="#4a78c7" strokeWidth="6" />
        <circle cx="176" cy="153" r="13" fill="#ccebdc" />
        <circle cx="332" cy="153" r="13" fill="#ccebdc" />
        <path d="M189 153h52M269 153h50" stroke="#4a78c7" strokeWidth="5" />

        <path d="M232 237l-8 42M278 237l9 42" fill="none" stroke="#f7c9a9" strokeWidth="15" />
        <path d="M110 410h276" stroke="#26314a" strokeWidth="8" />
      </g>
    </svg>
    <div className="absolute bottom-7 right-0 -rotate-6 rounded-lg border-2 border-[#26314a] bg-[#ccebdc] px-3 py-2 text-xs font-bold text-[#26314a] shadow-[3px_3px_0_#26314a]">building bright ideas!</div>
  </motion.div>
);

export default CrayonBoy;
