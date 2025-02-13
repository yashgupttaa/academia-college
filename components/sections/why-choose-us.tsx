import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { BookOpen } from "lucide-react" // Import BookOpen

const courses = [
  {
    image: "https://iilm.ac.in/uploads/all/97/conversions/delivered-(1)-full.webp",
    step: "01",
    tophead: "Over 30 years of Academic Excellence",
    bottomehead: "Delivering quality education with a legacy of three decades."
  },
  {
    image: "	https://iilm.ac.in/uploads/all/98/conversions/internet-full.webp",
    step: "02",
    tophead: "Global Network of over 16,000 Alumni",
    bottomehead: "A strong, supportive alumni community spread across the globe."
  },
  {
    image: "	https://iilm.ac.in/uploads/all/103/conversions/business-full.webp",
    step: "03",
    tophead: "International Collaborations",
    bottomehead: "Partnering with renowned global institutions for a holistic education experience."
  },
  {
    image: "https://iilm.ac.in/uploads/all/104/conversions/online-interview-full.webp",
    step: "04",
    tophead: "Job Opportunities with over 400 Companies",
    bottomehead: "Connecting students with leading employers for rewarding careers."
  },
  {
    image: "https://iilm.ac.in/uploads/all/110/conversions/location-full.webp",
    step: "05",
    tophead: "Centrally Located Green Campuses",
    bottomehead: "Eco-friendly campuses situated in prime, accessible locations."
  },
  {
    image: "	https://iilm.ac.in/uploads/all/106/conversions/scholarship-full.webp",
    step: "06",
    tophead: "Merit-based Scholarships",
    bottomehead: "Recognising and rewarding academic excellence with financial support."
  },
  {
    image: "https://iilm.ac.in/uploads/all/107/conversions/pennant-full.webp",
    step: "07",
    tophead: "Renowned Faculty from Academia and Industry",
    bottomehead: "Learn from experts with rich academic and industry experience."
  },
  {
    image: "https://iilm.ac.in/uploads/all/108/conversions/university-full.webp",
    step: "08",
    tophead: "Vibrant Campus Life",
    bottomehead: "Experience an engaging and dynamic environment both inside and outside the classroom."
  },
  {
    image: "https://iilm.ac.in/uploads/all/109/conversions/resume-full.webp",
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
          <h3 className="text-5xl text-white pb-3 font-bold">Why Choose Academia University?</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="border-none shadow-lg bg-blue-color">
              <CardHeader>
                <img src={course.image} width={80} height={80} alt="" />
              </CardHeader>
              <h2 className="text-4xl text-white p-6 pt-0 font-extrabold">{course.step}</h2>
              <CardContent>
                <p className="text-lg pb-3 font-bold text-white">{course.tophead}</p>
                <p className="text-lg text-white">{course.bottomehead}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

