import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="contact" ref={ref} className="py-32 px-6 relative z-10 overflow-hidden">
      <motion.div style={{ y: yBg }} className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#3d9d76] font-bold text-sm mb-4 uppercase tracking-[.18em]">04. What's Next?</p>
          <h2 className="crayon-title text-4xl md:text-5xl font-bold mb-6">Let's build something.</h2>
          <p className="text-ink/75 text-lg mb-12">
            Although I'm not currently looking for any new opportunities, my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="availability-note mx-auto mb-12 max-w-md -rotate-1 p-4">
            <span className="mr-2 inline-block h-3 w-3 rounded-full bg-[#3d9d76]" /> <strong>Available for select projects</strong><span className="block mt-1 text-sm">Usually replies within 1–2 working days.</span>
          </div>

          <form className="sticky-form space-y-6 text-left p-8 relative" onSubmit={(e) => e.preventDefault()}>
            <div className="push-pin" aria-hidden="true"><span /></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-xl pointer-events-none" />
            
            <div className="grid md:grid-cols-2 gap-6 relative z-10">
              <div className="space-y-2">
                <label className="text-sm font-bold text-ink/70" htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full bg-white border-2 border-[#26314a]/15 rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-accent transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-ink/70" htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full bg-white border-2 border-[#26314a]/15 rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-accent transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2 relative z-10">
              <label className="text-sm font-bold text-ink/70" htmlFor="message">Message</label>
              <textarea 
                id="message"
                rows="4"
                className="w-full bg-white border-2 border-[#26314a]/15 rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Hello..."
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full py-4 bg-[#4a78c7] border-2 border-[#26314a] text-white font-bold rounded-2xl hover:-translate-y-1 transition-all duration-300 shadow-[4px_4px_0_#26314a] relative z-10"
            >
              Send Message
            </button>
          </form>

          <div className="mt-20 flex justify-center gap-8 font-bold text-sm text-ink/55">
            <a href="#" className="hover:text-accent transition-colors">GitHub</a>
            <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-accent transition-colors">Twitter</a>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Footer minimal */}
      <div className="absolute bottom-6 w-full text-center left-0 text-ink/45 text-xs font-bold">
        Designed & Built by Pankaj Bhardwaj
      </div>
    </section>
  );
};

export default Contact;
