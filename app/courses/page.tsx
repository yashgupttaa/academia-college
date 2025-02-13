import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const courses = [
  {
    title: "B.Tech in Computer Science",
    duration: "4 Years",
    seats: 120,
    fee: "₹2.5L per year",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
  },
  {
    title: "B.Tech in Electronics",
    duration: "4 Years",
    seats: 60,
    fee: "₹2.3L per year",
    image: "https://images.unsplash.com/photo-1631619252678-abcb68068e3f",
  },
  {
    title: "MBA in Business Analytics",
    duration: "2 Years",
    seats: 60,
    fee: "₹3.5L per year",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
  {
    title: "M.Tech in AI & ML",
    duration: "2 Years",
    seats: 30,
    fee: "₹2.8L per year",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },
  {
    title: "BBA in Digital Marketing",
    duration: "3 Years",
    seats: 60,
    fee: "₹1.8L per year",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07",
  },
  {
    title: "B.Com Honours",
    duration: "3 Years",
    seats: 120,
    fee: "₹1.5L per year",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c",
  },
]

export default function CoursesPage() {
  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="relative h-[300px] mb-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3")',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Courses</h1>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="h-48 relative">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <h3 className="text-xl font-bold">{course.title}</h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>Duration: {course.duration}</li>
                  <li>Available Seats: {course.seats}</li>
                  <li>Fee Structure: {course.fee}</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#00C1A2] hover:bg-[#00A589]">Apply Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Admission Process */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Admission Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00C1A2] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="font-semibold mb-2">Online Application</h3>
              <p className="text-gray-600">Fill the online application form with required details</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00C1A2] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="font-semibold mb-2">Document Verification</h3>
              <p className="text-gray-600">Submit required documents for verification</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00C1A2] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="font-semibold mb-2">Entrance Test</h3>
              <p className="text-gray-600">Clear the entrance test or interview</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00C1A2] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="font-semibold mb-2">Final Admission</h3>
              <p className="text-gray-600">Complete fee payment and secure admission</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

