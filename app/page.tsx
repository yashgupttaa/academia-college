import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { Stats } from "@/components/sections/stats"
import { PopularCourses } from "@/components/sections/popular-courses"
import { Goals } from "@/components/sections/goals"
import { GlobalConnect } from "@/components/sections/global-connect"
import { CourseCategories } from "@/components/sections/course-categories"
import { Benefits } from "@/components/sections/benefits"
import { Testimonials } from "@/components/sections/testimonials"
import { Blog } from "@/components/sections/blog"
import { Pricing } from "@/components/sections/pricing"
import { Newsletter } from "@/components/sections/newsletter"
import { WelcomeAcademia } from "@/components/sections/welcome-academia"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { ReserchInnovation } from "@/components/sections/reserch-innovation"
import { Events } from "@/components/sections/events"
import { AlumniSpeaks } from "@/components/sections/alumni-speaks"
import { UniversityGoals } from "@/components/sections/university-goals"
import { OurSchools } from "@/components/sections/our-schools"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Welcome to Academic College | Excellence in Education",
  description: "Explore top academic programs, vibrant campus life, and endless opportunities at Academic College. Join us to shape your future today!",
};

export default function Home() {
  return (
    <div className="">
      <Header />
      <main>
        <Hero />
        <WelcomeAcademia />
        <Stats />
        <WhyChooseUs />
        <Goals />
        <GlobalConnect />
        <ReserchInnovation />
        <OurSchools />
        <UniversityGoals />
        <Events />
        <AlumniSpeaks />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

