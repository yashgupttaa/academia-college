import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Newsletter } from "@/components/sections/newsletter";
import Link from "next/link"
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic Programs | Academic College",
  description: "Explore a wide range of academic programs at Academic College. Find undergraduate, postgraduate, and specialized courses designed for your success.",
};

export default function CoursesPage() {
  const programmes = [
    {
      src: "/bca-hons.webp",
      link: "/bca-hons",
      programme: "BCA (Hons) with Specialisation in"
    },
    {
      src: "/bca.webp",
      link: "/bca",
      programme: "BCA"
    },
    {
      src: "/btech_cse.webp",
      link: "/btech-cse",
      programme: "B Tech in CSE"
    },
    {
      src: "/btech_eec.webp",
      link: "/bca-hons",
      programme: "B Tech in Electronics & Communication Engineering (Ece) in Collaboration with L&T"
    },
    {
      src: "/bba.webp",
      link: "/courses/bba",
      programme: "Bachelor of Business Administration (BBA)"
    },
    {
      src: "/ballb-hons.webp",
      link: "/bca-hons",
      programme: "BA LLB (Hons)"
    },
    {
      src: "/bba-llb.webp",
      link: "/bca-hons",
      programme: "BBA LLB (Hons)"
    },
    {
      src: "/btech_bio.webp",
      link: "/bca-hons",
      programme: "B Tech in Bioinformatics"
    },
    {
      src: "/bsc-hons.webp",
      link: "/bca-hons",
      programme: "BSc (Hons) in Forensic Science"
    },
    {
      src: "/bsc-math.webp",
      link: "/bca-hons",
      programme: "BSc Mathematics with Data Science"
    },
    {
      src: "/btech_food.webp",
      link: "/bca-hons",
      programme: "B Tech Food Technology"
    },
    {
      src: "/btech_robo.webp",
      link: "/bca-hons",
      programme: "B Tech in Robotics & Artificial Intelligence (AI)"
    },
    {
      src: "/btech_micro.webp",
      link: "/bca-hons",
      programme: "B Tech in CSE in collaboration with Microsoft"
    },
    {
      src: "/btech_ibm.webp",
      link: "/bca-hons",
      programme: "B Tech in CSE with specialisation in AI-ML in collaboration with IBM"
    },
  ];
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("/course-bg.webp")',
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
                <h1 className="largest-font font-bold mb-6 leading-tight text-white pt-[8rem]">
                  Academic Programmes
                </h1>
                <p className="smallest-font mb-8 text-white/90 max-w-lg">
                  Your Journey to Excellence Starts Here – Choose from a Wide Range of Programs.
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
            </div>
          </div>
        </section>

        <section className="bg-[#F2F2F2]">
          <div className="container mx-auto lg:px-40 px-4 py-16">
            <h2 className="larger-font font-bold mb-6 text-[#333333]">
              Programme Overview
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {programmes.map((p) => (
                <div className="mb-5">
                  <img src={p.src} alt="" className="h-60 w-full object-cover" />
                  <p className="red-color font-medium larger-font pt-8 pb-5">{p.programme}</p>
                  <Link className="flex text-[#81202C] font-bold py-2 px-5  gap-2 border border-[#81202C] items-center smaller-font" href={p.link} style={{ width: 'fit-content' }} >
                    Know More
                    <ArrowRight stroke="#81202C" size={16} />
                  </Link>
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
