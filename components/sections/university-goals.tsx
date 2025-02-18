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
  ArrowRight,
  Pointer
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

export function UniversityGoals() {
  return (
    <section className="md:pt-16">
      <div className="container py-5 md:py-[3rem] mx-auto">
        <div className="grid md:grid-cols-2 items-center">
          <img src="/goals.png" className="md:px-0 px-4" alt="" />
          <div className="md:p-[3rem] p-5">
            <p className="larger-font pb-5 font-bold text-[#303030]">College Goals</p>
            <p className="md:pb-[1.5rem] medium-font text-semibold blue-color pb-5">To excel in its educational endeavours, Academic's aims to be among India’s top B-schools by focusing on:</p>
            <div className="grid md:grid-cols-2 gap-5 py-5">
              <div className="goals-point">
                <p className="pl-3 font-bold smallest-font">Student Outreach, Engagement, and Achievement.</p>
              </div>
              <div className="goals-point">
                <p className="pl-3 font-bold smallest-font">Institute-Industry-Society Interface engaging Indian and global businesses within a societal context.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5 pb-5 md:pt-[2rem]">
              <div className="goals-point">
                <p className="pl-3 font-bold smallest-font">Thought Leadership through impactful research, training, and consultancy.</p>
              </div>
              <div className="goals-point">
                <p className="pl-3 font-bold smallest-font">Recognition via rankings, ratings, and accreditations.</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5 pb-5 md:pt-[2rem]">
              <div className="goals-point">
                <p className="pl-3 font-bold text-md">Adopting Contemporary Technology in teaching, learning, and operations.</p>
              </div>
              <div className="goals-point">
                <p className="pl-3 font-bold text-md">Being an Employer of Choice by nurturing and developing talent.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

