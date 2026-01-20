'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/layout';

export default function FieldPilotCaseStudy() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            <main className="pt-[200px]">
                {/* Hero */}
                <section className="page-container pb-16 border-b border-border">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-6 text-sm text-muted-foreground">
                            <span>B2B Marketplace</span>
                            <span className="text-border">/</span>
                            <span>Field Operations</span>
                            <span className="text-border">/</span>
                            <span>Android</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Field Pilot
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-10">
                            Designing a scalable field sales system for an offline-first B2B marketplace
                        </p>

                        <div className="flex flex-wrap gap-12 text-sm border-t border-border pt-8">
                            <div>
                                <p className="text-muted-foreground mb-1">Role</p>
                                <p className="font-medium">Senior Product Designer</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground mb-1">Company</p>
                                <p className="font-medium">Tradeling</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground mb-1">Timeline</p>
                                <p className="font-medium">6 months</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground mb-1">Platform</p>
                                <p className="font-medium">Android (Tablet First)</p>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Hero Image */}
                <section className="page-container py-12">
                    <div className="rounded-2xl overflow-hidden">
                        <img
                            src="/images/field-pilot-cover.png"
                            alt="Field Pilot App Overview"
                            className="w-full h-auto"
                        />
                    </div>
                </section>

                {/* Summary */}
                <section className="page-container py-16 border-b border-border">
                    <div className="max-w-3xl">
                        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
                            Summary
                        </h2>

                        <div className="space-y-6 text-lg leading-relaxed">
                            <p>
                                I designed and launched <strong>Field Pilot</strong>, an Android app that digitized Tradeling&apos;s
                                offline field sales operations. The app enabled reps to plan visits, check in via GPS,
                                create orders, and collect invoices—all in one cohesive flow.
                            </p>

                            <p>
                                In 6 months, we unlocked <strong>AED 5.1M GMV</strong> from the field channel, reduced back-office
                                dependency by 30%, and introduced real accountability into what was previously an opaque operation.
                            </p>

                            <p className="text-muted-foreground italic border-l-2 border-primary pl-6">
                                This project was not about designing screens. It was about designing trust, accountability,
                                and speed for users working in messy, real-world conditions.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Impact */}
                <section className="page-container py-16 border-b border-border">
                    <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-12">
                        Impact
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
                        <div>
                            <p className="text-4xl md:text-5xl font-bold text-primary mb-3">5.1M</p>
                            <p className="text-muted-foreground">AED GMV unlocked from field channel</p>
                        </div>
                        <div>
                            <p className="text-4xl md:text-5xl font-bold mb-3">30%</p>
                            <p className="text-muted-foreground">Reduction in manual back-office orders</p>
                        </div>
                        <div>
                            <p className="text-4xl md:text-5xl font-bold mb-3">94%</p>
                            <p className="text-muted-foreground">Daily active usage among field reps</p>
                        </div>
                        <div>
                            <p className="text-4xl md:text-5xl font-bold mb-3">6hrs</p>
                            <p className="text-muted-foreground">Saved per manager weekly on status checks</p>
                        </div>
                    </div>
                </section>

                {/* Context */}
                <section className="page-container py-16 border-b border-border">
                    <div className="grid md:grid-cols-[1fr_1.5fr] gap-16">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">Context</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Tradeling is a B2B marketplace operating across the MENA region. While the online platform
                                was growing, approximately <strong className="text-foreground">80% of revenue still came from offline field sales</strong>—reps
                                visiting small retailers, negotiating bulk orders, and collecting payments.
                            </p>
                        </div>

                        <div>
                            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
                                The problem: field sales was invisible
                            </p>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <p className="font-medium mb-4 text-red-500/80">Before</p>
                                    <ul className="space-y-3 text-muted-foreground">
                                        <li>Orders requested over WhatsApp</li>
                                        <li>Visits were self-reported</li>
                                        <li>Cash collection lacked audit trails</li>
                                        <li>Managers had zero visibility</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-medium mb-4 text-green-500/80">After</p>
                                    <ul className="space-y-3 text-muted-foreground">
                                        <li>Direct order creation from the field</li>
                                        <li>GPS-verified check-ins</li>
                                        <li>Timestamped, location-tagged collections</li>
                                        <li>Real-time dashboards for managers</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Visual */}
                <section className="page-container py-12">
                    <div className="rounded-2xl overflow-hidden">
                        <img
                            src="/images/field-pilot-flow.png"
                            alt="Before/After Comparison - Field Pilot workflow transformation"
                            className="w-full h-auto"
                        />
                    </div>
                </section>

                {/* Problem */}
                <section className="page-container py-16 border-b border-border">
                    <h2 className="text-2xl md:text-3xl font-bold mb-12">The Problem</h2>

                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
                                User Problems
                            </h3>
                            <ul className="space-y-4 text-lg">
                                <li>Field reps could not track their targets or performance</li>
                                <li>No way to place orders on the spot—had to wait for back-office</li>
                                <li>Could not prove store visits actually happened</li>
                                <li>Only discovered if they were on track during monthly reviews</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
                                Business Problems
                            </h3>
                            <ul className="space-y-4 text-lg">
                                <li>Sales managers spent hours chasing status updates via WhatsApp</li>
                                <li>Finance lacked visibility into cash collection</li>
                                <li>Back-office teams manually entered orders, creating delays</li>
                                <li>Leadership had no reliable data to scale the channel</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Role */}
                <section className="page-container py-16 border-b border-border">
                    <div className="grid md:grid-cols-[1fr_2fr] gap-16">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">My Role</h2>
                            <p className="text-muted-foreground">
                                I owned the end-to-end design of Field Pilot, from research through launch.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                            <p>Field research and ride-alongs with sales reps</p>
                            <p>GPS, performance, and accountability patterns</p>
                            <p>UX architecture and interaction design</p>
                            <p>New field-ops design system</p>
                            <p>Offline-first flow design</p>
                            <p>Stakeholder alignment and reviews</p>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-border">
                        <p className="text-sm text-muted-foreground mb-4">Team</p>
                        <p className="text-muted-foreground">
                            1 Product Manager · 3 Engineers (scaled to 2) · 2 Sales Managers · 1 Product Designer (me)
                        </p>
                    </div>
                </section>

                {/* Research */}
                <section className="page-container py-16 border-b border-border">
                    <div className="max-w-3xl mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Research</h2>
                        <p className="text-lg text-muted-foreground">
                            Instead of surveys, I rode along with field reps and observed real work conditions:
                            poor connectivity, time pressure, interruptions, and informal workflows.
                        </p>
                    </div>

                    <div className="space-y-12">
                        <div className="grid md:grid-cols-[200px_1fr] gap-8">
                            <h3 className="font-semibold">WhatsApp was the real system</h3>
                            <div>
                                <p className="text-muted-foreground mb-4">
                                    Reps negotiated prices, requested approvals, and reported status entirely via WhatsApp.
                                    Managers would get hundreds of messages daily, making it impossible to track anything.
                                </p>
                                <p className="text-sm">
                                    <span className="text-primary font-medium">Design implication:</span> Do not replace behavior—formalize it. Approvals had to be instant and visible.
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-[200px_1fr] gap-8">
                            <h3 className="font-semibold">Accountability was missing</h3>
                            <div>
                                <p className="text-muted-foreground mb-4">
                                    Managers did not distrust reps; they simply had no visibility. They spent 30% of their time
                                    doing status checks—calling reps to ask where they were.
                                </p>
                                <p className="text-sm">
                                    <span className="text-primary font-medium">Design implication:</span> Design for shared visibility, not surveillance.
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-[200px_1fr] gap-8">
                            <h3 className="font-semibold">Performance anxiety</h3>
                            <div>
                                <p className="text-muted-foreground mb-4">
                                    Reps discovered missed targets only during monthly reviews. By then, it was too late to
                                    course-correct.
                                </p>
                                <p className="text-sm">
                                    <span className="text-primary font-medium">Design implication:</span> Performance had to be visible daily, not retrospectively.
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-[200px_1fr] gap-8">
                            <h3 className="font-semibold">Cash collection risk</h3>
                            <div>
                                <p className="text-muted-foreground mb-4">
                                    Reps collected cash but there were no timestamps, locations, or audit trails.
                                    Finance would get deposits that did not match reported collections.
                                </p>
                                <p className="text-sm">
                                    <span className="text-primary font-medium">Design implication:</span> Design for trust and traceability, not just speed.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Solution */}
                <section className="page-container py-16">
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Solution</h2>
                        <p className="text-lg text-muted-foreground">
                            Field Pilot was designed around three core journeys. Each addressed specific
                            pain points uncovered during research.
                        </p>
                    </div>
                </section>

                {/* Journey 1 */}
                <section className="bg-muted/30">
                    <div className="page-container py-16">
                        <div className="flex items-baseline gap-4 mb-8">
                            <span className="text-5xl font-bold text-primary/30">01</span>
                            <h3 className="text-2xl font-bold">Plan, Visit, Order</h3>
                        </div>

                        <p className="text-lg text-muted-foreground max-w-2xl mb-12">
                            Remove friction between visiting a store and closing a deal. Previously,
                            reps would visit, negotiate, then wait hours for back-office to process.
                        </p>

                        <div className="grid md:grid-cols-3 gap-12 mb-12">
                            <div>
                                <p className="font-semibold mb-2">Visit Planning</p>
                                <p className="text-muted-foreground">
                                    Manager-led visit assignments with workload balancing and route optimization hints
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold mb-2">GPS Check-in</p>
                                <p className="text-muted-foreground">
                                    Geofence validation requiring reps to be within 50m of store location
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold mb-2">Direct Orders</p>
                                <p className="text-muted-foreground">
                                    Create orders on the spot with embedded approval logic for price negotiations
                                </p>
                            </div>
                        </div>

                        {/* Visuals */}
                        <div className="grid md:grid-cols-3 gap-4 mb-12">
                            <div className="rounded-xl overflow-hidden">
                                <img
                                    src="/images/Visit Planning.png"
                                    alt="Visit Planning"
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="rounded-xl overflow-hidden">
                                <img
                                    src="/images/GPS Checkin.png"
                                    alt="GPS Check-in"
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="rounded-xl overflow-hidden">
                                <img
                                    src="/images/Order Creation.png"
                                    alt="Order Creation"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>

                        <div className="max-w-3xl">
                            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                                Key decisions
                            </p>
                            <ul className="space-y-4 text-muted-foreground">
                                <li>
                                    <strong className="text-foreground">GPS check-in over manual confirmation</strong> — Prevents
                                    fake visits, creates audit trail. Added 2 weeks but was non-negotiable.
                                </li>
                                <li>
                                    <strong className="text-foreground">On-spot order creation</strong> — Removed back-office
                                    bottleneck. Reps felt empowered; customers got instant confirmation.
                                </li>
                                <li>
                                    <strong className="text-foreground">Embedded approval logic</strong> — Auto-approve above threshold,
                                    only escalate when needed. Keeps the flow fast.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Journey 2 */}
                <section className="page-container py-16">
                    <div className="flex items-baseline gap-4 mb-8">
                        <span className="text-5xl font-bold text-primary/30">02</span>
                        <h3 className="text-2xl font-bold">See Performance, Adjust Behavior</h3>
                    </div>

                    <p className="text-lg text-muted-foreground max-w-2xl mb-12">
                        Help reps self-correct before missing targets. Previously, they had no
                        visibility into their own performance until month-end reviews.
                    </p>

                    <div className="grid md:grid-cols-3 gap-12 mb-12">
                        <div>
                            <p className="font-semibold mb-2">Personal Dashboard</p>
                            <p className="text-muted-foreground">
                                Target vs achieved with visual progress bars, designed for glanceability
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold mb-2">Timeframe Views</p>
                            <p className="text-muted-foreground">
                                Daily, weekly, monthly toggles so reps always know where they stand
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold mb-2">Status Indicators</p>
                            <p className="text-muted-foreground">
                                On-track in green, at-risk in amber—clear visual hierarchy
                            </p>
                        </div>
                    </div>

                    {/* Visuals */}
                    <div className="grid md:grid-cols-2 gap-4 mb-12">
                        <div className="rounded-xl overflow-hidden">
                            <img
                                src="/images/Performance Dashboard.png"
                                alt="Performance Dashboard"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="rounded-xl overflow-hidden">
                            <img
                                src="/images/Timeframe Toggle.png"
                                alt="Timeframe Toggle"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    <blockquote className="border-l-2 border-primary pl-6 text-lg italic text-muted-foreground max-w-2xl">
                        &ldquo;Finally, I can see if I am hitting my targets in real-time. I know when to push harder.&rdquo;
                        <footer className="mt-3 text-sm not-italic">— Field Sales Rep during pilot testing</footer>
                    </blockquote>
                </section>

                {/* Journey 3 */}
                <section className="bg-muted/30">
                    <div className="page-container py-16">
                        <div className="flex items-baseline gap-4 mb-8">
                            <span className="text-5xl font-bold text-primary/30">03</span>
                            <h3 className="text-2xl font-bold">Collect, Deposit, Reconcile</h3>
                        </div>

                        <p className="text-lg text-muted-foreground max-w-2xl mb-12">
                            Make cash collection auditable without slowing reps down. This was a
                            high-risk area with no visibility before Field Pilot.
                        </p>

                        <div className="grid md:grid-cols-3 gap-12 mb-12">
                            <div>
                                <p className="font-semibold mb-2">Digital Collection</p>
                                <p className="text-muted-foreground">
                                    Timestamp and location captured automatically when marking invoices collected
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold mb-2">Multi-Invoice Grouping</p>
                                <p className="text-muted-foreground">
                                    Batch multiple invoices into a single deposit, reducing bank trips by 60%
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold mb-2">Clear Handoffs</p>
                                <p className="text-muted-foreground">
                                    Rep to manager to finance—each step visible and traceable
                                </p>
                            </div>
                        </div>

                        {/* Visuals */}
                        <div className="grid md:grid-cols-4 gap-4 mb-12">
                            <div className="rounded-xl overflow-hidden">
                                <img
                                    src="/images/Invoice List.png"
                                    alt="Invoice List"
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="rounded-xl overflow-hidden">
                                <img
                                    src="/images/Collection.png"
                                    alt="Collection"
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="rounded-xl overflow-hidden">
                                <img
                                    src="/images/Deposit.png"
                                    alt="Deposit"
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="rounded-xl overflow-hidden">
                                <img
                                    src="/images/Reconciliation.png"
                                    alt="Reconciliation"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>

                        <div className="max-w-2xl border-l-2 border-primary pl-6">
                            <p className="font-medium mb-2">Unexpected outcome</p>
                            <p className="text-muted-foreground">
                                Reps loved this feature—not because of compliance, but because it saved them hours of
                                admin work weekly. What we designed for accountability became a productivity tool.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Tradeoffs */}
                <section className="page-container py-16 border-b border-border">
                    <div className="max-w-3xl mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Tradeoffs</h2>
                        <p className="text-lg text-muted-foreground">
                            These were not visual decisions—they were trust decisions.
                        </p>
                    </div>

                    <div className="space-y-10 max-w-3xl">
                        <div>
                            <h3 className="font-semibold mb-3">Privacy vs Visibility</h3>
                            <p className="text-muted-foreground">
                                Agents wanted location tracking off after checkout. Managers wanted all-day tracking.
                                <strong className="text-foreground"> Resolution:</strong> Tracking limited to working hours only.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">Speed vs Compliance</h3>
                            <p className="text-muted-foreground">
                                Agents wanted one-click ordering. Finance wanted approval trails.
                                <strong className="text-foreground"> Resolution:</strong> Auto-approval above thresholds, manual only for exceptions.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">Real-time Sync vs Battery Life</h3>
                            <p className="text-muted-foreground">
                                Ops wanted 30-second updates. Agents complained about battery drain.
                                <strong className="text-foreground"> Resolution:</strong> Adaptive sync—5 min if stationary, 30 sec if moving. 40% less drain.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Results */}
                <section className="page-container py-16 border-b border-border">
                    <h2 className="text-2xl md:text-3xl font-bold mb-12">Results After 6 Months</h2>

                    <div className="grid md:grid-cols-3 gap-16 mb-16">
                        <div>
                            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
                                Business Impact
                            </p>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-3xl font-bold text-primary">AED 5.1M</p>
                                    <p className="text-muted-foreground">GMV unlocked</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold">30%</p>
                                    <p className="text-muted-foreground">Less manual orders</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold">70%+</p>
                                    <p className="text-muted-foreground">Collections tracked digitally</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
                                Efficiency
                            </p>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-3xl font-bold">5-8 min</p>
                                    <p className="text-muted-foreground">Order creation (was 30-45)</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold">6 hrs/week</p>
                                    <p className="text-muted-foreground">Saved per manager</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
                                Adoption
                            </p>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-3xl font-bold">94%</p>
                                    <p className="text-muted-foreground">Daily active reps</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold">100%</p>
                                    <p className="text-muted-foreground">Manager adoption</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold">7.8</p>
                                    <p className="text-muted-foreground">NPS from reps</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Visual */}
                <section className="page-container py-12">
                    <div className="rounded-2xl overflow-hidden">
                        <img
                            src="/images/Impact Metrics Dashboard.png"
                            alt="Impact Metrics Dashboard"
                            className="w-full h-auto"
                        />
                    </div>
                </section>

                {/* Learnings */}
                <section className="page-container py-16 border-b border-border">
                    <h2 className="text-2xl md:text-3xl font-bold mb-12">What This Project Taught Me</h2>

                    <div className="grid md:grid-cols-3 gap-12">
                        <div>
                            <p className="text-lg font-semibold mb-3">Internal tools are about accountability</p>
                            <p className="text-muted-foreground">
                                Trust signals—timestamps, GPS verification, approval seals—mattered more than visual polish.
                                Users cared about reliability, not perfect shadows.
                            </p>
                        </div>

                        <div>
                            <p className="text-lg font-semibold mb-3">Speed drives adoption</p>
                            <p className="text-muted-foreground">
                                Internal users abandon tools if they do not see value in the first few minutes.
                                The core workflow had to be three screens or less.
                            </p>
                        </div>

                        <div>
                            <p className="text-lg font-semibold mb-3">Design for the real world</p>
                            <p className="text-muted-foreground">
                                Offline connectivity, outdoor sunlight, interruptions forced me to design
                                for failure modes, not happy paths.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Reflection */}
                <section className="page-container py-16">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8">Reflection</h2>

                        <div className="space-y-6 text-lg leading-relaxed">
                            <p>
                                Field Pilot was not a feature launch. It was a system redesign of how work actually happens in the field.
                            </p>

                            <p className="text-muted-foreground">
                                By designing for real constraints—and respecting existing behavior rather than trying to replace
                                it—we turned an invisible, manual operation into a transparent, scalable one.
                            </p>

                            <p className="font-medium">
                                Designing this product made me a better systems thinker, not just a better visual designer.
                            </p>
                        </div>
                    </div>
                </section>

            </main>

            {/* Footer */}
            <footer className="border-t border-border py-12">
                <div className="page-container flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                        2024 Ali Hamza. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span className="text-sm text-muted-foreground">Available for new projects</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
