import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo";
import { ArrowRight, BookOpen, MoveRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Perspectives() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title="Perspectives & Research | Safron" 
        description="Latest thought leadership, research, and perspectives on enterprise architecture, SAP, and artificial intelligence from Safron."
      />
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-primary mb-6">Perspectives</h1>
            <p className="text-xl text-gray-600 font-light">
              Thought leadership and architectural perspectives from our managing partners and principal engineers.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Whitepaper",
                title: "The Clean Core Imperative: Preparing SAP for GenAI",
                desc: "A comprehensive guide to decoupling custom code and preparing enterprise ERPs for the next generation of artificial intelligence.",
                date: "October 12, 2023"
              },
              {
                category: "Case Study",
                title: "Sustainable Manufacturing via Digital Twins",
                desc: "How a global automotive manufacturer reduced carbon intensity by 14% through real-time operational mirroring.",
                date: "September 28, 2023"
              },
              {
                category: "Perspective",
                title: "Beyond the Hype: Pragmatic AI in Financial Services",
                desc: "Cutting through the noise to identify the highest-ROI use cases for large language models in banking operations.",
                date: "September 15, 2023"
              },
              {
                category: "Research",
                title: "The Architecture of Resilience",
                desc: "Supply chain lessons learned and the technical foundations required to withstand global disruption.",
                date: "August 30, 2023"
              },
              {
                category: "Brief",
                title: "Data Fabric vs. Data Mesh",
                desc: "Navigating the modern data architecture landscape for disparate global enterprises.",
                date: "August 12, 2023"
              },
              {
                category: "Methodology",
                title: "Value-Driven Cloud Migration",
                desc: "Why lift-and-shift strategies fail, and how to redesign for cloud-native agility.",
                date: "July 22, 2023"
              }
            ].map((article, i) => (
              <motion.article 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-100 p-8 flex flex-col hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold tracking-widest text-secondary uppercase">{article.category}</span>
                  <span className="text-xs text-gray-400">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold font-display text-primary mb-4 group-hover:text-secondary transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-8 flex-grow text-sm leading-relaxed">
                  {article.desc}
                </p>
                <div className="flex items-center text-sm font-bold tracking-wide uppercase text-gray-400 group-hover:text-secondary transition-colors">
                  Read Article <MoveRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.article>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <button className="bg-transparent border border-gray-300 text-primary hover:border-primary hover:bg-primary hover:text-white transition-all px-8 py-4 text-sm font-bold tracking-wide uppercase">
              Load More Insights
            </button>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}