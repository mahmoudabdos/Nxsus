'use client'

import * as React from 'react'
import Image from 'next/image'
import { motion, useMotionValue, useSpring, useReducedMotion, useTransform } from 'framer-motion'

export function ReadyToHireNoraCta() {
  const prefersReduced = useReducedMotion()
  const [isVisible, setIsVisible] = React.useState(false)
  const sectionRef = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => setIsVisible(e.isIntersecting && e.intersectionRatio >= 0.5),
      { threshold: 0.5 },
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smx = useSpring(mouseX, { stiffness: 120, damping: 20 })
  const smy = useSpring(mouseY, { stiffness: 120, damping: 20 })
  const oppX = useTransform(smx, (v) => v * -0.6)
  const oppY = useTransform(smy, (v) => v * -0.6)
  const chipX = useTransform(smx, (v) => v * -0.4)
  const chipY = useTransform(smy, (v) => v * -0.4)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (prefersReduced) return
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    const dx = ((e.clientX - rect.left) / rect.width - 0.5) * 12
    const dy = ((e.clientY - rect.top) / rect.height - 0.5) * 12
    mouseX.set(dx)
    mouseY.set(dy)
  }

  return (
    <section
      ref={sectionRef}
      aria-labelledby="nora-cta-title"
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden"
      style={{
        paddingTop: 92,
        paddingBottom: 100,
        background:
          'linear-gradient(90deg, #0B0611 0%, #3B136B 38%, #7E3AF2 75%, #B46BFF 100%)',
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(600px 420px at 75% 55%, rgba(174,118,255,.28), rgba(174,118,255,0) 70%)',
        }}
      />

      <div className="mx-auto w-full px-4 sm:px-6 md:px-8" style={{ maxWidth: 1200 }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-[56px] items-center">
          {/* Left 6/12 */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <motion.h1
              id="nora-cta-title"
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.42, ease: [0.2, 0.8, 0.2, 1] }}
              className="text-white font-extrabold tracking-tight"
              style={{ fontSize: 'clamp(28px, 5vw, 56px)', lineHeight: 1.08 }}
            >
              Ready to hire <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#3E3A7A]">Nora</span>
              <br />and elevate your HR?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.46, delay: 0.06, ease: [0.2, 0.8, 0.2, 1] }}
              className="mt-4 sm:mt-5 max-w-[52ch] mx-auto lg:mx-0 text-white/90 text-base sm:text-lg"
              style={{ color: 'rgba(229,231,235,0.9)' }}
            >
              Free up your team to focus on what truly matters—your people and your growth.
            </motion.p>

            <motion.button
              aria-label="Contact sales"
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.46, delay: 0.12, ease: [0.2, 0.8, 0.2, 1] }}
              className="mt-6 sm:mt-7 inline-flex h-[48px] sm:h-[52px] items-center justify-center rounded-[14px] px-6 sm:px-[24px] text-sm sm:text-[15px] font-semibold text-white focus:outline-none focus:ring-2 focus:ring-[#C4B5FD] focus:ring-offset-2 focus:ring-offset-transparent"
              style={{
                background: 'linear-gradient(180deg, #8B5CF6 0%, #6D28D9 100%)',
                boxShadow: '0 10px 24px rgba(126,58,242,.28)',
              }}
              whileHover={{ y: -1, scale: prefersReduced ? 1 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Sales
              <svg className="ml-2 sm:ml-3 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Right 6/12 */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.48, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative mx-auto w-full max-w-[560px]"
              style={{ aspectRatio: '560 / 380' }}
            >
              {/* Frame */}
              <div
                className="absolute inset-0 overflow-hidden rounded-[22px]"
                style={{
                  background: 'rgba(0,0,0,0.25)',
                  boxShadow: '0 30px 80px rgba(2,6,23,.35), inset 0 0 0 1px rgba(255,255,255,.06)',
                  border: '1px solid rgba(255,255,255,0.18)',
                }}
              >
                <Image
                  src="/assets/cb-n.jpg"
                  alt="Nxsus capabilities"
                  fill
                  className="object-cover"
                  priority
                />
                <div aria-hidden className="absolute inset-0 rounded-[22px]" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12)' }} />
              </div>

              {/* Inbox card */}
              <motion.div
                aria-hidden="true"
                className="absolute left-[-16px] sm:left-[-24px] md:left-[-28px] top-[-20px] sm:top-[-28px] md:top-[-36px] w-[240px] sm:w-[300px] md:w-[360px] rounded-[16px] bg-white/80 backdrop-blur-[10px] hidden sm:block"
                style={{
                  boxShadow: '0 18px 40px rgba(2,6,23,.18)',
                  border: '1px solid rgba(255,255,255,0.65)',
                  color: '#0F172A',
                  ...(prefersReduced ? {} : { x: smx, y: smy }),
                }}
                whileHover={{ y: -2, boxShadow: '0 21px 46px rgba(2,6,23,.21)' }}
                transition={{ duration: 0.26 }}
              >
                <div className="flex items-center justify-between px-3 sm:px-4 pt-2 sm:pt-3">
                  <div className="text-sm sm:text-[15px] font-semibold">Inbox</div>
                  <div className="rounded-full bg-[#EDE9FE] px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-[12px] font-semibold text-[#6D28D9]">3 new</div>
                </div>
                <div className="px-3 sm:px-4 pb-2 sm:pb-3 pt-1.5 sm:pt-2 space-y-1 sm:space-y-1.5">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-[14px]"><span className="inline-block h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full" style={{ background: '#22C55E' }} />Interview scheduled</div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-[14px]"><span className="inline-block h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full" style={{ background: '#3B82F6' }} />Candidate screened</div>
                </div>
              </motion.div>

              {/* Metric card */}
              <motion.div
                aria-hidden="true"
                className="absolute right-[-12px] sm:right-[-18px] md:right-[-24px] top-[-18px] sm:top-[-24px] md:top-[-32px] w-[200px] sm:w-[240px] md:w-[260px] rounded-[16px] bg-white/82 backdrop-blur-[10px] p-3 sm:p-4 hidden sm:block"
                style={{
                  boxShadow: '0 18px 40px rgba(2,6,23,.18)',
                  border: '1px solid rgba(255,255,255,0.65)',
                  color: '#0F172A',
                  ...(prefersReduced ? {} : { x: oppX, y: oppY }),
                }}
                whileHover={{ y: -2, boxShadow: '0 21px 46px rgba(2,6,23,.21)' }}
              >
                <div className="text-2xl sm:text-3xl md:text-[36px] font-extrabold leading-none">2875</div>
                <div className="mt-1 text-xs sm:text-[14px] opacity-70">Applications processed</div>
                <div className="mt-2 flex items-center gap-1 text-[11px] sm:text-[13px] font-semibold" style={{ color: '#22C55E' }}>
                  <svg className="w-3 h-3 sm:w-[14px] sm:h-[14px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M13 7l5 5h-4v5h-2v-5H8z" />
                  </svg>
                  +23%
                </div>
              </motion.div>

              {/* Assistant toast */}
              <motion.div
                aria-hidden="true"
                className="absolute left-0 sm:left-2 bottom-[-12px] sm:bottom-[-18px] md:bottom-[-22px] w-[240px] sm:w-[280px] md:w-[300px] rounded-[16px] bg-white/82 backdrop-blur-[10px] p-2.5 sm:p-3 hidden sm:block"
                style={{
                  boxShadow: '0 18px 40px rgba(2,6,23,.18)',
                  border: '1px solid rgba(255,255,255,0.65)',
                  color: '#0F172A',
                  ...(prefersReduced ? {} : { x: smx, y: smy }),
                }}
                whileHover={{ y: -2, boxShadow: '0 21px 46px rgba(2,6,23,.21)' }}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="grid h-6 w-6 sm:h-7 sm:w-7 place-items-center rounded-[8px]" style={{ background: '#EDE9FE' }}>
                    <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="#6D28D9" aria-hidden>
                      <path d="M12 2a7 7 0 0 0-7 7v3H3v6h6v-6H7V9a5 5 0 0 1 10 0v3h-2v6h6v-6h-2V9a7 7 0 0 0-7-7z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm sm:text-[15px] font-bold">AI Assistant</div>
                    <div className="text-[11px] sm:text-[13px] opacity-70">Processing candidate data…</div>
                  </div>
                </div>
              </motion.div>

              {/* Status chip */}
              <motion.div
                aria-hidden="true"
                className="absolute right-0 sm:right-[-4px] md:right-[-8px] bottom-[-6px] sm:bottom-[-10px] md:bottom-[-12px] inline-flex h-[36px] sm:h-[40px] md:h-[44px] items-center rounded-full px-3 sm:px-4 md:px-[18px] bg-white/85 backdrop-blur-[10px] hidden sm:block"
                style={{
                  boxShadow: '0 18px 40px rgba(2,6,23,.18)',
                  border: '1px solid rgba(255,255,255,0.65)',
                  color: '#0F172A',
                  ...(prefersReduced ? {} : { x: chipX, y: chipY }),
                }}
                whileHover={{ y: -2, boxShadow: '0 21px 46px rgba(2,6,23,.21)' }}
              >
                <span className="mr-1.5 sm:mr-2 inline-block h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full" style={{ background: '#22C55E' }} />
                <span className="text-xs sm:text-sm md:text-[15px] font-semibold">Active</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}


