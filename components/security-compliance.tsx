"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { AnimatedSection } from "@/components/animated-section"

export function SecurityCompliance() {
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Intersection observer for entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const securityCards = [
    {
      id: "certifications",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4"/>
          <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
          <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
          <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3"/>
          <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3"/>
        </svg>
      ),
      title: "Industry-Leading Certifications",
      body: "Certified to ISO 27001 and SOC 2 standards, ensuring enterprise-grade information security and risk management.",
      gradient: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
      chips: []
    },
    {
      id: "privacy",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <circle cx="12" cy="16" r="1"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      ),
      title: "Privacy & Data Protection Compliance",
      body: "Fully compliant with global privacy regulations: GDPR, CCPA, HIPAA, ensuring complete legal compliance.",
      gradient: "linear-gradient(135deg, #0EA5E9 0%, #14B8A6 100%)",
      chips: []
    },
    {
      id: "hosting",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      title: "Multiregional & Localised Data Hosting",
      body: "Secure, region-specific cloud environments providing maximum resilience, speed, and compliance.",
      gradient: "linear-gradient(135deg, #16A34A 0%, #22C55E 100%)",
      chips: []
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24"
      style={{
        background: "#0B0F14"
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-10 sm:mb-12 md:mb-16">
          <motion.h2 
            className="text-white font-extrabold leading-tight mb-4 sm:mb-5 md:mb-6"
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              lineHeight: "1.05"
            }}
          >
            Enterprise-Grade Security & Compliance
          </motion.h2>
          <motion.p 
            className="text-[#9AA4B2] mx-auto leading-relaxed text-sm sm:text-base md:text-lg"
            style={{
              lineHeight: "1.7",
              maxWidth: "72ch"
            }}
          >
            Built with enterprise security standards and global compliance requirements at its core, ensuring your data remains protected and your organization stays compliant.
          </motion.p>
        </AnimatedSection>

        {/* Security Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {securityCards.map((card, index) => (
            <motion.div
              key={card.id}
              className="group relative"
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.2, 0.8, 0.2, 1]
              }}
              whileHover={!isReducedMotion ? {
                y: -4,
                transition: { duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }
              } : {}}
            >
              {/* Card Container */}
              <div 
                className="relative h-full p-6 md:p-8 rounded-[20px] border transition-all duration-220 ease-[cubic-bezier(.2,.8,.2,1)] focus-within:ring-2 focus-within:ring-[#93C5FD] focus-within:ring-offset-2 focus-within:ring-offset-[#0B0F14]"
                style={{
                  background: "#0F1A2B",
                  borderColor: "rgba(255,255,255,0.06)",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
                  // Gradient hairline border
                  backgroundImage: `
                    linear-gradient(#0F1A2B, #0F1A2B) padding-box,
                    linear-gradient(135deg, rgba(139,92,246,0.35), rgba(14,165,233,0.35)) border-box
                  `,
                  border: "1px solid transparent"
                }}
                tabIndex={0}
                role="article"
                aria-labelledby={`${card.id}-title`}
              >
                {/* Corner Lighting */}
                <div 
                  className="absolute top-0 left-0 w-32 h-32 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at top left, rgba(255,255,255,0.06), transparent 60%)"
                  }}
                />
                <div 
                  className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at bottom right, rgba(255,255,255,0.06), transparent 60%)"
                  }}
                />

                {/* Ambient Sheen */}
                {!isReducedMotion && (
                  <motion.div
                    className="absolute inset-0 rounded-[20px] pointer-events-none"
                    style={{
                      background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 50%, transparent 100%)",
                      maskImage: "linear-gradient(90deg, transparent 0%, black 20%, black 80%, transparent 100%)"
                    }}
                    initial={{ x: "-100%" }}
                    animate={isVisible ? { x: "100%" } : { x: "-100%" }}
                    transition={{ duration: 1.8, delay: index * 0.2, ease: "linear" }}
                  />
                )}

                {/* Icon Tile */}
                <motion.div
                  className="w-12 h-12 rounded-[12px] flex items-center justify-center mb-4"
                  style={{ background: card.gradient }}
                  whileHover={!isReducedMotion ? {
                    scale: 1.03,
                    transition: { duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }
                  } : {}}
                  aria-hidden="true"
                >
                  <div className="text-white">
                    {card.icon}
                  </div>
                </motion.div>

                {/* Content Stack */}
                <div className="space-y-3">
                  <h3 
                    id={`${card.id}-title`}
                    className="text-white font-bold leading-tight"
                    style={{
                      fontSize: "clamp(20px, 2.5vw, 24px)"
                    }}
                  >
                    {card.title}
                  </h3>
                  
                  <p 
                    className="text-[#9AA4B2] leading-relaxed"
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.7"
                    }}
                  >
                    {card.body}
                  </p>

                  {/* Chips Row */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {card.chips.map((chip, chipIndex) => (
                      <span
                        key={chipIndex}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold transition-colors duration-200 hover:bg-white/0.12"
                        style={{
                          height: "26px",
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          color: "rgba(255,255,255,0.8)",
                          fontSize: "12px"
                        }}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effects */}
                <div 
                  className="absolute inset-0 rounded-[20px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-220"
                  style={{
                    background: "linear-gradient(130deg, rgba(139,92,246,0.35), rgba(14,165,233,0.35))",
                    border: "1px solid transparent",
                    borderRadius: "20px"
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
