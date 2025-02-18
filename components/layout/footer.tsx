import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white pt-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8">
          <div>
            <Link href="/" className="text-white">
              <img src="/academic-logo.png" alt="Logo" width={100} height={100} />
            </Link>
            <p className="text-gray-600 mb-4 smallest-font">
              Academic College is dedicated to academic excellence, innovation, and holistic student development.
            </p>

          </div>

          <div>
            <h4 className="font-bold medium-font mb-4 blue-color">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 smallest-font hover:text-[#81202c]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-600 smallest-font hover:text-[#81202c]">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/faculity" className="text-gray-600 smallest-font hover:text-[#81202c]">
                  Faculty Directory
                </Link>
              </li>
              <li>
                <Link href="/campus-life" className="text-gray-600 smallest-font hover:text-[#81202c]">
                  Campus Events
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-gray-600 smallest-font hover:text-[#81202c]">
                  Admission Process
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 medium-font blue-color">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-600 smallest-font hover:text-[#81202c]">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 smallest-font hover:text-[#81202c]">
                  Annual Reports
                </Link>
              </li>
              <li>
                <Link href="/campus-life#virtual-tour" className="text-gray-600 smallest-font hover:text-[#81202c]">
                  Virtual Tour
                </Link>
              </li>
              <li>
                <Link href="#reserch" className="text-gray-600 smallest-font hover:text-[#81202c]">
                  Research & Innovation
                </Link>
              </li>
              <li>
                <Link href="/social-iniative" className="text-gray-600 smallest-font hover:text-[#81202c]">
                  Social Initiatives
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 medium-font blue-color">Have a Questions?</h4>
            <ul className="space-y-4 text-gray-600 smallest-font">
              <li>Academic College, Aligarh, UP, Inidia</li>
              <li>
                <a href="tel:+917247823548">+917247823548</a>
              </li>
              <li>
                <a href="mailto:info@eduwebbuilders.club">info@eduwebbuilders.club</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 medium-font blue-color">Follow us on:</h4>
            <div className="flex gap-4">
              <Link href="#" className="text-teal-500 hover:text-teal-600">
                <Facebook size={20} color="#233762" />
              </Link>
              <Link href="#" className="text-teal-500 hover:text-teal-600">
                <Twitter size={20} color="#233762" />
              </Link>
              <Link href="#" className="text-teal-500 hover:text-teal-600">
                <Instagram size={20} color="#233762" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 mt-5 smaller-font border-t text-center text-gray-600">
        <p>Copyright ©2024 All rights reserved</p>
      </div>
      <div className="fixed bottom-4 right-4">
        <a href="https://wa.me/7247823548" target="_blank" rel="noopener noreferrer">
          <img src="/image.png" alt="WhatsApp Chat" width={65} height={65} />
        </a>
      </div>
    </footer>
  )
}

