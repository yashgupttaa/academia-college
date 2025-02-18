import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { ContactForm } from "@/components/sections/contact-form";
import { Newsletter } from "@/components/sections/newsletter"
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
        <section className="relative min-h-screen">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("/contact-us.webp")',
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
                Contact Us
              </h1>
              <p className="smallest-font mb-8 text-white/90 max-w-lg">
                We're Here to Help – Get in Touch with Us for Any Questions or Support!
              </p>
            </div>
          </div>
        </section>
        <div className="bg-gray-100 pt-8">
          <section className="container mx-auto lg:px-40 py-8 px-4">
            <p className="largest-font font-semibold mb-5 text-[#303030]">
              Academic College, Aligarh
            </p>
            <div className="grid md:grid-cols-2">
              <div>
                <p className="text-[#3030303] medium-font font-medium mt-3">
                  <span></span> Support:
                </p>
                <a href="mailto:info@eduwebbuilders.club" className="smallest-font red-color my-2">support@academic.com</a>
                <p className="text-[#3030303] medium-font font-medium mt-3">
                  <span></span> Admissions:
                </p>
                <a href="mailto:info@eduwebbuilders.club" className="smallest-font red-color my-2">admissions@adademic.com</a>
                <p className="text-[#3030303] medium-font font-medium mt-3">
                  <span></span> General Inquiries:
                </p>
                <a href="mailto:info@eduwebbuilders.club" className="smallest-font red-color my-2">info@academic.com</a>
                <p className="text-[#3030303] medium-font font-medium mt-3">
                  <span></span> Business Hours:
                </p>
                <p className="smallest-font red-color">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-[#3030303] medium-font font-medium mt-3 mb-2">
                  <span></span> Address:
                </p>
                <p className="blue-color medium-font font-medium mb-5">
                  Plot No. 16-18, Knowledge Park II, <br />
                  Aligarh, Uttar Pradesh-204215
                </p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112827.72286418782!2d78.00627599830557!3d27.90607474191574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a48686459c8b%3A0x95d967276d323613!2sAligarh%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1739866111817!5m2!1sen!2sin" width="500" height="350" style={{ border: 0, maxWidth: '100%' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div>
                <ContactForm />
              </div>
            </div>

          </section>
        </div>
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}


