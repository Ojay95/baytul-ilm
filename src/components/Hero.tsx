import React from 'react'
import { Link } from 'react-router-dom'
import { Play, Star, Users, BookOpen, Video, Clock, Search, MapPin, GraduationCap } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-islamic-600 via-islamic-700 to-islamic-800 text-white overflow-hidden py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Find Your Perfect
                <span className="block text-gold-400">Islamic Tutor</span>
              </h1>
              <p className="text-xl md:text-2xl text-islamic-100 leading-relaxed max-w-4xl mx-auto">
                Connect with qualified Islamic scholars for personalized one-on-one learning in Quran, Arabic, and Islamic Studies
              </p>
            </div>

            {/* Dual Search Bar */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Country Search */}
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-islamic-300 bg-white">
                      <option value="">Search by Country</option>
                      <option value="egypt">Egypt</option>
                      <option value="saudi-arabia">Saudi Arabia</option>
                      <option value="morocco">Morocco</option>
                      <option value="turkey">Turkey</option>
                      <option value="malaysia">Malaysia</option>
                      <option value="pakistan">Pakistan</option>
                      <option value="jordan">Jordan</option>
                      <option value="lebanon">Lebanon</option>
                      <option value="tunisia">Tunisia</option>
                      <option value="algeria">Algeria</option>
                      <option value="uk">United Kingdom</option>
                      <option value="usa">United States</option>
                      <option value="canada">Canada</option>
                      <option value="australia">Australia</option>
                    </select>
                  </div>

                  {/* Subject Search */}
                  <div className="relative">
                    <GraduationCap className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-islamic-300 bg-white">
                      <option value="">What do you want to learn?</option>
                      <option value="quran-recitation">Quran Recitation</option>
                      <option value="tajweed">Tajweed</option>
                      <option value="quran-memorization">Quran Memorization</option>
                      <option value="arabic-grammar">Arabic Grammar</option>
                      <option value="arabic-conversation">Arabic Conversation</option>
                      <option value="classical-arabic">Classical Arabic</option>
                      <option value="islamic-history">Islamic History</option>
                      <option value="fiqh">Fiqh (Islamic Jurisprudence)</option>
                      <option value="hadith">Hadith Studies</option>
                      <option value="tafseer">Tafseer (Quran Commentary)</option>
                      <option value="aqeedah">Aqeedah (Islamic Creed)</option>
                      <option value="seerah">Seerah (Prophet's Biography)</option>
                      <option value="islamic-ethics">Islamic Ethics</option>
                      <option value="comparative-religion">Comparative Religion</option>
                    </select>
                  </div>
                </div>
                
                {/* Search Button */}
                <div className="mt-4">
                  <Link
                    to="/tutors"
                    className="w-full bg-gold-500 text-islamic-900 py-4 px-8 rounded-xl font-semibold text-lg hover:bg-gold-400 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  >
                    <Search className="w-5 h-5" />
                    Find Perfect Tutor
                  </Link>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <div className="pt-8 border-t border-islamic-500 max-w-md mx-auto">
              <p className="text-islamic-200 text-sm mb-4">Trusted by students worldwide</p>
              <div className="flex items-center justify-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-islamic-400 border-2 border-white"></div>
                  ))}
                </div>
                <span className="text-sm text-islamic-200">Join thousands of satisfied learners</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero