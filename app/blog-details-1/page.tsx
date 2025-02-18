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
              Exploring Student Life at Our University
            </h2>
            <p className="text-sm text-gray-600 mb-4">15 Sep, 2024</p>
            <p className="text-base text-gray-800 mb-4" style={{ textAlign: "justify" }}>
              Student life at our university is a vibrant tapestry of academic pursuits, extracurricular activities, and personal growth. From the moment you step onto our campus, you are welcomed into a community that values diversity, inclusivity, and the pursuit of excellence. Our university offers a plethora of opportunities for students to engage, learn, and thrive in an environment that is both challenging and supportive.
            </p>
            <p className="text-base text-gray-800 mb-4" style={{ textAlign: "justify" }}>
              Academically, our university is renowned for its rigorous curriculum and distinguished faculty. Students have access to state-of-the-art facilities, including well-equipped laboratories, extensive libraries, and modern classrooms. The academic programs are designed to foster critical thinking, creativity, and practical skills, preparing students for successful careers in their chosen fields. Additionally, our university offers numerous research opportunities, allowing students to work alongside faculty on groundbreaking projects and contribute to the advancement of knowledge.
            </p>
            <p className="text-base text-gray-800 mb-4" style={{ textAlign: "justify" }}>
              Beyond academics, student life at our university is enriched by a wide array of extracurricular activities. There are over 100 student clubs and organizations catering to diverse interests, from cultural and artistic pursuits to sports and community service. These clubs provide students with the chance to explore their passions, develop leadership skills, and build lasting friendships. Our university also hosts numerous events throughout the year, including cultural festivals, guest lectures, and sports competitions, ensuring that there is always something exciting happening on campus.
            </p>
            <p className="text-base text-gray-800 mb-4" style={{ textAlign: "justify" }}>
              The campus itself is a beautiful and dynamic environment, designed to support the holistic development of students. Green spaces, recreational facilities, and comfortable living accommodations create a welcoming atmosphere where students can relax and recharge. The university's commitment to sustainability is evident in its eco-friendly initiatives, such as recycling programs and energy-efficient buildings, making it a place where students can learn to live responsibly.
            </p>
            <p className="text-base text-gray-800 mb-4" style={{ textAlign: "justify" }}>
              One of the most significant aspects of student life at our university is the sense of community. Students from diverse backgrounds come together to form a supportive network, fostering a sense of belonging and mutual respect. The university's various support services, including counseling, academic advising, and career services, ensure that students have the resources they need to succeed both personally and professionally. Mentorship programs connect students with alumni and industry professionals, providing valuable guidance and networking opportunities.
            </p>
            <p className="text-base text-gray-800 mb-4" style={{ textAlign: "justify" }}>
              In conclusion, student life at our university is a rich and fulfilling experience that goes beyond the classroom. It is a place where students can grow academically, socially, and personally, surrounded by a community that encourages exploration and innovation. Whether you are pursuing academic excellence, engaging in extracurricular activities, or simply enjoying the vibrant campus life, our university offers a unique and transformative journey that prepares you for a bright future.
            </p>
          </article>
        </section>
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}


