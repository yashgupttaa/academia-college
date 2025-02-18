import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Newsletter } from "@/components/sections/newsletter";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from '@/components/sections/contact-form'

export const metadata: Metadata = {
  title: "Bachelor of Business Administration (BBA) Program | Academic College",
  description: "Explore the Bachelor of Business Administration (BBA) program at Academic College. Gain the essential skills and knowledge needed to succeed in today’s dynamic business world. ",
};

export default function BbaPage() {
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
