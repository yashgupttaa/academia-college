import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { MessageCircle } from "lucide-react"

const posts = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sixth-99uzWQ856BW1jB4NQilzbfCWn7iGNq.png",
    date: "JAN. 18, 2021",
    author: "Admin",
    comments: 3,
    title: "Build your Dream Software & Engineering Career",
    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sixth-99uzWQ856BW1jB4NQilzbfCWn7iGNq.png",
    date: "APR. 25, 2022",
    author: "Admin",
    comments: 5,
    title: "Build your Dream Software & Engineering Career",
    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sixth-99uzWQ856BW1jB4NQilzbfCWn7iGNq.png",
    date: "MAY. 15, 2022",
    author: "User",
    comments: 10,
    title: "Build your Dream Software & Engineering Career",
    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
]

export function Blog() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-teal-500 font-medium mb-2">OUR BLOG</h2>
          <h3 className="text-3xl font-bold">Recent From Blog</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="p-0">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-64 object-cover" />
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                  <span className="flex items-center">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    {post.comments}
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-2">{post.title}</h4>
                <p className="text-gray-600">{post.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

