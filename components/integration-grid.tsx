"use client"

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState, useRef } from "react"

export function IntegrationGrid() {
  const [isVisible, setIsVisible] = useState(false)
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const [hoveredTile, setHoveredTile] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Advanced parallax with spring physics
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -8])
  const springY = useSpring(gridY, { stiffness: 100, damping: 30 })

  // Mouse tracking for advanced interactions
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const springY_mouse = useSpring(mouseY, { stiffness: 300, damping: 30 })

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

  // Mouse tracking for grid
  const handleMouseMove = (e: React.MouseEvent) => {
    if (gridRef.current) {
      const rect = gridRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      mouseX.set(x * 20 - 10)
      mouseY.set(y * 20 - 10)
    }
  }

  // Integration tiles with exact brand colors
  const integrationTiles = [
    // Row 1
    { 
      name: "SAP", 
      color: "#2563EB", 
      icon: null
    },
    { 
      name: "Power BI", 
      color: "#D97706", 
      icon: null
    },
    { 
      name: "GitHub", 
      color: "#111827", 
      icon: "github", 
      iconOnly: true
    },
    
    // Row 2
    { 
      name: "Notion", 
      color: "#111827", 
      icon: null
    },
    { 
      name: "Chrome", 
      color: "#111827", 
      icon: "chrome", 
      iconOnly: true
    },
    { 
      name: "Azure", 
      color: "#2563EB", 
      icon: null
    },
    
    // Row 3
    { 
      name: "SharePoint", 
      color: "#2563EB", 
      icon: null
    },
    { 
      name: "Drive", 
      color: "#111827", 
      icon: "drive", 
      iconOnly: true
    },
    { 
      name: "BambooHR", 
      color: "#16A34A", 
      icon: null
    },
    
    // Row 4
    { 
      name: "Hive", 
      color: "#F97316", 
      icon: null
    },
    { 
      name: "OneLogin", 
      color: "#2563EB", 
      icon: null
    },
    // Empty cell for row 4, column 3
  ]

  // SVG Icons with exact sizing
  const getIcon = (iconName: string) => {
    const icons = {
      github: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      chrome: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#4285F4"/>
          <circle cx="12" cy="12" r="4" fill="white"/>
          <path d="M12 2a10 10 0 0 0-8.66 5l6.33 11c.11.2.24.38.39.54l5.94-10.28A9.96 9.96 0 0 0 12 2z" fill="#EA4335"/>
          <path d="M12 22a10 10 0 0 0 8.66-5l-6.33-11c-.11-.2-.24-.38-.39-.54L8 20.28A9.96 9.96 0 0 0 12 22z" fill="#34A853"/>
        </svg>
      ),
      drive: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M7.71 6.705L0 19.5h7.71l7.71-12.795H7.71z" fill="#0066DA"/>
          <path d="M16.29 6.705L24 19.5h-7.71l-7.71-12.795h7.71z" fill="#00AC47"/>
          <path d="M12 0L4.29 12.795h7.71L12 0z" fill="#EA4335"/>
        </svg>
      )
    }
    return icons[iconName as keyof typeof icons]
  }

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #F6F9FF 0%, #EEF4FF 35%, #EAF1FF 100%)"
      }}
      aria-labelledby="integration-headline"
    >
      {/* Decorative backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-40"
        style={{
          background: "radial-gradient(closest-side, rgba(126,58,242,0.18), rgba(126,58,242,0) 70%)"
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-30"
        style={{
          background: "radial-gradient(closest-side, rgba(59,130,246,0.15), rgba(59,130,246,0) 70%)"
        }}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12">
          {/* Left Column - 5/12 */}
          <div className="lg:col-span-5">
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
              className="mb-4 sm:mb-5 md:mb-6"
            >
              <h2 
                id="integration-headline"
                className="text-3xl sm:text-4xl md:text-[42px] lg:text-[44px] font-extrabold leading-[1.08] tracking-[0] text-slate-900"
              >
                Seamless Integration with Your Existing Workflow
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              className="mb-6 sm:mb-8"
            >
              <p className="text-base sm:text-lg md:text-[18px] leading-relaxed text-slate-600 max-w-[62ch]">
                Connect to your ATS, identity, and productivity stack in minutes. Keep workflows intact
                while Nexus augments each step—no rewrites, just compound efficiency.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <motion.button
                className="inline-flex items-center justify-center h-[52px] px-6 rounded-[12px] text-white text-[16px] font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C4B5FD] focus:ring-offset-2"
                style={{
                  background: "#7E3AF2",
                  boxShadow: "0 10px 22px rgba(126,58,242,0.28)"
                }}
                whileHover={{
                  backgroundColor: "#6D28D9",
                  translateY: -1
                }}
                whileTap={{
                  scale: 0.98
                }}
              >
                Explore all integrations
                <svg className="ml-3 w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column - 7/12 */}
          <div className="lg:col-span-7">
            <motion.div 
              ref={gridRef}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6 pt-6 sm:pt-8"
              style={{
                y: !isReducedMotion ? springY : 0
              }}
            >
              {integrationTiles.map((tile, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                  transition={{ 
                    duration: 0.36, 
                    delay: 0.07 * index,
                    ease: [0.2, 0.8, 0.2, 1] 
                  }}
                  className="group relative"
                  role={tile.name ? "img" : "presentation"}
                  aria-label={tile.name ? `${tile.name} integration` : undefined}
                >
                  {tile.name ? (
                    <motion.div
                      className="relative min-h-[96px] rounded-[16px] p-6 bg-white/95 border transition-all duration-300 focus-within:ring-2 focus-within:ring-[#93C5FD] focus-within:ring-offset-2"
                      style={{
                        borderColor: "rgba(15, 23, 42, 0.08)",
                        boxShadow: "0 8px 22px rgba(2, 6, 23, 0.07), inset 0 1px 0 rgba(255,255,255,0.6)"
                      }}
                      whileHover={{
                        y: -4,
                        boxShadow: "0 16px 36px rgba(2, 6, 23, 0.12)",
                        borderColor: "rgba(15, 23, 42, 0.12)"
                      }}
                      whileTap={{
                        scale: 0.98
                      }}
                    >
                      {/* Hover sheen effect */}
                      {!isReducedMotion && (
                        <motion.div
                          className="absolute inset-0 rounded-[16px] opacity-0 group-hover:opacity-[0.06] transition-opacity duration-800"
                          style={{
                            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)"
                          }}
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.8 }}
                        />
                      )}

                      {/* Content */}
                      <div className="relative z-10 flex items-center justify-center h-full">
                        {tile.icon ? (
                          <div 
                            className="flex items-center justify-center"
                            style={{ color: tile.color }}
                          >
                            {getIcon(tile.icon)}
                          </div>
                        ) : (
                          <span 
                            className="text-[15px] md:text-[16px] font-bold text-center tracking-[0.01em]"
                            style={{ color: tile.color }}
                          >
                            {tile.name}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ) : (
                    // Empty cell to maintain grid rhythm
                    <div className="min-h-[96px]" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
