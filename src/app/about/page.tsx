'use client';

import { Header } from '@/components/layout';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            <main className="pt-[200px]">
                {/* Hero */}
                <section className="max-w-[1280px] mx-auto px-8 pb-24">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
                        I craft products that strike a perfect balance between user delight and business success.
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
                        <div className="space-y-6">
                            <p className="text-muted-foreground leading-relaxed">
                                My name is Ali and I&apos;m a product designer from
                                Pakistan based in Dubai, UAE. I&apos;m a Product Designer in
                                Tradeling, an Amazon-backed B2B
                                Marketplace. My work revolves around crafting
                                elegant, functional solutions that deeply
                                resonate with users and deliver results.
                            </p>

                            <p className="text-muted-foreground leading-relaxed">
                                In 2016, I stepped into the design space as a
                                Product Designer at Datalink Labs, a growing
                                startup in Pakistan. During my time at
                                startups I focused on designing products, websites,
                                managing design systems, and branding. I enjoy
                                delivering solutions for businesses in the healthcare
                                and fitness industry.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Experience Intro */}
                <section className="max-w-[1280px] mx-auto px-8 pb-24">
                    <p className="text-2xl md:text-3xl leading-relaxed max-w-4xl">
                        My diverse professional experience spans across varied
                        industries, from pioneering e-commerce interfaces to
                        innovative applications in health and fitness and more. In
                        this dynamic journey, not only have I crafted user-centric
                        designs, but also pioneered products that drive growth
                        and customer engagement across domains.
                    </p>
                </section>

                {/* Companies */}
                <section className="max-w-[1280px] mx-auto px-8 pb-24">
                    <p className="text-sm uppercase tracking-wider text-muted-foreground mb-12">
                        Companies
                    </p>

                    <div className="space-y-12">
                        {/* Tradeling */}
                        <div className="grid md:grid-cols-[200px_1fr] gap-8 pb-12 border-b border-border">
                            <h3 className="text-2xl font-semibold">Tradeling</h3>
                            <div>
                                <p className="font-medium mb-1">Product Designer</p>
                                <p className="text-sm text-muted-foreground mb-4">01/2025 – Present</p>
                                <p className="text-muted-foreground">
                                    Worked on Mobile, Web, Admin and Design Systems
                                </p>
                            </div>
                        </div>

                        {/* Voltquant */}
                        <div className="grid md:grid-cols-[200px_1fr] gap-8 pb-12 border-b border-border">
                            <h3 className="text-2xl font-semibold">Voltquant</h3>
                            <div>
                                <p className="font-medium mb-1">Product Designer</p>
                                <p className="text-sm text-muted-foreground mb-4">11/2023 – 12/2024</p>
                                <p className="text-muted-foreground">
                                    Worked on Website, Mobile app with Design Systems
                                </p>
                            </div>
                        </div>

                        {/* Lifesmile */}
                        <div className="grid md:grid-cols-[200px_1fr] gap-8 pb-12 border-b border-border">
                            <h3 className="text-2xl font-semibold">Lifesmile</h3>
                            <div>
                                <p className="font-medium mb-1">Product Designer</p>
                                <p className="text-sm text-muted-foreground mb-4">09/2019 – 11/2023</p>
                                <p className="text-muted-foreground">
                                    Worked on Website, Mobile App, Dashboard and Design Systems
                                </p>
                            </div>
                        </div>

                        {/* Datalink */}
                        <div className="grid md:grid-cols-[200px_1fr] gap-8 pb-12 border-b border-border">
                            <h3 className="text-2xl font-semibold">Datalink</h3>
                            <div>
                                <p className="font-medium mb-1">UX and UI Designer</p>
                                <p className="text-sm text-muted-foreground mb-4">01/2018 – 06/2019</p>
                                <p className="text-muted-foreground">
                                    Worked on a range of projects in the tech, finance industry.
                                </p>
                            </div>
                        </div>

                        {/* Shiftenterprises */}
                        <div className="grid md:grid-cols-[200px_1fr] gap-8 pb-12 border-b border-border">
                            <h3 className="text-2xl font-semibold">Shiftenterprises</h3>
                            <div>
                                <p className="font-medium mb-1">UX and UI Designer</p>
                                <p className="text-sm text-muted-foreground mb-4">10/2016 – 12/2017</p>
                                <p className="text-muted-foreground">
                                    Worked on a range of projects in the health, gardening industry.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-border py-12">
                <div className="max-w-[1280px] mx-auto px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <p className="text-sm text-muted-foreground mb-2">Ali</p>
                            <a href="mailto:hello@alihamza.com" className="text-sm hover:text-primary transition-colors">
                                hello@alihamza.com
                            </a>
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground mb-2">Links</p>
                            <div className="flex gap-4 text-sm">
                                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                                <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                            </div>
                        </div>

                        <div className="md:text-right">
                            <p className="text-sm text-muted-foreground mb-2">Socials</p>
                            <div className="flex md:justify-end gap-4 text-sm">
                                <a href="https://linkedin.com" className="hover:text-primary transition-colors">LinkedIn</a>
                                <a href="https://twitter.com" className="hover:text-primary transition-colors">Twitter</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
