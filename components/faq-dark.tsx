'use client'

import * as React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

type Faq = { id: string; q: string; a: string }

const FAQS: Faq[] = [
  { id: 'ai-screening', q: 'How does the AI-powered screening work?', a: 'Our models evaluate skills, experience, and role signals to prioritize candidates. We combine structured responses with conversation cues to produce fair, explainable recommendations.' },
  { id: 'avatar-effectiveness', q: 'Are the avatar interviews as effective as human interviews?', a: 'Yes. They simulate structured, consistent interviews while preserving natural dialogue. Calibration with human reviewers ensures comparable decision quality.' },
  { id: 'data-security', q: 'How secure is candidate data on your platform?', a: 'Data is encrypted in transit and at rest, with strict access controls and audit logging. We follow SOC 2 and GDPR-aligned practices.' },
  { id: 'customize-criteria', q: 'Can I customize the assessment criteria for different roles?', a: 'You can tailor competencies, weightings, and thresholds per role or team, and reuse templates across your org.' },
  { id: 'getting-started', q: 'How quickly can we get started with Nxsus AI?', a: 'Most teams launch within 1–2 weeks. Prebuilt integrations and SSO speed up setup and rollout.' },
  { id: 'support', q: 'What kind of support do you provide?', a: 'Dedicated success manager, priority support, and solution architects for enterprise rollouts.' },
]

export function FaqDark() {
  const prefersReduced = useReducedMotion()
  const [mounted, setMounted] = React.useState(false)
  const [open, setOpen] = React.useState<string | undefined>(undefined)
  const [hovered, setHovered] = React.useState<string | null>(null)
  React.useEffect(() => {
    setMounted(true)
    const hash = window.location.hash.replace('#', '')
    if (hash.startsWith('faq-')) {
      setOpen(hash.slice(4))
    }
  }, [])

  React.useEffect(() => {
    if (!open) return
    const id = `faq-${open}`
    history.replaceState(null, '', `#${id}`)
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: mounted && prefersReduced ? 'auto' : 'smooth', block: 'start' })
  }, [open, prefersReduced, mounted])

  const container = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: prefersReduced ? 0 : 0.07 } },
  }

  const item = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.26, ease: [0.2, 0.8, 0.2, 1] } },
  }

  return (
    <section
      aria-labelledby="faq-title"
      className="relative py-16 sm:py-20 md:py-24 lg:py-28"
      style={{ background: '#0A0E13' }}
    >
      <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 md:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 id="faq-title" className="font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[44px] leading-tight" style={{ lineHeight: 1.1 }}>
            Frequently Asked Questions
          </h2>
          <p className="mx-auto text-base sm:text-lg md:text-xl text-slate-300/90 leading-relaxed max-w-[70ch] mt-3 sm:mt-4" style={{ lineHeight: 1.7 }}>
            Everything you need to know about Nxsus AI
          </p>
        </div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
          className="space-y-4"
          role="list"
        >
          <Accordion type="single" collapsible value={open} onValueChange={(v) => setOpen(v)} className="w-full">
            {FAQS.map((f) => (
              <motion.li key={f.id} variants={item}>
                <AccordionItem
                  value={f.id}
                  id={`faq-${f.id}`}
                  className={cn(
                    'rounded-[16px] border',
                    'transition-colors',
                  )}
                  style={{
                    background: open === f.id ? '#122036' : hovered === f.id ? '#101E33' : '#0F1A2B',
                    borderColor: 'rgba(255,255,255,0.06)',
                    boxShadow: '0 16px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)',
                  }}
                  onMouseEnter={() => setHovered(f.id)}
                  onMouseLeave={() => setHovered((h) => (h === f.id ? null : h))}
                >
                  <div className="px-6 py-5 md:px-6" style={{ paddingBottom: open === f.id ? 22 : 12 }}>
                    <div role="heading" aria-level={3} className="flex items-start">
                      <AccordionTrigger
                        className={cn(
                          'group relative flex w-full items-center justify-between text-left font-bold outline-none [&>svg]:hidden pr-14',
                          'focus-visible:ring-2 focus-visible:ring-[#7E3AF2] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-[12px]',
                        )}
                        style={{ color: '#E5E7EB', fontSize: 17, lineHeight: 1.4 }}
                        aria-controls={`faq-panel-${f.id}`}
                        aria-expanded={open === f.id}
                      >
                        <span className="pr-6">{f.q}</span>
                        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center" aria-hidden>
                          <svg
                            className="h-5 w-5 shrink-0 transition-transform"
                            style={{
                              color: open === f.id || hovered === f.id ? '#C5D2E3' : '#97A6BA',
                              transform: !prefersReduced && open === f.id ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform 220ms cubic-bezier(.2,.8,.2,1)',
                            }}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </span>
                      </AccordionTrigger>
                    </div>

                    <AccordionContent asChild>
                      <div
                        id={`faq-panel-${f.id}`}
                        role="region"
                        aria-labelledby={`faq-${f.id}`}
                        className="overflow-hidden"
                        style={{
                          color: '#A8B3C5',
                          fontSize: 16,
                          lineHeight: 1.75,
                          transition: 'opacity 260ms cubic-bezier(.2,.8,.2,1), transform 260ms cubic-bezier(.2,.8,.2,1), background-color 220ms',
                          opacity: open === f.id ? 1 : 0,
                          transform: prefersReduced ? 'none' : open === f.id ? 'translateY(0)' : 'translateY(6px)',
                        }}
                      >
                        <div className="pt-3 pr-2" style={{ maxWidth: '85ch' }}>{f.a}</div>
                      </div>
                    </AccordionContent>
                  </div>

                  {open === f.id && (
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-[16px]"
                      style={{
                        background:
                          'linear-gradient(90deg, rgba(126,58,242,.35), rgba(14,165,233,.35))',
                      }}
                    />
                  )}
                </AccordionItem>
              </motion.li>
            ))}
          </Accordion>
        </motion.ul>
      </div>
    </section>
  )
}


