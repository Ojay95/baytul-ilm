import React from 'react'
import { BookOpen, Globe, MessageSquare, Award, Users, Heart } from 'lucide-react'

const categories = [
  {
    icon: BookOpen,
    title: "Quran Studies",
    description: "Recitation, Memorization, and Tafseer",
    courses: 120,
    color: "bg-islamic-500",
    hoverColor: "hover:bg-islamic-600"
  },
  {
    icon: Globe,
    title: "Arabic Language",
    description: "Classical and Modern Arabic",
    courses: 85,
    color: "bg-gold-500",
    hoverColor: "hover:bg-gold-600"
  },
  {
    icon: MessageSquare,
    title: "Hadith Studies",
    description: "Prophetic Traditions and Sciences",
    courses: 65,
    color: "bg-blue-500",
    hoverColor: "hover:bg-blue-600"
  },
  {
    icon: Award,
    title: "Islamic Jurisprudence",
    description: "Fiqh and Islamic Law",
    courses: 75,
    color: "bg-purple-500",
    hoverColor: "hover:bg-purple-600"
  },
  {
    icon: Users,
    title: "Islamic History",
    description: "Seerah and Civilization",
    courses: 45,
    color: "bg-red-500",
    hoverColor: "hover:bg-red-600"
  },
  {
    icon: Heart,
    title: "Spirituality",
    description: "Tasawwuf and Islamic Ethics",
    courses: 35,
    color: "bg-pink-500",
    hoverColor: "hover:bg-pink-600"
  }
]

const Categories = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Our Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover comprehensive Islamic education across various disciplines with expert guidance
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className={`${category.color} ${category.hoverColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-islamic-600 transition-colors duration-300">
                {category.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {category.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {category.courses} courses available
                </span>
                <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-islamic-100 flex items-center justify-center transition-colors duration-300">
                  <svg className="w-4 h-4 text-gray-600 group-hover:text-islamic-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-islamic-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-islamic-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  )
}

export default Categories