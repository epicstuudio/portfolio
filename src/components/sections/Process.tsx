"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './capabilities.css';

export function Process() {
  const [mounted, setMounted] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(1);
  useEffect(() => setMounted(true), []);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollPosition = container.scrollLeft;
    const itemWidth = container.clientWidth;
    const currentIndex = Math.round(scrollPosition / itemWidth);
    setCurrentTestimonial(currentIndex + 1);
  };
  const capabilities = [
    {
      idx: 'disc.',
      title: 'Product',
      highlight: 'strategy',
      desc: 'Framing the problem before the pixels: audits, journey maps, and a roadmap the whole team can argue with productively.'
    },
    {
      idx: 'res.',
      title: 'UX',
      highlight: 'research',
      desc: 'Interviews, usability tests, and analytics triangulated into decisions — not decks that gather dust.'
    },
    {
      idx: 'ui.',
      title: 'Interface',
      highlight: 'design',
      desc: 'Screens that earn their place: clear hierarchy, honest copy, and detail you feel before you notice.'
    },
    {
      idx: 'sys.',
      title: 'Design',
      highlight: 'systems',
      desc: 'Token architecture, component libraries, and docs engineers actually open. Consistency as a feature, not a chore.'
    },
    {
      idx: 'proto.',
      title: 'Prototyping &',
      highlight: 'motion',
      desc: 'High-fidelity prototypes that de-risk builds, plus micro-interactions that make products feel alive.'
    }
  ];

  const testimonials = [
    {
      quoteStart: `"Ali doesn't hand you mockups — he hands you `,
      highlight: `momentum.`,
      quoteEnd: ` Every review moved the product, the metrics, and the team forward at once."`,
      authorRole: 'Head of Product',
      authorCompany: 'Nimbus Pay'
    },
    {
      quoteStart: `"A rare mix of systems thinking and visual craft. Ali rebuilt our design language from the ground up while `,
      highlight: `shipping critical features."`,
      quoteEnd: '',
      authorRole: 'Engineering Lead',
      authorCompany: 'Stealth Startup'
    },
    {
      quoteStart: `"The most pragmatic designer I've worked with. He understands business goals and translates them into `,
      highlight: `intuitive, beautiful interfaces`,
      quoteEnd: ` seamlessly."`,
      authorRole: 'Founder',
      authorCompany: 'TechVentures'
    }
  ];

  return (
    <>
      <section id="capabilities" className="relative py-32">
        {/* TOP BAND */}
        <div className="section-band top">
          <div className="band-col hidden sm:flex" suppressHydrationWarning>DUBAI | {mounted ? new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Dubai', hour: '2-digit', minute: '2-digit' }) : '...'}</div>
          <div className="band-col center">
            <div className="dot"></div>
            DESIGN PROCESS
          </div>
          <div className="band-col right hidden sm:flex">PORTFOLIO '24</div>
        </div>

        {/* BOTTOM BAND */}
        <div className="section-band bottom">
          <div className="band-col hidden sm:flex" suppressHydrationWarning>DUBAI | {mounted ? new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Dubai', hour: '2-digit', minute: '2-digit' }) : '...'}</div>
          <div className="band-col center">
            <div className="dot"></div>
            TESTIMONIALS
          </div>
          <div className="band-col right hidden sm:flex">PORTFOLIO '24</div>
        </div>

        {/* RULER SCALES */}
        <div className="ruler-left hidden md:block" aria-hidden="true" style={{ top: '50px', bottom: '50px' }}>
          {Array.from({ length: 60 }, (_, i) => (i + 1) * 50).map((val) => (
            <div key={val} className="ruler-tick" style={{ top: val }}>
              <span>{val}</span>
            </div>
          ))}
        </div>
        <div className="ruler-right hidden md:block" aria-hidden="true" style={{ top: '50px', bottom: '50px' }}></div>

        <div className="w-full px-5 sm:px-[110px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="font-mono text-sm tracking-widest text-redline mb-8 uppercase">03 · capabilities — what I redline daily</div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-16">
              Five ways I move work<br />from <span className="font-serif italic font-normal text-accent">draft</span> to done.
            </h2>
          </motion.div>
        </div>

        <div className="cap-list w-full sm:w-auto sm:mx-[90px]">
          {capabilities.map((cap, i) => (
              <motion.div 
                key={cap.idx} 
                className="cap-row"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="idx">{cap.idx}</span>
                <h3>{cap.title} <span className="serif">{cap.highlight}</span></h3>
                <p>{cap.desc}</p>
              </motion.div>
            ))}
          </div>
      </section>

      <section id="quote" className="w-full relative overflow-hidden">
        {/* COUNTER */}
        <div className="absolute top-10 right-5 sm:right-[110px] text-[10px] tracking-[2px] font-mono text-muted-foreground z-10">
          {currentTestimonial} / {testimonials.length}
        </div>

        <div 
          className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory no-scrollbar w-full py-10"
          onScroll={handleScroll}
        >
          {testimonials.map((t, i) => (
            <div key={i} className="shrink-0 w-screen flex items-center justify-center snap-center px-5 sm:px-[110px]">
              <motion.figure 
                className="quote-box"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <blockquote>
                  {t.quoteStart}
                  <i className="not-italic text-accent">{t.highlight}</i>
                  {t.quoteEnd}
                </blockquote>
                <figcaption><b>{t.authorRole}</b> · {t.authorCompany}</figcaption>
              </motion.figure>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
