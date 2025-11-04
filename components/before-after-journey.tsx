"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/animated-section"
import { useEffect, useState, useRef } from "react"

export function BeforeAfterJourney() {
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const stageRef = useRef<HTMLDivElement>(null)

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Track window width for responsive behavior
  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth)
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  return (
    <section id="journey" className="relative overflow-hidden">
      <div className="py-12 sm:py-16 md:py-20 lg:py-24" style={{
        background: "linear-gradient(90deg, #0B0611 0%, #8D31E1 100%)"
      }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-white text-balance">HR Wasn't Meant to Be This Hard</h2>
            <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-white/95 text-balance">
              Everything You Need to Manage HR, in One Intelligent Platform
            </h3>
            <p className="text-base sm:text-lg text-white/90 max-w-[70ch] mx-auto text-pretty leading-relaxed px-2">
              A powerful, AI-driven system that unites recruitment, onboarding, and analytics, all in one seamless experience.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {/* Before Panel - With CB N3 Image */}
            <AnimatedSection delay={0.1}>
              <Card className="rounded-3xl p-4 sm:p-5 md:p-6 lg:p-7 shadow-2xl h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]" style={{
                background: "linear-gradient(135deg, #F6EAF8 0%, #E8D5F0 100%)"
              }}>
                <div className="space-y-4 sm:space-y-5 md:space-y-6 h-full">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900">Before Nxsus – Frustration and fragmentation</h3>

                  <div className="relative bg-white rounded-2xl flex-1 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[580px] overflow-hidden">
                    <Image
                      src="/assets/without.png"
                      alt="Before Nxsus – Frustration and fragmentation illustration"
                      fill
                      className="object-contain"
                      sizes="(min-width: 1024px) 600px, 100vw"
                      priority={false}
                    />
                  </div>
                </div>
              </Card>
            </AnimatedSection>

            {/* After Panel - Central Portrait with Orbits and Solution Pills */}
            <AnimatedSection delay={0.2}>
              <Card 
                id="journey-after"
                className="rounded-[28px] h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] p-4 sm:p-6 md:p-8 lg:p-10"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onFocus={() => setIsHovered(true)}
                onBlur={() => setIsHovered(false)}
              >
                <div className="space-y-4 sm:space-y-5 md:space-y-6 h-full" style={{
                  background: "#F6F4FA",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6), 0 30px 60px rgba(17,24,39,0.15)",
                  borderRadius: 28,
                }}>
                  <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 -mt-2 text-slate-700">After Nxsus – AI Driven Efficiently</h3>

                  <div id="after-stage" ref={stageRef} className="relative flex-1 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[580px] flex items-center justify-center overflow-hidden" style={{ borderRadius: 24 }}>
                    {/* Clear orbital path guides - properly sized and centered */}
                    <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 1 }}>
                      {/* Ring 1 - Inner orbit - safe from face */}
                      <div
                        className="absolute rounded-full hidden sm:block"
                        style={{
                          width: 'clamp(120px, 25vw, 200px)',
                          height: 'clamp(120px, 25vw, 200px)',
                          border: "2px dashed rgba(214, 184, 242, 0.45)",
                          boxShadow: "0 0 20px rgba(214, 184, 242, 0.2)",
                        }}
                      />
                      {/* Ring 2 - Middle orbit */}
                      <div
                        className="absolute rounded-full hidden md:block"
                        style={{
                          width: 'clamp(160px, 32vw, 260px)',
                          height: 'clamp(160px, 32vw, 260px)',
                          border: "2px dashed rgba(225, 196, 239, 0.40)",
                          boxShadow: "0 0 20px rgba(225, 196, 239, 0.2)",
                        }}
                      />
                      {/* Ring 3 - Outer orbit - fits within card */}
                      <div
                        className="absolute rounded-full hidden lg:block"
                        style={{
                          width: 'clamp(200px, 40vw, 320px)',
                          height: 'clamp(200px, 40vw, 320px)',
                          border: "2px dashed rgba(234, 211, 255, 0.35)",
                          boxShadow: "0 0 20px rgba(234, 211, 255, 0.2)",
                        }}
                      />
                    </div>

                    {/* Orbiting pill planets around the sun */}
                    <div id="journey-rings" className="absolute inset-0" aria-hidden="true" style={{ zIndex: 2 }}>
                      {/* Ring 1 - Inner orbit (2 pills, counter-clockwise) */}
                      <motion.div
                        className="absolute"
                        style={{ left: "50%", top: "50%", width: 0, height: 0 }}
                        animate={!isReducedMotion ? { rotate: [0, -360] } : {}}
                        transition={{ duration: isHovered ? 60 : 36, ease: "linear", repeat: Infinity }}
                      >
                        <div className="absolute hidden sm:block" style={{ transform: "rotate(0deg) translate(60px)", transformOrigin: "0 0" }}>
                          <motion.div 
                            className="rounded-full shadow-lg border border-slate-200 flex items-center justify-center px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium whitespace-nowrap" 
                            style={{
                              background: "#FFFFFF",
                              color: "#111827",
                              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.12)",
                              maxWidth: "100px"
                            }}
                            animate={!isReducedMotion ? { rotate: [0, -360] } : {}}
                            transition={{ duration: isHovered ? 60 : 36, ease: "linear", repeat: Infinity }}
                          >
                            AI Interviews
                          </motion.div>
                        </div>
                        <div className="absolute hidden sm:block" style={{ transform: "rotate(180deg) translate(60px)", transformOrigin: "0 0" }}>
                          <motion.div 
                            className="rounded-full shadow-lg border border-slate-200 flex items-center justify-center px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium whitespace-nowrap" 
                            style={{
                              background: "#FFFFFF",
                              color: "#111827",
                              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.12)",
                              maxWidth: "100px"
                            }}
                            animate={!isReducedMotion ? { rotate: [0, -360] } : {}}
                            transition={{ duration: isHovered ? 60 : 36, ease: "linear", repeat: Infinity }}
                          >
                            Smart Hiring
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Ring 2 - Middle orbit (3 pills, clockwise) */}
                      <motion.div
                        className="absolute"
                        style={{ left: "50%", top: "50%", width: 0, height: 0 }}
                        animate={!isReducedMotion ? { rotate: [0, 360] } : {}}
                        transition={{ duration: isHovered ? 50 : 30, ease: "linear", repeat: Infinity }}
                      >
                        <div className="absolute hidden md:block" style={{ transform: "rotate(0deg) translate(80px)", transformOrigin: "0 0" }}>
                          <motion.div 
                            className="rounded-full shadow-lg border border-slate-200 flex items-center justify-center px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium whitespace-nowrap" 
                            style={{
                              background: "#FFFFFF",
                              color: "#111827",
                              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.12)",
                              maxWidth: "100px"
                            }}
                            animate={!isReducedMotion ? { rotate: [0, 360] } : {}}
                            transition={{ duration: isHovered ? 50 : 30, ease: "linear", repeat: Infinity }}
                          >
                            Find Talent
                          </motion.div>
                        </div>
                        <div className="absolute hidden md:block" style={{ transform: "rotate(120deg) translate(80px)", transformOrigin: "0 0" }}>
                          <motion.div 
                            className="rounded-full shadow-lg border border-slate-200 flex items-center justify-center px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium whitespace-nowrap" 
                            style={{
                              background: "#FFFFFF",
                              color: "#111827",
                              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.12)",
                              maxWidth: "100px"
                            }}
                            animate={!isReducedMotion ? { rotate: [0, 360] } : {}}
                            transition={{ duration: isHovered ? 50 : 30, ease: "linear", repeat: Infinity }}
                          >
                            Smart Tests
                          </motion.div>
                        </div>
                        <div className="absolute hidden md:block" style={{ transform: "rotate(240deg) translate(80px)", transformOrigin: "0 0" }}>
                          <motion.div
                            className="rounded-full shadow-lg border border-slate-200 flex items-center justify-center px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium whitespace-nowrap" 
                            style={{
                              background: "#FFFFFF",
                              color: "#111827",
                              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.12)",
                              maxWidth: "100px"
                            }}
                            animate={!isReducedMotion ? { rotate: [0, 360] } : {}}
                            transition={{ duration: isHovered ? 50 : 30, ease: "linear", repeat: Infinity }}
                          >
                            Auto Checks
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Ring 3 - Outer orbit (2 pills, counter-clockwise) */}
                      <motion.div
                        className="absolute"
                        style={{ left: "50%", top: "50%", width: 0, height: 0 }}
                        animate={!isReducedMotion ? { rotate: [0, -360] } : {}}
                        transition={{ duration: isHovered ? 40 : 24, ease: "linear", repeat: Infinity }}
                      >
                        <div className="absolute hidden lg:block" style={{ transform: "rotate(0deg) translate(100px)", transformOrigin: "0 0" }}>
                          <motion.div 
                            className="rounded-full shadow-lg border border-slate-200 flex items-center justify-center px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium whitespace-nowrap" 
                            style={{
                              background: "#FFFFFF",
                              color: "#111827",
                              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.12)",
                              maxWidth: "100px"
                            }}
                            animate={!isReducedMotion ? { rotate: [0, -360] } : {}}
                            transition={{ duration: isHovered ? 40 : 24, ease: "linear", repeat: Infinity }}
                          >
                            Smart ATS
                          </motion.div>
                        </div>
                        <div className="absolute hidden lg:block" style={{ transform: "rotate(180deg) translate(100px)", transformOrigin: "0 0" }}>
                          <motion.div 
                            className="rounded-full shadow-lg border border-slate-200 flex items-center justify-center px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium whitespace-nowrap" 
                            style={{
                              background: "#FFFFFF",
                              color: "#111827",
                              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.12)",
                              maxWidth: "100px"
                            }}
                            animate={!isReducedMotion ? { rotate: [0, -360] } : {}}
                            transition={{ duration: isHovered ? 40 : 24, ease: "linear", repeat: Infinity }}
                          >
                            AI Insights
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Central Portrait */}
                    <motion.div
                      id="journey-portrait"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="relative z-10"
                    >
                      <div className="rounded-full overflow-hidden" style={{
                        width: 'clamp(120px, 25vw, 200px)',
                        height: 'clamp(120px, 25vw, 200px)',
                        border: "1px solid #FFFFFF",
                        boxShadow: "0 8px 24px rgba(159, 135, 255, 0.22)",
                      }}>
                        <Image
                          src="/assets/nora.png"
                          alt="Nora AI Assistant"
                          width={200}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
