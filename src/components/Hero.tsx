import React from 'react'
import { Link } from 'react-router-dom'
import { Play, Star, Users, BookOpen, Video, Clock } from 'lucide-react'

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
                Find Your Perfect
                <span className="block text-gold-400">Islamic Tutor</span>
              </h1>
              <p className="text-xl md:text-2xl text-islamic-100 leading-relaxed">
                Connect with qualified Islamic scholars for personalized one-on-one learning in Quran, Arabic, and Islamic Studies
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gold-400" />
                <span>500+ Expert Tutors</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="w-5 h-5 text-gold-400" />
                <span>1-on-1 & Group Sessions</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gold-400" />
                <span>Flexible Scheduling</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-gold-400 fill-current" />
                <span>4.9/5 Average Rating</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/tutors"
                className="bg-gold-500 text-islamic-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gold-400 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
              >
                Find Your Tutor
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-islamic-800 transition-all duration-300 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                How It Works
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
                alt="Islamic Learning with Tutor"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white text-islamic-800 p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-islamic-600" />
                  <div>
                    <div className="font-bold">500+</div>
                    <div className="text-sm text-gray-600">Expert Tutors</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-gold-500 text-islamic-900 p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <Video className="w-6 h-6" />
                  <div>
                    <div className="font-bold">1-on-1</div>
                    <div className="text-sm">Sessions</div>
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