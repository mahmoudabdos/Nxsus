"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/animated-section"

const faqs = [
  {
    question: "How does Nexus AI improve our hiring process?",
    answer:
      "Nexus AI uses advanced machine learning to analyze candidate profiles, predict job fit, and automate initial screening. This reduces time-to-hire by 75% while improving candidate quality through intelligent matching algorithms.",
  },
  {
    question: "What integrations are available with existing ATS systems?",
    answer:
      "We integrate seamlessly with 50+ ATS platforms including Workday, BambooHR, Greenhouse, and Lever. Our API-first approach ensures smooth data flow and maintains your existing workflows while adding AI capabilities.",
  },
  {
    question: "Is candidate data secure and compliant?",
    answer:
      "Yes, we maintain SOC 2 Type II certification, GDPR compliance, and enterprise-grade encryption. All candidate data is processed securely with full audit trails and configurable retention policies.",
  },
  {
    question: "How quickly can we see results after implementation?",
    answer:
      "Most clients see initial improvements within 2 weeks of implementation. Full optimization typically occurs within 30-45 days as our AI learns your specific hiring patterns and preferences.",
  },
  {
    question: "What support is provided during onboarding?",
    answer:
      "We provide dedicated customer success managers, comprehensive training programs, and 24/7 technical support. Our team ensures smooth integration with your existing processes and ongoing optimization.",
  },
  {
    question: "Can Nexus AI handle high-volume recruiting?",
    answer:
      "Absolutely. Our platform scales to process thousands of applications simultaneously while maintaining accuracy. Enterprise clients regularly handle 10,000+ candidates per month with consistent performance.",
  },
]

export function FaqAccordion() {
  return (
    <div className="max-w-4xl mx-auto">
      <AnimatedSection className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Get answers to common questions about implementing Nexus AI in your recruitment process.
        </p>
      </AnimatedSection>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <AnimatedSection key={index} delay={index * 0.1}>
            <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
              <AccordionItem
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 py-2 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-200"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">{faq.answer}</AccordionContent>
              </AccordionItem>
            </motion.div>
          </AnimatedSection>
        ))}
      </Accordion>
    </div>
  )
}
