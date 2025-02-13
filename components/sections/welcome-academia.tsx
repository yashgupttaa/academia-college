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
import { Card, CardContent } from "@/components/ui/card"

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
          <h2 className="font-bold text-3xl">WELCOME TO ACADEMIA</h2>
          <p className="py-[1rem]">Founded in 1993, IILM University Greater Noida emerges as a pioneer of excellence in Delhi NCR.
            Our 26-acre campus at Knowledge Park II offers cutting-edge facilities for Technology, Innovation
            and Entrepreneurship. Operating under the UP Private University Act 2022, we're committed to shaping
            global leaders with focus on research and industry partnerships.
          </p>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 pb-[2rem]">
              <div className="flex gap-2">
                <ArrowRight stroke="#81202c" size={20} />
                <p className="red-color">About Academia</p>
              </div>
              <div className="flex gap-2">
                <ArrowRight stroke="#81202c" size={20} />
                <p className="red-color">Vision & Mission</p>
              </div>
              <div className="flex gap-2">
                <ArrowRight stroke="#81202c" size={20} />
                <p className="red-color">Reserch</p>
              </div>
              <div className="flex gap-2">
                <ArrowRight stroke="#81202c" size={20} />
                <p className="red-color">School</p>
              </div>
              <div className="flex gap-2">
                <ArrowRight stroke="#81202c" size={20} />
                <p className="red-color">Social Initiatives</p>
              </div>
            </div>
            <button className="bg-red-color text-white font-bold p-4">Know More</button>
          </div>
        </div>
      </div>
    </section>
  )
}

