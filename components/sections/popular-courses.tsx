import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { BookOpen } from "lucide-react" // Import BookOpen

const courses = [
  {
    title: "Introducing to Software Engineering",
    rating: 5.0,
    instructor: "John Smith",
    lectures: "50 lectures (190 hrs)",
    price: { full: "$100", monthly: "$15" },
  },
  {
    title: "Enhancing Adobe Photoshop CC 2020 Skills",
    rating: 5.0,
    instructor: "Ram Gurung",
    lectures: "30 lectures (125 hrs)",
    price: { full: "$200", monthly: "$25" },
  },
  {
    title: "HTML, CSS, and Javascript for Web Developers",
    rating: 5.0,
    instructor: "Saroj Nepal",
    lectures: "50 lectures (50 hrs)",
    price: { full: "$50", monthly: "$5" },
  },
]

export function PopularCourses() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold">EXPLORE OUR DIVERSE SCHOOLS</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">{course.title}</h4>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                  ))}
                  <span className="ml-2">({course.rating})</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">by {course.instructor}</p>
                <p className="text-gray-600">{course.lectures}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div>
                  <p className="font-bold">{course.price.full} All Course</p>
                  <p className="text-sm text-gray-600">{course.price.monthly} per month</p>
                </div>
                <Button className="bg-teal-500 text-white hover:bg-teal-600">ENROLL NOW !</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

