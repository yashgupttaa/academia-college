import { GraduationCap, Users, Calendar, BookOpen } from "lucide-react"

const stats = [
  { icon: GraduationCap, count: "3,000+", label: "SUCCESS STORIES" },
  { icon: Users, count: "320+", label: "TRUSTED TUTORS" },
  { icon: Calendar, count: "1,000+", label: "SCHEDULES" },
  { icon: BookOpen, count: "587+", label: "COURSES" },
]

export function Stats() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-teal-500 red-color" />
              <h3 className="largest-font font-bold mb-2 red-color">{stat.count}</h3>
              <p className="text-gray-600 smallest-font blue-color">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

