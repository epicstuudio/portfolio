'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Mail } from 'lucide-react';
import { ThemeSwitcher, ModeTabs, DarkModeToggle, useTheme, useThemeCopy } from '@/components/theme';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen bg-background">
        <div className="animate-pulse h-16 bg-muted/20" />
      </div>
    );
  }

  return <HomeContent />;
}

function HomeContent() {
  const { themeConfig, setTheme } = useTheme();
  const copy = useThemeCopy();

  return (
    <div className="min-h-screen bg-background text-foreground theme-transition">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-[200px] pb-20 border-b border-border">
          <div className="container-narrow">
            {/* Mode Tabs - Moved to hero */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="inline-flex items-center gap-1 p-1 bg-muted/50 rounded-full">
                {(['summer', 'winter', 'autumn', 'spring', 'cosmos'] as const).map((themeId) => {
                  const names: Record<string, string> = {
                    summer: 'Core',
                    winter: 'Craft',
                    autumn: 'Experience',
                    spring: 'Partnership',
                    cosmos: 'Reflection'
                  };
                  const isActive = themeConfig.id === themeId;
                  return (
                    <button
                      key={themeId}
                      onClick={() => setTheme(themeId)}
                      className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${isActive
                        ? 'bg-background text-foreground shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                      {names[themeId]}
                    </button>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              className="max-w-4xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {/* Small label */}
              <motion.p
                className="text-sm text-muted-foreground mb-6 uppercase tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.15 }}
              >
                Senior Product Designer
              </motion.p>

              {/* Dynamic Hero Title */}
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                key={themeConfig.id}
              >
                {copy.heroTitle}
              </motion.h1>

              {/* Dynamic Subtitle */}
              <motion.p
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                key={`subtitle-${themeConfig.id}`}
              >
                {copy.heroSubtitle}
              </motion.p>

              {/* Tagline */}
              <motion.p
                className="text-base font-medium text-foreground mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                key={`tagline-${themeConfig.id}`}
              >
                {copy.tagline}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <Button size="lg" className="gap-2 rounded-full px-6">
                  View my work
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2 rounded-full px-6">
                  Get in touch
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Selected Work Section */}
        <section id="work" className="py-20 border-b border-border">
          <div className="container-narrow">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Selected Work</h2>
                <p className="text-2xl md:text-3xl font-bold">Featured Projects</p>
              </div>
              <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
                View all
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Project Cards */}
            <div className="space-y-8">
              {/* Project 1 */}
              <motion.article
                className="group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <a href="/case-studies/field-pilot" className="block">
                  {/* Project Image */}
                  <div className="relative aspect-[16/9] md:aspect-[2/1] rounded-2xl overflow-hidden bg-muted mb-6 border border-border">
                    <img
                      src="/images/field-pilot-cover.png"
                      alt="Field Pilot App Overview"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">B2B Marketplace</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">2025</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        Field Pilot — Digitizing Offline Sales
                      </h3>
                      <p className="text-muted-foreground max-w-xl">
                        Transformed an opaque, manual field sales operation into a scalable, data-driven workflow.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      View project
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </a>
              </motion.article>

              {/* Project 2 */}
              <motion.article
                className="group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <a href="#" className="block">
                  {/* Project Image */}
                  <div className="relative aspect-[16/9] md:aspect-[2/1] rounded-2xl overflow-hidden bg-muted mb-6 border border-border">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-16 h-16 rounded-2xl bg-foreground/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-foreground">DS</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Coming Soon</p>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">Voltquant</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">2024</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        Design System + Web App
                      </h3>
                      <p className="text-muted-foreground max-w-xl">
                        Voltquant helps teams analyze data and make better decisions using AI-powered grid search.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      View project
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </a>
              </motion.article>
            </div>
          </div>
        </section>

        {/* How I Work Section */}
        <section className="py-20 border-b border-border">
          <div className="container-narrow">
            {/* Section Header */}
            <div className="mb-12">
              <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Process</h2>
              <p className="text-2xl md:text-3xl font-bold">How I Work</p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              {[
                {
                  num: '01',
                  title: 'Start with the real problem',
                  description: 'I focus on understanding how work actually happens—not how we think it should happen.'
                },
                {
                  num: '02',
                  title: 'Design for behavior change',
                  description: 'Good design changes behavior. I look for leverage points where better visibility or reduced friction improves outcomes.'
                },
                {
                  num: '03',
                  title: 'Make tradeoffs explicit',
                  description: "Every product decision is a tradeoff. I'm deliberate about what we optimize for."
                },
                {
                  num: '04',
                  title: 'Measure what matters',
                  description: 'I work with partners to define success metrics early, so design impact is measurable.'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.num}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-6xl font-bold text-muted/30 absolute -top-4 -left-2">{item.num}</span>
                  <div className="relative pt-8">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>



        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container-narrow">
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Contact</h2>
              <p className="text-3xl md:text-4xl font-bold mb-8">Let's Work Together</p>

              <p className="text-muted-foreground mb-8 text-lg">
                If you're building a product that needs clearer structure, has real operational constraints,
                or requires design decisions that go beyond visuals—I'd love to talk.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2 rounded-full px-6">
                  <Mail className="w-4 h-4" />
                  Get in touch
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2 rounded-full px-6">
                  View LinkedIn
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2024 Ali Hamza. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for new projects
          </p>
        </div>
      </footer>
    </div>
  );
}
