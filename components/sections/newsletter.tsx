import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="py-16 bg-teal-500 bg-blue-color">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="larger-font font-bold text-white mb-2">Stay Updated with Our Latest News</h2>
            <p className="text-white/80 medium-font">Subscribe to our newsletter and never miss an update on admissions, events, and more.</p>
          </div>
          <div className="flex gap-4">
            <Input type="email" placeholder="Enter email address" className="bg-white rounded-none" />
            <Button variant="secondary" className="smallest-font bg-red-color text-white rounded-none">Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

