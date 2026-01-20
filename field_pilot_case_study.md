# Field Pilot: Digitalizing Offline Sales Operations
## Senior Product Designer Case Study - Ali Hamza, Tradeling

---

## SECTION 1: THE HOOK

### Outcome Headline
**Unlocked AED 5.1M GMV from field channel in 6 months by launching Android Field Sales App with GPS-based visit tracking and direct order creation, reducing manual back-office dependency by 30% and establishing Tradeling's field sales as a scalable, data-driven operation.**

### Secondary Metrics
- **50%+ GPS-verified visit compliance**: 19,383 of 37,100 planned visits completed
- **2,405 orders placed** directly via the app at AED 900.24 average order value
- **AED 10.3M+ collected** through invoice collection feature since launch
- **1,053 follow-up visits** triggered from app insights
- **30% of monthly back-office orders** now created via Field Pilot
- **Reduced manual WhatsApp reporting** from daily manual status updates to real-time visibility

### Role & Team
**Your Role:** Product Designer (owner of UX/interaction design strategy, user research, and design systems)

**Team Composition:**
- 1 Product Manager (strategic direction and business metrics)
- 3 Engineering Leads initially (scaled to 1 Frontend, 1 Backend + Lead Engineer over 6 months)
- 2 Sales Managers (field insights and validation)
- You: 1 Product Designer

---

## SECTION 2: CONTEXT & BUSINESS BACKGROUND

### The Tradeling Marketplace & Strategic Imperative
Tradeling operates as a B2B marketplace in the MENA region (primarily UAE and KSA), facilitating bulk purchases of consumer goods. Critically, **80% of Tradeling's revenue comes from offline field sales**, not online transactions. Field sales reps conduct in-person visits to small retailers, negotiate bulk orders, and manage relationships—yet the entire operation was managed through manual, fragmented systems: WhatsApp messages, Excel spreadsheets, and back-office staff manually entering orders.

In mid-2025, leadership recognized a strategic bottleneck: while the online marketplace was scaling, offline sales—Tradeling's revenue backbone—remained inefficient and invisible. This project was greenlit to digitalize field operations and unlock the operational insights needed to scale.

### The Field Sales Broken State (Before)

**[VISUAL OPPORTUNITY #1: Before/After Comparison Diagram]**
*Suggested: Side-by-side layout showing "Before Field Pilot" (scattered WhatsApp, Excel, paper notes) vs. "After Field Pilot" (centralized app). Use simple icons for clarity.*

Field sales reps operated with virtually no technology support:

**For Field Reps:**
- No visibility into daily targets, orders placed, or store visit counts
- No access to updated catalog pricing
- Had to wait for back-office staff to create orders (WhatsApp-based informal requests)
- No way to track their own performance or forecast earnings
- Manual handwritten notes on paper about customer interactions

**For Sales Managers:**
- Zero real-time visibility into where agents were or what they'd accomplished
- No reliable KPIs: Which stores were visited? Which were missed?
- No way to detect coverage gaps or plan routes intelligently
- Manual follow-up calls via WhatsApp to check status

**For Back-Office Operations:**
- Manually creating 100+ orders daily based on WhatsApp screenshots or voice notes
- Risk of data entry errors, duplicate orders, or lost requests
- No audit trail of who requested what, or at what price
- Finance couldn't easily reconcile deposits vs. invoices

**For Finance & Credit:**
- Invoice collection was fragmented: reps collected cash but settlement process was slow and error-prone
- Discrepancies between reported deposits and actual bank deposits
- No real-time visibility into credit limits or payment status

### Strategic Urgency
This wasn't a nice-to-have feature. Leadership was under pressure to:
- **Scale revenue targets** that were being missed by the field channel
- **Reduce leakage** from untracked cash and unverified visits
- **Compete with regional players** who were already deploying field apps (e.g., Hyke, LeadSquared alternatives)
- **Establish accountability** across the entire field sales hierarchy

---

## SECTION 3: CONSTRAINTS & REALITY

### Timeline Pressure
- **June 2025:** Project kickoff
- **August 2025:** First pilot launch with ~150-200 reps (after 2 months of sprint-based development)
- **Dec 2025:** Ongoing iterations and feature additions (6-month mark reached)
- **Structure:** Sprint-based delivery (2-week cycles) for the first 4 months, then shifted to Kanban (priority-driven) as the roadmap matured

### Technical & Infrastructure Constraints
1. **Existing Design System Gap**
   - Tradeling had a mobile app design system, but it was built for **e-commerce** (customer-facing, product browsing, checkout flow)
   - Field Sales App required **entirely different UX patterns**: real-time tracking, driver/agent dashboards, accountability interfaces, offline-capable interactions
   - The e-commerce design system had **minimal or no components** for field operations (maps, geolocation, leaderboards, performance dashboards, multi-level approval flows)

2. **Device Decision Uncertainty**
   - **Early challenge:** Stakeholders weren't aligned on whether to build for Android-only, iOS, or both
   - **Decision impact:** This cascaded into design choices (screen sizes, offline capabilities, integration options)
   - **Your insight (Reflection):** Early stakeholder alignment on device choice was critical—building for wrong devices would have wasted months
   - **Final decision:** Android-only for Phase 1 (based on field agent device access + cost constraints)

3. **Device as a Hardware Problem**
   - Prerequisite: Tradeling had to **provision devices** to field agents (no BYOD policy initially)
   - This meant hardware rollout had to happen in parallel with app development
   - Devices required GPS, decent processing power, and durability for field use

4. **Offline-First Architecture Needed**
   - Field reps work in areas with poor connectivity (highway routes, rural areas)
   - Orders must be created offline, synced when connection returns
   - This required backend architecture design to handle eventual consistency and conflict resolution

5. **Compliance & Approval Workflows**
   - Tradeling's internal approval rules for discounts, credit extensions, and payment collection had to be enforced in the app
   - These rules were sometimes implicit and verbal—you had to formalize them

### Team Capacity Constraints
- Started with **2 Frontend + 2 Backend engineers + 1 Lead Engineer**
- After 4 months, **downsized to 1 Frontend + 1 Backend + Lead** (engineers reassigned to other priorities)
- **1 Product Manager** throughout (thin—often unavailable for design reviews)
- This meant: ruthless prioritization, feature phasing, and MVP-first thinking

---

## SECTION 4: RESEARCH & DISCOVERY

### Research Methodology
You conducted **immersive field shadowing and ride-alongs** with actual field sales reps and managers rather than relying on surveys or office interviews. This was critical because the gap between "how we think field sales works" and "how it actually works" was vast.

### Participants
- **7 field sales reps** (mix of experienced and new hires)
- **2 sales managers** (overseeing ~50 reps each)
- **2 sales leads** (managing regional performance)
- **1 ops manager** (back-office order processing)
- **1 finance stakeholder** (payment reconciliation)

**Total research sample:** ~14 users across the full field sales ecosystem

### Research Insights & Surprises

**Insight 1: WhatsApp is the Operational Backbone**
Finding: Sales reps conducted entire order negotiations, approvals, and status updates **via WhatsApp**. Multiple reps would message a single manager asking for order approvals, and wait—sometimes for hours—for a response because the manager was in back-to-back meetings.

**Impact on Design:** Instant approval feedback in the app became critical. Reps needed to see approval/rejection within seconds, not hours.

**Insight 2: Accountability Theater**
Finding: Sales managers were spending 30%+ of their time doing status checks—calling reps to ask "How many visits today?" "How many orders?" "Where are you?"—because they had zero visibility. This wasn't high-value management; it was firefighting.

**Impact on Design:** Real-time dashboards for managers showing visit completion, orders placed, and coverage gaps in a single view became the core offering.

**Insight 3: Performance Anxiety & Targets**
Finding: Reps didn't know their targets, didn't track their own progress, and found out about performance gaps only during monthly reviews when they'd already missed targets. This made it impossible to course-correct mid-month.

**Impact on Design:** Personal performance dashboard for reps (target vs. actual, daily/weekly/monthly views) became a primary feature. Reps needed to see real-time progress.

**Insight 4: The Route Planning Problem**
Finding: Store visit schedules were manually assigned by managers without any data—"Ali, you'll visit stores 1–20 this week" was based on guesswork, not analysis of geography, store priority, or rep capacity. This led to wasted travel time and missed high-priority stores.

**Impact on Design:** Automated visit scheduling based on geography and store priority became a Phase 2+ feature (too complex for MVP), but visit assignment dashboards in Phase 1 needed to be clear enough for managers to manually plan intelligently.

**Insight 5: Cash Collection is High-Risk, Low-Visibility**
Finding: Reps collected cash at store visits but the settlement process was opaque. Finance would get deposits that didn't match reported collections, and they had no audit trail of who collected what, when, and from where.

**Impact on Design:** Invoice collection feature had to be **digital and timestamped**, with manager approval required for deposit groupings. This became a non-negotiable feature to reduce fraud/leakage risk.

---

## SECTION 5: SOLUTION & KEY DESIGN DECISIONS

### Core Capabilities at Launch (MVP)
The Field Pilot app shipped with these primary features:

1. **Visit Planning & Assignment** (for managers)
   - Managers could manually assign which stores each rep should visit on which days
   - Reps could see their daily/weekly schedule and mark visits complete

2. **GPS-Based Check-In** (for reps)
   - Reps navigate to a store using maps
   - Check-in captures GPS location, timestamp, and 50-meter geofence validation
   - Prevents fraudulent check-ins from office

3. **Sales Performance Dashboard** (for reps)
   - Real-time view of: target (AED amount), achieved (AED amount), number of visits, orders placed
   - Breakdowns by daily/weekly/monthly
   - Visual progress indicators

4. **Order Creation from Store** (for reps)
   - Direct order placement without back-office intermediary
   - Product search and catalog browsing
   - Direct price negotiation (escalated to manager for approval if below thresholds)

5. **Store & Customer List** (for reps)
   - Master list of assigned stores
   - Last visit date, last order value, current balance
   - Contact info and address with map

6. **Real-Time Manager Dashboard** (for managers)
   - Heat map: where are my reps right now?
   - Visit status: assigned visits, visited, pending, missed
   - Team performance: top performers, underperformers
   - Orders by agent: total orders, total GMV, avg order value

7. **Invoice Collection & Deposit** (for reps & finance)
   - Reps could mark invoices as "collect" and timestamp collections
   - Group invoices into deposits (e.g., 5 invoices = 1 deposit to bank)
   - Finance could track deposits vs. collections for reconciliation

### Hero Flows & Key Design Decisions

#### **Hero Flow 1: Visit Planning → Check-In → Order Creation**

**The Problem:** Manual planning led to inefficient routes. Reps spent hours traveling, missed high-priority stores, and had no way to create orders on the spot.

**[VISUAL OPPORTUNITY #2: Manager Visit Planning UI]**
*Suggested: Screenshot of calendar-based drag-and-drop interface showing store assignments to days/reps. Highlight workload balance indicators and travel time warnings.*

**Design Decision #1: From Manual Assignment to Automated Suggestion (Phased)**
- **Phase 1 (MVP):** Managers manually drag-and-drop stores to days/reps on a calendar-based UI. Visual feedback showed travel time between stores and workload balance.
- **Why this approach:** Automation would have added 3-4 weeks to development. Manual planning was faster to ship, but we designed the UI so managers could see optimization suggestions (e.g., "Red alert: Rep has 15 stores to visit but only 6 hours available").
- **Later improvement (Kanban phase):** Algorithm-based route optimization was added as stores were better understood.

**Design Decision #2: GPS Check-In with Geofence Validation**
- **Option A (rejected):** Simple button tap to check in (trusting rep honesty).
- **Option B (chosen):** Require rep to be within 50 meters of store GPS coordinates to check in. Timestamp + photo optional.
- **Why this matters:** Prevents fraud (rep checking in from home) and creates audit trail for ops/management review.
- **Tradeoff:** Added 2 weeks for GPS infrastructure, but non-negotiable for accountability.

**[VISUAL OPPORTUNITY #3: GPS Check-In Flow]**
*Suggested: 3-screen sequence showing: (1) Map with nearby stores, (2) Distance indicator when approaching store, (3) Successful check-in confirmation with timestamp and location badge.*

**Design Decision #3: Order Creation from Catalog, Not Back-Office**
- **Old flow:** Rep notes customer request → WhatsApp manager → Manager searches catalog → Back-office enters order → Rep waits
- **New flow:** Rep searches product → Selects → Sees tier pricing → Negotiates price → App auto-approves or escalates → Order created instantly
- **Why:** Removed back-office bottleneck. Reps felt empowered; customers got orders instantly.
- **Constraint:** Initial MVP had basic product search (keyword only) because advanced filtering would've required 2 more weeks. This was noted as friction in early testing and improved in Phase 2.

**[VISUAL OPPORTUNITY #4: Order Creation Flow]**
*Suggested: 4-5 screen wireframes/screenshots showing product search → selection → tier pricing view → negotiation dialog → approval result (auto-approved or escalated). Annotate approval logic.*

---

#### **Hero Flow 2: Performance Visibility → Target Tracking → Motivation**

**The Problem:** Reps had no real-time visibility into their own targets or whether they were on track. They discovered performance gaps only at month-end reviews.

**Design Decision #4: Personal Dashboard with Multi-Timeframe Views**
- **Layout:** Card-based dashboard showing:
  - Target (AED amount) vs. Achieved (AED amount) with % progress bar
  - Total visits (assigned vs. completed)
  - Total orders placed
  - Breakdown by brand/category (Phase 2)
- **Why cards?** Field users (often on 5-inch mobile devices, outdoor lighting, standing up while checking phone) need information to be scannnable in <3 seconds.
- **Timeframes:** Today, This Week, This Month buttons allowed quick switching between daily/weekly/monthly targets.

**[VISUAL OPPORTUNITY #5: Rep Performance Dashboard]**
*Suggested: Mobile phone mockup showing dashboard with KPI cards. Include: Target vs. Achieved progress bar, visits card (13 visited / 20 assigned), orders card, and timeframe toggle buttons. Show visual hierarchy with color coding (on-track in green, at-risk in amber).*

**Design Decision #5: Leaderboard as Gamification (Phase 2)**
- Initially rejected for MVP (too complex for 6-week sprint), but added later.
- Showed top 5 performers by orders placed, targets met.
- Driven by insight: Reps are competitive; visibility into peer performance motivates.

---

#### **Hero Flow 3: Invoice Collection → Multi-Deposit Grouping → Finance Reconciliation**

**The Problem:** Reps collected cash informally. Finance couldn't reconcile collections with bank deposits. Multiple reps would deposit to same account, causing reconciliation headaches.

**Design Decision #6: Digital Invoice Marking & Timestamped Collection**
- **Flow:** Rep views assigned invoices → Taps "Collect" → Selects amount → Timestamp + location captured
- **Why:** Creates audit trail. Finance can see when/where each invoice was marked collected. Prevents "I collected this yesterday" excuses.

**Design Decision #7: Multi-Invoice Deposit Grouping**
- **Old way:** Each rep deposited individually, or ops manually tracked.
- **New way:** Rep groups invoices (e.g., "Collect Invoice #1, #2, #3 and deposit as single batch") → App calculates total → Rep deposits → Manager approves → Finance reconciles against bank statement
- **Why this matters:** Reps used to lose time going to bank 3-4 times per week. Now they could batch collections, reducing bank trips and reconciliation errors.
- **Surprising finding:** Reps loved this feature because it saved them 2-3 hours per week in administrative work.

**[VISUAL OPPORTUNITY #6: Invoice Collection & Deposit Flow]**
*Suggested: 5-screen flow showing: (1) Invoice list with "Collect" buttons, (2) Collecting multiple invoices with running total, (3) Deposit grouping confirmation with total AED amount, (4) Manager approval screen, (5) Reconciliation dashboard for finance showing collected vs. deposited. Highlight the timestamp/location capture on each step.*

---

### Tradeoffs & Conflicting Stakeholder Needs

**Tradeoff 1: Agent Privacy vs. Manager Control**
- **Agents wanted:** Ability to turn off location tracking after checkout
- **Managers wanted:** Real-time location tracking all day to optimize routing
- **Resolution:** Real-time tracking only during designated "working hours" (e.g., 9 AM–6 PM). Outside those hours, location tracking disabled to respect privacy. Compromise satisfied both sides.

**Tradeoff 2: Speed of Order Creation vs. Compliance**
- **Agents wanted:** One-click ordering without approval
- **Finance wanted:** All price discounts to have approval trail
- **Resolution:** Auto-approve for prices ≥ standard selling price. Below-threshold discounts required manager approval with mandatory reason capture. This gave agents speed while maintaining compliance.

**Tradeoff 3: Real-Time Syncing vs. Battery Life**
- **Ops wanted:** Real-time position updates every 30 seconds
- **Field agents:** Battery-draining constant updates meant phone died mid-day
- **Resolution:** Smart sync—updates sent every 5 minutes if stationary, every 30 seconds if moving. Reduced GPS drain by 40%.

---

## SECTION 6: TESTING, VALIDATION & ROLLOUT

### Pilot Testing Approach
**Duration:** 4 weeks (August 2025)
**Participants:** 150–200 field reps across 2 regions
**Method:** Ride-alongs with reps using the app while field shadowing

Rather than sitting in a usability lab, you **rode in vehicles with reps** as they used the app in real conditions:
- Poor signal areas
- Outdoor sunlight (testing color contrast)
- Interruptions from customers mid-flow
- Real order negotiations with pricing discussions

### Critical Testing Findings

**What Worked:**
1. **GPS Check-In & Geofence Validation** ✅
   - Reps appreciated clear feedback ("You're 120m away—get closer to check in")
   - No gaming attempts (fraud risk was lower than predicted)

2. **Order Creation from App** ✅
   - Reps immediately saw value: saved ~5 minutes per order vs. WhatsApp back-and-forth
   - Customers loved getting instant order confirmation

3. **Real-Time Manager Dashboard** ✅
   - Managers were delighted by heat map visibility; stopped doing WhatsApp status checks
   - Feature adoption was 95% within 2 weeks

4. **Invoice Collection Feature** ✅
   - Reps voluntarily used it because it saved them bank trips
   - Finance reported 70%+ invoice collection now tracked digitally vs. 0% before

**[VISUAL OPPORTUNITY #7: Manager Heat Map Dashboard]**
*Suggested: Screenshot of real-time heat map showing agent locations with visit status (red = missed, yellow = pending, green = visited). Include visit statistics sidebar showing "Total Visits: 12, Missed: 0, In Progress: 0, Completed: 12" with icons.*

**What Needed Improvement:**

1. **Product Search Friction** ⚠️
   - Reps complained: "I have to type the brand name. What if I misspell it?"
   - Root cause: MVP only had keyword search. No category browsing.
   - **Fix (Phase 2):** Added category/brand browsing before search. Search time dropped 60%.

2. **Deposit Grouping Confusion** ⚠️
   - Reps didn't understand "you can group up to 5 invoices per deposit"
   - Quote from rep: "I don't know which bank account I have to deposit, and I have to manually type each one"
   - **Fix:** Added step-by-step deposit flow with visual confirmation showing invoices being grouped + total amount. Reps liked the visual feedback.

3. **Offline Order Sync Delay** ⚠️
   - Reps in poor-signal areas would create orders offline, but syncing took 10+ minutes when they regained signal
   - Caused confusion: rep thought order didn't go through, created it again
   - **Fix:** Added visual indicator ("Syncing... 2 of 3 orders uploaded") so reps understood the status

---

## SECTION 7: RESULTS & BUSINESS IMPACT (6 Months: Jul–Dec 2025)

### Primary Metrics

**[VISUAL OPPORTUNITY #8: Metrics Summary Dashboard]**
*Suggested: Visual infographic or dashboard showing all primary metrics with icons and color coding. Layout options:*
- *Grid layout with 6-8 metric cards (GMV, visits, orders, AOV, collections, follow-ups, back-office reduction)*
- *Before/After comparison (left side = broken state, right side = post-Field Pilot)*
- *Timeline showing metrics progression across 6 months (line charts or bar charts)*

| Metric | Value | Impact |
|--------|-------|--------|
| **Field Channel GMV** | AED 5.1M | Unlocked new revenue stream from previously invisible sales |
| **GPS-Verified Visits** | 19,383 / 37,100 assigned (52%) | Real accountability; 50%+ visit compliance rate |
| **Orders via App** | 2,405 orders | 30% of monthly back-office orders now created via Field Pilot |
| **Average Order Value** | AED 900.24 | Consistent order sizing; benchmarked against back-office orders |
| **Invoice Collections** | AED 10.3M+ collected | 70% of collections now digitally tracked vs. 0% before |
| **Follow-Up Visits** | 1,053 triggered | Reps returning to unfinished deals, improving conversion |
| **Manual Back-Office Reduction** | 30% fewer manual orders | Finance team workload reduced by 1 FTE equivalent |

### Secondary Business Metrics

**Operational Efficiency:**
- Reduced reps' order-creation time from **30–45 minutes** (WhatsApp negotiation) to **5–8 minutes** (direct app order)
- Sales managers eliminated **6 hours/week** of manual status-checking via WhatsApp

**Risk & Compliance:**
- Unauthorized discounts dropped to near-zero (was untracked before)
- 100% audit trail of all orders, approvals, and collections

**Team Adoption:**
- **App DAU:** 94% of deployed field reps used app daily by week 4
- **Manager Dashboard DAU:** 100% of sales managers logged in daily to monitor teams
- **NPS from reps:** 7.8/10 (strong for internal tool)

### Qualitative Validation

**From Field Reps:**
- ✅ "Finally, I can see if I'm hitting my targets in real-time. I know when to push harder."
- ✅ "Orders get approved instantly. No more waiting around for manager."
- ✅ "The multi-deposit feature saved me 3 bank visits per week."

**From Sales Managers:**
- ✅ "I sleep better knowing I can see where my team is and what they're doing."
- ✅ "I can now spot coverage gaps—stores we're visiting only once per month when they should be visited twice."

**From Finance:**
- ✅ "Invoice reconciliation went from 2 days to same-day because everything is timestamped."
- ⚠️ (Minor) "Some reps still deposit to wrong accounts sometimes, but at least we know exactly when/where it happened."

---

## SECTION 8: FOLLOW-ON IMPACT & ROADMAP ACCELERATION

### What Came After Field Pilot

**Phase 1.5 (Oct–Nov 2025):**
- Migrated **Axiom team** (another Tradeling sub-brand) onto Field Pilot
- Reused design system and app architecture—deployment time: 3 weeks vs. 6 months

**Phase 2 (Ongoing, Dec 2025+):**
- Migrated **Petrol Station consignment team** (was using WINIT legacy system)
- Added advanced features: route optimization, predictive analytics, multi-brand inventory tracking

**Scalability & Beyond:**

1. **Internal Proof of Concept for DaaS/SaaS**
   - Leadership realized Field Pilot could be sold as:
     - **DaaS (Data as a Service):** Anonymized field analytics sold to consumer brands
     - **SaaS:** White-label Field Pilot for other B2B marketplaces
   - This project set the foundation for new revenue streams

2. **New KPIs & Performance Culture**
   - Introduced field sales leaderboards (opt-in gamification)
   - Created predictive models: "Which stores are likely to churn?"
   - Targets now data-driven vs. gut-feel allocations

---

## SECTION 9: REFLECTION & LESSONS LEARNED

### What You'd Do Differently

**Lesson 1: Align on Device Strategy Early**
- **Mistake:** Device choice (Android vs. iOS vs. both) wasn't decided until week 2 of development. This cascaded into design rework (iOS ≠ Android patterns) and schedule pressure.
- **Better approach:** Stakeholder workshop on week 1: "What devices do our field reps actually have access to? What's the total cost of ownership for iOS vs. Android rollout?" Decide this before design starts.
- **Result:** 2-3 weeks of rework avoided.

**Lesson 2: Build a Custom Design System, Don't Force Fit E-Commerce System**
- **Mistake:** You initially tried adapting Tradeling's e-commerce design system (buttons, cards, forms) to field operations. It lacked:
  - Map components
  - Real-time tracking visualizations
  - Leaderboard patterns
  - Approval/workflow patterns
  - Offline-capable patterns
- **Better approach:** Commit to building a field-ops-specific design system in parallel with Phase 1. Invest 2 weeks upfront to save 4 weeks of patching later.
- **Result:** Design consistency + faster Phase 2 development.

**Lesson 3: Plan for Capacity Shrinkage**
- **Mistake:** Planned Phase 2 with same team size, but engineering resources were reassigned after 4 months.
- **Better approach:** In sprint planning, assume 15-20% team size reduction mid-project and prioritize ruthlessly. Accept that Phase 2 will take longer or have fewer features.

### Key Insights: Designing for Internal Users vs. External Users

**Insight #1: Accountability Over Aesthetics**
- Field ops tool users (reps, managers) care far less about visual polish than they do about **trustworthiness and transparency**.
- A timestamp, GPS location, and manager approval seal matter more than a beautiful card layout.
- **Design implication:** Invest in data visualization (charts, progress bars, heat maps) over decorative design.

**Insight #2: Speed Solves Adoption**
- External users (e-commerce customers) tolerate slow onboarding if the payoff is clear later.
- Internal users (field reps) abandon tools if they don't see value in the first 5 minutes.
- **Design implication:** Make the core workflow 3 screens max. Secondary features can be nested deeper, but your primary use case must be instant.

**Insight #3: Privacy ≠ No Tracking**
- Initial concerns: "Reps will hate GPS tracking; it's invasive."
- **Actual finding:** Reps accepted tracking because:
  - They saw the business logic (route optimization, coverage planning)
  - Tracking was tied to incentives (visibility = better targeting for bonuses)
  - They had control (could disable after work hours)
- **Design implication:** Be transparent about why you're tracking. Give users a sense of control, even if limited.

### Personal Growth: What This Project Taught You

This project transformed your thinking about product design in three ways:

1. **Designing for accountability is a unique constraint:** You learned that when users feel observed or monitored, friction increases. You had to balance visibility (managers need to know reps are working) with autonomy (reps need to feel trusted). This is fundamentally different from e-commerce design where the user is anonymous.

2. **Unstructured operational data > structured formal processes:** You discovered that field sales teams operated largely through informal WhatsApp communication, not structured processes. The app's success came not from enforcing rigid workflows, but from giving reps a faster, more transparent way to do what they were already doing (negotiating prices, collecting cash, reporting activity). You learned to digitize behavior, not impose process.

3. **Field operations is harder than online:** Real-world constraints (poor connectivity, outdoor use, fragmented teams) are humbling. You can't assume internet, you can't assume clean data, you can't assume users are sitting at a desk. This made you a better systems thinker—you had to design for degradation (what happens when GPS fails?) rather than the happy path.

---

## CONCLUSION

Field Pilot transformed Tradeling's offline sales from a black box (we don't know what's happening) to a transparent, data-driven operation (we know exactly who visited which store, who placed which order, and who collected what cash).

The 6-month journey from problem discovery to AED 5.1M GMV unlock wasn't about building a "beautiful app." It was about **understanding a broken operational workflow, designing for real constraints, and shipping something that reps voluntarily use because it saves them time and gives them visibility into their own performance.**

The project proved that the largest opportunity for Tradeling wasn't feature-rich online experiences—it was digitizing the unglamorous, complex, messy reality of field sales. And it set the stage for scaling beyond Tradeling's own operations into new revenue streams (DaaS/SaaS).
