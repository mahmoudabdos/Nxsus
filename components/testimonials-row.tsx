"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/animated-section"
import { Star } from "lucide-react"

export function TestimonialsRow() {
  const testimonials = [
    {
      quote:
        "Nxsus AI reduced our time-to-hire by 60% while improving candidate quality. The AI-powered screening is incredibly accurate and saves our team countless hours.",
      name: "Sarah Johnson",
      role: "Head of Talent",
      company: "TechCorp",
      avatar: "/sarah-johnson-avatar.jpg",
    },
    {
      quote:
        "The avatar interviews are game-changing. Our candidates love the consistency and fairness, while we get detailed insights we never had before.",
      name: "Michael Chen",
      role: "VP Engineering",
      company: "StartupXYZ",
      avatar: "/michael-chen-avatar.jpg",
    },
    {
      quote:
        "Scaling our hiring across 15 countries was a nightmare until Nxsus AI. Now we have consistent, compliant processes everywhere with amazing results.",
      name: "Emily Rodriguez",
      role: "CHRO",
      company: "Global Enterprise",
      avatar: "/emily-rodriguez-avatar.jpg",
    },
  ]

  return (
    <div className="max-w-[1200px] mx-auto px-8 md:px-8 py-20 md:py-24 space-y-12">
      {/* Section Header */}
      <AnimatedSection className="text-center space-y-3 md:space-y-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 text-balance leading-tight">
          Discover how customers streamline hiring and elevate talent acquisition — and why they love Nxsus.
        </h2>
        <p className="text-lg text-ink-900/70 max-w-2xl mx-auto text-pretty">
          See what our customers say about transforming their hiring process.
        </p>
      </AnimatedSection>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-3 gap-7 md:gap-8 mt-10 md:mt-12">
        {testimonials.map((testimonial, index) => (
          <AnimatedSection key={index} delay={index * 0.08}>
            <motion.div
              whileHover={{ y: -2, boxShadow: "0 20px 45px rgba(16,24,40,0.12)" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Card className="p-6 bg-white rounded-[18px] border-0 shadow-[0_18px_40px_rgba(16,24,40,0.08)] hover:shadow-[0_20px_45px_rgba(16,24,40,0.12)] transition-all duration-300 space-y-5 h-full">
                {/* Author Header */}
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="w-12 h-12 rounded-full overflow-hidden bg-surface-50 flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src={testimonial.avatar || "/placeholder.svg?height=160&width=160&query=professional headshot"}
                      alt={`Headshot of ${testimonial.name}`}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-[15px] text-ink-900 leading-tight">{testimonial.name}</div>
                    <div className="text-[13px] text-ink-900/60 leading-tight mt-0.5">
                      {testimonial.role}, {testimonial.company}
                    </div>
                    <div className="flex items-center space-x-0.5 mt-2" aria-hidden="true">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="sr-only">5 star rating</span>
                  </div>
                </div>

                {/* Quote */}
                <div className="space-y-4">
                  <p className="text-[14px] md:text-[15px] text-ink-900/80 leading-[1.6] text-balance">
                    "{testimonial.quote}"
                  </p>
                </div>
              </Card>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="#customer-stories"
          className="text-sm text-violet-600 hover:text-violet-700 transition-colors duration-200"
        >
          Read full customer stories →
        </a>
      </div>
    </div>
  )
}
