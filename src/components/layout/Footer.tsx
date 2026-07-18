'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import '../sections/footer.css';

function FlowerAsterisk(props: React.ComponentProps<typeof motion.svg>) {
  return (
    <motion.svg 
      viewBox="0 0 100 100" 
      fill="currentColor" 
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      {...props}
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <rect key={i} x="42" y="10" width="16" height="36" rx="8" transform={`rotate(${i * 45} 50 50)`} />
      ))}
    </motion.svg>
  );
}

function SunburstAsterisk(props: React.ComponentProps<typeof motion.svg>) {
  return (
    <motion.svg 
      viewBox="0 0 100 100" 
      fill="currentColor" 
      animate={{ rotate: -360 }}
      transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      {...props}
    >
      {Array.from({ length: 16 }).map((_, i) => (
        <rect key={i} x="47" y="4" width="6" height="42" rx="3" transform={`rotate(${i * 22.5} 50 50)`} />
      ))}
    </motion.svg>
  );
}

export function Footer() {
  const [localTime, setLocalTime] = useState('--:--');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { 
        timeZone: 'Asia/Dubai', 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true
      };
      setLocalTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer id="contact" className="site-footer">
      <div className="container px-5 sm:px-[110px] mx-auto max-w-full">
        
        <motion.div 
          className="flex flex-col w-full pt-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* ROW 1: Text + REACH */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between w-full mb-0 md:mb-0">
            <p className="max-w-[360px] text-muted-foreground text-sm md:text-base leading-relaxed mb-8 md:mb-10 md:pr-8">
              Currently open to senior product design roles and select freelance engagements. Tell me what you're building, I'll help shape it into something people love to use.
            </p>
            <div className="flex items-center text-[18vw] md:text-[12vw] lg:text-[14rem] font-sans font-normal tracking-tighter leading-none text-foreground uppercase">
              REACH
              <FlowerAsterisk className="w-[12vw] h-[12vw] md:w-[8vw] md:h-[8vw] lg:w-40 lg:h-40 ml-4 md:ml-8 text-foreground" />
            </div>
          </div>
          
          {/* ROW 2: OUT * TODAY */}
          <div className="flex items-center justify-between w-full text-[13.5vw] sm:text-[14vw] md:text-[12vw] lg:text-[14rem] font-sans font-normal tracking-tighter leading-none text-foreground uppercase mt-2 md:-mt-8">
            OUT
            <SunburstAsterisk className="w-[11vw] h-[11vw] md:w-[10vw] md:h-[10vw] lg:w-48 lg:h-48 text-foreground shrink-0 mx-2 md:mx-4" />
            TODAY
          </div>
        </motion.div>

        {/* SOCIAL LINKS BAR */}
        <div className="mt-20 flex items-center justify-center">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <a className="btn-accent-cta" href="mailto:hello@alihamxa.com">
              hello@alihamxa.com <ArrowUpRight className="w-4 h-4 ml-1" />
            </a>
            <a className="btn-ghost-cta" href="https://www.linkedin.com/in/alihamxa-epic" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-1"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
            <a className="btn-ghost-cta" href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-1"><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></svg>
              Dribbble
            </a>
          </div>
        </div>
        
        {/* FOOTER BAR */}
        <div className="foot-bar">
          <span className="mono">© {new Date().getFullYear()} ali hamza — v9.0</span>
          <span className="mono">Dubai · {localTime}</span>
          <div className="links">
            <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
