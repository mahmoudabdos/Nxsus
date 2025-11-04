'use client'

import * as React from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

type Testimonial = {
  id: string
  thumbSrc: string
  alt: string
  quote: string
  videoSrc?: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    thumbSrc: '/assets/candidate-1.jpg',
    alt: 'Candidate video thumbnail.',
    quote: '"How AI interviews helped me showcase my problem-solving skills"',
  },
  {
    id: 't2',
    thumbSrc: '/assets/candidate-2.jpg',
    alt: 'Candidate video thumbnail.',
    quote: '"The conversational approach made me feel more comfortable and confident"',
  },
  {
    id: 't3',
    thumbSrc: '/assets/candidate-3.jpg',
    alt: 'Candidate video thumbnail.',
    quote: '"I could demonstrate my expertise through natural dialogue"',
  },
  {
    id: 't4',
    thumbSrc: '/assets/candidate-4.jpg',
    alt: 'Candidate video thumbnail.',
    quote: '"Nexus respected my time and let my skills shine."',
  },
]

function HeartIcon() { return null }

export function VideoTestimonials() {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [mounted, setMounted] = React.useState(false)
  const [openLightboxFor, setOpenLightboxFor] = React.useState<string | null>(
    null,
  )
  const prefersReduced = useReducedMotion()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.42, ease: [0.22, 0.8, 0.2, 1] },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.48,
        ease: [0.22, 0.8, 0.2, 1],
        delay: prefersReduced ? 0 : 0.09 * i,
      },
    }),
  }

  React.useEffect(() => {
    if (!mounted || prefersReduced) return
    let id: number | undefined
    const start = () => {
      id = window.setInterval(() => {
        setActiveIndex((i) => (i + 1) % TESTIMONIALS.length)
      }, 6000)
    }
    const stop = () => {
      if (id) window.clearInterval(id)
    }
    start()
    const section = document.getElementById('video-testimonials-title')?.closest('section')
    section?.addEventListener('mouseenter', stop)
    section?.addEventListener('mouseleave', start)
    section?.addEventListener('focusin', stop)
    section?.addEventListener('focusout', start)
    return () => {
      stop()
      section?.removeEventListener('mouseenter', stop)
      section?.removeEventListener('mouseleave', start)
      section?.removeEventListener('focusin', stop)
      section?.removeEventListener('focusout', start)
    }
  }, [prefersReduced, mounted])

  return (
    <section
      aria-labelledby="video-testimonials-title"
      className="relative bg-white"
      style={{ paddingTop: 96, paddingBottom: 112 }}
    >
      <div
        className="mx-auto w-full"
        style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32 }}
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={container}
          className="text-center"
        >
          <h2
            id="video-testimonials-title"
            className="font-extrabold tracking-[-0em] text-[#0F172A]"
            style={{ fontSize: 44, lineHeight: 1.1 }}
          >
            Why Candidates Love Nexus
          </h2>
          <p
            className="mx-auto text-[#475569]/90"
            style={{ fontSize: 18, lineHeight: 1.7, maxWidth: '70ch', marginTop: 14 }}
          >
            Hear directly from candidates about their experience with our AI-powered interview process.
          </p>
        </motion.div>

        <div style={{ height: 52 }} />

        <Carousel
          opts={{ align: 'start', loop: false }}
          className="relative"
          aria-label="Candidate video testimonials carousel"
        >
          <CarouselContent
            className={cn(
              'gap-4 md:gap-6 lg:gap-8',
              'px-0',
            )}
          >
            {TESTIMONIALS.map((t, idx) => (
              <CarouselItem
                key={t.id}
                className={cn(
                  'basis-full sm:basis-2/3 md:basis-1/2 lg:basis-1/3',
                )}
              >
                <motion.article
                  custom={idx}
                  initial={prefersReduced ? undefined : 'hidden'}
                  whileInView={prefersReduced ? undefined : 'show'}
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                  className="mx-auto w-full max-w-[360px] overflow-hidden rounded-[18px] bg-white shadow-[0_18px_40px_rgba(2,6,23,0.10)]"
                  style={{ minWidth: 280 }}
                >
                  <div className="relative">
                    <div className="relative w-full overflow-hidden" style={{ aspectRatio: '4 / 3' }}>
                      <Image
                        src={t.thumbSrc}
                        alt={t.alt}
                        fill
                        sizes="(min-width: 1024px) 360px, (min-width: 768px) 320px, 100vw"
                        className={cn(
                          'object-cover',
                          prefersReduced ? '' : 'transition-transform duration-200 ease-linear group-hover:scale-[1.03]'
                        )}
                        style={{ objectPosition: '50% 45%' }}
                        priority={idx < 3}
                      />
                      {!prefersReduced && (
                        <div
                          aria-hidden
                          className="pointer-events-none absolute inset-0"
                          style={{
                            background:
                              'linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0) 30%)',
                          }}
                        />
                      )}
                    </div>

                    <button
                      type="button"
                      aria-label={openLightboxFor === t.id ? 'Pause testimonial video' : 'Play testimonial video'}
                      onClick={() => setOpenLightboxFor(t.id)}
                      className={cn(
                        'group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
                        'grid place-items-center rounded-full bg-white active:scale-95',
                      )}
                      style={{
                        width: 64,
                        height: 64,
                        boxShadow: '0 10px 20px rgba(2,6,23,0.18)',
                      }}
                    >
                      <span
                        aria-hidden
                        className={cn(
                          'inline-block',
                          prefersReduced ? '' : 'transition-transform duration-200 will-change-transform'
                        )}
                        style={{ transform: 'translateY(-2px)' }}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#7E3AF2">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                      <span className="absolute inset-0 rounded-full ring-0 focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:ring-offset-2" />
                      {!prefersReduced && (
                        <span
                          aria-hidden
                          className="pointer-events-none absolute -inset-1 rounded-full"
                          style={{ boxShadow: '0 0 0 6px rgba(126,58,242,0.12)' }}
                        />
                      )}
                    </button>
                  </div>

                  <div className="bg-[#F3F4F6] p-4 sm:p-5 md:[&]:p-[21px] rounded-b-[18px]">
                    <p className="text-center text-[16px] font-semibold leading-[1.6] text-[#111827]">
                      {t.quote}
                    </p>
                  </div>
                </motion.article>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            className={cn(
              'h-14 w-14 rounded-full bg-white shadow-[0_10px_20px_rgba(2,6,23,0.18)]',
              'hover:scale-[1.03] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:ring-offset-2',
              'disabled:opacity-40',
            )}
          />
          <CarouselNext
            className={cn(
              'h-14 w-14 rounded-full bg-white shadow-[0_10px_20px_rgba(2,6,23,0.18)]',
              'hover:scale-[1.03] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:ring-offset-2',
              'disabled:opacity-40',
            )}
          />
        </Carousel>
      </div>

      {openLightboxFor && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Testimonial video"
          className="fixed inset-0 z-[60] grid place-items-center"
          onClick={() => setOpenLightboxFor(null)}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div
            className="relative z-[61] w-[90vw] max-w-[900px] overflow-hidden rounded-[16px] bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative" style={{ aspectRatio: '16 / 9' }}>
              <Image
                src={TESTIMONIALS.find((t) => t.id === openLightboxFor)?.thumbSrc || '/placeholder.jpg'}
                alt=""
                fill
                className="object-cover opacity-80"
              />
              <button
                type="button"
                aria-label="Close"
                className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-[#0F172A] shadow"
                onClick={() => setOpenLightboxFor(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}





