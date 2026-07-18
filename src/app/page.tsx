'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout';
import { CinematicHero } from '@/components/sections/CinematicHero';
import { ProjectGallery } from '@/components/sections/ProjectGallery';
import { Process } from '@/components/sections/Process';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return <HomeContent />;
}

function HomeContent() {
  return (
    <div className="min-h-screen bg-background text-foreground noise-bg">
      <Header />

      <main>
        <CinematicHero />
        <ProjectGallery />

        <Process />

      </main>

      <Footer />
    </div>
  );
}
