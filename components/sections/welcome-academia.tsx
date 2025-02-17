import {
  MonitorSmartphone,
  Palette,
  Binary,
  History,
  Code2,
  Database,
  Heart,
  BarChart3,
  PenTool,
  Music,
  Briefcase,
  Globe,
  ArrowRight
} from "lucide-react"
import Link from "next/link"

const categories = [
  { icon: MonitorSmartphone, title: "UI/UX Design Courses", count: "25 Courses" },
  { icon: Palette, title: "Art & Design", count: "25 Courses" },
  { icon: Binary, title: "Computer Science", count: "10 Courses" },
  { icon: History, title: "History & Archeologic", count: "15 Courses" },
  { icon: Code2, title: "Software Engineering", count: "30 Courses" },
  { icon: Database, title: "Information Software", count: "60 Courses" },
  { icon: Heart, title: "Health & Fitness", count: "10 Courses" },
  { icon: BarChart3, title: "Marketing", count: "30 Courses" },
  { icon: PenTool, title: "Graphic Design", count: "80 Courses" },
  { icon: Music, title: "Music", count: "120 Courses" },
  { icon: Briefcase, title: "Business Administration", count: "17 Courses" },
  { icon: Globe, title: "Web Management", count: "17 Courses" },
]

export function WelcomeAcademia() {
  return (
    <section className="md:py-16 py-5 bg-gray-50">
      <div className="container mx-auto md:p-[6rem] welcome-section">
        <div className="bg-white md:p-[2.5rem] p-5 max-w-[600px]">
          <h2 className="font-bold larger-font">WELCOME TO ACADEMIC</h2>
          <p className="py-[1rem] smallest-font mb-4">Founded in 1993, Academic College Aligarh emerges as a pioneer of excellence in Delhi NCR.
            Our 26-acre campus at Knowledge Park II offers cutting-edge facilities for Technology, Innovation
            and Entrepreneurship. Operating under the UP Private College Act 2022, we're committed to shaping
            global leaders with focus on research and industry partnerships.
          </p>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 pb-[2rem]">
              <Link href='/about' className="flex gap-2 mb-2">
                <ArrowRight stroke="#81202c" size={14} />
                <p className="red-color smaller-font">About Academic</p>
              </Link>
              <Link href='/about#vision_mission' className="flex gap-2 mb-2">
                <ArrowRight stroke="#81202c" size={14} />
                <p className="red-color smaller-font">Vision & Mission</p>
              </Link>
              <Link href='#reserch' className="flex gap-2 mb-2">
                <ArrowRight stroke="#81202c" size={14} />
                <p className="red-color smaller-font">Reserch</p>
              </Link>
              <Link href='#schools' className="flex gap-2 mb-2">
                <ArrowRight stroke="#81202c" size={14} />
                <p className="red-color smaller-font">School</p>
              </Link>
              <Link href='/social-iniative' className="flex gap-2 mb-2">
                <ArrowRight stroke="#81202c" size={14} />
                <p className="red-color smaller-font">Social Initiatives</p>
              </Link>
            </div>
            <Link className="bg-red-color text-white font-bold px-5 py-3 smaller-font" href='/about'>Know More</Link>
          </div>
        </div>
      </div>
    </section >
  )
}

