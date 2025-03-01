import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Newsletter } from "@/components/sections/newsletter";
import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact-form";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admissions | Academic College",
  description: "Join Academic College and take the first step towards a successful future. Explore our admission process, eligibility criteria, and important dates.",
};


export default function AdmissionsPage() {
  const sections = [
    {
      id: "eligibility",
      title: "Eligibility Criteria",
      content: (
        <div>
          <p className="text-xl mb-2">
            Candidates must have passed the qualifying examination with a
            minimum of <b> 50% marks </b> (45% for SC/ST/Reserved candidates) in
            aggregate.
          </p>
          <br />
          <p className="text-xl mb-2">No grace marks are allowed.</p>
        </div>
      ),
    },
    {
      id: "internships",
      title: "Internships/Placements Opportunities",
      content: (
        <div>
          <p className="text-[#303030] text-xl mb-2 font-semibold">Training</p>
          <p className="text-xl mb-5">
            The School focuses on holistic student development through technical
            training and soft skills enhancement. Expert guidance is provided
            for career planning, aptitude building, and placement preparation,
            including GDs, PIs, and mock interviews.
          </p>
          <p className="text-[#303030] text-xl mb-2 font-semibold">
            Internships
          </p>
          <p className="text-xl mb-5">
            Internships integrated into the NEP-compliant curriculum offer
            industry exposure, fostering professional growth, character
            development, and real-world readiness.
          </p>
          <p className="text-[#303030] text-xl mb-2 font-semibold">
            Placements
          </p>
          <p className="text-xl mb-5">
            A dedicated Placement Cell connects students with top career
            opportunities, ensuring they stay updated with industry trends and
            succeed in their professional journey.
          </p>
        </div>
      ),
    },
    {
      id: "course-structure",
      title: "Course Structure",
      content: (
        <div>
          <p className="text-[#303030] text-xl mb-2 font-semibold">
            NEP-Compliant Framework
          </p>
          <p className="text-xl mb-5">
            Designed as per National Education Policy guidelines, ensuring
            academic excellence and holistic development.
          </p>
          <p className="text-[#303030] text-xl mb-2 font-semibold">
            Core Competency
          </p>
          <p className="text-xl mb-5">
            Focus on essential skills in computer science to prepare students
            for industry demands.
          </p>
          <p className="text-[#303030] text-xl mb-2 font-semibold">
            Interdisciplinary Learning
          </p>
          <p className="text-xl mb-5">
            Combines computer science with fields like AI, Cybersecurity,
            Blockchain, Cloud Computing, and IoT.
          </p>
          <p className="text-[#303030] text-xl mb-2 font-semibold">
            Flexible Curriculum
          </p>
          <p className="text-xl mb-5">
            Choice-based learning allows students to select courses based on
            their interests and career goals.
          </p>
          <p className="text-[#303030] text-xl mb-2 font-semibold">
            Practical Learning
          </p>
          <p className="text-xl mb-5">
            Includes projects, internships, and hands-on activities to develop
            critical thinking and problem-solving skills.
          </p>
        </div>
      ),
    },
    {
      id: "career-pathways",
      title: "Key Career Pathways",
      content: (
        <div>
          <p className="text-[#303030] text-xl mb-2 font-semibold">
            Software Developer/Engineer
          </p>
          <p className="text-xl mb-5">
            Design, develop, and maintain software applications, excelling in
            front-end, back-end, or full-stack development.
          </p>
          <p className="text-[#303030] text-xl mb-2 font-semibold">
            Web Developer
          </p>
          <p className="text-xl mb-5">
            Create innovative websites and web applications, specialising in
            front-end, back-end, or cross-platform development.
          </p>
          <p className="text-[#303030] text-xl mb-2 font-semibold">
            Database Administrator (DBA)
          </p>
          <p className="text-xl mb-5">
            Manage, optimise, and secure organisational databases, ensuring
            efficient data handling.
          </p>
          <p className="text-[#303030] text-xl mb-2 font-semibold">
            Network Engineer/Administrator
          </p>
          <p className="text-xl mb-5">
            Build and maintain robust networks with a focus on security,
            troubleshooting, and performance optimisation.
          </p>
          <p className="text-[#303030] text-xl mb-2 font-semibold">
            Cybersecurity Analyst
          </p>
          <p className="text-xl mb-5">
            Safeguard systems and networks by monitoring threats, implementing
            security measures, and mitigating risks.
          </p>
        </div>
      ),
    },
  ];

  const admissionSteps = [
    {
      step: "Step 01",
      head: "Register Yourself",
      para: "Secure your spot today"
    },
    {
      step: "Step 02",
      head: "Verify email",
      para: "Confirm your email for easy access"
    },
    {
      step: "Step 03",
      head: "Application Form",
      para: "Complete your application form online"
    },
    {
      step: "Step 04",
      head: "Application fee",
      para: "Pay your application fee to proceed"
    },
    {
      step: "Step 05",
      head: "Submit",
      para: "Finalise your application and submit it"
    },
  ]
  const programs = [
    {
      program: "BCA (Hons) with Specialisation in",
      para: ""
    },
    {
      program: "BCA",
      para: ""
    },
    {
      program: "B Tech in CSE",
      para: ""
    },
    {
      program: "B Tech in Electronics & Communication Engineering (Ece) in Collaboration with L&T",
      para: ""
    },
    {
      program: "Bachelor of Business Administration (BBA)",
      para: ""
    },
    {
      program: "BA LLB (Hons)",
      para: ""
    },
    {
      program: "BBA LLB (Hons)",
      para: ""
    },
    {
      program: "B Tech in Bioinformatics",
      para: ""
    },
    {
      program: "B Tech in Civil and Sustainable Infrastructure Engineering",
      para: ""
    },
    {
      program: "B Tech in Electrical and Computer Engineering",
      para: ""
    },
    {
      program: "B Tech in Electronics and Communication Engineering (ECE)",
      para: ""
    },
    {
      program: "B Tech in Electronics and Computer Engineering",
      para: ""
    },
    {
      program: "B Tech in Mechanical Engineering",
      para: ""
    },
    {
      program: "B Tech in Biotechnology",
      para: ""
    },
    {
      program: "B Tech in Semiconductor Technology",
      para: ""
    },
  ]

  const industry = [
    {
      src: "/indus-1.webp"
    },
    {
      src: "/indus-2.webp"
    },
    {
      src: "/indus-3.webp"
    },
    {
      src: "/indus-4.webp"
    },
    {
      src: "/indus-5.webp"
    },
    {
      src: "/indus-6.webp"
    },
    {
      src: "/indus-7.webp"
    },
    {
      src: "/indus-8.webp"
    },
    {
      src: "/indus-9.webp"
    },
    {
      src: "/indus-10.webp"
    },
    {
      src: "/indus-11.webp"
    },
    {
      src: "/indus-12.webp"
    }
  ]

  const alma = [
    {
      src: '/alma-1.webp',
      name: 'Abhijeet Kumar',
      company: 'Company - Stolelam',
      special: 'Specialisation - Marketing'
    },
    {
      src: '/alma-2.webp',
      name: 'Aditya Kumar Tripathi',
      company: 'Company - Deloitte',
      special: 'Specialisation - Finance'
    },
    {
      src: '/alma-3.webp',
      name: 'Ayushi Thakre',
      company: 'Company - Blackrock',
      special: 'Specialisation - Hr'
    },
    {
      src: '/alma-4.webp',
      name: 'Nandini Gautam',
      company: 'Company - Aye Finance',
      special: 'Specialisation - Finance'
    },
  ]
  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-screen">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("/addmission.webp")',
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
                  Study at Academic College
                </h1>
                <p className="smallest-font mb-8 text-white/90 max-w-lg">
                  Your Future Starts Here – Apply Today and Take the First Step Toward Success!
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href='/admissions' className="bg-red-color text-white border-none rounded-none font-semibold smallest-font px-5 py-2">
                    Apply Now
                  </Link>
                  <a href='/BBA-brochure.pdf' target="_blank" download className="bg-red-color text-white border-none rounded-none font-semibold smallest-font flex items-center px-5">
                    Download Brochure
                  </a>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>

        <section className="container pt-5 mx-auto md:px-40">
          <div className="container mx-auto px-4 lg:pt-16">
            <h2 className="larger-font font-bold mb-12 text-[#333333]">
              How to apply?
            </h2>
            <div className="grid md:grid-cols-4 gap-5 mb-4">
              {admissionSteps.map((e) => (
                <div className="p-5 h-48" style={{ border: '1px solid #81202c' }}>
                  <p className="border-b border-gray-200 medium-font text-[#303030] pb-4 mb-4 font-semibold">{e.step}</p>
                  <p className="medium-font font-semibold mb-1 text-[#303030]">{e.head}</p>
                  <p className="smallest-font text-[#303030] font-light">{e.para}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 mt-20 bg-red-color-wo-hover">
          <div className="container mx-auto md:px-40 px-4">
            <p className="larger-font text-white mb-8 font-bold">Our Programmes</p>
            <div className="grid md:grid-cols-3 md:gap-8 gap-4">
              {programs.map((e) => (
                <div className="p-8" style={{ background: '#91333E' }}>
                  <p className="smallest-font font-semibold text-white">{e.program}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="container mt-5 mx-auto md:px-40 px-4 py-5"
          style={{ textAlign: "-webkit-center" }}
        >
          <img src="/advantage.jpg" alt="Campus Life" className="" />
        </section>

        <section className="container mx-auto md:px-40">
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-12 text-[#333333]">
              Industry Collaborations
            </h2>
            <div className="grid md:grid-cols-3 gap-5 mb-4">
              {industry.map((e) => (
                <div className="border">
                  <img src={e.src} className="w-full" alt="" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 mt-5 network_section">
          <div className="container mx-auto px-4  md:px-40">
            <div className="text-center mb-12">
              <h3 className="larger-font text-[#303030] pb-3 font-bold">Where Alma Matters</h3>
              <p className="font-semibold smaller-font text-[#303030]">
                At Academic, we take pride in a strong alumni network of over 16,000 professionals excelling globally in
                diverse fields. Our alumni frequently engage with the campus, offering invaluable insights into industry
                trends and career guidance. This enduring connection fosters student growth and enhances placements,
                creating a vibrant community where alumni truly matter.
              </p>
            </div>
            <div className="grid md:grid-cols-4 py-8 md:gap-8 gap-16">
              {alma.map((e) => (
                <div className="text-center">
                  <img src={e.src} alt="" className="mx-auto" style={{ borderRadius: '50%' }} />
                  <div className="text-center pt-5 text-[#303030] font-semibold pb-2 medium-font">{e.name}</div>
                  <div className="text-center font-normal smallest-font">{e.company}</div>
                  <div className="text-center font-normal smaller-font">{e.special}</div>
                </div>
              ))}

            </div>
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
