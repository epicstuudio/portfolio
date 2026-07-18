'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import './hero.css';

export function CinematicHero() {
  const containerRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the cursor spotlight
  const [isHovering, setIsHovering] = useState(false);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });
  const springR = useSpring(280, { stiffness: 100, damping: 20 });

  useEffect(() => {
    setMounted(true);
    // Initial center position
    if (typeof window !== 'undefined') {
      mouseX.set(window.innerWidth / 2);
      mouseY.set(window.innerHeight / 2);
      setIsHovering(true); // default to true so it shows on load
    }
  }, [mouseX, mouseY]);

  useEffect(() => {
    // Update CSS variables on the container directly for the mask to pick up
    const unsubscribeX = springX.onChange((v) => {
      containerRef.current?.style.setProperty('--mx', `${v}px`);
    });
    const unsubscribeY = springY.onChange((v) => {
      containerRef.current?.style.setProperty('--my', `${v}px`);
    });
    const unsubscribeR = springR.onChange((v) => {
      containerRef.current?.style.setProperty('--r', `${v}px`);
    });
    return () => {
      unsubscribeX();
      unsubscribeY();
      unsubscribeR();
    };
  }, [springX, springY, springR]);

  function handleMouseMove({ clientX, clientY }: React.MouseEvent) {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(clientX - rect.left);
      mouseY.set(clientY - rect.top);
    }
  }

  function handleMouseEnter() {
    setIsHovering(true);
    springR.set(280);
  }

  function handleMouseLeave() {
    setIsHovering(false);
    springR.set(0);
  }

  return (
    <header 
      className="hero" 
      id="top"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        '--mx': mounted ? `${springX.get()}px` : '50vw',
        '--my': mounted ? `${springY.get()}px` : '42vh',
        '--r': mounted ? `${springR.get()}px` : '280px',
      } as React.CSSProperties}
    >
      {/* TOP LINE */}
      <div className="hero-top-line" aria-hidden="true"></div>

      {/* RULER SCALES */}
      <div className="ruler-left hidden md:block" aria-hidden="true" style={{ top: '57px', bottom: '50px' }}>
        {[50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750].map((val) => (
          <div key={val} className="ruler-tick" style={{ top: val }}>
            <span>{val}</span>
          </div>
        ))}
      </div>
      <div className="ruler-right hidden md:block" aria-hidden="true" style={{ top: '57px', bottom: '50px' }}></div>

      {/* BOTTOM BAND */}
      <div className="section-band bottom">
        <div className="band-col hidden sm:flex">DUBAI | {mounted ? new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Dubai', hour: '2-digit', minute: '2-digit' }) : '...'}</div>
        <div className="band-col center">
          <div className="dot"></div>
          PROJECTS
        </div>
        <div className="band-col right hidden sm:flex">PORTFOLIO '24</div>
      </div>

      {/* LAYER 1 · the draft */}
      <div className="hero-layer hero-draft hidden md:block" aria-hidden="true">
        <HeroStage isFinal={false} />
      </div>

      {/* LAYER 2 · the shipped product, revealed by the spotlight */}
      <div className="hero-layer hero-final" aria-hidden="true">
        <HeroStage isFinal={true} />
      </div>

      <motion.div 
        className="spot-ring transition-opacity duration-300 hidden md:block" 
        aria-hidden="true"
        style={{
          left: springX,
          top: springY,
          opacity: isHovering ? 1 : 0
        }}
      />

      <div className="hero-left h-anim h-fade !hidden md:!block" style={{ animationDelay: '0.4s' }}>
        <p>
          The more complex the product, the more invisible the design should feel.
        </p>
      </div>
      
      <div className="hero-right h-anim h-fade !hidden md:!flex" style={{ animationDelay: '0.6s' }}>
        <p>
          I partner with ambitious teams to turn complex ideas into elegant, shipped products. 
          Currently pushing boundaries at Tradeling.
        </p>
      </div>
      
      <div className="hero-hint mono h-anim h-fade hidden md:block" style={{ animationDelay: '1.2s' }}>
        [ move cursor — drafts become product ]
      </div>
    </header>
  );
}

function HeroStage({ isFinal }: { isFinal: boolean }) {
  return (
    <div className="hero-stage">
      <div className="hero-head h-anim h-reveal">
        <div className="kicker">{isFinal ? 'Shipped Product' : 'Senior Product Designer'}</div>
        <h1 className="h1">
          <span className="hl-1">Designing digital</span>
          <span className="hl-2">experiences that <em>matters.</em></span>
        </h1>
        <div className="hero-measure hidden md:flex">
          <i>840px</i>
        </div>

        {/* Mobile sublines */}
        {isFinal && (
          <div className="md:hidden mt-8 flex flex-col gap-6 text-center max-w-[320px] mx-auto">
            <p className="text-[0.9rem] text-[rgba(236,233,226,0.78)] leading-relaxed h-anim h-fade" style={{ animationDelay: '0.4s' }}>
              The more complex the product, the more invisible the design should feel.
            </p>
            <p className="text-[0.9rem] text-[rgba(236,233,226,0.78)] leading-relaxed h-anim h-fade" style={{ animationDelay: '0.6s' }}>
              I partner with ambitious teams to turn complex ideas into elegant, shipped products. 
              Currently pushing boundaries at Tradeling.
            </p>
          </div>
        )}
      </div>

      <div className="fcard fc-1 h-anim h-fade hidden md:block" style={{ animationDelay: '0.8s' }} data-spec="w: 218px, pad: 14">
        {isFinal ? (
          <>
            <div className="row">
              <span className="lbl">Revenue</span>
              <span className="pill-ok">+14%</span>
            </div>
            <div className="big">$124,500</div>
            <div className="bars mt-4">
              <i style={{ height: '30%' }}></i>
              <i style={{ height: '50%' }}></i>
              <i style={{ height: '70%' }}></i>
              <i style={{ height: '40%' }}></i>
              <i style={{ height: '90%' }}></i>
              <i style={{ height: '60%' }}></i>
            </div>
          </>
        ) : null}
      </div>

      <div className="fcard fc-2 h-anim h-fade hidden md:block" style={{ animationDelay: '1s' }} data-spec="rad: 18px, bg: auto">
        {isFinal ? (
          <>
            <div className="row">
              <span className="lbl">Sync</span>
              <div className="toggle"></div>
            </div>
            <div className="row mt-4">
              <div className="sw">
                <i></i><i></i><i></i>
              </div>
              <div className="avatar"></div>
            </div>
          </>
        ) : null}
      </div>

      <div className="fcard fc-3 h-anim h-fade hidden md:block" style={{ animationDelay: '1.1s' }} data-spec="align: right">
        {isFinal ? (
          <>
            <div className="row">
              <span className="lbl">Status</span>
              <span className="pill-ok">Live</span>
            </div>
            <div className="big mt-2">All systems operational</div>
          </>
        ) : null}
      </div>
    </div>
  );
}
