'use client'

import * as React from 'react'

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
  const [openItem, setOpenItem] = React.useState<string | null>(null)
  const contentRefs = React.useRef<{ [key: string]: HTMLDivElement | null }>({})

  React.useEffect(() => {
    // Update heights when openItem changes
    FAQS.forEach((f) => {
      const content = contentRefs.current[`content-${f.id}`]
      if (content) {
        const isOpen = openItem === f.id
        if (isOpen) {
          // Set to scrollHeight for smooth expansion
          const scrollHeight = content.scrollHeight
          content.style.maxHeight = `${scrollHeight}px`
        } else {
          // Set to 0 for smooth collapse
          content.style.maxHeight = '0px'
        }
      }
    })
  }, [openItem])

  const toggleItem = (id: string) => {
    setOpenItem((prev) => {
      return prev === id ? null : id
    })
  }

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleItem(id)
    }
  }

  return (
    <section
      aria-labelledby="faq-title"
      className="relative py-16 sm:py-20 md:py-24 lg:py-28"
      style={{ background: '#000000' }}
    >
      <div className="mx-auto w-full max-w-[900px] px-4 sm:px-6 md:px-8">
        <div className="text-center">
          <h2 
            id="faq-title" 
            className="text-[32px] sm:text-[36px] font-bold mb-0"
            style={{ color: '#f8f9fa' }}
          >
            Frequently Asked Questions
          </h2>
          <p 
            className="text-base sm:text-lg font-normal mt-4"
            style={{ color: '#b0b3b8', marginBottom: '40px' }}
          >
            Everything you need to know about Nxsus AI
          </p>
        </div>

        <div className="space-y-4 sm:space-y-[18px]">
          {FAQS.map((f) => {
            const isOpen = openItem === f.id
            return (
              <div
                key={f.id}
                id={`faq-${f.id}`}
                className="rounded-[10px] transition-colors duration-200"
                style={{
                  background: isOpen ? '#273049' : '#111827',
                  marginBottom: '0',
                }}
                onMouseEnter={(e) => {
                  if (!isOpen) {
                    e.currentTarget.style.background = '#1f2937'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isOpen) {
                    e.currentTarget.style.background = '#111827'
                  }
                }}
              >
                <button
                  className="w-full flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-[#f8f9fa] rounded-[10px]"
                  style={{
                    padding: '16px 20px',
                  }}
                  onClick={() => toggleItem(f.id)}
                  onKeyDown={(e) => handleKeyDown(e, f.id)}
                  aria-expanded={isOpen}
                  aria-controls={`content-${f.id}`}
                  id={`faq-button-${f.id}`}
                >
                  <span 
                    className="text-base sm:text-lg font-medium text-left pr-4"
                    style={{ color: '#e5e7eb' }}
                  >
                    {f.q}
                  </span>
                  <div className="flex-shrink-0">
                    <svg
                      className="w-5 h-5 transition-transform duration-300 ease-in-out"
                      style={{
                        color: '#e5e7eb',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  ref={(el) => {
                    contentRefs.current[`content-${f.id}`] = el
                  }}
                  id={`content-${f.id}`}
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: '0px',
                  }}
                  role="region"
                  aria-labelledby={`faq-button-${f.id}`}
                >
                  <p 
                    className="px-5 pb-4 pt-0"
                    style={{
                      color: '#e5e7eb',
                      fontSize: '16px',
                      lineHeight: '1.6',
                    }}
                  >
                    {f.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


