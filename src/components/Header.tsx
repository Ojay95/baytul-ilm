import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { BookOpen, Menu, X, User, Search, Bell, LogOut, Settings, BarChart3, GraduationCap, Shield } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout, isAuthenticated, hasRole } = useAuth()

  const isActive = (path: string) => location.pathname === path

  const handleLogout = () => {
    logout()
    navigate('/')
    setShowUserMenu(false)
  }

  const getDashboardLink = () => {
    if (hasRole('admin')) return '/admin-dashboard'
    if (hasRole('tutor')) return '/tutor-dashboard'
    return '/dashboard'
  }

  const getUserMenuItems = () => {
    const items = []
    
    if (hasRole('admin')) {
      items.push(
        { to: '/admin-dashboard', label: 'Admin Dashboard', icon: Shield },
        { to: '/admin-settings', label: 'Admin Settings', icon: Settings }
      )
    }
    
    if (hasRole('tutor')) {
      items.push(
        { to: '/tutor-dashboard', label: 'Tutor Dashboard', icon: GraduationCap },
        { to: '/tutor-earnings', label: 'Earnings', icon: BarChart3 },
        { to: '/tutor-profile', label: 'My Profile', icon: User }
      )
    }
    
    if (hasRole('student')) {
      items.push(
        { to: '/dashboard', label: 'Student Dashboard', icon: BarChart3 },
        { to: '/student-profile', label: 'My Profile', icon: User }
      )
    }
    
    items.push({ to: '/settings', label: 'Settings', icon: Settings })
    
    return items
  }

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
            {!hasRole('student') && (
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
            )}
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
            {isAuthenticated ? (
              <>
                <button className="p-2 text-gray-600 hover:text-islamic-600 transition-colors">
                  <Search className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-islamic-600 transition-colors relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                </button>
                
                {/* User Dropdown */}
                <div className="relative">
                  <button 
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center space-x-2 bg-islamic-600 text-white px-4 py-2 rounded-lg hover:bg-islamic-700 transition-colors duration-200"
                  >
                    {user?.avatar ? (
                      <img src={user.avatar} alt={user.name} className="w-6 h-6 rounded-full object-cover" />
                    ) : (
                      <User className="h-4 w-4" />
                    )}
                    <span className="hidden lg:block">{user?.name}</span>
                    <div className="flex items-center">
                      {hasRole('admin') && <Shield className="w-3 h-3 ml-1" />}
                      {hasRole('tutor') && <GraduationCap className="w-3 h-3 ml-1" />}
                    </div>
                  </button>
                  
                  {/* Dropdown Menu */}
                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      <div className="px-4 py-2 border-b border-gray-200">
                        <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                        <p className="text-xs text-gray-500">{user?.email}</p>
                        <span className={`inline-block mt-1 px-2 py-1 text-xs rounded-full ${
                          hasRole('admin') ? 'bg-purple-100 text-purple-800' :
                          hasRole('tutor') ? 'bg-islamic-100 text-islamic-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {user?.role}
                        </span>
                      </div>
                      
                      {getUserMenuItems().map((item, index) => (
                        <Link
                          key={index}
                          to={item.to}
                          className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-islamic-50 hover:text-islamic-600"
                          onClick={() => setShowUserMenu(false)}
                        >
                          <item.icon className="w-4 h-4" />
                          {item.label}
                        </Link>
                      ))}
                      
                      <hr className="my-2" />
                      <button 
                        onClick={handleLogout}
                        className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-islamic-600 font-medium transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-islamic-600 text-white px-4 py-2 rounded-lg hover:bg-islamic-700 transition-colors duration-200 font-medium"
                >
                  Sign Up
                </Link>
              </div>
            )}
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
              {!hasRole('student') && (
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
              )}
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
              
              {isAuthenticated ? (
                <div className="pt-4 pb-3 border-t border-gray-200 space-y-1">
                  <div className="px-3 py-2">
                    <p className="text-base font-medium text-gray-800">{user?.name}</p>
                    <p className="text-sm text-gray-500">{user?.email}</p>
                  </div>
                  
                  {getUserMenuItems().map((item, index) => (
                    <Link
                      key={index}
                      to={item.to}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-islamic-600 hover:bg-islamic-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  
                  <button 
                    onClick={handleLogout}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="pt-4 pb-3 border-t border-gray-200 space-y-1">
                  <Link
                    to="/login"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-islamic-600 hover:bg-islamic-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="block px-3 py-2 rounded-md text-base font-medium bg-islamic-600 text-white hover:bg-islamic-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header