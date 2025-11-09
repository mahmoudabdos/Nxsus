import { Github, Twitter, Linkedin, Facebook, Instagram } from "lucide-react"

const linkClasses =
  "relative inline-block text-[16px] font-medium text-[#E5E7EB]/90 focus:outline-none focus:ring-2 focus:ring-[#7E3AF2] focus:ring-offset-2 focus:ring-offset-transparent transition-colors duration-150 hover:text-white"

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className={linkClasses}>
      <span className="relative footer-link-after after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-200 hover:after:w-full">
        {children}
      </span>
    </a>
  )
}

export function SiteFooter() {
  return (
    <footer role="contentinfo" className="relative" style={{ background: "#0F1A2B" }}>
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-8">
        {/* Top area */}
        <div className="pt-10 sm:pt-12 md:pt-14" />
        <nav aria-label="Footer" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-y-8 sm:gap-y-10 md:gap-x-8 lg:gap-x-14">
          {/* Brand (fixed ~340px) */}
          <div className="lg:col-span-4" style={{ maxWidth: 340 }}>
            <div className="mb-4 flex items-center">
              <span className="text-[20px] font-bold text-white">Nxsus AI</span>
            </div>
            <p className="text-[16px] leading-[1.7] text-[#A8B3C5]">
              Transforming recruitment with AI-powered solutions that help you hire better, faster, and more efficiently.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <a href="#" aria-label="Nxsus on X" className="inline-flex h-10 w-10 items-center justify-center text-[#E5E7EB]/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#7E3AF2] focus:ring-offset-2 focus:ring-offset-transparent transition-transform duration-150 hover:scale-[1.06]">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Nxsus on LinkedIn" className="inline-flex h-10 w-10 items-center justify-center text-[#E5E7EB]/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#7E3AF2] focus:ring-offset-2 focus:ring-offset-transparent transition-transform duration-150 hover:scale-[1.06]">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Nxsus on Facebook" className="inline-flex h-10 w-10 items-center justify-center text-[#E5E7EB]/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#7E3AF2] focus:ring-offset-2 focus:ring-offset-transparent transition-transform duration-150 hover:scale-[1.06]">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Nxsus on Instagram" className="inline-flex h-10 w-10 items-center justify-center text-[#E5E7EB]/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#7E3AF2] focus:ring-offset-2 focus:ring-offset-transparent transition-transform duration-150 hover:scale-[1.06]">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="lg:col-span-2">
            <h3 className="mb-3 text-[16px] font-bold text-white">Product</h3>
            <ul className="space-y-2.5">
              <li><FooterLink href="#features">Features</FooterLink></li>
              <li><FooterLink href="#">Pricing</FooterLink></li>
              <li><FooterLink href="#integrations">Integrations</FooterLink></li>
              <li><FooterLink href="#">API</FooterLink></li>
              <li><FooterLink href="#">Security</FooterLink></li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="mb-3 text-[16px] font-bold text-white">Company</h3>
            <ul className="space-y-2.5">
              <li><FooterLink href="#">About</FooterLink></li>
              <li><FooterLink href="#">Careers</FooterLink></li>
              <li><FooterLink href="#">Blog</FooterLink></li>
              <li><FooterLink href="#">Press</FooterLink></li>
              <li><FooterLink href="#">Partners</FooterLink></li>
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-2">
            <h3 className="mb-3 text-[16px] font-bold text-white">Support</h3>
            <ul className="space-y-2.5">
              <li><FooterLink href="#">Help Center</FooterLink></li>
              <li><FooterLink href="#">Contact</FooterLink></li>
              <li><FooterLink href="#">Status</FooterLink></li>
              <li><FooterLink href="#">Privacy</FooterLink></li>
              <li><FooterLink href="#">Terms</FooterLink></li>
            </ul>
          </div>
        </nav>

        {/* Bottom spacing before divider */}
        <div className="pb-7" />
        {/* Divider */}
        <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.06)' }} />
        {/* Space between divider and bottom bar */}
        <div style={{ height: 22 }} />

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between" style={{ paddingTop: 18, paddingBottom: 18 }}>
          <p className="text-[14px] text-[#A8B3C5]">© 2024 Nxsus AI. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
            <FooterLink href="#">Cookie Policy</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
