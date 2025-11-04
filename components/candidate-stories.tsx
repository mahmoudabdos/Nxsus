import Image from "next/image"
import { Card } from "@/components/ui/card"

export function CandidateStories() {
  const candidateStories = [
    {
      image: "/public/assets/cand1.webp",
      name: "Alex Thompson",
      role: "Software Engineer",
      caption: "How AI interviews helped me showcase my problem-solving skills",
    },
    {
      image: "/public/assets/cand2.webp",
      name: "Maria Garcia",
      role: "Product Manager",
      caption: "The conversational approach made me feel more comfortable and confident",
    },
    {
      image: "/public/assets/cand3.webp",
      name: "David Kim",
      role: "Data Scientist",
      caption: "I could demonstrate my expertise through natural dialogue",
    },
  ]

  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <h2 className="heading-2 text-ink-900 text-balance">Why Candidates Love Nexus</h2>
        <p className="body-large text-ink-900/70 max-w-2xl mx-auto text-pretty">
          Hear directly from candidates about their experience with our AI-powered interview process.
        </p>
      </div>

      {/* Candidate Stories Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {candidateStories.map((story, index) => (
          <Card
            key={index}
            className="group relative overflow-hidden rounded-2xl bg-white border border-surface-50 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={story.image || "/placeholder.svg"}
                alt={`${story.name} candidate story`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-300">
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-violet-400 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-3">
              <div>
                <h3 className="font-semibold text-ink-900">{story.name}</h3>
                <p className="text-sm text-ink-900/60">{story.role}</p>
              </div>
              <p className="text-sm text-ink-900/70 leading-relaxed">{story.caption}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
