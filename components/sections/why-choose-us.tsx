import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { BookOpen } from "lucide-react" // Import BookOpen

const courses = [
  {
    image: "/why-choose-1.webp",
    step: "01",
    tophead: "Over 30 years of Academic Excellence",
    bottomehead: "Delivering quality education with a legacy of three decades."
  },
  {
    image: "/why-choose-2.webp",
    step: "02",
    tophead: "Global Network of over 16,000 Alumni",
    bottomehead: "A strong, supportive alumni community spread across the globe."
  },
  {
    image: "/why-choose-3.webp",
    step: "03",
    tophead: "International Collaborations",
    bottomehead: "Partnering with renowned global institutions for a holistic education experience."
  },
  {
    image: "/why-choose-4.webp",
    step: "04",
    tophead: "Job Opportunities with over 400 Companies",
    bottomehead: "Connecting students with leading employers for rewarding careers."
  },
  {
    image: "/why-choose-5.webp",
    step: "05",
    tophead: "Centrally Located Green Campuses",
    bottomehead: "Eco-friendly campuses situated in prime, accessible locations."
  },
  {
    image: "/why-choose-6.webp",
    step: "06",
    tophead: "Merit-based Scholarships",
    bottomehead: "Recognising and rewarding academic excellence with financial support."
  },
  {
    image: "/why-choose-7.webp",
    step: "07",
    tophead: "Renowned Faculty from Academic and Industry",
    bottomehead: "Learn from experts with rich academic and industry experience."
  },
  {
    image: "/why-choose-8.webp",
    step: "08",
    tophead: "Vibrant Campus Life",
    bottomehead: "Experience an engaging and dynamic environment both inside and outside the classroom."
  },
  {
    image: "/why-choose-9.webp",
    step: "09",
    tophead: "Internationally Benchmarked Curriculum",
    bottomehead: "A curriculum designed to meet global standards of education and practice."
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-16 why-choos-us">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="largest-font text-white pb-3 font-bold">Why Choose Academic College?</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="border-none shadow-lg bg-blue-color">
              <CardHeader>
                <img src={course.image} width={80} height={80} alt="" />
              </CardHeader>
              <h2 className="largest-font text-white p-6 pt-0 font-extrabold">{course.step}</h2>
              <CardContent>
                <p className="larger-font pb-3 font-bold text-white">{course.tophead}</p>
                <p className="smallest-font text-white">{course.bottomehead}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

