'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BookOpen, Menu, X, User, Search, Bell } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-islamic-600 p-2 rounded-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-islamic-800">Baytul-Ilm</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/') 
                  ? 'text-islamic-600 bg-islamic-50' 
                  : 'text-gray-700 hover:text-islamic-600 hover:bg-islamic-50'
              }`}
            >
              Home
            </Link>
            <Link
              href="/courses"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/courses') 
                  ? 'text-islamic-600 bg-islamic-50' 
                  : 'text-gray-700 hover:text-islamic-600 hover:bg-islamic-50'
              }`}
            >
              Courses
            </Link>
            <Link
              href="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/about') 
                  ? 'text-islamic-600 bg-islamic-50' 
                  : 'text-gray-700 hover:text-islamic-600 hover:bg-islamic-50'
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/contact') 
                  ? 'text-islamic-600 bg-islamic-50' 
                  : 'text-gray-700 hover:text-islamic-600 hover:bg-islamic-50'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-islamic-600 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-islamic-600 transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            <button className="bg-islamic-600 text-white px-4 py-2 rounded-lg hover:bg-islamic-700 transition-colors duration-200 flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Sign In</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-islamic-600 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="/"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive('/') 
                    ? 'text-islamic-600 bg-islamic-50' 
                    : 'text-gray-700 hover:text-islamic-600 hover:bg-islamic-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/courses"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive('/courses') 
                    ? 'text-islamic-600 bg-islamic-50' 
                    : 'text-gray-700 hover:text-islamic-600 hover:bg-islamic-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive('/about') 
                    ? 'text-islamic-600 bg-islamic-50' 
                    : 'text-gray-700 hover:text-islamic-600 hover:bg-islamic-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive('/contact') 
                    ? 'text-islamic-600 bg-islamic-50' 
                    : 'text-gray-700 hover:text-islamic-600 hover:bg-islamic-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <button className="w-full bg-islamic-600 text-white px-4 py-2 rounded-lg hover:bg-islamic-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Sign In</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header