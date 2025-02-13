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
            className="absolute inset-0 z-0"
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
              {/* <h2 className="text-xl font-medium mb-4 tracking-wide text-white">WELCOME TO ACADEMIA</h2> */}
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                About Faculty
              </h1>
              <p className="text-lg mb-8 text-white/90 max-w-lg">
                Academia University focuses on building strong leadership through excellence in teaching and research.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-red-color text-white border-none font-bold text-lg p-5 font-light">
                  Apply Now <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F2F2F2]">
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-6 text-[#333333]">Our Faculty</h2>
            <p className="text-xl font-semibold mb-4 red-color">
              IILM University focuses on building strong leadership through excellence in teaching and research.
            </p>
            <p className="text-gray-600 text-base my-8">
              IILM University has high acclaimed, competent, and well-qualified faculty members with strong academic credentials. Our faculty members hold PhD degrees from reputed national/international universities. Various renowned academicians and accomplished industry practitioners are also a part of the IILM faculty team who are passionate about teaching. Our faculty members come from myriad backgrounds,
              and this vast mix of knowledge combined with extensive research and industry experience adds an exceptional learning experience for creative minds.
            </p>

            <p className="text-gray-600 text-base mb-8">
              The faculty of IILM has been continuously working towards making IILM a better place for the students and thus making IILM one of the best universities in Greater Noida and the whole Delhi NCR region.
            </p>

            <p className="text-gray-600 text-base mb-8">
              The faculty members adopt a blended learning pedagogy where theory and real-world practices are weaved into the curriculum to prepare students for employability. Teaching methods include
              case studies, simulation, role plays, seminars, and presentations. Apart from classroom teaching, our faculty members actively engage in research, consultancy, and corporate training
              programs in their respective areas of expertise. IILM organises various faculty development programs (FDPs) throughout the year for upgrading its faculty members’ learning and intellectual growth.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <p className="text-3xl font-semibold mb-12 text-[#333333] uppercase">Director and Dean</p>
            <div className="grid md:grid-cols-4 gap-12">
              {dean.map((e, i) => (
                <div key={i} className="mb-5">
                  <img src={e.src} alt="" />
                  <p className="text-lg font-normal pb-2 m-0 pt-3 red-color">{e.designation}</p>
                  <p className="text-2xl font-semibold ">{e.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <p className="text-3xl font-semibold mb-12 text-[#333333] uppercase">Professor</p>
            <div className="grid md:grid-cols-4 gap-12">
              {profesor.map((e, i) => (
                <div key={i} className="mb-5">
                  <img src={e.src} alt="" />
                  <p className="text-lg font-normal pb-2 m-0 pt-3 red-color">{e.designation}</p>
                  <p className="text-2xl font-semibold ">{e.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <p className="text-3xl font-semibold mb-12 text-[#333333] uppercase">Associate Professor</p>
            <div className="grid md:grid-cols-4 gap-12">
              {asso_profesor.map((e, i) => (
                <div key={i} className="mb-5">
                  <img src={e.src} alt="" />
                  <p className="text-lg font-normal pb-2 m-0 pt-3 red-color">{e.designation}</p>
                  <p className="text-2xl font-semibold ">{e.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <section className="container mx-auto px-4 py-16">
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
        </section> */}
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}


