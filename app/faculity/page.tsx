import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Newsletter } from "@/components/sections/newsletter"

export default function AboutPage() {
  const dean = [
    {
      src: "/nihar-amoncar.webp",
      designation: "Director - School of Management",
      name: "Dr. Nihar Amoncar"
    },
    {
      src: "/akhil-damodaran.webp",
      designation: "Dean School of Management",
      name: "Dr. Akhil Damodaran"
    },
    {
      src: "/rajeev-tiwari.webp",
      designation: "Prof & Dean (SCSE)",
      name: "Prof. (Dr) Rajeev Tiwari"
    },
    {
      src: "/dr-khanka.webp",
      designation: "Dean (International Affairs)",
      name: "Dr. Sheetal Khanka"
    },
  ];

  const profesor = [
    {
      src: "/Kamal_Kant_Verma.webp",
      designation: "Professor",
      name: "Dr. Kamal Kant Verma"
    },
    {
      src: "/Harshal-Patil.webp",
      designation: "Professor",
      name: "Dr. Harshal Patil"
    },
    {
      src: "/prof-Raju-Majumdar.webp",
      designation: "Professor",
      name: "Prof. Raju Majumdar"
    },
    {
      src: "/Dr.-Meenu.webp",
      designation: "Professor",
      name: "Dr. Meenu Singh"
    },
    {
      src: "/Rakhi-Trivedi.webp",
      designation: "Professor",
      name: "Dr. Rakhi Trivedi"
    },
    {
      src: "/Dr-IB-Singh.webp",
      designation: "Professor",
      name: "Dr. Indra Bahadur Singh"
    },
  ]

  const asso_profesor = [
    {
      src: "/ajay-kumar.webp",
      designation: "Associate Professor",
      name: "Dr. Ajay Kumar"
    },
    {
      src: "/rohit-yadav.webp",
      designation: "Associate Professor",
      name: "Dr. Rohit Yadav"
    },
    {
      src: "/Smita-Singh.webp",
      designation: "Associate Professor",
      name: "Dr. Smita Singh"
    },
    {
      src: "/Dr.-Swati-Bajaj-Seth.webp",
      designation: "Associate Professor",
      name: "Dr. Swati Bajaj Seth"
    },
    {
      src: "/manisha-joshi.webp",
      designation: "Associate Professor",
      name: "Dr. Manisha Joshi"
    },
    {
      src: "/Manmeet.webp",
      designation: "Associate Professor",
      name: "Dr. Manmeet Kaur"
    },
    {
      src: "/Dr.-Mani-Jindal.webp",
      designation: "Associate Professor",
      name: "Dr. Mani Jindal"
    },
    {
      src: "/Dr.-Najul-Laskar.webp",
      designation: "Associate Professor",
      name: "Dr. Najul Laskar"
    },
    {
      src: "/Dr.-Lalit-Kumar.webp",
      designation: "Head & Associate Professor",
      name: "Dr. Lalit Kumar"
    },
    {
      src: "/Jasminder_Kaur_Sandhu.webp",
      designation: "Associate Professor",
      name: "Dr. Jasminder Kaur Sandhu"
    },
  ]
  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-screen">
          <div
            className="absolute inset-0 z-0 "
            style={{
              backgroundImage: 'url("/faculity.webp")',
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
                About Faculty
              </h1>
              <p className="smallest-font mb-8 text-white/90 max-w-lg">
                Meet the Minds That Shape the Future – Our Dedicated and Experienced Faculty.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#F2F2F2]">
          <div className="container mx-auto px-4 py-16">
            <h2 className="larger-font font-bold mb-5 text-[#333333]">Our Faculty</h2>
            <p className="medium-font font-semibold mb-3 red-color">
              Academic College focuses on building strong leadership through excellence in teaching and research.
            </p>
            <p className="text-gray-600 smallest-font my-5">
              Academic College has high acclaimed, competent, and well-qualified faculty members with strong academic credentials. Our faculty members hold PhD degrees from reputed national/international colleges. Various renowned academicians and accomplished industry practitioners are also a part of the Academic faculty team who are passionate about teaching. Our faculty members come from myriad backgrounds,
              and this vast mix of knowledge combined with extensive research and industry experience adds an exceptional learning experience for creative minds.
            </p>

            <p className="text-gray-600 smallest-font mb-5">
              The faculty of Academic has been continuously working towards making Academic a better place for the students and thus making Academic one of the best colleges in Aligarh and the whole Delhi NCR region.
            </p>

            <p className="text-gray-600 smallest-font mb-5">
              The faculty members adopt a blended learning pedagogy where theory and real-world practices are weaved into the curriculum to prepare students for employability. Teaching methods include
              case studies, simulation, role plays, seminars, and presentations. Apart from classroom teaching, our faculty members actively engage in research, consultancy, and corporate training
              programs in their respective areas of expertise. Academic organises various faculty development programs (FDPs) throughout the year for upgrading its faculty members’ learning and intellectual growth.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-5">
          <div className="container mx-auto px-4">
            <p className="larger-font font-semibold mb-12 text-[#333333]">Director and Dean</p>
            <div className="grid md:grid-cols-4 gap-12">
              {dean.map((e, i) => (
                <div key={i} className="mb-5 text-center">
                  <img src={e.src} alt="" className="mx-auto" />
                  <p className="medium-font font-normal pb-2 m-0 pt-3 red-color">{e.designation}</p>
                  <p className="smallest-font font-semibold ">{e.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container mx-auto px-4">
            <p className="larger-font font-semibold mb-12 text-[#333333] ">Professor</p>
            <div className="grid md:grid-cols-4 gap-12">
              {profesor.map((e, i) => (
                <div key={i} className="mb-5 text-center">
                  <img src={e.src} alt="" className="mx-auto" />
                  <p className="medium-font font-normal pb-2 m-0 pt-3 red-color">{e.designation}</p>
                  <p className="smallest-font font-semibold ">{e.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container mx-auto px-4">
            <p className="larger-font font-semibold mb-12 text-[#333333]">Associate Professor</p>
            <div className="grid md:grid-cols-4 gap-12">
              {asso_profesor.map((e, i) => (
                <div key={i} className="mb-5 text-center">
                  <img src={e.src} alt="" className="mx-auto" />
                  <p className="medium-font font-normal pb-2 m-0 pt-3 red-color">{e.designation}</p>
                  <p className="smallest-font font-semibold ">{e.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}


