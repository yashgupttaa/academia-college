import { Card, CardContent } from "@/components/ui/card"
import {
  Library,
  Wifi,
  Coffee,
  Dumbbell,
  Bus,
  Building2,
  AmbulanceIcon as FirstAid,
  UtensilsCrossed,
  Bed,
  Microscope,
  ComputerIcon as Desktop,
  Users,
} from "lucide-react"

const facilities = [
  {
    icon: Library,
    title: "Central Library",
    description: "State-of-the-art library with over 50,000 books and digital resources",
  },
  {
    icon: Desktop,
    title: "Computer Labs",
    description: "Modern computer labs with latest software and high-speed internet",
  },
  {
    icon: Microscope,
    title: "Research Labs",
    description: "Well-equipped research laboratories for practical learning",
  },
  {
    icon: Wifi,
    title: "Wi-Fi Campus",
    description: "High-speed internet connectivity throughout the campus",
  },
  {
    icon: Coffee,
    title: "Cafeteria",
    description: "Multiple cafeterias serving healthy and diverse food options",
  },
  {
    icon: Dumbbell,
    title: "Sports Complex",
    description: "Indoor and outdoor sports facilities with professional training",
  },
  {
    icon: Bus,
    title: "Transport",
    description: "Regular bus service covering major routes of the city",
  },
  {
    icon: Building2,
    title: "Auditorium",
    description: "Modern auditorium for events and cultural activities",
  },
  {
    icon: FirstAid,
    title: "Medical Facility",
    description: "24x7 medical facility with qualified staff",
  },
  {
    icon: UtensilsCrossed,
    title: "Mess",
    description: "Hygienic mess facility with nutritious meal options",
  },
  {
    icon: Bed,
    title: "Hostels",
    description: "Separate hostels for boys and girls with modern amenities",
  },
  {
    icon: Users,
    title: "Placement Cell",
    description: "Dedicated placement cell for career guidance and opportunities",
  },
]

export default function FacilitiesPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white">Campus Facilities</h1>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <facility.icon className="w-12 h-12 text-[#00C1A2] mb-4" />
                <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Infrastructure Highlights */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Infrastructure Highlights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3"
                alt="Campus Infrastructure"
                className="rounded-lg shadow-lg mb-8"
              />
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3"
                  alt="Library"
                  className="rounded-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3"
                  alt="Computer Lab"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">World-Class Infrastructure</h3>
              <p className="text-gray-600 mb-6">
                Our campus is spread across 100 acres of lush green environment, equipped with state-of-the-art
                facilities to provide the best learning experience. The infrastructure includes modern classrooms,
                well-equipped laboratories, and recreational facilities.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="w-2 h-2 bg-[#00C1A2] rounded-full"></span>
                  Smart Classrooms with Modern Teaching Aids
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="w-2 h-2 bg-[#00C1A2] rounded-full"></span>
                  Advanced Research Laboratories
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="w-2 h-2 bg-[#00C1A2] rounded-full"></span>
                  Digital Library with Online Resources
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="w-2 h-2 bg-[#00C1A2] rounded-full"></span>
                  Separate Hostels for Boys and Girls
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

