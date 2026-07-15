import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Cpu,
  Database,
  GitBranch,
  LayoutGrid,
  Leaf,
  ShieldCheck,
  Search,
  PenTool,
  Zap,
  Repeat,
  ArrowRight,
  MoveRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Award,
  Globe,
  Clock,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut", delay },
  }),
};

/* ─────────────────────────── Advisory Capabilities ─────────────────────── */
const capabilities = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "AI Strategy & Business Transformation",
    desc: "We help organisations identify where AI creates genuine business value — from intelligent automation and generative AI pilots to enterprise-wide AI operating models — ensuring every initiative is grounded in strategy, not hype.",
    tags: ["Generative AI", "Automation", "AI Governance"],
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "SAP Business Transformation",
    desc: "From S/4HANA migrations to clean-core architecture and RISE with SAP, we guide organisations through the full lifecycle of SAP transformation, minimising risk while maximising long-term platform value.",
    tags: ["S/4HANA", "RISE with SAP", "Clean Core"],
  },
  {
    icon: <GitBranch className="w-8 h-8" />,
    title: "SAP Signavio",
    desc: "We leverage SAP Signavio's process intelligence capabilities to model, analyse, and continuously improve your end-to-end business processes — creating a living process architecture that drives operational excellence.",
    tags: ["Process Mining", "BPM", "Process Intelligence"],
  },
  {
    icon: <LayoutGrid className="w-8 h-8" />,
    title: "SAP LeanIX",
    desc: "Our enterprise architecture practice uses SAP LeanIX to build transparent, data-driven views of your application landscape — enabling smarter rationalisation, cloud migration planning, and technology investment decisions.",
    tags: ["EA Management", "Landscape Analysis", "Cloud Planning"],
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "ESG & Sustainability",
    desc: "We embed ESG principles directly into your operational fabric — connecting sustainability data to core business processes, supporting CSRD and TCFD reporting, and turning compliance into competitive advantage.",
    tags: ["CSRD", "Sustainability Reporting", "ESG Integration"],
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Regulatory & Risk Advisory",
    desc: "We help organisations navigate complex regulatory landscapes — from DORA and Basel IV to GDPR — designing governance frameworks and control environments that are robust, auditable, and business-enabling.",
    tags: ["DORA", "GDPR", "Risk Frameworks"],
  },
];

/* ─────────────────────────── How We Work ───────────────────────────────── */
const howWeWork = [
  {
    icon: <Search className="w-6 h-6" />,
    step: "01",
    title: "Discover",
    desc: "We begin with deep discovery — stakeholder interviews, data analysis, and process observation — to uncover the true business challenges beneath the presenting problem.",
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    step: "02",
    title: "Design",
    desc: "Drawing on cross-industry expertise, we co-create a tailored strategy and solution architecture with your teams — ensuring buy-in and technical rigour from day one.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    step: "03",
    title: "Deliver",
    desc: "We execute with precision, providing structured programme governance, change management, and quality assurance throughout every phase of implementation.",
  },
  {
    icon: <Repeat className="w-6 h-6" />,
    step: "04",
    title: "Sustain",
    desc: "Transformation doesn't end at go-live. We transfer knowledge, build internal capability, and provide advisory continuity to ensure your investment delivers lasting value.",
  },
];

/* ─────────────────────────── Why Choose Safron ─────────────────────────── */
const whyChoose = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Strategy Before Technology",
    desc: "We never lead with tools. Every recommendation begins with your business objectives — ensuring technology choices serve a distinct and measurable outcome.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Senior Practitioners, Not Juniors",
    desc: "Our engagements are staffed by senior advisors with direct hands-on delivery experience — not account managers overseeing junior resources.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Cross-Domain Integration",
    desc: "Our advisors span SAP, AI, enterprise architecture, ESG, and governance — enabling us to address the intersections where most programmes fail.",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Accountability for Outcomes",
    desc: "We measure success by your results, not our effort. Engagement structures are designed around agreed milestones and business outcomes.",
  },
];

/* ─────────────────────────── Industries ───────────────────────────────────*/
const industries = [
  {
    name: "Banking & Capital Markets",
    challenges: [
      "Core banking modernisation",
      "Real-time payments infrastructure",
      "DORA & Basel compliance",
      "AI-driven credit risk",
    ],
  },
  {
    name: "Financial Services",
    challenges: [
      "Fragmented data ecosystems",
      "CSRD & ESG reporting",
      "Regulatory change management",
      "Client onboarding friction",
    ],
  },
  {
    name: "Insurance",
    challenges: [
      "Claims automation & STP",
      "Legacy policy administration",
      "Sustainability disclosure",
      "Embedded insurance models",
    ],
  },
  {
    name: "Retail & Consumer",
    challenges: [
      "Omnichannel supply chain",
      "ESG in sourcing & logistics",
      "AI-driven personalisation",
      "SAP S/4HANA retail fit",
    ],
  },
];

/* ─────────────────────────── Engagement Models ─────────────────────────── */
const engagementModels = [
  {
    icon: <Clock className="w-7 h-7" />,
    title: "Strategic Advisory Retainer",
    tagline: "Ongoing senior counsel",
    desc: "A fixed-capacity monthly retainer giving you direct access to senior Safron advisors. Ideal for organisations navigating continuous transformation who need trusted, on-demand strategic counsel.",
    features: [
      "Dedicated advisory hours each month",
      "Priority response and escalation",
      "Quarterly strategic reviews",
      "Access to full practice knowledge base",
    ],
    highlight: false,
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Project-Based Engagement",
    tagline: "Scoped delivery",
    desc: "Time-bound engagements with clearly defined scope, milestones, and deliverables. Best for organisations with a specific transformation initiative or technology programme that requires expert advisory support.",
    features: [
      "Fixed scope and defined outcomes",
      "Structured governance and reporting",
      "Knowledge transfer included",
      "Post-delivery review session",
    ],
    highlight: true,
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Embedded Partnership",
    tagline: "In-programme advisory",
    desc: "Safron advisors embedded directly within your programme team — providing strategic oversight, quality assurance, and real-time guidance throughout a major transformation journey.",
    features: [
      "On-site and remote delivery",
      "Integration with your programme structure",
      "Continuous risk and quality monitoring",
      "Leadership coaching and capability uplift",
    ],
    highlight: false,
  },
];

/* ═══════════════════════════ Page Component ════════════════════════════════ */
export default function Advisory() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title="Advisory Services"
        description="Safron delivers expert advisory services across AI strategy, SAP transformation, SAP Signavio, SAP LeanIX, ESG and sustainability, and regulatory risk — helping organisations navigate complex enterprise challenges with confidence."
      />
      <Navbar />

      <main className="flex-grow">
        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="relative min-h-[80vh] flex items-center pt-28 pb-20 overflow-hidden bg-[#0B1F3A] border-b-4 border-accent">
          {/* Radial glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 70% 40%, rgba(37,99,235,0.22) 0%, rgba(11,31,58,0) 60%)",
            }}
          />
          {/* Decorative grid lines */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="max-w-4xl">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xs font-bold tracking-widest text-accent uppercase mb-6"
              >
                Advisory Services
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-display text-white leading-[1.06] tracking-tight mb-8"
              >
                Expert Advisory for Complex Enterprise Challenges
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl font-light"
              >
                Safron brings senior practitioners and deep domain expertise to the challenges that define your organisation's future — from AI adoption and SAP transformation to ESG compliance and regulatory resilience.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-5"
              >
                <Button
                  asChild
                  size="lg"
                  className="rounded-none bg-accent text-primary hover:bg-white h-14 px-10 text-base font-semibold tracking-wide uppercase transition-colors"
                >
                  <Link href="/#contact">Book a Discovery Call</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-none border-white/30 text-white hover:bg-white/10 h-14 px-10 text-base font-semibold tracking-wide uppercase transition-colors"
                  onClick={() => {
                    document
                      .getElementById("capabilities")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Explore Capabilities
                </Button>
              </motion.div>
            </div>

            {/* Floating stat pills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-20 flex flex-wrap gap-6"
            >
              {[
                { value: "6", label: "Advisory Practices" },
                { value: "4", label: "Delivery Phases" },
                { value: "100%", label: "Senior Practitioners" },
                { value: "Multi-sector", label: "Industry Coverage" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3"
                >
                  <span className="text-accent font-bold text-xl">{stat.value}</span>
                  <span className="text-gray-300 text-sm">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── ADVISORY CAPABILITIES ────────────────────────────────────────── */}
        <section id="capabilities" className="py-28 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-20"
            >
              <p className="text-xs font-bold tracking-widest text-secondary uppercase mb-3">
                What We Do
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-primary mb-5">
                Advisory Capabilities
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
                Six integrated practice areas — each staffed by senior specialists and designed to deliver measurable business outcomes.
              </p>
              <div className="w-20 h-1 bg-accent mt-8" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.08}
                  whileHover={{ y: -8 }}
                  className="flex flex-col p-10 rounded-2xl border border-gray-100 hover:border-accent/40 hover:shadow-xl transition-all duration-300 group bg-background"
                >
                  <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-8 group-hover:bg-accent group-hover:text-primary transition-colors">
                    {cap.icon}
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-4 leading-snug">
                    {cap.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-6">
                    {cap.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {cap.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-secondary/8 text-secondary border border-secondary/20 rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW WE WORK ──────────────────────────────────────────────────── */}
        <section className="py-28 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-20"
            >
              <p className="text-xs font-bold tracking-widest text-secondary uppercase mb-3">
                Our Methodology
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-primary">
                How We Work
              </h2>
            </motion.div>

            {/* Timeline track (desktop) */}
            <div className="relative">
              <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gray-200 z-0">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: "easeInOut" }}
                  style={{ transformOrigin: "left" }}
                  className="h-full bg-gradient-to-r from-secondary to-accent"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                {howWeWork.map((phase, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i * 0.15}
                    className="flex flex-col items-center text-center relative z-10"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 rounded-full bg-white border-2 border-secondary flex items-center justify-center text-secondary mb-6 shadow-md"
                    >
                      {phase.icon}
                    </motion.div>
                    <span className="text-xs font-bold tracking-widest text-accent uppercase mb-2">
                      Phase {phase.step}
                    </span>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {phase.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[220px]">
                      {phase.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY ORGANISATIONS CHOOSE SAFRON ─────────────────────────────── */}
        <section className="py-28 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p className="text-xs font-bold tracking-widest text-secondary uppercase mb-3">
                  Our Difference
                </p>
                <h2 className="text-3xl md:text-4xl font-bold font-display text-primary mb-6 leading-tight">
                  Why Organisations Choose Safron
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-10">
                  We are not a generalist consultancy. Safron was built to deliver the depth of expertise and the independence of judgement that genuinely complex enterprise challenges demand.
                </p>
                <Button
                  asChild
                  className="rounded-none bg-primary text-white hover:bg-secondary h-14 px-10 text-base font-semibold tracking-wide uppercase transition-colors"
                >
                  <Link href="/#contact">
                    Speak with an Advisor <ArrowRight className="ml-3 w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {whyChoose.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i * 0.1}
                    className="relative pl-8 border-l border-accent"
                  >
                    <div className="absolute top-0 left-[-4px] w-2 h-8 bg-accent" />
                    <div className="text-secondary mb-3">{item.icon}</div>
                    <h3 className="text-lg font-bold font-display text-primary mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── INDUSTRIES WE SUPPORT ────────────────────────────────────────── */}
        <section className="py-28 bg-primary text-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16"
            >
              <p className="text-xs font-bold tracking-widest text-accent uppercase mb-3">
                Sectors
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                Industries We Support
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl">
                Deep sector knowledge that allows our advisors to engage at the intersection of industry dynamics and enterprise technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((ind, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.1}
                  whileHover={{ y: -6 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-accent/40 transition-all group cursor-pointer flex flex-col"
                >
                  <h3 className="text-xl font-bold mb-5">{ind.name}</h3>
                  <ul className="space-y-2 mb-8 flex-grow">
                    {ind.challenges.map((c, j) => (
                      <li key={j} className="text-sm text-gray-300 flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all">
                    Learn More <MoveRight className="w-4 h-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ENGAGEMENT MODELS ────────────────────────────────────────────── */}
        <section className="py-28 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-20 max-w-3xl mx-auto"
            >
              <p className="text-xs font-bold tracking-widest text-secondary uppercase mb-3">
                How to Engage
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-primary mb-5">
                Engagement Models
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                We structure our engagements to suit the nature of your challenge — whether you need ongoing strategic counsel, focused delivery support, or an embedded advisory partner.
              </p>
              <div className="w-20 h-1 bg-accent mx-auto mt-8" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {engagementModels.map((model, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.12}
                  whileHover={{ y: -8 }}
                  className={`relative flex flex-col rounded-2xl p-10 transition-all duration-300 ${
                    model.highlight
                      ? "bg-primary text-white shadow-2xl border-2 border-accent"
                      : "bg-white text-primary border border-gray-100 hover:border-accent/40 hover:shadow-xl"
                  }`}
                >
                  {model.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-accent text-primary text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full shadow-md">
                        Most Common
                      </span>
                    </div>
                  )}

                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-8 ${
                      model.highlight
                        ? "bg-white/15 text-accent"
                        : "bg-secondary/10 text-secondary"
                    }`}
                  >
                    {model.icon}
                  </div>

                  <p
                    className={`text-xs font-bold tracking-widest uppercase mb-2 ${
                      model.highlight ? "text-accent" : "text-secondary"
                    }`}
                  >
                    {model.tagline}
                  </p>
                  <h3
                    className={`text-xl font-bold font-display mb-4 leading-snug ${
                      model.highlight ? "text-white" : "text-primary"
                    }`}
                  >
                    {model.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-8 flex-grow ${
                      model.highlight ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {model.desc}
                  </p>

                  <ul className="space-y-3 mb-10">
                    {model.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm">
                        <CheckCircle2
                          className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                            model.highlight ? "text-accent" : "text-secondary"
                          }`}
                        />
                        <span
                          className={
                            model.highlight ? "text-gray-200" : "text-gray-600"
                          }
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`rounded-none h-12 px-8 text-sm font-semibold tracking-wide uppercase w-full transition-colors ${
                      model.highlight
                        ? "bg-accent text-primary hover:bg-white"
                        : "bg-primary text-white hover:bg-secondary"
                    }`}
                  >
                    <Link href="/#contact">Enquire Now</Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
        <section className="py-28 bg-[#0B1F3A] relative overflow-hidden text-center border-t-4 border-accent">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse at 50% 60%, rgba(37,99,235,0.25) 0%, rgba(11,31,58,0) 65%)",
            }}
          />
          <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6 leading-tight">
                Ready to Begin Your Transformation?
              </h2>
              <p className="text-gray-300 text-lg max-w-xl mx-auto leading-relaxed">
                Tell us about your most pressing challenge and a senior Safron advisor will respond within one business day.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
              className="flex flex-col sm:flex-row gap-5 justify-center"
            >
              <Button
                asChild
                size="lg"
                className="rounded-none bg-accent text-primary hover:bg-white h-14 px-12 text-base font-semibold tracking-wide uppercase transition-colors"
              >
                <Link href="/#contact">
                  Book a Discovery Call <ArrowRight className="ml-3 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none border-white/30 text-white hover:bg-white/10 h-14 px-12 text-base font-semibold tracking-wide uppercase transition-colors"
              >
                <Link href="/about">About Safron</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
