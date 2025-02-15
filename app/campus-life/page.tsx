import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Newsletter } from "@/components/sections/newsletter"

export default function AboutPage() {
  const learning = [
    {
      title: "Deliver Holistic Education focusing on Intellectual Rigor and Experiential Learning",
      para: "To provide an education that prepares students for successful careers by combining intellectual rigour with experiential activities that prepare students to adapt and thrive in dynamic real-world contexts."
    },
    {
      title: "Enhance Cognitive Flexibility",
      para: "To equip students with the ability to think critically and make sound decisions in a rapidly evolving world thereby developing students’ adaptability and entrepreneurial mindset to thrive in uncertainty and drive innovative solutions."
    },
    {
      title: "Encourage Innovation, Research and Knowledge Advancement",
      para: "To promote a culture of innovation, experimentation, scholarly research and creative pursuits, encouraging students to challenge assumptions, seek creative solutions contribute to societal betterment and advancement of knowledge."
    },
    {
      title: "Enhance Digital Literacy and Competency",
      para: "To equip students with the skills to use digital tools to evaluate, filter, and analyse digital content for credibility, relevance, and accuracy, for both career readiness and personal tasks, ensuring that technology empowers them in all aspects of life."
    },
    {
      title: "Cultivate Teamwork and Communication Skills",
      para: "To enhance teamwork and communication by fostering clear, efficient exchanges of information and encouraging active listening, enabling students to collaborate effectively in diverse teams and work environments."
    },
    {
      title: "Engage in Community-Based Learning",
      para: "To provide opportunities for service learning, internships, and other community-based activities, fostering meaningful partnerships at local, national, and international levels."
    }, {
      title: "Foster an Inclusive and Socially Responsible Community",
      para: "To cultivate a diverse and inclusive community committed to social responsibility, global awareness, and civic engagement."
    },
    {
      title: "Prepare Responsible Global Citizens and Leaders",
      para: "We provide students with the knowledge, skills, and experiences needed to make a positive impact and take on leadership roles globally."
    }, {
      title: "Promote Sustainability and Environmental Responsibility",
      para: "Committed to sustainability by implementing environmentally friendly practices and reducing the university’s ecological footprint."
    },
    {
      title: "Support Self-directed and Continuous Learning",
      para: "We provide an environment that empowers students to take control of their educational journey, fostering independence and a culture of lifelong learning."
    }
  ]
  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-screen mb-16">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("/campus-life.webp")',
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
            <div className="max-w-3xl hero-content">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                Campus life
              </h1>
              <p className="text-lg mb-8 text-white/90 max-w-lg">
                Experience a vibrant campus where learning meets life—discover opportunities, friendships, and a future full of possibilities!
              </p>
            </div>
          </div>
        </section>

        {/* {About Academia} */}
        <section className="container mx-auto md:px-40 py-16">
          <p className="md:text-4xl text-xl mb-16 font-extralight text-[#303030]">Life @ IILM University</p>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img
                src="/campus-1.webp"
                alt="Campus Life"
                className="w-full"
              />
            </div>
            <div>
              <p className="md:text-3xl text-2xl font-semibold mb-5 blue-color pb-5" style={{ borderBottom: '2px solid #1A305C' }}>
                Build friendships and connections that last a lifetime
              </p>
              <p className="blue-color text-xl mb-4 font-extralight">
                Campus life goes beyond academics, offering a holistic experience with stunning architecture, a bustling urban environment, vibrant cafeterias, world-class libraries, and a
                dynamic, inclusive community. Here, you’ll find a supportive and encouraging environment where everyone belongs. No matter your background, IILM University truly feels like home.
              </p>
            </div>

          </div>
        </section>

        {/* {About Vision & Mission */}
        <section className="container mx-auto md:px-40 pb-16">
          <div className="grid md:grid-cols-2 gap-5">
            <img
              src="/campus-2.webp"
              alt="Campus Life"
              className="w-full"
            />
            <img
              src="/campus-3.webp"
              alt="Campus Life"
              className="w-full"
            />
            <img
              src="/campus-4.webp"
              alt="Campus Life"
              className="w-full"
            />
            <img
              src="/campus-5.webp"
              alt="Campus Life"
              className="w-full"
            />
          </div>
        </section>

        <section className="py-16 bg-[#81202c]">
          <div className="container mx-auto md:px-40 px-4">
            <p className="text-3xl font-semibold text-white mb-12">A Perfect Blend of Learning and Living at IILM Greater Noida</p>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <img
                  src="/perfect-blend.webp"
                  alt="Campus Life"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-sm text-white">
                  IILM University’s Greater Noida campus is nestled in the heart of Knowledge
                  Park II, offering a serene yet dynamic environment for students.
                  Spread across 26 acres, the campus combines modern infrastructure with lush green spaces, creating a
                  perfect setting for academic and personal growth.</p><br />
                <p className="font-semibold text-sm text-white">Strategically located, the campus is well-connected to major
                  city landmarks, with the metro station and key attractions like The Grand Venice Mall and Stellar Children’s
                  Museum nearby. Students can enjoy the convenience of urban amenities alongside a peaceful academic atmosphere.</p>
                <br />
                <p className="font-semibold text-sm text-white">
                  Our diverse student community, with individuals from across India and abroad, enriches campus life.
                  Various cultural, academic, and recreational activities foster inclusivity and vibrancy, making
                  IILM Greater Noida a sought-after destination for students.
                </p><br />
                <p className="font-semibold text-sm text-white">State-of-the-art facilities, including a well-stocked library,
                  advanced IT resources, and recreational amenities, ensure a holistic learning experience. Those residing on
                  campus benefit from a secure, engaging, and fulfilling lifestyle.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto md:px-40 py-16">
          <p className="md:text-3xl text-2xl font-semibold mb-5 blue-color pb-5">
            Beyond the Classroom
          </p>
          <div className="grid md:grid-cols-3 gap-5 my-5">
            <div>
              <p className="text-[#303030] mb-3 text-lg font-semibold">Vibrant Campus Life:</p>
              <p className="text-[#303030] text-base font-medium">Sports, arts, leadership opportunities – find your passion</p>
            </div>
            <div>
              <p className="text-[#303030] mb-3 text-lg font-semibold">Incubation Centre:</p>
              <p className="text-[#303030] text-base font-medium">Turn your ideas into reality</p>
            </div>
            <div>
              <p className="text-[#303030] mb-3 text-lg font-semibold">Premier Facilities:</p>
              <p className="text-[#303030] text-base font-medium">Labs, libraries, and creative spaces that fuel innovation</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5 pt-5">
            <img
              src="/classroom-1.webp"
              alt="Campus Life"
              className="w-full object-cover"
            />
            <img
              src="/classroom-2.webp"
              alt="Campus Life"
              className="w-full object-cover"
            />
            <img
              src="/classroom-3.webp"
              alt="Campus Life"
              className="w-full object-cover"
            />
          </div>
        </section>

        <section className="container mx-auto md:px-40 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="md:text-3xl text-2xl font-semibold mb-5 blue-color pb-5">
                Student Life
              </p>
              <p className="font-semibold text-sm text-[#303030]">
                IILM offers a vibrant and inclusive student community where diversity thrives.
                Students can participate in various clubs, cultural events, and campus activities
                that foster creativity, teamwork, and networking. From leadership opportunities
                in student-led organisations to engaging in debates, festivals, and TEDx talks,
                the campus provides a dynamic and enriching environment.
              </p>
            </div>
            <div>
              <img
                src="/student-life.webp"
                alt="Campus Life"
                className="w-full md:h-96 h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto md:px-40 py-5">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img
                src="/campus-facilities.webp"
                alt="Campus Life"
                className="w-full md:h-96 h-full object-cover"
              />
            </div>
            <div>
              <p className="md:text-3xl text-2xl font-semibold mb-5 blue-color pb-5">
                Campus Facilities
              </p>
              <p className="font-semibold text-sm text-[#303030]">
                IILM boasts state-of-the-art infrastructure, including advanced libraries, tech-enabled
                labs, and collaborative recreational spaces. Modern amenities such as dining areas,
                social hubs, and well-equipped hostels make the campus a supportive and inspiring place to live and learn
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto md:px-40 py-5">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="md:text-3xl text-2xl font-semibold mb-5 blue-color pb-5">
                Sports and Fitness
              </p>
              <p className="font-semibold text-sm text-[#303030]">
                Promoting a healthy and active lifestyle, IILM provides top-notch sports facilities, fitness centres,
                and wellness programmes. Students can participate in team sports, yoga sessions, or gym activities,
                ensuring a balance between academics and physical well-being.
              </p>
            </div>
            <div>
              <img
                src="/sports.webp"
                alt="Campus Life"
                className="w-full md:h-96 h-full object-cover"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5 pt-5">
            <img
              src="/sports-1.webp"
              alt="Campus Life"
              className="w-full object-cover"
            />
            <img
              src="/sports-2.webp"
              alt="Campus Life"
              className="w-full object-cover"
            />
            <img
              src="/sports-3.webp"
              alt="Campus Life"
              className="w-full object-cover"
            />
          </div>
        </section>

        <section className="container mx-auto md:px-40 py-16">
          <div className="grid md:grid-cols-2 gap-5 pt-5">
            <div>
              <p className="md:text-4xl text-2xl mb-4 font-semibold text-[#303030]">Residences @ IILM University</p>

              <p className="font-extralight text-sm text-[#333333]">
                At IILM University, we understand that moving away from home can be a big step. That’s
                why our on-campus hostels are designed to provide a safe, comfortable, and welcoming
                environment for all students. With separate facilities for boys and girls, our hostels
                offer a true home-away-from-home experience.</p><br />
              <p className="font-extralight text-sm text-[#333333]">
                The rooms are spacious, well-lit, and airy, ensuring students feel relaxed and at ease.
                Each hostel is overseen by a dedicated warden, providing guidance and support to students
                while ensuring the smooth running of daily activities.
              </p>
              <br />
              <p className="font-extralight text-sm text-[#333333]">
                Our hostels come equipped with air-conditioning, Wi-Fi, RO water purifiers, and water
                coolers. Students can enjoy access to a gym, indoor and outdoor games, and shared spaces
                like a lounge, games room, and study area. Essential services are thoughtfully provided
                to ensure a stress-free and comfortable stay.
              </p><br />
              <p className="font-extralight text-sm text-[#333333]">

                Living on campus at IILM is about more than just convenience – it’s about fostering a
                vibrant, supportive community where students can thrive both personally and academically.
              </p>
            </div>
            <div>
              <img src="/residence.webp" className="w-full" alt="" />
            </div>
          </div>
        </section>
        <section className="container mx-auto md:px-40 py-8">
          <p className="md:text-4xl text-2xl mb-4 font-semibold text-[#303030]">Virtual Tour</p>
        </section>
        <div className="relative">
          <a href="https://www.youtube.com/watch?v=wg-G-JL8X3I" className="absolute top-2/4 left-2/4 w-12 cursor-pointer">
            <img src="/play_icon.png" className="" alt="" />
          </a>
          <img src="/vietual-tour.webp" className="h-5/6" alt="" />
        </div>
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}


