import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import { BookOpen } from "lucide-react" // Import BookOpen
import Link from "next/link"

const courses = [
  {
    head: "Shaping Tomorrow's Business Leaders",
    para: "School of Management",
    course: ["MBA", "MBA (STEM)", "BBA"],
    link: "/courses"
  },
  {
    head: "Transforming Legal Education",
    para: "IILM Law School",
    course: ["BA LLB (Hons)", "LLM (One year)", "LLB (Three year)"],
    link: "/courses",
  },
  {
    head: "Tech Innovation Begins Here",
    para: "School of Computer Science & Engineering",
    course: ["B Tech", "BCA", "MCA"],
    link: "/courses"
  },
  {
    head: "Innovate With Technology",
    para: "School of Engineering",
    course: ["B Tech", "M Tech"],
    link: "/courses"
  },
  {
    head: "Discover the Power of Science",
    para: "School of Basic & Applied Sciences",
    course: ["BSc/B Tech", "MSc", "BBA"],
    link: "/courses"
  },
  {
    head: "Bridging Discipline, Building Communities",
    para: "School of Liberal Arts & Social Sciences",
    course: ["Department of Communication", "Department of Psychology", "Department of Liberal Arts"],
    link: "/courses"
  },
]

export function OurSchools() {
  return (
    <section className="py-16  mt-20 bg-red-color-wo-hover">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="md:text-5xl text-2xl text-white pb-3 font-bold">Explore Our Diverse Schools</h3>
          <p className="md:text-2xl text-lg text-white md:pb-5 font-light">Discover a World of Specialised Education</p>
        </div>
        <div className="grid md:grid-cols-3 md:gap-8">

          {courses.map((course, index) => (
            <Card className="bg-[none] rounded-none border-none md:mb-8 schools-div relative md:h-[350px]">
              <CardHeader className="pb-4">
                <p className="text-xl text-white font-bold m-0">{course.head}</p>
              </CardHeader>
              <h2 className="text-2xl text-white p-6 pt-0 font-extrabold">{course.para}</h2>
              <CardContent>
                {course.course.map((c, i) => (
                  <p className="text-lg pb-3 text-white flex items-center gap-3"><span><ArrowRight stroke="#FFFFFF" size={18} /></span>{c}</p>
                ))}
                {/* <p className="text-lg pb-3 text-white flex items-center gap-3"><span><ArrowRight stroke="#FFFFFF" size={18} /></span> MBA</p>
                <p className="text-lg pb-3 text-white flex items-center gap-3"><span><ArrowRight stroke="#FFFFFF" size={18} /></span>BBA</p>
                <p className="text-lg pb-3 text-white flex items-center gap-3"><span><ArrowRight stroke="#FFFFFF" size={18} /></span>MBA (STEM)</p> */}
                <Link className="md:absolute bottom-0 flex text-[#81202C] font-bold py-3 px-5 bg-white gap-2 mt-3 md:mt-[2rem] items-center px-4" href="/courses" style={{ width: 'fit-content' }} >
                  View All
                  <ArrowRight stroke="#81202C" size={18} />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

