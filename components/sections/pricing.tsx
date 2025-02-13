import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "BASIC PLAN",
    price: "49K",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    name: "BEGINNER PLAN",
    price: "79K",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    name: "PREMIUM PLAN",
    price: "109k",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    name: "ULTIMATE PLAN",
    price: "149K",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
]

export function Pricing() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-teal-500 font-medium mb-2">OUR PRICING</h2>
          <h3 className="text-3xl font-bold">Pricing & Packages</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <h4 className="text-xl font-bold mb-4">{plan.name}</h4>
                <div className="text-5xl font-bold mb-4">
                  <span className="text-2xl">$</span>
                  {plan.price}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{plan.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-teal-500 text-white hover:bg-teal-600">GET STARTED</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

