import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen mb-16">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("/about-bg.webp")',
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
            <div className="max-w-3xl hero-content">
              {/* <h2 className="text-xl font-medium mb-4 tracking-wide text-white">WELCOME TO ACADEMIA</h2> */}
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                About Academia
              </h1>
              <p className="text-lg mb-8 text-white/90 max-w-lg">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-red-color text-white border-none font-bold text-lg p-5 font-light">
                  Apply Now <ArrowRight className="ml-2" size={16} />
                </Button>
                {/* <Button variant="outline" className="bg-white border-white red-color font-bold hover:bg-white p-5">
                  VIEW COURSE <ArrowRight className="ml-2" size={16} />
                </Button> */}
              </div>
            </div>
          </div>
        </section>



        {/* About Content */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img
                src="/about-text-bg.webp"
                alt="Campus Life"
                className=""
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">About Academia</h2>
              <p className="text-xl font-semibold mb-4 blue-color">
                Established in 1993 under the aegis of the Ram Krishan & Sons Charitable Trust, IILM brings 30 years of experience in shaping future entrepreneurs and managers. It has earned a reputation as one of the most distinguished universities in the Delhi NCR region.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                IILM University was founded under the Uttar Pradesh Private University (Amendment) Act 2022, with a vision to be Global, Inclusive, and Responsible.
              </p>

              <p className="text-gray-600 text-lg mb-4">
                Situated in Knowledge Park II, Greater Noida, the university boasts a sprawling 26-acre campus equipped with state-of-the-art facilities. IILM’s prime locations in New Delhi, Gurugram, and Greater Noida ensure central accessibility, offering students safe, secure, and vibrant campuses.
              </p>
            </div>

          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-5 bg-[#81202c]">
          <div className="grid md:grid-cols-4">
            <div>
              <p className="blue-color text-xl pb-4">Deliver Holistic Education focusing on Intellectual Rigor and Experiential Learning</p>
              <p className="text-lg text-white">To provide an education that prepares students for successful careers by combining intellectual rigour with experiential activities that prepare students to adapt and thrive in dynamic real-world contexts.</p>
            </div>
          </div>
        </section>

        {/* Recognition & Accreditation */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Recognition & Accreditation</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <img src="/placeholder.svg?height=100&width=100" alt="UGC" className="w-24 h-24 mx-auto mb-4" />
              <p className="font-semibold">UGC Approved</p>
            </div>
            <div className="text-center">
              <img src="/placeholder.svg?height=100&width=100" alt="NAAC" className="w-24 h-24 mx-auto mb-4" />
              <p className="font-semibold">NAAC A++ Grade</p>
            </div>
            <div className="text-center">
              <img src="/placeholder.svg?height=100&width=100" alt="NBA" className="w-24 h-24 mx-auto mb-4" />
              <p className="font-semibold">NBA Accredited</p>
            </div>
            <div className="text-center">
              <img src="/placeholder.svg?height=100&width=100" alt="NIRF" className="w-24 h-24 mx-auto mb-4" />
              <p className="font-semibold">NIRF Ranked</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}


