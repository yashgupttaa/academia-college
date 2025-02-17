"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Facebook, Instagram, Twitter, Youtube, ChevronDown } from "lucide-react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCoursesOpen, setIsCoursesOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="w-full px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white">
            <img src="/academic-logo.png" alt="Logo" width={90} height={90} />
          </Link>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <nav
            className={`absolute md:relative header-bg top-full left-0 w-full md:w-auto bg-black/90 md:bg-transparent p-5 md:p-0 md:flex items-center space-x-6 ${isMobileMenuOpen ? "block" : "hidden"
              }`}
          >
            <Link
              href="/"
              className="text-white text-sm px-4 py-2 block hover:text-[#81202c]"
              style={{ margin: '0' }}
            >
              Home
            </Link>
            <div
              className="relative"
              style={{ margin: '0' }}
              onMouseEnter={() => setIsCoursesOpen(true)}
              onMouseLeave={() => setIsCoursesOpen(false)}
            >
              <Link
                href="/courses"
                className="text-white text-sm flex items-center px-4 py-2 rounded hover:text-[#81202c]"
              >
                Programmes <ChevronDown size={16} className="ml-1" />
              </Link>
              {isCoursesOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-blue-color text-white shadow-lg">
                  <Link
                    href="/courses/bba"
                    className="block text-sm px-4 py-2 hover:bg-[#81202c]"
                  >
                    BBA
                  </Link>
                  <Link
                    href="/courses/bca-hons"
                    className="block text-sm px-4 py-2 hover:bg-[#81202c]"
                  >
                    BCA (HONS)
                  </Link>
                  <Link
                    href="/courses/marketing"
                    className="block text-sm px-4 py-2 hover:bg-[#81202c]"
                  >
                    M Tech
                  </Link>
                  <Link
                    href="/courses/marketing"
                    className="block text-sm px-4 py-2 hover:bg-[#81202c]"
                  >
                    B Tech
                  </Link>

                </div>
              )}
            </div>
            <Link
              href="/about"
              className="text-white text-sm px-4 py-2 block hover:text-[#81202c]"
              style={{ margin: '0' }}
            >
              About
            </Link>
            <Link
              href="/faculity"
              className="text-white text-sm px-4 py-2 block hover:text-[#81202c]"
              style={{ margin: '0' }}
            >
              Faculty
            </Link>
            <Link
              href="/admissions"
              className="text-white text-sm px-4 py-2 block hover:text-[#81202c]"
              style={{ margin: '0' }}
            >
              Admissions
            </Link>
            <Link
              href="/contact"
              className="text-white text-sm px-4 py-2 block hover:text-[#81202c]"
              style={{ margin: '0' }}
            >
              Contact
            </Link>
            <Link
              href="/campus-life"
              className="text-white text-sm px-4 py-2 block hover:text-[#81202c]"
              style={{ margin: '0' }}
            >
              Campus Life
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="#"
              className="text-[#B2D8D8] p-1 rounded-full hover:bg-white/30 social-icons"
            >
              <Facebook size={16} color="#1a305c" />
            </Link>
            <Link
              href="#"
              className="text-[#B2D8D8] p-1 rounded-full hover:bg-white/30 social-icons"
            >
              <Instagram size={16} color="#1a305c" />
            </Link>
            <Link
              href="#"
              className="text-[#B2D8D8] p-1 rounded-full hover:bg-white/30 social-icons"
            >
              <Twitter size={16} color="#1a305c" />
            </Link>
            <Link
              href="#"
              className="text-[#B2D8D8] p-1 rounded-full hover:bg-white/30 social-icons"
            >
              <Youtube size={16} color="#1a305c" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
