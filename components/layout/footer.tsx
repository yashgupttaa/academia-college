import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2 blue-color">ACADEMIA</h3>
            <p className="text-sm text-gray-600 mb-4">ONLINE EDUCATION & LEARNING</p>
            <p className="text-gray-600 mb-4">
              A small river named Duden flows by their place and supplies it with the necessary regelialia.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-teal-500 hover:text-teal-600">
                <Facebook size={20} color="#233762"/>
              </Link>
              <Link href="#" className="text-teal-500 hover:text-teal-600">
                <Twitter size={20} color="#233762"/>
              </Link>
              <Link href="#" className="text-teal-500 hover:text-teal-600">
                <Instagram size={20} color="#233762"/>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 blue-color">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#81202c]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#81202c]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#81202c]">
                  Courses
                </Link>
              </li>
              {/* <li>
                <Link href="#" className="text-gray-600 hover:text-teal-500">
                  Blog
                </Link>
              </li> */}
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#81202c]">
                  Facilites
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 blue-color">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#81202c]">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#81202c]">
                  Annual Reports
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#81202c]">
                  Virtual Tour
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#81202c]">
                  Employee Handbook
                </Link>
              </li>
              {/* <li>
                <Link href="#" className="text-gray-600 hover:text-teal-500">
                  Feedbacks
                </Link>
              </li> */}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 blue-color">Have a Questions?</h4>
            <ul className="space-y-4 text-gray-600">
              <li>Academia University, Aligarh, UP, Inidia</li>
              <li>+917247823548</li>
              <li>info@eduwebbuilders.club</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t text-center text-gray-600">
          <p>Copyright ©2024 All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

