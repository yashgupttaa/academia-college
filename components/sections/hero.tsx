import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen">
      {/* Background Image with Clean Overlay */}
      <div
        className="absolute inset-0 z-0 bg-overlay-effect"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2186&q=80")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Simple Semi-transparent Overlay */}
        <div className="absolute bg-[#B2D8D8]/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="max-w-3xl hero-content">
          <h2 className="text-xl font-medium mb-4 tracking-wide text-white">WELCOME TO ACADEMIA</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
            EXPERIENCE EDUCATION THAT TRANSFORMS YOUR FUTURE
          </h1>
          <p className="text-lg mb-8 text-white/90 max-w-lg">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
            blind texts.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-red-color text-white border-none font-bold p-5">
              GET STARTED NOW <ArrowRight className="ml-2" size={16} />
            </Button>
            <Button variant="outline" className="bg-white border-white red-color font-bold hover:bg-white p-5">
              VIEW COURSE <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

