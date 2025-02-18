import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { Newsletter } from "@/components/sections/newsletter"
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Academic College",
  description: "Stay updated with the latest news, insights, and educational trends from Academic College. Explore expert articles and student stories.",
};

export default function BlogsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-screen mb-8">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("/bsc-math.webp")',
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
                Academic Blogs
              </h1>
              <p className="smallest-font mb-8 text-white/90 max-w-lg">
                Stay Informed, Stay Inspired – Read Our Latest Articles.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto lg:px-40 py-16 px-4">
          <p className="larger-font font-semibold mb-5 blue-color">
            Academic Blogs
          </p>
          <div className="grid md:grid-cols-3 gap-5 pt-5">
            {/* Blog 1 */}
            <div className="mb-5">
              <img
                src="/blog-8.jpg"
                alt="Campus Life"
                className="w-full h-44 object-cover"
              />
              <p
                className="text-[#303030] smaller-font pb-3 mt-4"
                style={{ borderBottom: "2px solid #303030" }}
              >
                21 Aug, 2024
              </p>
              <p className="text-[#303030] medium-font mb-3 mt-3">
                Navigating the Path To Top MBA Colleges in India and Private Universities in Gurgaon
              </p>
              <Link href="/blog-details-0" className="red-color underline">
                READ MORE
              </Link>
            </div>

            {/* Blog 2 */}
            <div className="mb-5">
              <img
                src="/blog-2.png"
                alt="Student Life"
                className="w-full object-cover h-44"
              />
              <p
                className="text-[#303030] smaller-font pb-3 mt-4"
                style={{ borderBottom: "2px solid #303030" }}
              >
                15 Sep, 2024
              </p>
              <p className="text-[#303030] medium-font mb-3 mt-3">
                Exploring Student Life at Our University
              </p>
              <Link href="/blog-details-1" className="red-color underline">
                READ MORE
              </Link>
            </div>

            {/* Blog 3 */}
            <div className="mb-5">
              <img
                src="/blog-3.jpg"
                alt="Research Opportunities"
                className="w-full h-44 object-cover"
              />
              <p
                className="text-[#303030] smaller-font pb-3 mt-4"
                style={{ borderBottom: "2px solid #303030" }}
              >
                10 Oct, 2024
              </p>
              <p className="text-[#303030] medium-font mb-3 mt-3">
                Research Opportunities for Students
              </p>
              <Link href="/blog-details-2" className="red-color underline">
                READ MORE
              </Link>
            </div>

            {/* Blog 4 */}
            <div className="mb-5">
              <img
                src="/blog-4.webp"
                alt="Campus Resources"
                className="w-full h-44 object-cover"
              />
              <p
                className="text-[#303030] smaller-font pb-3 mt-4"
                style={{ borderBottom: "2px solid #303030" }}
              >
                25 Oct, 2024
              </p>
              <p className="text-[#303030] medium-font mb-3 mt-3">
                Unveiling the Best Campus Resources for Students
              </p>
              <Link href="/blog-details-3" className="red-color underline">
                READ MORE
              </Link>
            </div>

            {/* Blog 5 */}
            <div className="mb-5">
              <img
                src="/blog-5.jpg"
                alt="Networking Opportunities"
                className="w-full h-44 object-cover"
              />
              <p
                className="text-[#303030] smaller-font pb-3 mt-4"
                style={{ borderBottom: "2px solid #303030" }}
              >
                5 Nov, 2024
              </p>
              <p className="text-[#303030] medium-font mb-3 mt-3">
                The Power of Networking on Campus
              </p>
              <Link href="/blog-details-4" className="red-color underline">
                READ MORE
              </Link>
            </div>

            {/* Blog 6 */}
            <div className="mb-5">
              <img
                src="/blog-7.webp"
                alt="Student Clubs"
                className="w-full object-cover h-44"
              />
              <p
                className="text-[#303030] smaller-font pb-3 mt-4"
                style={{ borderBottom: "2px solid #303030" }}
              >
                20 Nov, 2024
              </p>
              <p className="text-[#303030] medium-font mb-3 mt-3">
                Joining Student Clubs for Personal and Professional Growth
              </p>
              <Link href="/blog-details-5" className="red-color underline">
                READ MORE
              </Link>
            </div>
          </div>
        </section>
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
