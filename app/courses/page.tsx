import Header from '../components/Header'
import Footer from '../components/Footer'
import { Search, Filter, Star, Clock, Users, BookOpen } from 'lucide-react'

const courses = [
  {
    id: 1,
    title: "Complete Quran Recitation Course",
    instructor: "Sheikh Ahmad Al-Mahmoud",
    image: "https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg",
    price: 149,
    originalPrice: 199,
    rating: 4.9,
    students: 2847,
    duration: "12 weeks",
    level: "Beginner to Advanced",
    category: "Quran Studies"
  },
  {
    id: 2,
    title: "Arabic Grammar Mastery",
    instructor: "Dr. Fatima Al-Zahra",
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg",
    price: 129,
    originalPrice: 179,
    rating: 4.8,
    students: 1923,
    duration: "10 weeks",
    level: "Intermediate",
    category: "Arabic Language"
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
    category: "Islamic Studies"
  },
  {
    id: 4,
    title: "Hadith Sciences & Authentication",
    instructor: "Sheikh Abdullah Al-Bukhari",
    image: "https://images.pexels.com/photos/8111359/pexels-photo-8111359.jpeg",
    price: 179,
    originalPrice: 229,
    rating: 4.9,
    students: 1456,
    duration: "14 weeks",
    level: "Advanced",
    category: "Hadith Studies"
  },
  {
    id: 5,
    title: "Islamic Jurisprudence (Fiqh)",
    instructor: "Dr. Aisha Al-Shafi'i",
    image: "https://images.pexels.com/photos/8111360/pexels-photo-8111360.jpeg",
    price: 159,
    originalPrice: 199,
    rating: 4.8,
    students: 2234,
    duration: "16 weeks",
    level: "Intermediate to Advanced",
    category: "Fiqh"
  },
  {
    id: 6,
    title: "Quranic Tafseer Fundamentals",
    instructor: "Sheikh Muhammad Al-Tabari",
    image: "https://images.pexels.com/photos/8111361/pexels-photo-8111361.jpeg",
    price: 139,
    originalPrice: 189,
    rating: 4.9,
    students: 1876,
    duration: "12 weeks",
    level: "Intermediate",
    category: "Tafseer"
  }
]

const categories = [
  "All Courses",
  "Quran Studies",
  "Arabic Language",
  "Islamic Studies",
  "Hadith Studies",
  "Fiqh",
  "Tafseer"
]

export default function CoursesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-islamic-600 to-islamic-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Explore Our Courses
              </h1>
              <p className="text-xl text-islamic-100 mb-8 max-w-3xl mx-auto">
                Discover comprehensive Islamic education with our expert instructors
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for courses, instructors, or topics..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-islamic-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Categories */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-4 py-2 rounded-full border border-gray-300 hover:border-islamic-500 hover:text-islamic-600 transition-colors duration-200"
                  >
                    {category}
                  </button>
                ))}
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-islamic-500 transition-colors">
                <Filter className="w-4 h-4" />
                Filters
              </button>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <div key={course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
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
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-islamic-600 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-4">by {course.instructor}</p>
                    
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
                    
                    <div className="flex items-center gap-2 mb-4">
                      <BookOpen className="w-4 h-4 text-islamic-500" />
                      <span className="text-sm text-gray-600">{course.level}</span>
                    </div>
                    
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}