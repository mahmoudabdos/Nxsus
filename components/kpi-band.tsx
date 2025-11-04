"use client"
import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"

export function KpiBand() {
  const [isVisible, setIsVisible] = useState(false)
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const kpis = [
    {
      number: 75,
      suffix: "%",
      label: "Faster Hiring Process",
      description: "Average time-to-hire reduced from 28 days to 7 days",
      context: "Based on 150+ enterprise implementations (2024)",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
      color: "from-emerald-500 to-emerald-600",
      bgColor: "rgba(16, 185, 129, 0.1)"
    },
    {
      number: 90,
      suffix: "%",
      label: "Candidate Satisfaction",
      description: "Average NPS score of 72 vs. industry average of 45",
      context: "From 2,400+ candidate feedback surveys",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      ),
      color: "from-blue-500 to-blue-600",
      bgColor: "rgba(59, 130, 246, 0.1)"
    },
    {
      number: 65,
      suffix: "%",
      label: "Cost Reduction",
      description: "Average savings of $2.3M annually per enterprise client",
      context: "Across recruitment, screening, and onboarding costs",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      color: "from-violet-500 to-purple-600",
      bgColor: "rgba(147, 51, 234, 0.1)"
    },
  ]

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
        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-violet-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 text-violet-700 border border-violet-100 mb-4 dark:bg-violet-950/30 dark:text-violet-200 dark:border-violet-900">
            <span className="w-2 h-2 rounded-full bg-violet-500" />
            <span className="text-sm font-medium">Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
            Proven Results
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-[60ch] mx-auto mt-3 leading-relaxed">
            Enterprise teams are accelerating hiring with measurable, data‑driven outcomes.
          </p>
        </motion.div>

        {/* KPI Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {kpis.map((kpi, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.2 + (index * 0.1), 
                ease: [0.2, 0.8, 0.2, 1] 
              }}
            >
              {/* Card */}
              <div
                className="relative p-6 md:p-7 rounded-2xl text-center border border-slate-200 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-xl hover:border-violet-200 transition-all duration-300 dark:bg-slate-900/80 dark:border-white/10 dark:shadow-none group overflow-hidden"
              >
                {/* Subtle gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-50/0 to-blue-50/0 dark:from-violet-950/0 dark:to-blue-950/0 group-hover:from-violet-50/50 group-hover:to-blue-50/50 dark:group-hover:from-violet-950/30 dark:group-hover:to-blue-950/30 transition-all duration-300" />
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-violet-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon */}
                <div className={`relative inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl mb-4 bg-gradient-to-br ${kpi.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white text-lg md:text-xl">
                    {kpi.icon}
                  </div>
                </div>

                {/* Number */}
                <div className="relative text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-violet-700 to-slate-900 dark:from-white dark:via-violet-300 dark:to-white mb-3 leading-none group-hover:from-violet-600 group-hover:via-violet-700 group-hover:to-violet-600 dark:group-hover:from-violet-400 dark:group-hover:via-violet-300 dark:group-hover:to-violet-400 transition-all duration-300">
                  <CountUpNumber
                    value={kpi.number}
                    suffix={kpi.suffix}
                    delay={0.3 + (index * 0.1)}
                  />
                </div>

                {/* Label */}
                <h3 className="relative text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors duration-300">
                  {kpi.label}
                </h3>

                {/* Description */}
                <p className="relative text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed mb-3 font-medium">
                  {kpi.description}
                </p>

                {/* Context */}
                {kpi.context && (
                  <p className="relative text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-2 border-t border-slate-200 dark:border-slate-700 group-hover:border-violet-200 dark:group-hover:border-violet-800 transition-colors duration-300">
                    {kpi.context}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CountUpNumber({
  value,
  suffix = "",
  delay = 0,
}: {
  value: number
  suffix?: string
  delay?: number
}) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasAnimated) {
        setHasAnimated(true)
        const duration = 2000
        const steps = 80
        const increment = value / steps
        let current = 0

        const countTimer = setInterval(() => {
          current += increment
          if (current >= value) {
            setCount(value)
            clearInterval(countTimer)
          } else {
            setCount(Math.floor(current))
          }
        }, duration / steps)

        return () => clearInterval(countTimer)
      }
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [value, hasAnimated, delay])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}
