import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import {
  ArrowRight,
  Search,
  Activity,
  PenTool,
  Zap,
  Repeat,
  Layers,
  Cpu,
  ShieldCheck,
  Globe,
  BookOpen,
  MoveRight,
  Database,
  HelpCircle,
  Compass,
  Sparkles,
  ShieldQuestion,
  Leaf,
} from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title="Transforming Enterprises through SAP, AI & Sustainable Innovation"
        description="Safron partners with organizations to navigate complex business transformation through strategic advisory, enterprise architecture, SAP expertise, AI, governance and sustainability."
      />
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative min-h-[95vh] flex items-center pt-24 pb-12 overflow-hidden bg-[#0B1F3A]">
          {/* subtle radial glow backdrop */}
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(circle at 75% 35%, rgba(37,99,235,0.20) 0%, rgba(11,31,58,0) 55%)",
            }}
          />
          <div className="container mx-auto px-6 max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold font-display text-white leading-[1.05] tracking-tight mb-10">
                Transforming Enterprises through SAP, AI &amp; Sustainable Innovation
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 max-w-xl font-light">
                Safron partners with organizations to navigate complex business transformation through strategic advisory, enterprise architecture, SAP expertise, AI, governance and sustainability.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Button size="lg" className="rounded-none bg-accent text-primary hover:bg-white h-14 px-10 text-base font-semibold tracking-wide uppercase transition-colors">
                  Start the Conversation
                </Button>
                <Button size="lg" variant="outline" className="rounded-none border-white/30 text-white hover:bg-white/10 h-14 px-10 text-base font-semibold tracking-wide uppercase transition-colors">
                  Explore Advisory
                </Button>
              </div>
            </motion.div>

            <div className="relative h-full min-h-[440px] flex items-center justify-center">
              <EnterpriseNetworkSVG />
            </div>
          </div>
        </section>

        {/* QUESTIONS SECTION */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display text-primary mb-4">Every Transformation Starts with Questions</h2>
              <div className="w-20 h-1 bg-accent mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">
              {[
                { q: "How do we modernize without increasing complexity?", icon: <Compass className="w-6 h-6" />, tall: false },
                { q: "How do we align business and technology?", icon: <Layers className="w-6 h-6" />, tall: true },
                { q: "How do we adopt AI responsibly?", icon: <Sparkles className="w-6 h-6" />, tall: false },
                { q: "How do we strengthen governance?", icon: <ShieldQuestion className="w-6 h-6" />, tall: true },
                { q: "How do we achieve sustainable transformation?", icon: <Leaf className="w-6 h-6" />, tall: false },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className={`bg-background border border-gray-100 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl transition-all duration-300 ${
                    item.tall ? "lg:mt-0 lg:mb-0 xl:mt-[-16px] xl:mb-4" : "xl:mt-4"
                  }`}
                >
                  <div className="w-14 h-14 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-medium text-primary leading-snug">{item.q}</h3>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-16 text-center"
            >
              <p className="text-2xl md:text-3xl font-light text-gray-500 italic">That's where <span className="font-semibold text-primary not-italic">Safron</span> comes in.</p>
            </motion.div>
          </div>
        </section>

        {/* ADVISORY MODEL SECTION - HORIZONTAL TIMELINE */}
        <section id="advisory" className="py-24 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="mb-20">
              <h2 className="text-xs font-bold tracking-widest text-secondary uppercase mb-3">Methodology</h2>
              <h3 className="text-3xl md:text-4xl font-bold font-display text-primary mb-6">Safron Advisory Model</h3>
            </div>

            <div className="relative">
              {/* Timeline track */}
              <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gray-200">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  style={{ transformOrigin: "left" }}
                  className="h-full bg-gradient-to-r from-secondary to-accent"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
                {[
                  { icon: <Search className="w-6 h-6" />, title: "Discover", desc: "Uncover core challenges." },
                  { icon: <Activity className="w-6 h-6" />, title: "Diagnose", desc: "Analyze systemic root causes." },
                  { icon: <PenTool className="w-6 h-6" />, title: "Design", desc: "Architect strategic solutions." },
                  { icon: <Zap className="w-6 h-6" />, title: "Deliver", desc: "Execute with precision." },
                  { icon: <Repeat className="w-6 h-6" />, title: "Sustain", desc: "Ensure enduring outcomes." },
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                    className="flex flex-col items-center text-center relative"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 rounded-full bg-white border-2 border-secondary flex items-center justify-center text-secondary mb-6 shadow-md relative z-10"
                    >
                      {step.icon}
                    </motion.div>
                    <span className="text-xs font-bold tracking-widest text-accent uppercase mb-2">Step {i + 1}</span>
                    <h4 className="text-xl font-bold text-primary mb-2">{step.title}</h4>
                    <p className="text-gray-600 text-sm max-w-[180px]">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HOW WE HELP SECTION */}
        <section id="how-we-help" className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="mb-16">
              <h2 className="text-xs font-bold tracking-widest text-secondary uppercase mb-3">Capabilities</h2>
              <h3 className="text-3xl md:text-4xl font-bold font-display text-primary">How We Help</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[
                { icon: <Layers />, title: "Enterprise Transformation", desc: "Strategic redesign of business capabilities and operating models." },
                { icon: <Database />, title: "SAP Advisory", desc: "Expert guidance for S/4HANA transitions and clean-core architecture." },
                { icon: <Cpu />, title: "Enterprise Architecture", desc: "Robust technical foundations aligned with corporate strategy." },
                { icon: <Zap />, title: "AI & Innovation", desc: "Operationalizing generative AI and intelligent automation." },
                { icon: <ShieldCheck />, title: "Governance Risk & Compliance", desc: "Strengthening controls across complex digital ecosystems." },
                { icon: <Globe />, title: "ESG & Sustainability", desc: "Embedding sustainability tracking into core business processes." },
                { icon: <BookOpen />, title: "Corporate Training", desc: "Building internal capabilities to sustain transformation." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="h-full flex flex-col p-10 rounded-2xl border border-gray-100 hover:border-accent/50 hover:shadow-xl transition-all duration-300 group bg-background"
                >
                  <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-8 group-hover:bg-accent group-hover:text-primary transition-colors [&_svg]:w-8 [&_svg]:h-8">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-3 leading-tight">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES SECTION */}
        <section id="industries" className="py-24 bg-primary text-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="mb-16">
              <h2 className="text-xs font-bold tracking-widest text-accent uppercase mb-3">Sectors</h2>
              <h3 className="text-3xl md:text-4xl font-bold font-display">Industries</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Banking",
                  challenges: ["Legacy core modernization", "Real-time payments readiness", "Regulatory reporting complexity"],
                },
                {
                  name: "Financial Services",
                  challenges: ["Fragmented data ecosystems", "AI-driven risk scoring", "Client onboarding friction", "Cross-border compliance"],
                },
                {
                  name: "Insurance",
                  challenges: ["Claims process automation", "Legacy policy administration", "Sustainability disclosure demands"],
                },
                {
                  name: "Retail",
                  challenges: ["Omnichannel inventory visibility", "Supply chain resilience", "Personalization at scale", "ESG in sourcing"],
                },
              ].map((ind, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-accent/40 transition-all group cursor-pointer flex flex-col"
                >
                  <h4 className="text-xl font-bold mb-5">{ind.name}</h4>
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

        {/* WHY EXECUTIVES CHOOSE SAFRON */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-primary mb-6">Why Executives Choose Safron</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
              {[
                { title: "Strategic Advisory", desc: "We bridge the gap between board-level ambition and technical reality, ensuring every technology investment serves a distinct business outcome." },
                { title: "Enterprise Perspective", desc: "Our architects understand the holistic ecosystem—not just isolated systems—preventing siloes and optimizing cross-functional data flows." },
                { title: "Sustainable Outcomes", desc: "We weave ESG principles directly into the operational fabric, turning regulatory compliance into a competitive advantage." },
                { title: "Capability Building", desc: "We don't just deliver solutions; we upskill your teams, transferring knowledge to ensure you retain control of your digital destiny." },
              ].map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l border-accent"
                >
                  <div className="absolute top-0 left-[-4px] w-2 h-8 bg-accent"></div>
                  <h4 className="text-2xl font-bold font-display text-primary mb-4">{pillar.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{pillar.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PERSPECTIVES PREVIEW */}
        <section id="perspectives" className="py-24 bg-white border-t border-gray-100">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-xs font-bold tracking-widest text-secondary uppercase mb-3">Insights</h2>
                <h3 className="text-3xl font-bold font-display text-primary">Perspectives</h3>
              </div>
              <Button asChild variant="link" className="text-secondary hover:text-primary p-0 font-medium">
                <Link href="/perspectives">View All Articles <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "The Clean Core Imperative: Preparing SAP for GenAI", cat: "Whitepaper" },
                { title: "Sustainable Manufacturing via Digital Twins", cat: "Case Study" },
                { title: "Beyond the Hype: Pragmatic AI in Financial Services", cat: "Perspective" },
              ].map((article, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-gray-100 group cursor-pointer shadow-sm hover:shadow-md transition-all"
                >
                  <div className="aspect-[16/9] bg-gray-100 overflow-hidden">
                    <div className="w-full h-full bg-primary/5 flex items-center justify-center text-primary/30 group-hover:scale-105 transition-transform duration-500">
                      <BookOpen size={48} strokeWidth={1} />
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="text-xs text-secondary mb-3 uppercase tracking-wider font-bold">{article.cat}</div>
                    <h4 className="text-xl font-bold font-display text-primary mb-4 group-hover:text-secondary transition-colors leading-snug">{article.title}</h4>
                    <div className="flex items-center text-sm font-medium text-gray-500 group-hover:text-secondary transition-colors mt-6">
                      Read Article <MoveRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="contact" className="py-24 bg-primary relative overflow-hidden text-center border-t-4 border-accent">
          <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">Ready to Transform with Confidence?</h2>
              <p className="text-gray-300 text-lg max-w-xl mx-auto">
                Tell us about your transformation goals and a Safron advisor will be in touch.
              </p>
            </motion.div>

            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function EnterpriseNetworkSVG() {
  const nodes = [
    { cx: 100, cy: 150, r: 15 },
    { cx: 400, cy: 150, r: 20 },
    { cx: 150, cy: 380, r: 25 },
    { cx: 380, cy: 350, r: 15 },
    { cx: 250, cy: 80, r: 18 },
    { cx: 70, cy: 280, r: 12 },
    { cx: 440, cy: 250, r: 14 },
  ];

  return (
    <svg viewBox="0 0 500 500" className="w-full h-full max-w-lg" style={{ filter: "drop-shadow(0 0 24px rgba(37,99,235,0.35))" }}>
      <defs>
        <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.8" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Faint outer network connecting secondary nodes for a fuller "network" feel */}
      {nodes.map((n, i) => {
        const next = nodes[(i + 1) % nodes.length];
        return (
          <motion.line
            key={`mesh-${i}`}
            x1={n.cx}
            y1={n.cy}
            x2={next.cx}
            y2={next.cy}
            stroke="#2563EB"
            strokeWidth="0.75"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.15 }}
            transition={{ duration: 2, delay: 1.2 + i * 0.1, ease: "easeInOut" }}
          />
        );
      })}

      {/* Central Core */}
      <motion.circle
        cx="250"
        cy="250"
        r="40"
        fill="#0B1F3A"
        stroke="#2563EB"
        strokeWidth="2"
        filter="url(#glow)"
        initial={{ r: 40 }}
        animate={{
          r: [40, 43, 40],
        }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
      <motion.circle
        cx="250"
        cy="250"
        r="8"
        fill="#D4AF37"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />

      {/* Nodes & spokes */}
      {nodes.map((node, i) => (
        <g key={`node-${i}`}>
          <motion.line
            x1="250"
            y1="250"
            x2={node.cx}
            y2={node.cy}
            stroke="url(#line-grad)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 1.5, delay: i * 0.2, ease: "easeInOut" }}
          />
          <motion.circle
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill="transparent"
            stroke="#D4AF37"
            strokeWidth="1.5"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 + 1, type: "spring" }}
          />
          <motion.circle
            cx={node.cx}
            cy={node.cy}
            r={Math.max(node.r - 4, 4)}
            fill="#2563EB"
            opacity="0.5"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 2 + i, ease: "easeInOut" }}
          />
          {/* Traveling data pulse along each spoke */}
          <motion.circle
            r="3"
            fill="#D4AF37"
            initial={{ cx: 250, cy: 250, opacity: 0 }}
            animate={{
              cx: [250, node.cx],
              cy: [250, node.cy],
              opacity: [0, 1, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              delay: i * 0.4 + 1.5,
              ease: "easeInOut",
            }}
          />
        </g>
      ))}
    </svg>
  );
}
