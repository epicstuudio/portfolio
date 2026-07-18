'use client';

import { Header } from '@/components/layout';
import { Footer } from '@/components/layout/Footer';
import '@/components/sections/hero.css';
import '@/components/sections/capabilities.css';
import { useEffect, useState } from 'react';

export default function AboutPage() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    return (
        <div className="min-h-screen bg-background text-foreground noise-bg">
            <Header />

            <main className="pt-[200px]">
                {/* Hero */}
                <section className="max-w-[1280px] mx-auto px-8 pb-32">
                    <h1 className="text-5xl md:text-[5.5rem] font-medium tracking-[-0.02em] text-foreground max-w-5xl leading-[1]">
                        I build <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(236,233,226,0.6)' }}>digital</span> experiences
                        <br />
                        where <span className="italic pr-3 font-normal" style={{ fontFamily: 'var(--font-serif), serif' }}>engineering</span> logic
                        <br />
                        meets <span className="italic pr-3 font-normal" style={{ fontFamily: 'var(--font-serif), serif' }}>human</span> empathy.
                    </h1>
                </section>

                {/* Profile Section */}
                <section className="max-w-[1280px] mx-auto px-8 pb-24">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        {/* Profile Image */}
                        <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden max-w-sm">
                            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                                [Profile Photo]
                            </div>
                        </div>

                        {/* Bio */}
                        <div className="space-y-6 text-lg">
                            <p className="text-muted-foreground leading-relaxed">
                                My journey into design wasn&apos;t conventional—it started in engineering. Back in 2016, I was writing frontend code at Shift Enterprises, but I quickly realized my true obsession wasn&apos;t just building interfaces; it was designing the underlying logic of how people interact with them. That realization pushed me to pivot entirely into UI design.
                            </p>

                            <p className="text-muted-foreground leading-relaxed">
                                By 2018, armed with a Computer Science degree, I joined Datalink as a UX/UI Designer. Having an engineering background gave me a unique lens: I understood the technical constraints, which allowed me to push the boundaries of what was possible across complex mobile apps and expansive web platforms.
                            </p>

                            <p className="text-muted-foreground leading-relaxed">
                                In 2019, I took a leap and relocated to Dubai to join Life Smile, a fast-paced e-commerce startup. As a Product Designer, I had the autonomy to shape their digital ecosystem from the ground up. I designed end-to-end experiences—from consumer-facing apps to internal dashboards and scalable design systems—ultimately helping them elevate their mission of delivering premium cookware to a global audience.
                            </p>

                            <p className="text-muted-foreground leading-relaxed">
                                Today, I&apos;m based in Dubai, currently pushing boundaries as a Product Designer at Tradeling. My focus remains the same: turning complex, ambitious ideas into elegant, shipped products.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Companies */}
                <section className="cap-section py-24 relative overflow-hidden mt-12">
                    {/* TOP BAND */}
                    <div className="section-band top">
                        <div className="band-col hidden sm:flex" suppressHydrationWarning>DUBAI | {mounted ? new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Dubai', hour: '2-digit', minute: '2-digit' }) : '...'}</div>
                        <div className="band-col center">
                            <div className="dot"></div>
                            COMPANIES
                        </div>
                        <div className="band-col right hidden sm:flex">PORTFOLIO '24</div>
                    </div>

                    {/* BOTTOM BAND */}
                    <div className="section-band bottom">
                        <div className="band-col hidden sm:flex" suppressHydrationWarning>DUBAI | {mounted ? new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Dubai', hour: '2-digit', minute: '2-digit' }) : '...'}</div>
                        <div className="band-col center"></div>
                        <div className="band-col right hidden sm:flex">PORTFOLIO '24</div>
                    </div>

                    {/* RULER SCALES */}
                    <div className="ruler-left hidden md:block" aria-hidden="true" style={{ top: '50px', bottom: '50px' }}>
                        {Array.from({ length: 30 }, (_, i) => (i + 1) * 50).map((val) => (
                            <div key={val} className="ruler-tick" style={{ top: val }}>
                                <span>{val}</span>
                            </div>
                        ))}
                    </div>
                    <div className="ruler-right hidden md:block" aria-hidden="true" style={{ top: '50px', bottom: '50px' }}></div>

                    <div className="w-full sm:w-auto sm:mx-[90px] relative z-10 mt-16 pt-8 border-t border-border">
                        <div className="flex flex-col">
                        {/* Tradeling */}
                        <div className="flex flex-col md:flex-row gap-6 md:gap-12 py-8 px-5 sm:px-6 border-b border-border hover:bg-white/[0.025] hover:pl-8 transition-all duration-300">
                            <div className="md:w-[240px] shrink-0">
                                <h3 className="text-[clamp(1.6rem,3vw,2.2rem)] leading-none mb-3" style={{ fontFamily: 'var(--font-serif), serif', fontStyle: 'italic', fontWeight: 400 }}>Tradeling</h3>
                                <p className="font-mono text-[0.7rem] uppercase tracking-[0.1em] " style={{ color: 'var(--redline)' }}>01/2025 – Present</p>
                            </div>
                            <div className="flex-1 mt-1 md:mt-0">
                                <p className="text-[1.3rem] font-medium mb-2 text-foreground">Product Designer</p>
                                <p className="text-muted-foreground text-[1.1rem] leading-[1.65]">
                                    Worked on Mobile, Web, Admin and Design Systems
                                </p>
                            </div>
                        </div>

                        {/* Voltquant */}
                        <div className="flex flex-col md:flex-row gap-6 md:gap-12 py-8 px-5 sm:px-6 border-b border-border hover:bg-white/[0.025] hover:pl-8 transition-all duration-300">
                            <div className="md:w-[240px] shrink-0">
                                <h3 className="text-[clamp(1.6rem,3vw,2.2rem)] leading-none mb-3" style={{ fontFamily: 'var(--font-serif), serif', fontStyle: 'italic', fontWeight: 400 }}>Voltquant</h3>
                                <p className="font-mono text-[0.7rem] uppercase tracking-[0.1em] " style={{ color: 'var(--redline)' }}>11/2023 – 12/2024</p>
                            </div>
                            <div className="flex-1 mt-1 md:mt-0">
                                <p className="text-[1.3rem] font-medium mb-2 text-foreground">Product Designer</p>
                                <p className="text-muted-foreground text-[1.1rem] leading-[1.65]">
                                    Worked on Website, Mobile app with Design Systems
                                </p>
                            </div>
                        </div>

                        {/* Lifesmile */}
                        <div className="flex flex-col md:flex-row gap-6 md:gap-12 py-8 px-5 sm:px-6 border-b border-border hover:bg-white/[0.025] hover:pl-8 transition-all duration-300">
                            <div className="md:w-[240px] shrink-0">
                                <h3 className="text-[clamp(1.6rem,3vw,2.2rem)] leading-none mb-3" style={{ fontFamily: 'var(--font-serif), serif', fontStyle: 'italic', fontWeight: 400 }}>Lifesmile</h3>
                                <p className="font-mono text-[0.7rem] uppercase tracking-[0.1em] " style={{ color: 'var(--redline)' }}>09/2019 – 11/2023</p>
                            </div>
                            <div className="flex-1 mt-1 md:mt-0">
                                <p className="text-[1.3rem] font-medium mb-2 text-foreground">Product Designer</p>
                                <p className="text-muted-foreground text-[1.1rem] leading-[1.65]">
                                    Worked on Website, Mobile App, Dashboard and Design Systems
                                </p>
                            </div>
                        </div>

                        {/* Datalink */}
                        <div className="flex flex-col md:flex-row gap-6 md:gap-12 py-8 px-5 sm:px-6 border-b border-border hover:bg-white/[0.025] hover:pl-8 transition-all duration-300">
                            <div className="md:w-[240px] shrink-0">
                                <h3 className="text-[clamp(1.6rem,3vw,2.2rem)] leading-none mb-3" style={{ fontFamily: 'var(--font-serif), serif', fontStyle: 'italic', fontWeight: 400 }}>Datalink</h3>
                                <p className="font-mono text-[0.7rem] uppercase tracking-[0.1em] " style={{ color: 'var(--redline)' }}>01/2018 – 06/2019</p>
                            </div>
                            <div className="flex-1 mt-1 md:mt-0">
                                <p className="text-[1.3rem] font-medium mb-2 text-foreground">UX and UI Designer</p>
                                <p className="text-muted-foreground text-[1.1rem] leading-[1.65]">
                                    Worked on a range of projects in the tech, finance industry.
                                </p>
                            </div>
                        </div>

                        {/* Shiftenterprises */}
                        <div className="flex flex-col md:flex-row gap-6 md:gap-12 pt-8 pb-4 px-5 sm:px-6 hover:bg-white/[0.025] hover:pl-8 transition-all duration-300">
                            <div className="md:w-[240px] shrink-0">
                                <h3 className="text-[clamp(1.6rem,3vw,2.2rem)] leading-none mb-3" style={{ fontFamily: 'var(--font-serif), serif', fontStyle: 'italic', fontWeight: 400 }}>Shiftenterprises</h3>
                                <p className="font-mono text-[0.7rem] uppercase tracking-[0.1em] " style={{ color: 'var(--redline)' }}>10/2016 – 12/2017</p>
                            </div>
                            <div className="flex-1 mt-1 md:mt-0">
                                <p className="text-[1.3rem] font-medium mb-2 text-foreground">UX and UI Designer</p>
                                <p className="text-muted-foreground text-[1.1rem] leading-[1.65]">
                                    Worked on a range of projects in the health, gardening industry.
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
