import React from 'react'
import { Play, Star, Users, BookOpen } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-islamic-600 via-islamic-700 to-islamic-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Learn Islam
                <span className="block text-gold-400">Authentically</span>
              </h1>
              <p className="text-xl md:text-2xl text-islamic-100 leading-relaxed">
                Master Quran, Arabic, and Islamic Studies with world-class scholars from the comfort of your home
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gold-400" />
                <span>50,000+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-gold-400" />
                <span>500+ Courses</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-gold-400 fill-current" />
                <span>4.9/5 Rating</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gold-500 text-islamic-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gold-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Learning Today
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-islamic-800 transition-all duration-300 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-islamic-500">
              <p className="text-islamic-200 text-sm mb-4">Trusted by students worldwide</p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-islamic-400 border-2 border-white"></div>
                  ))}
                </div>
                <span className="text-sm text-islamic-200">Join thousands of satisfied learners</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg"
                alt="Islamic Learning"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white text-islamic-800 p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-islamic-600" />
                  <div>
                    <div className="font-bold">500+</div>
                    <div className="text-sm text-gray-600">Courses</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-gold-500 text-islamic-900 p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <Star className="w-6 h-6 fill-current" />
                  <div>
                    <div className="font-bold">4.9/5</div>
                    <div className="text-sm">Rating</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute top-8 right-8 w-72 h-72 bg-gold-400 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-8 left-8 w-64 h-64 bg-islamic-400 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero