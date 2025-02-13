import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="py-16 bg-teal-500 bg-blue-color">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Newsletter - Stay tune and get the latest update</h2>
            <p className="text-white/80">Far far away, behind the word mountains</p>
          </div>
          <div className="flex gap-4">
            <Input type="email" placeholder="Enter email address" className="bg-white" />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

