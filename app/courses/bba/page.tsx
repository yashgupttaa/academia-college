import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Newsletter } from "@/components/sections/newsletter"

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
      para: "Committed to sustainability by implementing environmentally friendly practices and reducing the university’s ecological footprint."
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
        {/* Hero Section */}
        <section className="relative min-h-screen mb-16">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("/bba.webp")',
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="max-w-3xl hero-content">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white pt-[8rem]">
                  Bachelor of Business Administration (BBA)
                </h1>
                <p className="text-lg mb-8 text-white/90 max-w-lg">
                  The Bachelor of Business Administration (BBA) programme at IILM University, Greater Noida, offers a transformative business education experience.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-red-color text-white border-none font-bold text-lg p-5 font-light">
                    Apply Now <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
              </div>
              <div className="md:w-[576px]">
                <div className="bg-white p-2 text-center">
                  <p className="red-color text-xl font-light mb-2">REGISTER NOW!</p>
                  <p className="text-xl font-semibold mb-3">SEAL YOUR SPOT FOR SUCCESS</p>
                  <p className="red-color text-xl font-bold m-0">ADMISSION OPEN FOR 2025</p>
                </div>
                <div className="bg-blue-color px-3 py-2">
                  <input className="rounded p-2 w-full mb-2" type="text" placeholder="Enter Name" />
                  <input className="rounded p-2 w-full mb-2" type="email" placeholder="Enter Email Address" />
                  <input className="rounded p-2 w-full mb-2" type="number" placeholder="Enter Mobile Number" />
                  <input className="rounded p-2 w-full mb-2" type="text" placeholder="Enter OTP" />
                  <div className="grid md:grid-cols-2 gap-2 mb-2">
                    <div>
                      <select className="rounded p-2 w-full" name="cars" id="cars">
                        <option value="volvo">Select State</option>
                        <option value="saab">Tamilnadu</option>
                        <option value="mercedes">Uttar Pradesh</option>
                        <option value="audi">Gujrat</option>
                      </select>
                    </div>
                    <div>
                      <select className="rounded p-2 w-full" name="cars" id="cars">
                        <option value="volvo">Select City</option>
                        <option value="saab">Tamilnadu</option>
                        <option value="mercedes">Uttar Pradesh</option>
                        <option value="audi">Gujrat</option>
                      </select>
                    </div>
                  </div>
                  <select className="rounded p-2 w-full" name="cars" id="cars">
                    <option value="volvo">Select Programme</option>
                    <option value="saab">BA/BA (Hons) in Hospitality and Service Management</option>
                    <option value="mercedes">MBA in Energy Management</option>
                    <option value="audi">BBA Aviation Management</option>
                  </select>
                  <div className="flex gap-4 my-5">
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    <label htmlFor="vehicle1" className="text-white">I agree to receive information regarding my submitted enquiry on IILM.</label>
                  </div>
                  <button className="bg-red-color-wo-hover rounded w-full text-white py-2 mb-4">Submit</button>
                </div>
                <div className="h-8  w-full bg-white"></div>
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
                Established in 1993 under the aegis of the Ram Krishan & Sons Charitable Trust, Academia brings 30 years of experience in shaping future entrepreneurs and managers. It has earned a reputation as one of the most distinguished universities in the Delhi NCR region.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                Academia University was founded under the Uttar Pradesh Private University (Amendment) Act 2022, with a vision to be Global, Inclusive, and Responsible.
              </p>

              <p className="text-gray-600 text-lg mb-4">
                Situated in Knowledge Park II, Greater Noida, the university boasts a sprawling 26-acre campus equipped with state-of-the-art facilities. Academia’s prime locations in New Delhi, Gurugram, and Greater Noida ensure central accessibility, offering students safe, secure, and vibrant campuses.
              </p>
            </div>

          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 bg-[#81202c]">
          <div className="container mx-auto px-4">
            <p className="text-3xl font-semibold text-white mb-12">Academia University Learning Goals</p>
            <div className="grid md:grid-cols-4 gap-12">
              {learning.map((e, i) => (
                <div key={i} className="mb-5">
                  <p className="text-lg font-semibold pb-4 text-white">{e.title}</p>
                  <p className="text-base font-extralight text-white">{e.para}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <p className="md:text-4xl text-2xl mb-4 font-semibold">Chancellor's Message</p>
          <p className="blue-color text-xl font-semibold mb-5">“Knowledge comes but wisdom Lingers” – Alfred Lord Tennyson</p>
          <div className="grid md:grid-cols-2 gap-20 pt-5">
            <div>
              <p className="font-extralight text-sm text-[#333333]">Mr Bharat Kaushal, a distinguished veteran with decades of experience, has elevated
                Academia to new heights by bringing exceptional expertise. As Managing Director of Hitachi India, Mr Kaushal has achieved remarkable
                success over the past six years, overseeing a conglomerate of 28 companies with over 33,000 employees. He
                leads 30 state-of-the-art manufacturing sites and revolutionary research and development centres.</p><br />
              <p className="font-extralight text-sm text-[#333333]">Before joining Hitachi India, Mr Kaushal had an illustrious career as the first non-Japanese CEO of Sumitomo Mitsui Banking Corporation (SMBC) in India. During his 20 years with SMBC, he held several senior leadership roles, demonstrating his expertise in macroeconomic policy, government advisory, project finance, debt restructuring, and mergers and acquisitions. He is a member of the Indo-Japan Task Force (IJTF) and serves as Convenor of the Financial Strategy Group, addressing operational and policy-level issues between Japan and India.</p>
              <br />
              <p className="font-extralight text-sm text-[#333333]">
                Chancellor Kaushal also serves as a Strategy Advisor to the India Investment Centre and has contributed his profound knowledge to the World Bank’s Economic Policy Unit in Washington, DC.
              </p><br />
              <p className="font-extralight text-sm text-[#333333]">Mr Kaushal brings a global perspective to his role as Honorary Chancellor, holding a Master’s degree in International Affairs from Columbia University and an MBA from Northeastern University. Under his guidance and mentorship, Academia has established itself as a centre of academic excellence, creativity, and industrial significance, achieving new milestones.</p>
            </div>
            <div style={{ textAlign: '-webkit-center' }}>
              <img src="/chancelleor.webp" alt="" />
              <p className="font-semibold text-3xl text-[#333333] mt-5 mb-4">Mr Bharat Kaushal</p>
              <p className="text-[#333333] font-semibold text-sm">Chancellor | Academia University Uttar Pradesh
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


