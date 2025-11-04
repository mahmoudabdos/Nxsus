"use client"

import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"
import { motion } from "framer-motion"

export function ComparisonShowcase() {
  return (
    <section id="comparison-showcase" className="relative overflow-hidden py-8 sm:py-10 md:py-12" style={{
      background: "linear-gradient(135deg, #0B0611 0%, #1E1B3D 50%, #8D31E1 100%)"
    }}>
      <div className="content-width page-gutters">
        <AnimatedSection className="text-center mb-4 sm:mb-5 md:mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2 sm:mb-3"
            style={{ lineHeight: 1.1 }}
          >
            Transform Your Hiring Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            See the difference AI-powered recruitment makes. From manual processes to intelligent automation.
          </motion.p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
              <Image
                src="/assets/cb-n3-section.jpg"
                alt="Hiring process transformation comparison"
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 1200px, (min-width: 768px) 900px, 100vw"
                priority
              />
              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10 pointer-events-none" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

