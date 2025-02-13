import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Developer at InfoTech Solutions",
    quote:
      "Academia’s dynamic curriculum and practical approach helped me build a strong foundation in marketing. Today, I’m proud to be part of the BrightWave Communications team.",
  },
  {
    name: "Priya Iyer",
    role: "Data Analyst at DigiMetrics",
    quote:
      "The personalized guidance and real-world projects at Academia prepared me for the industry. Thanks to their support, I am now thriving as a Data Analyst at DigiMetrics.",
  },
  {
    name: "Ankit Verma",
    role: "Founder of GreenLeaf Innovations",
    quote:
      "Academia was instrumental in nurturing my entrepreneurial spirit. The resources and mentorship provided helped me establish GreenLeaf Innovations, focusing on sustainable solutions.",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-5xl text-white pb-3 font-bold blue-color">Our Successful Students</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-8">
                <QuoteIcon className="w-12 h-12 mx-auto mb-6 text-teal-500 blue-color" />
                <p className="mb-6 text-gray-600">{testimonial.quote}</p>
                <h4 className="font-bold text-2xl pb-1 red-color">{testimonial.name}</h4>
                <p className="text-teal-500 blue-color">{testimonial.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

