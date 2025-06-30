import React from 'react'
import { Star, Clock, Users, BookOpen, Award } from 'lucide-react'

const courses = [
  {
    id: 1,
    title: "Complete Quran Recitation Mastery",
    instructor: "Sheikh Ahmad Al-Mahmoud",
    image: "https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg",
    price: 149,
    originalPrice: 199,
    rating: 4.9,
    students: 2847,
    duration: "12 weeks",
    level: "Beginner to Advanced",
    category: "Quran Studies",
    featured: true
  },
  {
    id: 2,
    title: "Arabic Grammar & Syntax",
    instructor: "Dr. Fatima Al-Zahra",
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg",
    price: 129,
    originalPrice: 179,
    rating: 4.8,
    students: 1923,
    duration: "10 weeks",
    level: "Intermediate",
    category: "Arabic Language",
    featured: true
  },
  {
    id: 3,
    title: "Islamic History & Civilization",
    instructor: "Prof. Omar Ibn Khattab",
    image: "https://images.pexels.com/photos/8111358/pexels-photo-8111358.jpeg",
    price: 99,
    originalPrice: 149,
    rating: 4.7,
    students: 3156,
    duration: "8 weeks",
    level: "All Levels",
    category: "Islamic Studies",
    featured: true
  }
]

const FeaturedCourses = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold-100 text-gold-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            Featured Courses
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Most Popular Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of students in our top-rated Islamic education courses
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Course Image */}
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-islamic-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {course.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                    {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% OFF
                  </span>
                </div>
                {course.featured && (
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-gold-500 text-islamic-900 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      Featured
                    </span>
                  </div>
                )}
              </div>
              
              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-islamic-600 transition-colors duration-300 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">by {course.instructor}</p>
                
                {/* Course Stats */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-6">
                  <BookOpen className="w-4 h-4 text-islamic-500" />
                  <span className="text-sm text-gray-600">{course.level}</span>
                </div>
                
                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-islamic-600">${course.price}</span>
                    <span className="text-lg text-gray-400 line-through">${course.originalPrice}</span>
                  </div>
                  <button className="bg-islamic-600 text-white px-6 py-2 rounded-lg hover:bg-islamic-700 transition-colors duration-200 font-medium">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Courses CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-islamic-600 to-islamic-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-islamic-700 hover:to-islamic-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCourses