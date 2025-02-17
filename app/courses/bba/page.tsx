import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Newsletter } from "@/components/sections/newsletter";
import { WhyChooseUs } from "@/components/sections/why-choose-us";

export default function BbaPage() {
  const learning = [
    {
      title:
        "Deliver Holistic Education focusing on Intellectual Rigor and Experiential Learning",
      para: "To provide an education that prepares students for successful careers by combining intellectual rigour with experiential activities that prepare students to adapt and thrive in dynamic real-world contexts.",
    },
    {
      title: "Enhance Cognitive Flexibility",
      para: "To equip students with the ability to think critically and make sound decisions in a rapidly evolving world thereby developing students’ adaptability and entrepreneurial mindset to thrive in uncertainty and drive innovative solutions.",
    },
    {
      title: "Encourage Innovation, Research and Knowledge Advancement",
      para: "To promote a culture of innovation, experimentation, scholarly research and creative pursuits, encouraging students to challenge assumptions, seek creative solutions contribute to societal betterment and advancement of knowledge.",
    },
    {
      title: "Enhance Digital Literacy and Competency",
      para: "To equip students with the skills to use digital tools to evaluate, filter, and analyse digital content for credibility, relevance, and accuracy, for both career readiness and personal tasks, ensuring that technology empowers them in all aspects of life.",
    },
    {
      title: "Cultivate Teamwork and Communication Skills",
      para: "To enhance teamwork and communication by fostering clear, efficient exchanges of information and encouraging active listening, enabling students to collaborate effectively in diverse teams and work environments.",
    },
    {
      title: "Engage in Community-Based Learning",
      para: "To provide opportunities for service learning, internships, and other community-based activities, fostering meaningful partnerships at local, national, and international levels.",
    },
    {
      title: "Foster an Inclusive and Socially Responsible Community",
      para: "To cultivate a diverse and inclusive community committed to social responsibility, global awareness, and civic engagement.",
    },
    {
      title: "Prepare Responsible Global Citizens and Leaders",
      para: "We provide students with the knowledge, skills, and experiences needed to make a positive impact and take on leadership roles globally.",
    },
    {
      title: "Promote Sustainability and Environmental Responsibility",
      para: "Committed to sustainability by implementing environmentally friendly practices and reducing the college’s ecological footprint.",
    },
    {
      title: "Support Self-directed and Continuous Learning",
      para: "We provide an environment that empowers students to take control of their educational journey, fostering independence and a culture of lifelong learning.",
    },
  ];
  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-screen">
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
                <h1 className="largest-font font-bold mb-3 leading-tight text-white pt-[8rem]">
                  Bachelor of Business Administration (BBA)
                </h1>
                <p className="smallest-font mb-8 text-white/90 max-w-lg">
                  The Bachelor of Business Administration (BBA) programme at
                  Academic College, Aligarh, offers a transformative
                  business education experience.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-red-color text-white border-none rounded-none font-semibold smallest-font p-5">
                    Apply Now
                  </Button>
                  <Button className="bg-red-color text-white border-none rounded-none font-semibold smallest-font p-5">
                    Download Brochure
                  </Button>
                </div>
              </div>
              <div className="lg:w-[480px] mt-5 lg:ml-12">
                <div className="bg-white p-2 text-center">
                  <p className="red-color medium-font font-light mb-1">
                    REGISTER NOW!
                  </p>
                  <p className="medium-font font-semibold mb-1">
                    SEAL YOUR SPOT FOR SUCCESS
                  </p>
                  <p className="red-color medium-font font-bold m-0">
                    ADMISSION OPEN FOR 2025
                  </p>
                </div>
                <div className="bg-blue-color px-3 py-2">
                  <input
                    className="rounded py-1 px-2 smaller-font w-full mb-2"
                    type="text"
                    placeholder="Enter Name"
                  />
                  <input
                    className="rounded  py-1 px-2 smaller-font w-full mb-2"
                    type="email"
                    placeholder="Enter Email Address"
                  />
                  <input
                    className="rounded  py-1 px-2 smaller-font w-full mb-2"
                    type="number"
                    placeholder="Enter Mobile Number"
                  />
                  <input
                    className="rounded  py-1 px-2 smaller-font w-full mb-2"
                    type="text"
                    placeholder="Enter OTP"
                  />
                  <div className="grid md:grid-cols-2 gap-2 mb-2">
                    <div>
                      <select
                        className="rounded  py-1 px-2 smaller-font w-full"
                        name="cars"
                        id="cars"
                      >
                        <option value="volvo">Select State</option>
                        <option value="saab">Tamilnadu</option>
                        <option value="mercedes">Uttar Pradesh</option>
                        <option value="audi">Gujrat</option>
                      </select>
                    </div>
                    <div>
                      <select
                        className="rounded  py-1 px-2 smaller-font w-full"
                        name="cars"
                        id="cars"
                      >
                        <option value="volvo">Select City</option>
                        <option value="saab">Tamilnadu</option>
                        <option value="mercedes">Uttar Pradesh</option>
                        <option value="audi">Gujrat</option>
                      </select>
                    </div>
                  </div>
                  <select className="rounded py-1 px-2 smaller-font w-full" name="cars" id="cars">
                    <option value="volvo">Select Programme</option>
                    <option value="saab">
                      BA/BA (Hons) in Hospitality and Service Management
                    </option>
                    <option value="mercedes">MBA in Energy Management</option>
                    <option value="audi">BBA Aviation Management</option>
                  </select>
                  <div className="flex gap-4 my-5">
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    <label htmlFor="vehicle1" className="text-white text-xs">
                      I agree to receive information regarding my submitted
                      enquiry on Academic.
                    </label>
                  </div>
                  <button className="bg-red-color-wo-hover rounded w-full text-white py-1 mb-2 smaller-font">
                    Submit
                  </button>
                </div>
                <div className="h-6  w-full bg-white"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F2F2F2]">
          <div className="container mx-auto px-4 py-8">
            <h2 className="larger-font font-bold mb-6 text-[#333333]">
              Programme Overview
            </h2>
            <p className="text-gray-600 smallest-font my-8">
              The Bachelor of Business Administration (BBA) programme at Academic
              College, Aligarh, offers a transformative business
              education experience. Aligned with the{" "}
              <b> National Education Policy (NEP) 2020 </b>, this
              forward-thinking curriculum equips students with the knowledge,
              skills, and versatility required to excel in today’s dynamic
              global business environment.
            </p>

            <p className="text-gray-600 smallest-font mb-8">
              At Academic, the programme integrates core management principles with
              cutting-edge technology and hands-on industry exposure, ensuring
              graduates are well-prepared to navigate the complexities of modern
              businesses. Students benefit from the flexibility to pursue minors
              across disciplines, fostering adaptability and innovation –
              essential attributes for tackling future challenges.
            </p>

            <p className="text-gray-600 smallest-font mb-8">
              With a focus on experiential learning, multidisciplinary
              education, and industry engagement, the Academic BBA prepares you for
              leadership roles in various sectors. Take the first step towards a
              successful career by enrolling in this programme, designed to
              unlock your full potential.
            </p>
          </div>
        </section>
        {/* About Content */}
        <section className="container mx-auto px-4 py-16">
          <img src="/bba-currilam.png" alt="Campus Life" className="" />
        </section>
        <div className="mb-5">
          <WhyChooseUs />
        </div>

        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
