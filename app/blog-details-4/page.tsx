import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Newsletter } from "@/components/sections/newsletter"

export default function BlogDetailsPage() {
 
  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-screen mb-8">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("/about-bg.webp")',
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
            <div className="max-w-3xl hero-content">
              <h1 className="largest-font font-bold mb-3 leading-tight text-white">
                About Academic
              </h1>
              <p className="smallest-font mb-8 text-white/90 max-w-lg">
                A Legacy of Learning, A Future of Possibilities – Get to Know Us.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-red-color text-white border-none rounded-none font-semibold smaller-font px-5 py-2">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto lg:px-40 py-16 px-0">
          <article className="mb-8">
            <h2 className="text-2xl font-bold mb-2">
              The Power of Networking on Campus
            </h2>
            <p className="text-sm text-gray-600 mb-4">30 Nov, 2024</p>
            <p className="text-base text-gray-800 mb-4" style={{ textAlign: "justify" }}>
              Networking on campus is one of the most powerful tools students have at their disposal to enhance their academic and professional journeys. Building a strong network can open doors to opportunities, provide support, and create lasting relationships that extend beyond the university years. At our university, we emphasize the importance of networking and provide numerous avenues for students to connect with peers, faculty, alumni, and industry professionals.
            </p>
            <p className="text-base text-gray-800 mb-4" style={{ textAlign: "justify" }}>
              One of the primary benefits of networking on campus is the ability to connect with like-minded individuals who share similar interests and goals. Joining student clubs and organizations is an excellent way to meet peers who are passionate about the same subjects or activities. These groups often host events, workshops, and social gatherings that facilitate meaningful interactions and collaborations. By participating in these activities, students can develop friendships, exchange ideas, and work together on projects that enhance their learning experience.
            </p>
            <p className="text-base text-gray-800 mb-4" style={{ textAlign: "justify" }}>
              Faculty members are another valuable resource for networking on campus. Professors and academic advisors have extensive knowledge and experience in their fields and can provide guidance, mentorship, and support. Building relationships with faculty can lead to research opportunities, internships, and recommendations for future endeavors. Attending office hours, engaging in class discussions, and seeking advice on academic and career goals are effective ways to establish connections with faculty members.
            </p>
            <p className="text-base text-gray-800 mb-4" style={{ textAlign: "justify" }}>
              Alumni networks are a powerful extension of campus networking. Alumni who have graduated and moved on to successful careers can offer valuable insights, advice, and connections. Our university's alumni association organizes events, networking sessions, and mentorship programs that allow current students to interact with alumni. These interactions can lead to internships, job opportunities, and professional mentorship that can significantly impact a student's career trajectory.
            </p>
            <p className="text-base text-gray-800 mb-4" style={{ textAlign: "justify" }}>
              Industry connections are another critical aspect of networking on campus. Our university collaborates with various companies and organizations to provide students with opportunities to engage with industry professionals. Career fairs, guest lectures, and industry panels are some of the events that facilitate these interactions. Networking with professionals in the field can provide students with insights into industry trends, job market demands, and potential career paths. It also allows students to make a positive impression on potential employers and build relationships that can lead to job offers.
            </p>
            <p className="text-base text-gray-800 mb-4" style={{ textAlign: "justify" }}>
              In addition to formal networking opportunities, informal interactions on campus can also be valuable. Conversations with classmates, roommates, and other members of the campus community can lead to unexpected opportunities and collaborations. Being open to meeting new people and engaging in conversations can help students expand their network and discover new interests and possibilities.
            </p>
            <p className="text-base text-gray-800 mb-4" style={{ textAlign: "justify" }}>
              In conclusion, networking on campus is a powerful tool that can significantly enhance a student's academic and professional journey. By building connections with peers, faculty, alumni, and industry professionals, students can access a wealth of opportunities, support, and resources. Our university is committed to fostering a culture of networking and providing students with the platforms and events needed to build strong and meaningful relationships. Embracing the power of networking can lead to a more enriching and successful university experience and lay the foundation for a bright future.
            </p>
          </article>
        </section>
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}


