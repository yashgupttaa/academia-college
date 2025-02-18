"use client";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Newsletter } from "@/components/sections/newsletter";
import { useState } from "react";
import Link from "next/link";
import { ContactForm } from "@/components/sections/contact-form";

export default function BcaHonsPage() {
  const sections = [
    {
      id: "eligibility",
      title: "Eligibility Criteria",
      content: (
        <div>
          <p className="smallest-font mb-2">
            Candidates must have passed the qualifying examination with a
            minimum of <b> 50% marks </b> (45% for SC/ST/Reserved candidates) in
            aggregate.
          </p>
          <br />
          <p className="smallest-font mb-2">No grace marks are allowed.</p>
        </div>
      ),
    },
    {
      id: "internships",
      title: "Internships/Placements Opportunities",
      content: (
        <div>
          <p className="text-[#303030] medium-font mb-2 font-semibold">Training</p>
          <p className="smallest-font mb-5">
            The School focuses on holistic student development through technical
            training and soft skills enhancement. Expert guidance is provided
            for career planning, aptitude building, and placement preparation,
            including GDs, PIs, and mock interviews.
          </p>
          <p className="text-[#303030] medium-font mb-2 font-semibold">
            Internships
          </p>
          <p className="smallest-font mb-5">
            Internships integrated into the NEP-compliant curriculum offer
            industry exposure, fostering professional growth, character
            development, and real-world readiness.
          </p>
          <p className="text-[#303030] medium-font mb-2 font-semibold">
            Placements
          </p>
          <p className="smallest-font mb-5">
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
          <p className="text-[#303030] medium-font mb-2 font-semibold">
            NEP-Compliant Framework
          </p>
          <p className="smallest-font mb-5">
            Designed as per National Education Policy guidelines, ensuring
            academic excellence and holistic development.
          </p>
          <p className="text-[#303030] medium-font mb-2 font-semibold">
            Core Competency
          </p>
          <p className="smallest-font mb-5">
            Focus on essential skills in computer science to prepare students
            for industry demands.
          </p>
          <p className="text-[#303030] medium-font mb-2 font-semibold">
            Interdisciplinary Learning
          </p>
          <p className="smallest-font mb-5">
            Combines computer science with fields like AI, Cybersecurity,
            Blockchain, Cloud Computing, and IoT.
          </p>
          <p className="text-[#303030] medium-font mb-2 font-semibold">
            Flexible Curriculum
          </p>
          <p className="smallest-font mb-5">
            Choice-based learning allows students to select courses based on
            their interests and career goals.
          </p>
          <p className="text-[#303030] medium-font mb-2 font-semibold">
            Practical Learning
          </p>
          <p className="smallest-font mb-5">
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
          <p className="text-[#303030] medium-font mb-2 font-semibold">
            Software Developer/Engineer
          </p>
          <p className="smallest-font mb-5">
            Design, develop, and maintain software applications, excelling in
            front-end, back-end, or full-stack development.
          </p>
          <p className="text-[#303030] medium-font mb-2 font-semibold">
            Web Developer
          </p>
          <p className="smallest-font mb-5">
            Create innovative websites and web applications, specialising in
            front-end, back-end, or cross-platform development.
          </p>
          <p className="text-[#303030] medium-font mb-2 font-semibold">
            Database Administrator (DBA)
          </p>
          <p className="smallest-font mb-5">
            Manage, optimise, and secure organisational databases, ensuring
            efficient data handling.
          </p>
          <p className="text-[#303030] medium-font mb-2 font-semibold">
            Network Engineer/Administrator
          </p>
          <p className="smallest-font mb-5">
            Build and maintain robust networks with a focus on security,
            troubleshooting, and performance optimisation.
          </p>
          <p className="text-[#303030] medium-font mb-2 font-semibold">
            Cybersecurity Analyst
          </p>
          <p className="smallest-font mb-5">
            Safeguard systems and networks by monitoring threats, implementing
            security measures, and mitigating risks.
          </p>
        </div>
      ),
    },
  ];

  const [activeSection, setActiveSection] = useState("eligibility");
  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-screen">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("/bca-hons.webp")',
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
                  BCA (Hons) with Specialisation in
                </h1>
                <p className="smallest-font mb-8 text-white/90 max-w-lg">
                  Your pathway to advanced computing skills and a thriving IT
                  career.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href='/admissions' className="bg-red-color text-white border-none rounded-none font-semibold smallest-font px-5 py-2">
                    Apply Now
                  </Link>
                  <a href='/BCA-brochure.pdf' target="_blank" download className="bg-red-color text-white border-none rounded-none font-semibold smallest-font flex items-center px-5">
                    Download Brochure
                  </a>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>

        <section className="bg-[#F2F2F2]">
          <div className="container mx-auto px-4 py-8">
            <h2 className="larger-font font-bold mb-6 text-[#333333]">
              Programme Overview
            </h2>
            <p className="text-gray-600 smallest-font my-8">
              The Bachelor of Computer Applications (Hons) is a 4-year
              undergraduate degree designed to equip students with the skills,
              knowledge, and practical experience required to excel in the
              rapidly evolving field of computer applications and information
              technology. Aligned with the National Education Policy (NEP) 2020,
              this programme offers flexibility, multidisciplinary learning, and
              a robust foundation in computing principles. This programme is
              designed to equip students with practical and theoretical
              knowledge in computer applications, offering two specialised
              tracks to meet the demands of modern industries:
            </p>
          </div>
        </section>

        <section
          className="container mx-auto px-4 py-16 my-5"
          style={{ textAlign: "-webkit-center" }}
        >
          <img src="/bca-curriculum.webp" alt="Campus Life" className="" />
        </section>

        <section className="container mx-auto px-4 py-16 my-5">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="bg-[#F6F2F2] p-8 shadow-md w-full md:w-1/3">
              <ul className="space-y-4">
                {sections.map((section) => (
                  <li
                    style={{ borderBottom: "2px solid #BCBECA" }}
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`cursor-pointer text-[#202020] py-5 medium-font font-bold underline ${activeSection === section.id
                      ? "red-color"
                      : "text-black hover:text-[#81202c]"
                      }`}
                  >
                    {section.title}
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-4 rounded-md w-full md:w-2/3">
              {
                sections.find((section) => section.id === activeSection)
                  ?.content
              }
            </div>
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
