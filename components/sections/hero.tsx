import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="/virtual_tour.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute  bg-[#B2D8D8]/75" />
      </div>

      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="max-w-3xl hero-content">
          <h1 className="largest-font font-bold mb-3 leading-tight text-white">
            EXPERIENCE EDUCATION THAT TRANSFORMS YOUR FUTURE
          </h1>
          <p className="smallest-font mb-8 text-white/90 max-w-lg">
            Empowering Minds, Shaping Futures – Welcome to Academic College!
          </p>
          <div className="flex flex-wrap gap-4">
            <Link className="bg-red-color text-white border-none rounded-none font-semibold smaller-font px-5 py-2 flex items-center" href='/admissions'>
              GET STARTED NOW <ArrowRight className="ml-2" size={14} />
            </Link>
            <Link className="bg-red-color text-white border-none rounded-none font-semibold smaller-font px-5 py-2 flex items-center" href='/courses'>
              VIEW COURSE <ArrowRight className="ml-2" size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

