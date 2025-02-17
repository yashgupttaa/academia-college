import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Newsletter } from "@/components/sections/newsletter"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-screen mb-8">
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
              <h1 className="largest-font font-bold mb-3 leading-tight text-white">
                Campus life
              </h1>
              <p className="smallest-font mb-8 text-white/90 max-w-lg">
                A Thriving Campus Where Learning Meets Life – Discover Your Second Home.
              </p>
            </div>
          </div>
        </section>

        <section className="container py-8 mx-auto lg:px-40 px-4">
          <p className="larger-font mb-12 font-bold text-[#303030]">Life @ Academic College</p>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img
                src="/campus-1.webp"
                alt="Campus Life"
                className="w-full"
              />
            </div>
            <div>
              <p className="larger-font font-semibold mb-5 blue-color pb-5" style={{ borderBottom: '2px solid #1A305C' }}>
                Build friendships and connections that last a lifetime
              </p>
              <p className="blue-color smallest-font mb-4 font-extralight">
                Campus life goes beyond academics, offering a holistic experience with stunning architecture, a bustling urban environment, vibrant cafeterias, world-class libraries, and a
                dynamic, inclusive community. Here, you’ll find a supportive and encouraging environment where everyone belongs. No matter your background, Academic College truly feels like home.
              </p>
            </div>

          </div>
        </section>

        <section className="container mx-auto lg:px-40 pb-16 px-4">
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
            <p className="larger-font font-semibold text-white mb-12">A Perfect Blend of Learning and Living at Academic College</p>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <img
                  src="/perfect-blend.webp"
                  alt="Campus Life"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold smaller-font text-white">
                  Academic College’s Aligarh campus is nestled in the heart of Knowledge
                  Park II, offering a serene yet dynamic environment for students.
                  Spread across 26 acres, the campus combines modern infrastructure with lush green spaces, creating a
                  perfect setting for academic and personal growth.</p><br />
                <p className="font-semibold smaller-font text-white">Strategically located, the campus is well-connected to major
                  city landmarks, with the metro station and key attractions like The Grand Venice Mall and Stellar Children’s
                  Museum nearby. Students can enjoy the convenience of urban amenities alongside a peaceful academic atmosphere.</p>
                <br />
                <p className="font-semibold smaller-font text-white">
                  Our diverse student community, with individuals from across India and abroad, enriches campus life.
                  Various cultural, academic, and recreational activities foster inclusivity and vibrancy, making
                  Academic a sought-after destination for students.
                </p><br />
                <p className="font-semibold smaller-font text-white">State-of-the-art facilities, including a well-stocked library,
                  advanced IT resources, and recreational amenities, ensure a holistic learning experience. Those residing on
                  campus benefit from a secure, engaging, and fulfilling lifestyle.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto lg:px-40 py-16 px-4">
          <p className="larger-font font-semibold mb-5 blue-color">
            Beyond the Classroom
          </p>
          <div className="grid md:grid-cols-3 gap-5 my-5">
            <div>
              <p className="text-[#303030] mb-3 medium-font font-semibold">Vibrant Campus Life:</p>
              <p className="text-[#303030] smallest-font font-medium">Sports, arts, leadership opportunities – find your passion</p>
            </div>
            <div>
              <p className="text-[#303030] mb-3 medium-font font-semibold">Incubation Centre:</p>
              <p className="text-[#303030] smallest-font font-medium">Turn your ideas into reality</p>
            </div>
            <div>
              <p className="text-[#303030] mb-3 medium-font font-semibold">Premier Facilities:</p>
              <p className="text-[#303030] smallest-font font-medium">Labs, libraries, and creative spaces that fuel innovation</p>
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

        <section className="container mx-auto lg:px-40 py-8 px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="larger-font font-semibold mb-5 blue-color pb-5">
                Student Life
              </p>
              <p className="font-semibold smallest-font text-[#303030]">
                Academic offers a vibrant and inclusive student community where diversity thrives.
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

        <section className="container mx-auto lg:px-40 py-5 px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img
                src="/campus-facilities.webp"
                alt="Campus Life"
                className="w-full md:h-96 h-full object-cover"
              />
            </div>
            <div>
              <p className="larger-font font-semibold mb-5 blue-color pb-5">
                Campus Facilities
              </p>
              <p className="font-semibold smallest-font text-[#303030]">
                Academic boasts state-of-the-art infrastructure, including advanced libraries, tech-enabled
                labs, and collaborative recreational spaces. Modern amenities such as dining areas,
                social hubs, and well-equipped hostels make the campus a supportive and inspiring place to live and learn
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto lg:px-40 py-5 px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="larger-font font-semibold mb-5 blue-color pb-5">
                Sports and Fitness
              </p>
              <p className="font-semibold smallest-font text-[#303030]">
                Promoting a healthy and active lifestyle, Academic provides top-notch sports facilities, fitness centres,
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

        <section className="container mx-auto lg:px-40 py-8 px-4">
          <div className="grid md:grid-cols-2 gap-5 pt-5">
            <div>
              <p className="larger-font mb-4 font-semibold text-[#303030]">Residences @ Academic College</p>

              <p className="font-extralight smallest-font text-[#333333]">
                At Academic College, we understand that moving away from home can be a big step. That’s
                why our on-campus hostels are designed to provide a safe, comfortable, and welcoming
                environment for all students. With separate facilities for boys and girls, our hostels
                offer a true home-away-from-home experience.</p><br />
              <p className="font-extralight smallest-font text-[#333333]">
                The rooms are spacious, well-lit, and airy, ensuring students feel relaxed and at ease.
                Each hostel is overseen by a dedicated warden, providing guidance and support to students
                while ensuring the smooth running of daily activities.
              </p>
              <br />
              <p className="font-extralight smallest-font text-[#333333]">
                Our hostels come equipped with air-conditioning, Wi-Fi, RO water purifiers, and water
                coolers. Students can enjoy access to a gym, indoor and outdoor games, and shared spaces
                like a lounge, games room, and study area. Essential services are thoughtfully provided
                to ensure a stress-free and comfortable stay.
              </p><br />
              <p className="font-extralight smallest-font text-[#333333]">

                Living on campus at Academic is about more than just convenience – it’s about fostering a
                vibrant, supportive community where students can thrive both personally and academically.
              </p>
            </div>
            <div>
              <img src="/residence.webp" className="w-full" alt="" />
            </div>
          </div>
        </section>
        <section className="container mx-auto lg:px-40 py-8 px-4" id="virtual-tour">
          <p className="larger-font mb-4 font-semibold text-[#303030]">Virtual Tour</p>
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


