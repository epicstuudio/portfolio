'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';

const projects = [
  {
    id: 'field-pilot',
    title: 'Digitizing Offline Sales',
    company: 'Tradeling',
    category: 'Field Operations',
    year: '2025',
    description: 'Transformed an opaque, manual field sales operation into a scalable, data-driven workflow unlocking AED 5.1M GMV.',
    image: '/images/field-pilot-cover.png',
    link: '/case-studies/field-pilot',
    stats: {
      value: 'AED 5.1M',
      label: 'in GMV unlocked'
    },
    tags: ['B2B Marketplace', 'Android', 'Field Sales']
  },
  {
    id: 'voltquant',
    title: 'AI-Powered Grid Search',
    company: 'Voltquant',
    category: 'Data Viz',
    year: '2024',
    description: 'Helping teams analyze energy grid data and make better decisions using AI-powered search.',
    imagePlaceholder: 'DS',
    link: '#',
    stats: {
      value: '10x',
      label: 'faster data analysis'
    },
    tags: ['SaaS', 'Design System', 'Data Viz']
  },
  {
    id: 'fintech',
    title: 'Next Gen FinTech Platform',
    company: 'Confidential',
    category: 'Mobile App',
    year: '2023',
    description: 'Redesigning the core banking experience with an emphasis on seamless onboarding.',
    imagePlaceholder: 'FT',
    link: '#',
    stats: {
      value: '2M+',
      label: 'active users'
    },
    tags: ['FinTech', 'Mobile', 'Banking']
  }
];

export function ProjectGallery() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate exact translation to stop when the right edge of the content 
  // hits the right edge of the viewport.
  const x = useTransform(scrollYProgress, [0, 1], ["calc(0% + 0vw)", "calc(-100% + 100vw)"]);

  return (
    <section ref={targetRef} id="work" className="relative md:h-[300vh] h-auto bg-background md:pb-0 pb-12">
      <div className="md:sticky relative top-0 flex flex-col md:flex-row md:h-screen h-auto md:items-center overflow-hidden md:overflow-visible py-16 md:py-0">
        
        {/* Title */}
        <div className="relative md:absolute top-0 md:top-24 lg:top-32 left-0 w-full px-5 sm:px-[110px] z-10 mb-12 md:mb-0">
          {/* Section Header */}
          <div className="flex items-end justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-accent" />
                <h2 className="text-sm uppercase tracking-widest text-muted-foreground font-sans font-medium">
                  Selected Work
                </h2>
              </div>
              <p className="text-4xl md:text-5xl font-serif">Featured Projects</p>
            </div>
            <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground hidden md:flex">
              View all projects
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Horizontal Scroll Container (Desktop) */}
        <motion.div style={{ x }} className="hidden md:flex gap-6 px-5 sm:px-[110px] pt-40 w-max">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative shrink-0 w-[85vw] md:w-[960px] rounded-3xl overflow-hidden glass-panel flex flex-col md:flex-row items-stretch border border-white/5 hover:border-white/10 transition-colors"
            >
              <a href={project.link} className="flex flex-col md:flex-row w-full h-full">
                
                {/* Left: Image Area */}
                <div className="w-full md:w-[50%] relative aspect-square overflow-hidden bg-black/40 border-r border-white/5">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                      <div className="w-20 h-20 border border-white/10 rounded-2xl bg-black/20 flex items-center justify-center backdrop-blur-md">
                        <span className="text-3xl font-serif text-white">{project.imagePlaceholder}</span>
                      </div>
                    </div>
                  )}
                  {/* Subtle glass effect overlay on image hover */}
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 backdrop-blur-0 group-hover:backdrop-blur-[2px] transition-all duration-500 pointer-events-none" />
                </div>

                {/* Right: Content Area */}
                <div className="w-full md:w-[50%] p-8 md:p-12 flex flex-col justify-between bg-black/20">
                  
                  {/* Top: Logo / Title / Tags */}
                  <div>
                    <div className="flex items-center gap-2 mb-6 text-foreground font-serif text-lg">
                      <div className="w-6 h-6 rounded bg-accent/20 flex items-center justify-center text-accent">
                        <span className="text-xs font-sans font-bold">{project.company.charAt(0)}</span>
                      </div>
                      {project.company}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-serif mb-4 leading-tight group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-xs font-mono text-muted-foreground bg-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-muted-foreground line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom: Stats */}
                  <div className="mt-12 pt-8 border-t border-white/10">
                    <p className="text-3xl md:text-4xl font-serif text-foreground mb-3 flex items-baseline gap-2">
                      {project.stats.value}
                      <span className="text-sm font-sans text-muted-foreground font-normal tracking-wide">
                        {project.stats.label}
                      </span>
                    </p>
                    
                    <div className="flex items-center gap-3 text-xs tracking-widest text-muted-foreground/60 uppercase font-mono">
                      <span>{project.category}</span>
                      <span>·</span>
                      <span>{project.year}</span>
                    </div>
                  </div>

                </div>
              </a>
            </article>
          ))}
        </motion.div>

        {/* Vertical Stack (Mobile) */}
        <div className="flex md:hidden flex-col gap-10 px-5 w-full">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative w-full rounded-3xl overflow-hidden glass-panel flex flex-col items-stretch border border-white/5"
            >
              <a href={project.link} className="flex flex-col w-full h-full">
                
                {/* Top: Image Area */}
                <div className="w-full relative aspect-square overflow-hidden bg-black/40 border-b border-white/5">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center">
                      <div className="w-20 h-20 border border-white/10 rounded-2xl bg-black/20 flex items-center justify-center backdrop-blur-md">
                        <span className="text-3xl font-serif text-white">{project.imagePlaceholder}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom: Content Area */}
                <div className="w-full p-6 flex flex-col justify-between bg-black/20">
                  
                  {/* Logo / Title / Tags */}
                  <div>
                    <div className="flex items-center gap-2 mb-4 text-foreground font-serif text-base">
                      <div className="w-6 h-6 rounded bg-accent/20 flex items-center justify-center text-accent">
                        <span className="text-xs font-sans font-bold">{project.company.charAt(0)}</span>
                      </div>
                      {project.company}
                    </div>

                    <h3 className="text-xl font-serif mb-4 leading-tight">
                      {project.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-[10px] font-mono text-muted-foreground bg-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-2xl font-serif text-foreground mb-2 flex items-baseline gap-2">
                      {project.stats.value}
                      <span className="text-xs font-sans text-muted-foreground font-normal tracking-wide">
                        {project.stats.label}
                      </span>
                    </p>
                    
                    <div className="flex items-center gap-3 text-[10px] tracking-widest text-muted-foreground/60 uppercase font-mono">
                      <span>{project.category}</span>
                      <span>·</span>
                      <span>{project.year}</span>
                    </div>
                  </div>

                </div>
              </a>
            </article>
          ))}
        </div>

      </div>
      
      <div className="container-narrow px-5">
        {/* Mobile View All Button */}
        <div className="mt-8 md:hidden flex justify-center">
          <Button variant="outline" className="gap-2 w-full">
            View all projects
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
