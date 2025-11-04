"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "framer-motion"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"

export function FeatureGrid() {
  const features = [
    {
      title: "1. Real-Time Metrics That Track Growth",
      description:
        "Nxsus dashboards + Nora’s analytics show you speed-to-hire, efficiency, and cost-per-hire, so you can scale smart while protecting your runway.",
      image: "/assets/cb-n6-2.jpg",
      tintColor: "bg-gradient-to-br from-fuchsia-50 to-cyan-50",
    },
    {
      title: "2. Smart Talent Discovery for Lean Teams",
      description:
        "Forget endless searches. Nxsus finds top talent instantly, so your core team can focus on building, not filtering.",
      image: "/assets/cb-n6-3.jpg",
      tintColor: "bg-gradient-to-br from-blue-50 to-sky-50",
    },
    {
      title: "3. AI Screening That Scales With You",
      description:
        "\"Nora\", your AI Assistant, handles first-round interviews, pre-screens candidates, and shortlists the best — giving your team back hours every week.",
      image: "/assets/cb-n6-4.jpg",
      tintColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
    },
    {
      title: "4. Plug-and-Play Assessments & Checks",
      description:
        "Validate candidates faster using Nxsus’s built-in tests and automated reference checks — no setup, no delay.",
      image: "/assets/cb-n6-5.jpg",
      tintColor: "bg-gradient-to-br from-amber-50 to-orange-50",
    },
    {
      title: "5. Data That Fuels Better Hiring Decisions",
      description:
        "Get instant clarity with insights — from skill gaps and red flags to culture fit. Every decision backed by data, not guesswork.",
      image: "/assets/cb-n6-6.jpg",
      tintColor: "bg-gradient-to-br from-violet-50 to-indigo-50",
    },
    // Optional: a sixth card if you want the grid filled out evenly
    {
      title: "Powered by Nxsus + Nora",
      description:
        "Automation that understands context, designed to speed up hiring while keeping it fair and human.",
      image: "/assets/cb-n6.jpg",
      tintColor: "bg-gradient-to-br from-slate-50 to-stone-50",
    },
  ]

  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>
      
      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center space-y-4 mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 text-violet-700 border border-violet-100 mb-4 dark:bg-violet-950/30 dark:text-violet-200 dark:border-violet-900">
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
            <span className="text-sm font-medium">Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white text-balance">Features and key Benefits</h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-800 dark:text-slate-200 text-balance">
            Finally, An HR System That Actually Works for You
          </h3>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-[70ch] mx-auto text-pretty leading-relaxed">
            Transform the way you hire with Nxsus, where automation meets understanding to make every hiring decision faster, fairer, and more human.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-7">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 0.08}>
              <motion.div
                whileHover={{
                  y: -3,
                  scale: 1.02,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                className="h-full"
              >
                <Card
                  className={`group relative rounded-2xl border border-slate-200 dark:border-white/10 ${feature.tintColor} dark:bg-slate-900/40 backdrop-blur-sm shadow-sm hover:shadow-xl transition-all duration-300 p-5 lg:p-6 h-full flex flex-col overflow-hidden`}
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/40 dark:from-white/0 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-violet-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative mb-4 lg:mb-5 z-10">
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                      <AspectRatio ratio={1} className="rounded-xl overflow-hidden bg-transparent dark:bg-gradient-to-br dark:from-[#131326] dark:to-[#3E3A7A] shadow-inner">
                        <Image
                          src={feature.image || "/placeholder.svg"}
                          alt={feature.title.split(" –")[0]}
                          fill
                          sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
                          className="object-contain"
                          priority={false}
                        />
                      </AspectRatio>
                    </motion.div>
                  </div>

                  <div className="relative flex flex-col h-full space-y-4 z-10">
                    <h3 className="text-lg lg:text-xl font-semibold text-slate-900 dark:text-slate-100 leading-tight group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors duration-300">{feature.title}</h3>
                    <p className="text-sm lg:text-base text-slate-700 dark:text-slate-300 leading-relaxed">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>


      </div>
    </section>
  )
}
