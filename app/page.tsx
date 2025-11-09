import { HeaderNav } from "@/components/header-nav"
import { HeroWithProof } from "@/components/hero-with-proof"
import { FeatureGrid } from "@/components/feature-grid"
import { BeforeAfterJourney } from "@/components/before-after-journey"
import { ComparisonShowcase } from "@/components/comparison-showcase"
import { TestimonialsRow } from "@/components/testimonials-row"
import { KpiBand } from "@/components/kpi-band"
import { SecurityCompliance } from "@/components/security-compliance"
import { IntegrationGrid } from "@/components/integration-grid"
import { CandidateStories } from "@/components/candidate-stories"
import { FaqAccordion } from "@/components/faq-accordion"
import { FaqDark } from "@/components/faq-dark"
import { BottomCtaNora } from "@/components/bottom-cta-nora"
import { SiteFooter } from "@/components/site-footer"
import { VideoTestimonials } from "@/components/video-testimonials"
import { ReadyToHireNoraCta } from "@/components/ready-to-hire-nora-cta"
export default function NexusAIPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />

      <main>
        <section id="hero">
          <HeroWithProof />
        </section>

        <div className="content-width page-gutters py-0"><div className="section-sep" /></div>

        <section id="features" className="content-width page-gutters section-spacing">
          <FeatureGrid />
        </section>

        <div className="content-width page-gutters py-0"><div className="section-sep" /></div>

        <section id="journey" className="section-spacing">
          <BeforeAfterJourney />
        </section>

        <div className="content-width page-gutters py-0"><div className="section-sep" /></div>

        <section id="comparison-showcase" className="section-spacing">
          <ComparisonShowcase />
        </section>

        <div className="content-width page-gutters py-0"><div className="section-sep" /></div>

        <section id="results" className="content-width page-gutters section-spacing">
          <KpiBand />
        </section>

        <div className="content-width page-gutters py-0"><div className="section-sep" /></div>

        <section id="trust" className="section-spacing">
          <SecurityCompliance />
        </section>

        <div className="content-width page-gutters py-0"><div className="section-sep" /></div>

        <section id="integrations" className="content-width page-gutters section-spacing">
          <IntegrationGrid />
        </section>

        <div className="content-width page-gutters py-0"><div className="section-sep" /></div>

        <section id="testimonials" className="section-spacing">
          <VideoTestimonials />
        </section>

        <div className="content-width page-gutters py-0"><div className="section-sep" /></div>

        <section id="faq" className="section-spacing">
          <FaqDark />
        </section>

        <div className="content-width page-gutters py-0"><div className="section-sep" /></div>

        <section id="nora-cta" className="section-spacing">
          <ReadyToHireNoraCta />
        </section>

        
      </main>

      <footer id="footer">
        <SiteFooter />
      </footer>
    </div>
  )
}
