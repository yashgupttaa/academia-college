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
              Unveiling the Best Campus Resources for Students
            </h2>
            <p className="text-sm text-gray-600 mb-4">25 Oct, 2024</p>
            <p className="text-base text-gray-800 mb-4" style={{ textAlign: "justify" }}>
              A university campus is more than just a place for academic learning; it is a vibrant ecosystem that provides a plethora of resources to support students in their educational journey and personal development. At our university, we pride ourselves on offering some of the best campus resources that cater to the diverse needs of our student body. From state-of-the-art facilities to comprehensive support services, our campus is designed to enhance the student experience in every possible way.
            </p>
            <p className="text-base text-gray-800 mb-4" style={{ textAlign: "justify" }}>
              One of the standout features of our campus is the extensive library system. Our libraries are equipped with a vast collection of books, journals, and digital resources that cover a wide range of subjects. Students have access to quiet study areas, collaborative workspaces, and advanced research tools. The library staff are always on hand to assist with research queries and provide guidance on academic writing and citation practices. Additionally, our online library portal allows students to access resources remotely, ensuring that they have the information they need at their fingertips.
            </p>
            <p className="text-base text-gray-800 mb-4" style={{ textAlign: "justify" }}>
              For students pursuing scientific and technical disciplines, our campus boasts cutting-edge laboratories and research facilities. These labs are equipped with the latest technology and equipment, enabling students to conduct experiments and engage in hands-on learning. Our university also collaborates with industry partners to provide students with opportunities to work on real-world projects and gain practical experience. This integration of academic learning with practical application is a hallmark of our commitment to producing well-rounded graduates.
            </p>
            <p className="text-base text-gray-800 mb-4" style={{ textAlign: "justify" }}>
              In addition to academic resources, our campus offers a range of support services to ensure the well-being and success of our students. The Student Counseling Center provides confidential counseling services to help students navigate personal and academic challenges. Our career services office offers career counseling, resume workshops, and job placement assistance to help students prepare for their future careers. We also have a dedicated health center that provides medical services, wellness programs, and health education to promote a healthy campus community.
            </p>
            <p className="text-base text-gray-800 mb-4" style={{ textAlign: "justify" }}>
              Extracurricular activities are an integral part of the student experience, and our campus is home to a wide array of student clubs and organizations. Whether you are interested in sports, arts, culture, or community service, there is a club for you. These organizations provide students with opportunities to develop leadership skills, pursue their passions, and build lasting friendships. Our campus also hosts numerous events throughout the year, including cultural festivals, guest lectures, and sports competitions, ensuring that there is always something exciting happening.
            </p>
            <p className="text-base text-gray-800 mb-4" style={{ textAlign: "justify" }}>
              The physical environment of our campus is designed to support the holistic development of students. Green spaces, recreational facilities, and comfortable living accommodations create a welcoming atmosphere where students can relax and recharge. Our commitment to sustainability is evident in our eco-friendly initiatives, such as recycling programs and energy-efficient buildings. These efforts not only create a pleasant campus environment but also teach students the importance of environmental stewardship.
            </p>
            <p className="text-base text-gray-800 mb-4" style={{ textAlign: "justify" }}>
              In conclusion, our university is dedicated to providing the best campus resources to support the academic, personal, and professional growth of our students. From top-notch academic facilities to comprehensive support services and vibrant extracurricular opportunities, our campus is a place where students can thrive. We are committed to creating an environment that fosters learning, innovation, and community, ensuring that our students have the resources they need to succeed in their academic journey and beyond.
            </p>
          </article>
        </section>
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}


