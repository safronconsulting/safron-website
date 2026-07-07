import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title="About Safron | Enterprise Transformation & Advisory" 
        description="Learn about Safron, a premier enterprise consulting firm focused on SAP, AI, and sustainable innovation."
      />
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-primary mb-8">About Safron</h1>
            
            <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-primary prose-p:text-gray-600">
              <p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed mb-12">
                Safron is a global enterprise consulting firm specializing in complex digital transformations. We partner with the world's leading organizations to deploy modern architectures anchored in SAP, augmented by artificial intelligence, and driven by sustainable innovation.
              </p>
              
              <h2 className="text-3xl font-bold mt-16 mb-6">Our Mission</h2>
              <p className="mb-8">
                To architect and deliver technology foundations that enable global enterprises to operate with unprecedented agility, foresight, and responsibility. We believe in turning complexity into clarity.
              </p>
              
              <h2 className="text-3xl font-bold mt-16 mb-6">Leadership & Expertise</h2>
              <p className="mb-8">
                Our firm was founded by former technology executives and managing partners from top-tier global consultancies who believed enterprise transformation required a more precise, senior-led approach. Today, we deploy concentrated teams of domain experts to solve the most intractable architectural challenges.
              </p>
              
              <div className="my-16 p-10 bg-white border-l-4 border-accent shadow-sm">
                <p className="text-xl font-medium font-display text-primary italic m-0">
                  "We do not believe in transformation for transformation's sake. Every technical decision must trace directly back to a measurable business outcome or a tangible sustainability goal."
                </p>
              </div>
              
              <h2 className="text-3xl font-bold mt-16 mb-6">Global Presence</h2>
              <p className="mb-8">
                Operating globally, our partners and architects support multi-national deployments across North America, Europe, and Asia-Pacific.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}