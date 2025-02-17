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

export function GlobalConnect() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container py-5 md:py-[3rem] mx-auto">
        <div className="grid md:grid-cols-2">
          <div className="global-connect md:p-[3rem] p-5">
            <p className="larger-font pb-5 md:pb-[2rem] font-bold text-white">GLOBAL CONNECT</p>
            <p className="pb-4 md:pb-[1.5rem] medium-font text-white">Academic College’s Global Connect fosters international collaborations, offering study abroad,
              global degrees, and cultural exposure. Alumni thrive globally, supported by partnerships across the UK, USA, Canada, and more.
            </p>
            <div className="flex gap-2 pb-2 items-center">
              <ArrowRight stroke="#FFFFFF" size={16} />
              <p className="text-white smallest-font">Social Initiatives</p>
            </div>
            <div className="flex gap-2 pb-2 items-center">
              <ArrowRight stroke="#FFFFFF" size={16} />
              <p className="text-white smallest-font">Global Study</p>
            </div>
            <div className="flex gap-2 pb-2 items-center">
              <ArrowRight stroke="#FFFFFF" size={16} />
              <p className="text-white smallest-font">Partner Universities</p>
            </div>
            <div className="flex gap-2 pb-2 items-center">
              <ArrowRight stroke="#FFFFFF" size={16} />
              <p className="text-white smallest-font">Student Exchange Programme</p>
            </div>
            <div className="flex bg-white gap-2 mt-[2rem] items-center px-4" style={{ width: 'fit-content' }}>
              <button className="text-[#81202C] font-bold px-4 py-3 smaller-font">View All</button>
              <ArrowRight stroke="#81202C" size={16} />
            </div>
          </div>
          <div>
            <img src="/global-connect.webp" className="h-full" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

