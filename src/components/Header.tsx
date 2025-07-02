import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BookOpen, Menu, X, User, Search, Bell } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-islamic-600 p-2 rounded-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-islamic-800">Baytul-Ilm</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/') 
                  ? 'text-islamic-600 bg-islamic-50' 
                  : 'text-gray-700 hover:text-islamic-600 hover:bg-islamic-50'
              }`}
            >
              Home
            </Link>
            <Link
              to="/tutors"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/tutors') 
                  ? 'text-islamic-600 bg-islamic-50' 
                  : 'text-gray-700 hover:text-islamic-600 hover:bg-islamic-50'
              }`}
            >
              Find Tutors
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/about') 
                  ? 'text-islamic-600 bg-islamic-50' 
                  : 'text-gray-700 hover:text-islamic-600 hover:bg-islamic-50'
              }`}
            >
              About
            </Link>
            <Link
              to="/become-tutor"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/become-tutor') 
                  ? 'text-islamic-600 bg-islamic-50' 
                  : 'text-gray-700 hover:text-islamic-600 hover:bg-islamic-50'
              }`}
            >
              Become a Tutor
            </Link>
            <Link
              to="/contact"
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
            <Link 
              to="/dashboard"
              className="bg-islamic-600 text-white px-4 py-2 rounded-lg hover:bg-islamic-700 transition-colors duration-200 flex items-center space-x-2"
            >
              <User className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
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
                to="/"
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
                to="/tutors"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive('/tutors') 
                    ? 'text-islamic-600 bg-islamic-50' 
                    : 'text-gray-700 hover:text-islamic-600 hover:bg-islamic-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Find Tutors
              </Link>
              <Link
                to="/about"
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
                to="/become-tutor"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive('/become-tutor') 
                    ? 'text-islamic-600 bg-islamic-50' 
                    : 'text-gray-700 hover:text-islamic-600 hover:bg-islamic-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Become a Tutor
              </Link>
              <Link
                to="/contact"
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
                <Link 
                  to="/dashboard"
                  className="w-full bg-islamic-600 text-white px-4 py-2 rounded-lg hover:bg-islamic-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header