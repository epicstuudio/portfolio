'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/Logo';

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-4 left-0 right-0 z-50 px-4">
            <nav className="max-w-4xl mx-auto px-8 bg-background/60 backdrop-blur-md border border-border/50 rounded-2xl flex items-center justify-between py-6">
                {/* Left: Logo */}
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <Logo size={32} className="text-foreground" />
                    </Link>
                </div>

                {/* Center: Nav Links */}
                <div className="hidden md:flex items-center gap-0">
                    <Link href="/work" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">
                        Work
                    </Link>
                    <Link href="/about" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">
                        About
                    </Link>
                    <Link href="/contact" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">
                        Contact
                    </Link>
                </div>

                {/* Right: Icons + CTA */}
                <div className="flex items-center gap-3">

                    {/* LinkedIn Icon */}
                    <a
                        href="https://www.linkedin.com/in/alihamxa-epic"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>

                    {/* Contact CTA Button */}
                    <Button
                        size="sm"
                        className="rounded-full px-6 bg-foreground text-background hover:bg-foreground/90 font-medium"
                        asChild
                    >
                        <a href="mailto:hello@alihamxa.com">
                            Contact me
                        </a>
                    </Button>

                    {/* Mobile Menu Toggle */}
                    <button 
                        className="md:hidden text-foreground flex items-center justify-center ml-1"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-4 right-4 mt-2 p-6 bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl flex flex-col gap-4 shadow-lg animate-in fade-in slide-in-from-top-2">
                    <Link href="/work" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-muted-foreground hover:text-foreground uppercase tracking-wider">
                        Work
                    </Link>
                    <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-muted-foreground hover:text-foreground uppercase tracking-wider">
                        About
                    </Link>
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-muted-foreground hover:text-foreground uppercase tracking-wider">
                        Contact
                    </Link>
                </div>
            )}
        </header>
    );
}
