"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/animated-section"

export function BottomCtaNora() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      <div className="content-width page-gutters relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <AnimatedSection>
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-8"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="w-8 h-8 text-primary" />
            </motion.div>
          </AnimatedSection>

          {/* Heading */}
          <AnimatedSection delay={0.2}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Ready to Transform Your
              <span className="text-primary block">Hiring Process?</span>
            </h2>
          </AnimatedSection>

          {/* Description */}
          <AnimatedSection delay={0.4}>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
              Join 500+ companies using Nexus AI to hire faster, smarter, and more efficiently. Start your free trial
              today and see results in just 2 weeks.
            </p>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection delay={0.6}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
              {[
                { value: "75%", label: "Faster Hiring" },
                { value: "90%", label: "Candidate Satisfaction" },
                { value: "65%", label: "Cost Reduction" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold group"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="border-2 px-8 py-6 text-lg font-semibold bg-transparent">
                  Schedule Demo
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Trust indicators */}
          <AnimatedSection delay={1.0}>
            <div className="mt-12 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">Trusted by leading companies worldwide</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {["TechCorp", "InnovateLabs", "FutureWorks", "ScaleUp Inc"].map((company, index) => (
                  <motion.div
                    key={company}
                    className="text-lg font-semibold"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 0.6, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ opacity: 1, scale: 1.05 }}
                  >
                    {company}
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
