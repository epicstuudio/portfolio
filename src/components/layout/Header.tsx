'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo, LogoStatic } from '@/components/ui/Logo';
import { DarkModeToggle, ThemeSwitcher } from '@/components/theme';

export function Header() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent hydration mismatch
    if (!mounted) {
        return (
            <header className="fixed top-4 left-0 right-0 z-50 px-4">
                <nav className="max-w-4xl mx-auto px-8 bg-background/95 border border-border rounded-2xl flex items-center justify-between py-6">
                    <LogoStatic size={32} className="text-foreground" />
                    <div className="hidden md:flex items-center gap-0">
                        <span className="px-4 py-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">Work</span>
                        <span className="px-4 py-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">About</span>
                        <span className="px-4 py-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">Contact</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9" />
                        <div className="w-9 h-9" />
                        <div className="h-9 w-28" />
                    </div>
                </nav>
            </header>
        );
    }

    return (
        <header className="fixed top-4 left-0 right-0 z-50 px-4">
            <nav className="max-w-4xl mx-auto px-8 bg-background/95 border border-border rounded-2xl flex items-center justify-between py-6">
                {/* Left: Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Logo size={32} className="text-foreground" />
                </Link>

                {/* Center: Nav Links */}
                <div className="hidden md:flex items-center gap-0">
                    <Link href="/#work" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">
                        Work
                    </Link>
                    <Link href="/about" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">
                        About
                    </Link>
                    <Link href="/#contact" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">
                        Contact
                    </Link>
                </div>

                {/* Right: Icons + CTA */}
                <div className="flex items-center gap-3">
                    <DarkModeToggle />

                    {/* LinkedIn Icon */}
                    <a
                        href="https://linkedin.com"
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
                        className="rounded-full px-5 gap-2"
                        asChild
                    >
                        <Link href="/#contact">
                            Contact me
                            <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </Button>

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <ThemeSwitcher />
                    </div>
                </div>
            </nav>
        </header>
    );
}
