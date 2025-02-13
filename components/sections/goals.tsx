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

export function Goals() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="md:max-w-[900px]">
          <div className="text-[#1A305C] text-lg font-bold">
            Academia University has consistently delivered superior quality education,
            with its integrated and experiential MBA curriculum aligned with leading
            US business schools. Recognised as one of the top 2 emerging business schools
            in the country by Outlook I-CARE Rankings 2025 and ranked 11th among the best
            Indian business schools by Ed Universal in 2015, Academia's institutes have
            maintained their position among the top B-Schools in the country.
          </div><br /><br />
          <div className="text-[#1A305C] text-lg font-bold pb-5 md:pb-[4rem]">
            Academia's commitment to preparing global managers through cross-cultural
            training has set a benchmark for management institutes worldwide,
            making it one of the best private universities in Delhi NCR.
          </div>
          <div>
            <h1 className="text-[32px] text-[#333333] font-semibold">Academia - Awards & Accreditations</h1>
            <p className="pt-2 pb-[3rem]">Outlook I-CARE rankings 2025 (top 2 emerging business schools in the country)</p>
          </div>
          <div className="mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <img src="https://iilm.ac.in/uploads/all/352/conversions/ugc-logo-696x464-full.webp" className="border" alt="" />
              <img src="https://iilm.ac.in/uploads/all/351/conversions/association-of-indian-universities-full.webp" className="border" alt="" />
              <img src="https://iilm.ac.in/uploads/all/350/conversions/prime-full.webp" className="border" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

