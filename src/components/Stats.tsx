import React from 'react'
import { Users, BookOpen, Award, Globe, Star, Clock } from 'lucide-react'

const stats = [
  {
    icon: Users,
    number: "50,000+",
    label: "Active Students",
    description: "Learning worldwide"
  },
  {
    icon: BookOpen,
    number: "500+",
    label: "Courses Available",
    description: "Across all categories"
  },
  {
    icon: Award,
    number: "200+",
    label: "Expert Instructors",
    description: "Qualified scholars"
  },
  {
    icon: Globe,
    number: "80+",
    label: "Countries Reached",
    description: "Global community"
  },
  {
    icon: Star,
    number: "4.9/5",
    label: "Average Rating",
    description: "Student satisfaction"
  },
  {
    icon: Clock,
    number: "10,000+",
    label: "Hours of Content",
    description: "Quality education"
  }
]

const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-islamic-600 via-islamic-700 to-islamic-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-islamic-100 max-w-3xl mx-auto">
            Join a thriving global community of Islamic learners and scholars
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20"
            >
              <div className="bg-gold-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-islamic-900" />
              </div>
              
              <div className="text-4xl md:text-5xl font-bold mb-2 text-gold-400">
                {stat.number}
              </div>
              
              <h3 className="text-xl font-semibold mb-2">
                {stat.label}
              </h3>
              
              <p className="text-islamic-200">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Achievement Badges */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8">Recognized Excellence</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="bg-white/10 px-6 py-3 rounded-full border border-white/20">
              <span className="text-sm font-medium">ISO 9001 Certified</span>
            </div>
            <div className="bg-white/10 px-6 py-3 rounded-full border border-white/20">
              <span className="text-sm font-medium">Accredited Institution</span>
            </div>
            <div className="bg-white/10 px-6 py-3 rounded-full border border-white/20">
              <span className="text-sm font-medium">Award Winner 2024</span>
            </div>
            <div className="bg-white/10 px-6 py-3 rounded-full border border-white/20">
              <span className="text-sm font-medium">Top Rated Platform</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats