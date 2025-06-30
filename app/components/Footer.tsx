import React from 'react'
import Link from 'next/link'
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-islamic-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-islamic-600 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Baytul-Ilm</span>
            </Link>
            <p className="text-islamic-200 mb-6 leading-relaxed">
              Empowering Muslims worldwide with authentic Islamic education through innovative online learning experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-islamic-800 p-2 rounded-lg hover:bg-islamic-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-islamic-800 p-2 rounded-lg hover:bg-islamic-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-islamic-800 p-2 rounded-lg hover:bg-islamic-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-islamic-800 p-2 rounded-lg hover:bg-islamic-700 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/courses" className="text-islamic-200 hover:text-white transition-colors">
                  All Courses
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-islamic-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-islamic-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-islamic-200 hover:text-white transition-colors">
                  Become an Instructor
                </a>
              </li>
              <li>
                <a href="#" className="text-islamic-200 hover:text-white transition-colors">
                  Student Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Categories</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-islamic-200 hover:text-white transition-colors">
                  Quran Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-islamic-200 hover:text-white transition-colors">
                  Arabic Language
                </a>
              </li>
              <li>
                <a href="#" className="text-islamic-200 hover:text-white transition-colors">
                  Islamic History
                </a>
              </li>
              <li>
                <a href="#" className="text-islamic-200 hover:text-white transition-colors">
                  Hadith Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-islamic-200 hover:text-white transition-colors">
                  Islamic Jurisprudence
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-islamic-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-islamic-200">info@baytul-ilm.com</p>
                  <p className="text-islamic-200">support@baytul-ilm.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-islamic-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-islamic-200">+1 (555) 123-4567</p>
                  <p className="text-islamic-200">+1 (555) 987-6543</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-islamic-400 mt-1 flex-shrink-0" />
                <p className="text-islamic-200">
                  123 Knowledge Street<br />
                  Learning City, LC 12345
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-islamic-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-islamic-200">
                Subscribe to our newsletter for the latest courses and Islamic learning resources.
              </p>
            </div>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-islamic-800 border border-islamic-700 text-white placeholder-islamic-400 focus:outline-none focus:ring-2 focus:ring-islamic-500"
              />
              <button className="bg-gold-500 text-islamic-900 px-6 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-islamic-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-islamic-200 text-sm">
              © 2024 Baytul-Ilm. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-islamic-200 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-islamic-200 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-islamic-200 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer