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

export function CourseCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-teal-500 font-medium mb-2">COURSES</h2>
          <h3 className="text-3xl font-bold">Browse Our Online Courses</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <category.icon className="w-12 h-12 mx-auto mb-4 text-teal-500" />
                <h4 className="font-semibold mb-2">{category.title}</h4>
                <p className="text-sm text-gray-500">{category.count}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

