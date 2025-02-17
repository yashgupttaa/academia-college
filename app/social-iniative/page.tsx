import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Newsletter } from "@/components/sections/newsletter"

export default function SocialIniativePage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-screen mb-8">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("/social-iniative.webp")',
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
                Social Iniative
              </h1>
              <p className="smallest-font mb-8 text-white/90 max-w-lg">
                Committed to Community, Dedicated to Change – Be a Part of the Movement!
              </p>
            </div>
          </div>
        </section>

        <section className="container py-8 mx-auto lg:px-40 px-4">
          <p className="larger-font font-bold text-[#303030]">Social Iniatives @ Academic College</p>
        </section>

        <section className="container mx-auto lg:px-40 py-5 px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img
                src="/social-1.webp"
                alt="Campus Life"
                className="w-full md:h-96 h-full object-cover"
              />
            </div>
            <div>
              <p className="larger-font font-semibold mb-5 blue-color pb-5">
                Social Initiatives at Academic
              </p>
              <p className="font-semibold smallest-font text-[#303030]">
                At Academic, social responsibility is a core value that shapes both our teaching and actions.
                We aim to develop leaders who are not only business-savvy but also socially conscious,
                capable of addressing the challenges at the intersection of management and society.
              </p>
            </div>
          </div>
        </section>
        <section className="container mx-auto lg:px-40 py-5 px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="larger-font font-semibold mb-5 blue-color pb-5">
                Roshni Rai School
              </p>
              <p className="font-semibold smallest-font text-[#303030]">
                The Roshni Rai School is a testament to Academic’s commitment to education for all. It
                provides free education to children from underprivileged backgrounds, motivating parents
                in slum areas to send their children to school. Students receive educational kits,
                including books, stationery, uniforms, and midday snacks. The school also promotes holistic
                development through activities like debates, music, crafts, skits, and excursions. Hygiene,
                environmental awareness, and moral education are integral to the programme, ensuring a well-rounded
                foundation. Students are encouraged to pursue higher education at Academic College, which offers
                diverse courses in law, liberal arts, and design, among others.
              </p>
            </div>
            <div>
              <img
                src="/social-2.webp"
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
                src="/social-3.webp"
                alt="Campus Life"
                className="w-full md:h-96 h-full object-cover"
              />
            </div>
            <div>
              <p className="larger-font font-semibold mb-5 blue-color pb-5">
                ICHHA Club
              </p>
              <p className="font-semibold smallest-font text-[#303030]">
                ICHHA, which stands for “Academic Community Harbouring Hopes for All,” is a volunteer-driven
                initiative that fosters a culture of giving back. This club enables students to work on
                impactful projects, including collaborations with NGOs, management-based solutions for the
                unorganised sector, and community engagement programmes. Past initiatives include hygiene
                training for women in slums and practical exposure for students through NGO partnerships.
                ICHHA instils in students the importance of empathy and active contribution to society.
              </p>
            </div>
          </div>
        </section>
        <section className="container mx-auto lg:px-40 py-5 px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="larger-font font-semibold mb-5 blue-color pb-5">
                Cleanliness Drive
              </p>
              <p className="font-semibold smallest-font text-[#303030]">
                In support of the Swachh Bharat Mission, a campus-wide cleanliness drive was organised to
                promote environmental awareness. The initiative focused on eliminating single-use plastics
                (SUPs) and educating students about effective plastic waste management, reinforcing the
                importance of sustainable living.
              </p>
            </div>
            <div>
              <img
                src="/social-4.webp"
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
                src="/social-5.webp"
                alt="Campus Life"
                className="w-full md:h-96 h-full object-cover"
              />
            </div>
            <div>
              <p className="larger-font font-semibold mb-5 blue-color pb-5">
                Blood Donation Camps
              </p>
              <p className="font-semibold smallest-font text-[#303030]">
                Organised annually, blood donation camps at Academic are a step towards saving lives. Students,
                with guidance from faculty, collaborate with organisations like the Red Cross Society to
                raise awareness and encourage participation. From scheduling the event to promoting it on
                campus and social media, students take the lead in this life-saving initiative.
              </p>
            </div>
          </div>
        </section>
        <section className="container mx-auto lg:px-40 py-5 px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="larger-font font-semibold mb-5 blue-color pb-5">
                Diwali Charity Gala
              </p>
              <p className="font-semibold smallest-font text-[#303030]">
                The Diwali Charity Gala embraced the true spirit of the festival by hosting a fundraising event.
                The gala featured stalls with games, food, and handmade Diwali decorations, encouraging students
                to participate in acts of kindness and spreading joy through charitable efforts.
              </p>
            </div>
            <div>
              <img
                src="/social-6.webp"
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
                src="/social-7.webp"
                alt="Campus Life"
                className="w-full md:h-96 h-full object-cover"
              />
            </div>
            <div>
              <p className="larger-font font-semibold mb-5 blue-color pb-5">
                Tree Plantation Drive
              </p>
              <p className="font-semibold smallest-font text-[#303030]">
                As part of the Prema Tharu (Tree of Love) initiative by the Sri Sathya Sai Seva Organisation,
                students participated in a tree plantation drive. The activity aimed to instil environmental
                consciousness and promote sustainable practices, fostering a sense of responsibility towards nature.
              </p>
            </div>
          </div>
        </section>
        <section className="container mx-auto lg:px-40 py-5 px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="larger-font font-semibold mb-5 blue-color pb-5">
                Distribution Drive
              </p>
              <p className="font-semibold smallest-font text-[#303030]">
                In a heartfelt effort, 50 pairs of brand-new shoes, socks, and chocolates were distributed
                to children from a local NGO. The drive, funded by online donations and fundraising efforts
                led by the NGO Club students, highlighted the importance of generosity and social responsibility.
              </p>
            </div>
            <div>
              <img
                src="/social-8.webp"
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
                src="/social-9.webp"
                alt="Campus Life"
                className="w-full md:h-96 h-full object-cover"
              />
            </div>
            <div>
              <p className="larger-font font-semibold mb-5 blue-color pb-5">
                Eco-Conscious Expo
              </p>
              <p className="font-semibold smallest-font text-[#303030]">
                The Eco-Conscious Expo showcased handmade products, upcycled creations, and posters
                advocating sustainability. The event strengthened partnerships with local NGOs and
                promoted eco-friendly practices aligned with the Sustainable Development Goals (SDGs),
                inspiring students to adopt a responsible lifestyle.
              </p>
            </div>
          </div>
        </section>
        <section className="container mx-auto lg:px-40 py-5 px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="larger-font font-semibold mb-5 blue-color pb-5">
                Educational Outreach at Vikas Vishranti Charitable Trust
              </p>
              <p className="font-semibold smallest-font text-[#303030]">
                Students from the NGO Club made weekly visits to the Vikas Vishranti
                Charitable Trust in Aligarh to mentor and teach children. This ongoing
                outreach programme aimed to foster educational growth and create a supportive
                learning environment, empowering the next generation.
              </p>
            </div>
            <div>
              <img
                src="/social-10.webp"
                alt="Campus Life"
                className="w-full md:h-96 h-full object-cover"
              />
            </div>
          </div>
        </section>
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}


