import { Link } from "wouter";
import { Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-display font-bold tracking-tight text-white">
                SAFRON
              </span>
            </Link>
            <h4 className="text-lg font-medium mb-2 text-white/90">Enterprise Transformation & Advisory</h4>
            <p className="text-accent max-w-md leading-relaxed text-sm font-medium mb-8">
              Turning Complexity into Clarity.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Safron on LinkedIn"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:sujata@saf-ron.com"
                aria-label="Email Safron"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 tracking-wide text-white">Navigation</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/#advisory" className="hover:text-accent transition-colors">Advisory</Link></li>
              <li><Link href="/#how-we-help" className="hover:text-accent transition-colors">How We Help</Link></li>
              <li><Link href="/#industries" className="hover:text-accent transition-colors">Industries</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 tracking-wide text-transparent select-none">.</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link href="/#training" className="hover:text-accent transition-colors">Training</Link></li>
              <li><Link href="/perspectives" className="hover:text-accent transition-colors">Perspectives</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link href="/#contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Safron. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="mailto:sujata@saf-ron.com" className="hover:text-accent transition-colors">sujata@saf-ron.com</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
