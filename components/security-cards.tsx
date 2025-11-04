"use client"

import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/animated-section"
import { Shield, Award, Globe } from "lucide-react"

export function SecurityCards() {
  const securityFeatures = [
    {
      icon: Award,
      iconColor: "bg-purple-500",
      title: "Industry-Leading Certifications",
      description:
        "Certified to ISO 27001 and SOC 2 standards with regular third-party audits ensuring the highest levels of security and operational excellence for your sensitive hiring data.",
    },
    {
      icon: Shield,
      iconColor: "bg-teal-500",
      title: "Privacy & Data Protection Compliance",
      description:
        "Fully compliant with global privacy regulations: GDPR, CCPA, HIPAA and other regional standards. Your candidate data is protected with enterprise-grade encryption and privacy controls.",
    },
    {
      icon: Globe,
      iconColor: "bg-green-500",
      title: "Multiregional & Localised Data Hosting",
      description:
        "Secure, region-specific cloud environments ensure data residency compliance while delivering optimal performance through our global infrastructure network.",
    },
  ]

  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-[1200px] mx-auto px-8 md:px-8">
        <div className="space-y-12 md:space-y-16">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance leading-tight">
              Enterprise-Grade Security & Compliance That Powers Trust and Performance.
            </h2>
            <p className="text-lg text-white/70 max-w-4xl text-pretty leading-relaxed">
              Built with security-first architecture and compliance frameworks that meet the most stringent enterprise
              requirements, ensuring your hiring data remains protected while delivering exceptional performance.
            </p>
            <div className="pt-2">
              <a
                href="#security-overview"
                className="text-sm text-violet-400 hover:text-violet-300 transition-colors duration-200"
              >
                View our security overview →
              </a>
            </div>
          </div>

          {/* Security Cards Grid */}
          <div className="grid md:grid-cols-3 gap-7 md:gap-8">
            {securityFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    className="bg-slate-800 rounded-[22px] p-7 md:p-8 border border-white/6 shadow-sm space-y-6 h-full"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: [0.21, 1.11, 0.81, 0.99],
                    }}
                  >
                    {/* Icon Tile */}
                    <motion.div
                      className={`w-14 h-14 rounded-xl ${feature.iconColor} flex items-center justify-center`}
                      initial={{ scale: 0.96 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + 0.2,
                        ease: "easeOut",
                      }}
                    >
                      <IconComponent className="w-6 h-6 text-white" aria-hidden="true" />
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-[22px] md:text-[24px] font-bold text-white leading-tight">{feature.title}</h3>
                      <p className="text-[15px] md:text-[16px] text-white/80 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
