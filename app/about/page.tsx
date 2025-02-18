import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Newsletter } from "@/components/sections/newsletter"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About Us | Academic College",
  description: "Discover the legacy, vision, and values of Academic College. Learn how we empower students through excellence in education and innovation.",
};

export default function AboutPage() {
  const learning = [
    {
      title: "Deliver Holistic Education focusing on Intellectual Rigor and Experiential Learning",
      para: "To provide an education that prepares students for successful careers by combining intellectual rigour with experiential activities that prepare students to adapt and thrive in dynamic real-world contexts."
    },
    {
      title: "Enhance Cognitive Flexibility",
      para: "To equip students with the ability to think critically and make sound decisions in a rapidly evolving world thereby developing students’ adaptability and entrepreneurial mindset to thrive in uncertainty and drive innovative solutions."
    },
    {
      title: "Encourage Innovation, Research and Knowledge Advancement",
      para: "To promote a culture of innovation, experimentation, scholarly research and creative pursuits, encouraging students to challenge assumptions, seek creative solutions contribute to societal betterment and advancement of knowledge."
    },
    {
      title: "Enhance Digital Literacy and Competency",
      para: "To equip students with the skills to use digital tools to evaluate, filter, and analyse digital content for credibility, relevance, and accuracy, for both career readiness and personal tasks, ensuring that technology empowers them in all aspects of life."
    },
    {
      title: "Cultivate Teamwork and Communication Skills",
      para: "To enhance teamwork and communication by fostering clear, efficient exchanges of information and encouraging active listening, enabling students to collaborate effectively in diverse teams and work environments."
    },
    {
      title: "Engage in Community-Based Learning",
      para: "To provide opportunities for service learning, internships, and other community-based activities, fostering meaningful partnerships at local, national, and international levels."
    }, {
      title: "Foster an Inclusive and Socially Responsible Community",
      para: "To cultivate a diverse and inclusive community committed to social responsibility, global awareness, and civic engagement."
    },
    {
      title: "Prepare Responsible Global Citizens and Leaders",
      para: "We provide students with the knowledge, skills, and experiences needed to make a positive impact and take on leadership roles globally."
    }, {
      title: "Promote Sustainability and Environmental Responsibility",
      para: "Committed to sustainability by implementing environmentally friendly practices and reducing the college’s ecological footprint."
    },
    {
      title: "Support Self-directed and Continuous Learning",
      para: "We provide an environment that empowers students to take control of their educational journey, fostering independence and a culture of lifelong learning."
    }
  ]
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
              <h2 className="larger-font font-bold mb-5 text-[#303030]">About Academic</h2>
              <p className="smallest-font font-semibold mb-4 blue-color">
                Established in 1993 under the aegis of the Ram Krishan & Sons Charitable Trust, Academic brings 30 years of experience in shaping future entrepreneurs and managers. It has earned a reputation as one of the most distinguished colleges in the Delhi NCR region.
              </p>
              <p className="text-gray-600 smallest-font mb-4">
                Academic College was founded under the Uttar Pradesh Private College (Amendment) Act 2022, with a vision to be Global, Inclusive, and Responsible.
              </p>

              <p className="text-gray-600 smallest-font mb-4">
                Situated in Knowledge Park II, Aligarh, the college boasts a sprawling 26-acre campus equipped with state-of-the-art facilities. Academic’s prime locations in New Delhi, Gurugram, and Aligarh ensure central accessibility, offering students safe, secure, and vibrant campuses.
              </p>
            </div>

          </div>
        </section>

        <section className="container mx-auto px-4 lg:py-16" id="vision_mission">
          <div className="grid md:grid-cols-2 gap-5 md:gap-32">
            <div>
              <h2 className="larger-font text-[#303030] font-bold mb-5">Academic College Mission & Vision</h2>
              <p className="red-color medium-font font-bold mb-3">Our Vision:</p>
              <p className="smallest-font font-semibold mb-8 text-[#303030]">
                Our vision is to be a leading College that inspires students to become responsible global citizens
                and leaders in their chosen fields and in the world, through an innovative, interdisciplinary, and inclusive approach to Learning.
              </p>
              <p className="red-color medium-font font-bold mb-3">Our Mission:</p>
              <p className="smallest-font font-semibold mb-4 text-[#303030]">
                Our mission is to provide students with an education that is intellectually stimulating and practically
                relevant. We aim to foster a community of learners who are innovative, interdisciplinary, and socially
                responsible. We offer a range of programmes that are designed to prepare students for purposeful work
                and to inspire them to make a positive difference in the world. We are dedicated to empowering students
                with the knowledge, skills, and experiences they need to achieve their full potential and to become
                responsible global citizens and leaders.
              </p>
            </div>
            <div style={{ textAlign: '-webkit-right' }}>
              <img
                src="/mission.webp"
                alt="Campus Life"
                className=""
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#81202c]">
          <div className="container mx-auto px-4">
            <p className="larger-font font-semibold text-white mb-12">Academic College Learning Goals</p>
            <div className="grid md:grid-cols-4 gap-12">
              {learning.map((e, i) => (
                <div key={i} className="mb-5">
                  <p className="medium-font font-semibold pb-4 text-white">{e.title}</p>
                  <p className="smallest-font font-extralight text-white">{e.para}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <p className="largest-font text-[#303030] mb-4 font-semibold">Chancellor's Message</p>
          <p className="blue-color medium-font font-semibold mb-5">“Knowledge comes but wisdom Lingers” – Alfred Lord Tennyson</p>
          <div className="grid md:grid-cols-2 gap-20 pt-5">
            <div>
              <p className="font-extralight smallest-font text-[#333333]">Mr Bharat Kaushal, a distinguished veteran with decades of experience, has elevated
                Academic to new heights by bringing exceptional expertise. As Managing Director of Hitachi India, Mr Kaushal has achieved remarkable
                success over the past six years, overseeing a conglomerate of 28 companies with over 33,000 employees. He
                leads 30 state-of-the-art manufacturing sites and revolutionary research and development centres.</p><br />
              <p className="font-extralight smallest-font text-[#333333]">Before joining Hitachi India, Mr Kaushal had an illustrious career as the first non-Japanese CEO of Sumitomo Mitsui Banking Corporation (SMBC) in India. During his 20 years with SMBC, he held several senior leadership roles, demonstrating his expertise in macroeconomic policy, government advisory, project finance, debt restructuring, and mergers and acquisitions. He is a member of the Indo-Japan Task Force (IJTF) and serves as Convenor of the Financial Strategy Group, addressing operational and policy-level issues between Japan and India.</p>
              <br />
              <p className="font-extralight smallest-font text-[#333333]">
                Chancellor Kaushal also serves as a Strategy Advisor to the India Investment Centre and has contributed his profound knowledge to the World Bank’s Economic Policy Unit in Washington, DC.
              </p><br />
              <p className="font-extralight smallest-font text-[#333333]">Mr Kaushal brings a global perspective to his role as Honorary Chancellor, holding a Master’s degree in International Affairs from Columbia College and an MBA from Northeastern College. Under his guidance and mentorship, Academic has established itself as a centre of academic excellence, creativity, and industrial significance, achieving new milestones.</p>
            </div>
            <div style={{ textAlign: '-webkit-center' }}>
              <img src="/chancelleor.webp" alt="" />
              <p className="font-semibold larger-font text-[#333333] mt-5 mb-4">Mr Bharat Kaushal</p>
              <p className="text-[#333333] font-semibold smaller-font">Chancellor | Academic College Uttar Pradesh
                <br />
                MD, Hitachi</p>
            </div>
          </div>
        </section>
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}


