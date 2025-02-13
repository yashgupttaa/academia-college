import { Book, Award, User } from "lucide-react"

const benefits = [
  {
    icon: Book,
    title: "Online Courses",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    icon: Award,
    title: "Earn A Certificates",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    icon: User,
    title: "Learn with Expert",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
]

export function Benefits() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/second-lFiA7SVfB3149lPioKhrFQLE547e9P.png"
              alt="Student learning online"
              className="rounded-lg w-full"
            />
          </div>
          <div>
            <h2 className="text-teal-500 font-medium mb-2">LEARN ANYTHING</h2>
            <h3 className="text-3xl font-bold mb-6">Benefits About Online Learning Expertise</h3>
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <benefit.icon className="w-12 h-12 text-teal-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

