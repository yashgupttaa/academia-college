import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Newsletter } from "@/components/sections/newsletter"

export default function BlogDetailsPage() {
 
  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-screen mb-8">
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
              <h1 className="largest-font font-bold mb-3 leading-tight text-white">
                About Academic
              </h1>
              <p className="smallest-font mb-8 text-white/90 max-w-lg">
                A Legacy of Learning, A Future of Possibilities – Get to Know Us.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-red-color text-white border-none rounded-none font-semibold smaller-font px-5 py-2">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto lg:px-40 py-16 px-0">
          <article className="mb-8">
            <h2 className="text-2xl font-bold mb-2">
              Navigating the Path To Top MBA Colleges in India and Private Universities in Gurgaon
            </h2>
            <p className="text-sm text-gray-600 mb-4">21 Aug, 2024</p>
            <p className="text-base text-gray-800 mb-4" style={{ textAlign: "justify" }}>
              Getting an MBA is a big step for those who want to become successful in the business environment, but the way to choosing the correct university may be challenging. It is a comparison between the best MBA colleges in India and the choice of a private university in Gurgaon – each having its own pros and cons.
            </p>
            <p className="text-base text-gray-800 mb-4" style={{ textAlign: "justify" }}>
              There are many MBA colleges in India which are highly reputed for their course curriculum, faculty, and alumni base. These institutions enroll students from all parts of the country and sometimes the world, hence the competition is huge. On the other hand, the private universities have started coming up in Gurgaon and are also posing a good competition in the education sector.
            </p>
            <h3 className="text-xl font-semibold mb-2">The Challenges of Selecting the Right Institution</h3>
            <p className="text-base text-gray-800 mb-4" style={{ textAlign: "justify" }}>
              <strong>Competition and Admission Pressure:</strong> The best MBA colleges in India are very reputed and the entrance examination tests are very tough. To get a seat in these institutions even after months of preparation, the competition is usually very stiff. Private universities in Gurgaon are comparatively more open to admitting students, yet they also may pose some difficulties in terms of the proper choice of a university to meet your career objectives.
            </p>
            <p className="text-base text-gray-800 mb-4" style={{ textAlign: "justify" }}>
              <strong>Cost and Return on Investment (ROI):</strong> The other challenge is the cost of education. Although there are Top MBA colleges in India that offer promising career prospects, the fee structure is high and so is the concern of ROI. The idea is to evaluate the perspective of getting a job, the contacts that one gets, and the quality of education to justify the investment made.
            </p>
            <p className="text-base text-gray-800 mb-4" style={{ textAlign: "justify" }}>
              <strong>Location and Campus Facilities:</strong> Another factor to consider is the location of the institution and the facilities it offers. Being in a metropolitan area like Gurgaon can provide students with numerous networking opportunities and exposure to industry leaders. However, it is also important to consider the campus facilities, such as libraries, labs, and recreational areas, which can greatly enhance the learning experience.
            </p>
            <p className="text-base text-gray-800 mb-4" style={{ textAlign: "justify" }}>
              <strong>Alumni Network and Industry Connections:</strong> A strong alumni network can be a significant advantage for students, providing mentorship, job opportunities, and industry insights. Top MBA colleges in India often boast extensive alumni networks that can be invaluable for career advancement. Private universities in Gurgaon are also building their networks, offering students a chance to connect with professionals in various fields.
            </p>
          </article>
        </section>
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}


