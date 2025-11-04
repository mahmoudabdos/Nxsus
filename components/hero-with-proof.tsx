"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion, useMotionValue, useTransform, useAnimation } from "framer-motion"
import { useEffect, useState, useRef } from "react"

export function HeroWithProof() {
  const [scoreProgress, setScoreProgress] = useState(0)
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)
  const videoRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setScoreProgress(93)
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  // Responsive orbit radii
  const getOrbitRadii = () => {
    if (windowWidth >= 1280) return { r1: 140, r2: 180, r3: 220, chairSize: 64 }
    if (windowWidth >= 1024) return { r1: 120, r2: 160, r3: 200, chairSize: 56 }
    if (windowWidth >= 768) return { r1: 95, r2: 135, r3: 175, chairSize: 52 }
    return { r1: 0, r2: 0, r3: 0, chairSize: 48 } // Mobile: no orbits
  }

  const { r1, r2, r3, chairSize } = getOrbitRadii()
  const isMobile = windowWidth <= 767

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #131326 0%, #3E3A7A 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-24 text-center">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          >
            <motion.h1
              className="text-white font-extrabold tracking-tight"
              style={{ 
                fontSize: 'clamp(36px, 5.5vw, 64px)', 
                lineHeight: 1.08,
                letterSpacing: '-0.02em'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Transform Your Workforce With an{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#C4B5FD]">
                AI-First Platform
              </span>{" "}
              Built for Modern HR
            </motion.h1>
          </motion.div>

          <motion.p
            className="text-white/90 max-w-[65ch] mx-auto mb-10 text-lg md:text-xl leading-relaxed"
            style={{ 
              color: 'rgba(226, 232, 240, 0.92)',
              lineHeight: 1.7
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            From intelligent screening to real-time analytics, Nxsus automates what slows you down and amplifies what drives success.
          </motion.p>

          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button
              className="h-[52px] px-8 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold text-base rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40"
              data-track="hero-primary-cta"
            >
              Get started
            </Button>
          </motion.div>

          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <p className="text-white/70 text-sm md:text-base max-w-[60ch] mx-auto leading-relaxed">
              Trusted by HR teams solving high-volume hiring, complex enterprise selection, and talent strategy.{" "}
              <a 
                href="#case-studies" 
                className="text-[#C4B5FD] hover:text-[#A78BFA] transition-colors duration-200 font-medium underline underline-offset-3"
              >
                View case studies
              </a>
            </p>
          </motion.div>

          <motion.div
            className="relative max-w-[1400px] mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* Main window container */}
            <div
              className="relative bg-[#1B1F2E] rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
              }}
            >
              {/* Title bar */}
              <div className="h-11 bg-[#0F1322] flex items-center justify-between px-4">
                {/* macOS-style dots */}
                <div className="flex items-center space-x-2.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>

                {/* Center title */}
                <div className="text-[#CBD5E1] text-sm font-semibold">AI Interview Session</div>

                {/* Recording indicator */}
                <div className="flex items-center space-x-2">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-red-500"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.2, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <span className="text-[#CBD5E1] text-xs">Recording</span>
                </div>
              </div>

              {/* Video area with ID for anchoring - Wider aspect ratio with increased height */}
              <div 
                id="hero-video"
                ref={videoRef}
                className="relative aspect-[21/10] bg-gray-900"
              >
                <Image src="/professional-person-smiling-in-video-call.png" alt="AI Interview participant" fill className="object-cover" />

                {/* Hero Animation Overlay */}
                <div
                  id="hero-video-overlay"
                  ref={overlayRef}
                  className="hidden"
                  style={{}}
                  aria-hidden="true"
                >
                  {/* Enhanced Expressive Animation Icons */}
                  {!isReducedMotion && (
                    <>
                      {/* Icon 1 - Microphone - Top Flow */}
                      <motion.div
                        className="absolute w-16 h-16 flex items-center justify-center"
                        style={{ zIndex: 4 }}
                        animate={{
                          x: [0, 200, 400, 350, 150, 0],
                          y: [0, -80, -40, 40, 80, 0],
                          rotate: [0, 25, -25, 15, -10, 0],
                          scale: [1, 1.2, 0.8, 1.1, 0.9, 1]
                        }}
                        transition={{
                          duration: 14,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-2xl border-2 border-white/20">
                          <svg width="28" height="28" viewBox="0 0 20 20" fill="white">
                            <path d="M10 1a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                            <path d="M6 9v1a4 4 0 0 0 8 0V9a4 4 0 0 0-8 0z"/>
                            <path d="M8 13v2a2 2 0 0 0 4 0v-2"/>
                          </svg>
                        </div>
                      </motion.div>

                      {/* Icon 2 - Camera - Right Flow */}
                      <motion.div
                        className="absolute w-16 h-16 flex items-center justify-center"
                        style={{ zIndex: 4 }}
                        animate={{
                          x: [0, -100, -200, -150, -50, 0],
                          y: [0, 100, 200, 150, 50, 0],
                          rotate: [0, -30, 30, -15, 10, 0],
                          scale: [1, 0.8, 1.2, 0.9, 1.1, 1]
                        }}
                        transition={{
                          duration: 16,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 2
                        }}
                      >
                        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center shadow-2xl border-2 border-white/20">
                          <svg width="28" height="28" viewBox="0 0 20 20" fill="white">
                            <path d="M3 6a2 2 0 0 1 2-2h2l2-2h4l2 2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6z"/>
                            <circle cx="10" cy="10" r="3"/>
                          </svg>
                        </div>
                      </motion.div>

                      {/* Icon 3 - Participants - Bottom Flow */}
                      <motion.div
                        className="absolute w-16 h-16 flex items-center justify-center"
                        style={{ zIndex: 4 }}
                        animate={{
                          x: [0, 150, 300, 250, 100, 0],
                          y: [0, 120, 240, 180, 60, 0],
                          rotate: [0, 15, -15, 8, -5, 0],
                          scale: [1, 1.15, 0.85, 1.05, 0.95, 1]
                        }}
                        transition={{
                          duration: 18,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 4
                        }}
                      >
                        <div className="w-12 h-12 bg-slate-500 rounded-lg flex items-center justify-center shadow-2xl border-2 border-white/20">
                          <svg width="28" height="28" viewBox="0 0 20 20" fill="white">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            <path d="M12 14a4 4 0 0 0-8 0v2h8v-2z"/>
                            <path d="M16 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            <path d="M20 14a4 4 0 0 0-8 0v2h8v-2z"/>
                          </svg>
                        </div>
                      </motion.div>

                      {/* Icon 4 - End Call - Left Flow */}
                      <motion.div
                        className="absolute w-16 h-16 flex items-center justify-center"
                        style={{ zIndex: 4 }}
                        animate={{
                          x: [0, -150, -300, -250, -100, 0],
                          y: [0, 80, 160, 120, 40, 0],
                          rotate: [0, -20, 20, -12, 6, 0],
                          scale: [1, 0.85, 1.15, 0.95, 1.05, 1]
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 6
                        }}
                      >
                        <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center shadow-2xl border-2 border-white/20">
                          <svg width="28" height="28" viewBox="0 0 20 20" fill="white">
                            <path d="M2 3a1 1 0 0 1 1-1h2.153a1 1 0 0 1 .986.836l.74 4.435a1 1 0 0 1-.54 1.06l-1.548.773a11.037 11.037 0 0 0 6.105 6.105l.774-1.548a1 1 0 0 1 1.059-.54l4.435.74a1 1 0 0 1 .836.986V17a1 1 0 0 1-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                          </svg>
                        </div>
                      </motion.div>

                      {/* Enhanced Interactive Elements */}
                      {/* Floating Data Points - More Expressive */}
                      <motion.div
                        className="absolute w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center shadow-xl"
                        style={{ zIndex: 3 }}
                        animate={{
                          x: [0, 120, 240, 180, 60, 0],
                          y: [0, -100, -50, 50, 100, 0],
                          opacity: [0.4, 1, 0.6, 1, 0.5, 0.4],
                          scale: [0.8, 1.2, 0.9, 1.1, 0.95, 0.8]
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1
                        }}
                      >
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </motion.div>

                      {/* Secondary Data Point */}
                      <motion.div
                        className="absolute w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg"
                        style={{ zIndex: 3 }}
                        animate={{
                          x: [0, -100, -200, -150, -50, 0],
                          y: [0, 80, 160, 120, 40, 0],
                          opacity: [0.3, 0.9, 0.4, 0.8, 0.5, 0.3],
                          scale: [0.7, 1.1, 0.8, 1.05, 0.9, 0.7]
                        }}
                        transition={{
                          duration: 12,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 3
                        }}
                      >
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </motion.div>

                      {/* Enhanced Connection Lines */}
                      <motion.div
                        className="absolute w-2 h-2 bg-white/80 rounded-full"
                        style={{ zIndex: 2 }}
                        animate={{
                          x: [0, 150, 300, 225, 75, 0],
                          y: [0, 100, 200, 150, 50, 0],
                          scale: [0.5, 2, 0.8, 1.5, 0.7, 0.5],
                          opacity: [0.3, 0.9, 0.4, 0.8, 0.5, 0.3]
                        }}
                        transition={{
                          duration: 12,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 2
                        }}
                      />

                      {/* Enhanced Pulse Rings */}
                      <motion.div
                        className="absolute w-32 h-32 border-2 border-white/30 rounded-full"
                        style={{
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                          zIndex: 1
                        }}
                        animate={{
                          scale: [0.6, 1.8, 0.6],
                          opacity: [0.2, 0.9, 0.2]
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <motion.div
                        className="absolute w-24 h-24 border-2 border-white/40 rounded-full"
                        style={{
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                          zIndex: 1
                        }}
                        animate={{
                          scale: [0.8, 1.4, 0.8],
                          opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1
                        }}
                      />
                    </>
                  )}

                  {/* Reduced motion: Static icon placement */}
                  {isReducedMotion && (
                    <>
                      <div className="absolute top-1/4 left-1/4 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="white">
                          <path d="M10 1a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                          <path d="M6 9v1a4 4 0 0 0 8 0V9a4 4 0 0 0-8 0z"/>
                          <path d="M8 13v2a2 2 0 0 0 4 0v-2"/>
                        </svg>
                      </div>
                      <div className="absolute top-1/3 right-1/4 w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="white">
                          <path d="M3 6a2 2 0 0 1 2-2h2l2-2h4l2 2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6z"/>
                          <circle cx="10" cy="10" r="3"/>
                        </svg>
                      </div>
                      <div className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-slate-500 rounded-lg flex items-center justify-center shadow-lg">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="white">
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                          <path d="M12 14a4 4 0 0 0-8 0v2h8v-2z"/>
                          <path d="M16 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                          <path d="M20 14a4 4 0 0 0-8 0v2h8v-2z"/>
                        </svg>
                      </div>
                    </>
                  )}

                  {/* Enhanced Expressive Cursor System */}
                  {!isReducedMotion && (
                    <>
                      {/* Cursor Trail 1 */}
                      <motion.div
                        className="absolute w-3 h-3 bg-blue-400/50 rounded-full"
                        style={{ zIndex: 4 }}
                        animate={{
                          x: [0, 120, 240, 180, 60, 0],
                          y: [0, 80, 160, 240, 320, 0],
                          scale: [0.5, 1.2, 0.8, 1.1, 0.7, 0.5]
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5
                        }}
                      />
                      {/* Cursor Trail 2 */}
                      <motion.div
                        className="absolute w-4 h-4 bg-blue-300/40 rounded-full"
                        style={{ zIndex: 4 }}
                        animate={{
                          x: [0, 135, 270, 200, 70, 0],
                          y: [0, 90, 180, 270, 360, 0],
                          scale: [0.6, 1.1, 0.9, 1.05, 0.8, 0.6]
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1
                        }}
                      />
                      {/* Cursor Trail 3 */}
                      <motion.div
                        className="absolute w-2 h-2 bg-blue-200/60 rounded-full"
                        style={{ zIndex: 4 }}
                        animate={{
                          x: [0, 150, 300, 225, 75, 0],
                          y: [0, 100, 200, 300, 400, 0],
                          scale: [0.4, 1.3, 0.7, 1.2, 0.6, 0.4]
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1.5
                        }}
                      />
                      {/* Main Cursor - Enhanced */}
                      <motion.div
                        className="absolute w-8 h-8 bg-white rounded-full shadow-2xl flex items-center justify-center border-2 border-blue-500/30"
                        style={{ zIndex: 6 }}
                        animate={{
                          x: [0, 150, 300, 225, 75, 0],
                          y: [0, 100, 200, 300, 400, 0],
                          rotate: [0, 20, -20, 15, -10, 0],
                          scale: [1, 1.1, 0.9, 1.05, 0.95, 1]
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      </motion.div>
                    </>
                  )}

                  {/* Enhanced Drop Rings */}
                  {!isReducedMotion && (
                    <>
                      <motion.div
                        className="absolute w-40 h-40 border-2 border-white/20 rounded-full"
                        style={{
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                          zIndex: 2
                        }}
                        animate={{
                          scale: [0.6, 1.4, 0.6],
                          opacity: [0.2, 0.6, 0.2]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <motion.div
                        className="absolute w-24 h-24 border-2 border-white/30 rounded-full"
                        style={{
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                          zIndex: 2
                        }}
                        animate={{
                          scale: [0.8, 1.2, 0.8],
                          opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1
                        }}
                      />
                    </>
                  )}

                  {/* Interactive Hover Effects */}
                  {!isReducedMotion && (
                    <motion.div
                      className="absolute inset-0"
                      style={{ zIndex: 1 }}
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                    />
                  )}
                </div>

                {/* Enhanced Call Controls Toolbar */}
                <div 
                  className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3 sm:gap-4 md:gap-6 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-full"
                  style={{
                    background: 'rgba(15, 23, 42, 0.85)',
                    backdropFilter: 'blur(12px)',
                    boxShadow: '0 16px 32px rgba(2, 6, 23, 0.45)',
                    zIndex: 5,
                    height: 'auto',
                    minHeight: '48px',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                  role="toolbar"
                  aria-label="Call controls"
                >
                  {/* Mic Button - Enhanced */}
                  <motion.button
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-green-500 flex items-center justify-center transition-all duration-150 hover:scale-102 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
                    style={{ boxShadow: '0 8px 16px rgba(0,0,0,0.3)' }}
                    aria-label="Microphone"
                    role="button"
                    aria-pressed="false"
                    whileHover={{ 
                      scale: 1.08, 
                      boxShadow: '0 12px 24px rgba(0,0,0,0.4)',
                      backgroundColor: '#16a34a'
                    }}
                    whileTap={{ scale: 0.92 }}
                    animate={{
                      boxShadow: [
                        '0 8px 16px rgba(0,0,0,0.3)',
                        '0 12px 24px rgba(34, 197, 94, 0.4)',
                        '0 8px 16px rgba(0,0,0,0.3)'
                      ]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 20 20" fill="white">
                      <path d="M10 1a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                      <path d="M6 9v1a4 4 0 0 0 8 0V9a4 4 0 0 0-8 0z"/>
                      <path d="M8 13v2a2 2 0 0 0 4 0v-2"/>
                    </svg>
                  </motion.button>

                  {/* Camera Button - Enhanced */}
                  <motion.button
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-blue-500 flex items-center justify-center transition-all duration-150 hover:scale-102 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
                    style={{ boxShadow: '0 8px 16px rgba(0,0,0,0.3)' }}
                    aria-label="Camera"
                    role="button"
                    aria-pressed="false"
                    whileHover={{ 
                      scale: 1.08, 
                      boxShadow: '0 12px 24px rgba(0,0,0,0.4)',
                      backgroundColor: '#1d4ed8'
                    }}
                    whileTap={{ scale: 0.92 }}
                    animate={{
                      boxShadow: [
                        '0 8px 16px rgba(0,0,0,0.3)',
                        '0 12px 24px rgba(37, 99, 235, 0.4)',
                        '0 8px 16px rgba(0,0,0,0.3)'
                      ]
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 20 20" fill="white">
                      <path d="M3 6a2 2 0 0 1 2-2h2l2-2h4l2 2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6z"/>
                      <circle cx="10" cy="10" r="3"/>
                    </svg>
                  </motion.button>

                  {/* Participants Button - Enhanced */}
                  <motion.button
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-slate-500 flex items-center justify-center transition-all duration-150 hover:scale-102 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
                    style={{ boxShadow: '0 8px 16px rgba(0,0,0,0.3)' }}
                    aria-label="Participants"
                    role="button"
                    aria-pressed="false"
                    whileHover={{ 
                      scale: 1.08, 
                      boxShadow: '0 12px 24px rgba(0,0,0,0.4)',
                      backgroundColor: '#475569'
                    }}
                    whileTap={{ scale: 0.92 }}
                    animate={{
                      boxShadow: [
                        '0 8px 16px rgba(0,0,0,0.3)',
                        '0 12px 24px rgba(71, 85, 105, 0.4)',
                        '0 8px 16px rgba(0,0,0,0.3)'
                      ]
                    }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 20 20" fill="white">
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                      <path d="M12 14a4 4 0 0 0-8 0v2h8v-2z"/>
                      <path d="M16 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                      <path d="M20 14a4 4 0 0 0-8 0v2h8v-2z"/>
                    </svg>
                  </motion.button>

                  {/* End Call Button - Enhanced */}
                  <motion.button
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-red-500 flex items-center justify-center transition-all duration-150 hover:scale-102 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
                    style={{ boxShadow: '0 8px 16px rgba(0,0,0,0.3)' }}
                    aria-label="End call"
                    role="button"
                    whileHover={{ 
                      scale: 1.08, 
                      boxShadow: '0 12px 24px rgba(0,0,0,0.4)',
                      backgroundColor: '#dc2626'
                    }}
                    whileTap={{ scale: 0.92 }}
                    animate={{
                      boxShadow: [
                        '0 8px 16px rgba(0,0,0,0.3)',
                        '0 12px 24px rgba(220, 38, 38, 0.4)',
                        '0 8px 16px rgba(0,0,0,0.3)'
                      ]
                    }}
                    transition={{
                      duration: 2.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5
                    }}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 20 20" fill="white">
                      <path d="M2 3a1 1 0 0 1 1-1h2.153a1 1 0 0 1 .986.836l.74 4.435a1 1 0 0 1-.54 1.06l-1.548.773a11.037 11.037 0 0 0 6.105 6.105l.774-1.548a1 1 0 0 1 1.059-.54l4.435.74a1 1 0 0 1 .836.986V17a1 1 0 0 1-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>

            <motion.div
              className="absolute bottom-0 left-2 sm:left-4 md:left-6 w-[280px] sm:w-72 md:w-80 bg-white rounded-[18px] p-4 sm:p-5 md:p-6 transform translate-y-4 sm:translate-y-6 md:translate-y-10 hidden sm:block"
              style={{
                boxShadow: "0 20px 48px rgba(16,24,40,0.25)",
              }}
              initial={{ opacity: 0, y: 60, x: -20 }}
              animate={{ opacity: 1, y: 40, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h3 className="text-sm font-semibold text-slate-800 mb-4">AI Interview Score</h3>

              {/* Score ring */}
              <div className="flex items-center justify-center mb-4">
                <div className="relative w-28 h-28">
                  <svg className="w-28 h-28 transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="#E5E7EB" strokeWidth="8" fill="none" />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#22C55E"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - scoreProgress / 100)}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                      animate={{ strokeDashoffset: 2 * Math.PI * 40 * (1 - scoreProgress / 100) }}
                      transition={{ duration: 0.9, delay: 1.4 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-slate-800">93</span>
                  </div>
                </div>
              </div>

              {/* Feedback text */}
              <div className="text-xs text-slate-600">
                <span className="font-bold">AI Feedback:</span>
                <p className="mt-1">
                  Candidate demonstrated strong technical knowledge in Python and JavaScript. Communication skills
                  excellent with clear explanations of complex concepts.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-0 right-2 sm:right-4 md:right-6 w-[280px] sm:w-72 md:w-80 bg-white rounded-[18px] p-4 sm:p-5 md:p-6 transform translate-y-4 sm:translate-y-6 md:translate-y-10 hidden sm:block"
              style={{
                boxShadow: "0 20px 48px rgba(16,24,40,0.25)",
              }}
              initial={{ opacity: 0, y: 60, x: 20 }}
              animate={{ opacity: 1, y: 40, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              {/* Header with status */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-slate-800">Live Transcript</h3>
                <span className="px-2 py-1 bg-[#E8FFF1] text-[#047857] text-xs font-medium rounded-full">Active</span>
              </div>

              {/* Message bubbles */}
              <div className="space-y-3">
                <motion.div
                  className="bg-[#EEF2FF] rounded-xl p-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.6 }}
                >
                  <p className="text-sm text-slate-700">
                    Sure, I focused on the data processing aspects, building pipelines in Python for cleaning video data
                    and preparing it for the neural network training.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white border border-[#E5E7EB] rounded-xl p-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.8 }}
                >
                  <p className="text-sm text-slate-700">
                    Very cool! Could you explain which Python libraries you used for the data processing pipeline?
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
