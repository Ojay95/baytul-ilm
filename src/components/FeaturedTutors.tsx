import React from 'react'
import { Link } from 'react-router-dom'
import { Star, Clock, Users, BookOpen, Award, Video, MessageCircle } from 'lucide-react'

const tutors = [
  {
    id: 1,
    name: "Sheikh Ahmad Al-Mahmoud",
    title: "Quran & Tajweed Specialist",
    image: "https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg",
    rating: 4.9,
    reviews: 247,
    students: 1200,
    hourlyRate: 45,
    responseTime: "1 hour",
    languages: ["Arabic", "English", "Urdu"],
    specialties: ["Quran Recitation", "Tajweed", "Memorization"],
    experience: "15+ years",
    sessionTypes: ["1-on-1", "Group"],
    availability: "Available",
    bio: "Certified Qari with Ijazah in 7 Qira'at. Specialized in helping students perfect their Quran recitation.",
    featured: true
  },
  {
    id: 2,
    name: "Dr. Fatima Al-Zahra",
    title: "Arabic Language Expert",
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg",
    rating: 4.8,
    reviews: 189,
    students: 850,
    hourlyRate: 40,
    responseTime: "30 mins",
    languages: ["Arabic", "English", "French"],
    specialties: ["Classical Arabic", "Grammar", "Literature"],
    experience: "12+ years",
    sessionTypes: ["1-on-1", "Group"],
    availability: "Available",
    bio: "PhD in Arabic Literature from Al-Azhar. Expert in teaching Arabic to non-native speakers.",
    featured: true
  },
  {
    id: 3,
    name: "Sheikh Omar Ibn Khattab",
    title: "Islamic Studies Scholar",
    image: "https://images.pexels.com/photos/8111358/pexels-photo-8111358.jpeg",
    rating: 4.9,
    reviews: 312,
    students: 1500,
    hourlyRate: 50,
    responseTime: "2 hours",
    languages: ["Arabic", "English"],
    specialties: ["Fiqh", "Hadith", "Islamic History"],
    experience: "20+ years",
    sessionTypes: ["1-on-1", "Group"],
    availability: "Busy",
    bio: "Senior Islamic scholar with expertise in comparative Fiqh and Hadith sciences.",
    featured: true
  }
]

const FeaturedTutors = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold-100 text-gold-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            Featured Tutors
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Top-Rated Islamic Tutors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from qualified scholars with proven track records and excellent student feedback
          </p>
        </div>

        {/* Tutors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutors.map((tutor) => (
            <div key={tutor.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              {/* Tutor Image and Status */}
              <div className="relative">
                <img
                  src={tutor.image}
                  alt={tutor.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    tutor.availability === 'Available' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {tutor.availability}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-islamic-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    Featured
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Response time</span>
                      <span className="font-medium text-islamic-600">{tutor.responseTime}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tutor Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-islamic-600 transition-colors duration-300">
                      {tutor.name}
                    </h3>
                    <p className="text-islamic-600 font-medium">{tutor.title}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-islamic-600">${tutor.hourlyRate}</div>
                    <div className="text-sm text-gray-500">/hour</div>
                  </div>
                </div>
                
                {/* Rating and Stats */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{tutor.rating}</span>
                    <span>({tutor.reviews})</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{tutor.students} students</span>
                  </div>
                </div>
                
                {/* Experience and Session Types */}
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1 text-gray-600">
                    <BookOpen className="w-4 h-4 text-islamic-500" />
                    <span>{tutor.experience}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Video className="w-4 h-4 text-islamic-500" />
                    <span>{tutor.sessionTypes.join(", ")}</span>
                  </div>
                </div>
                
                {/* Specialties */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {tutor.specialties.slice(0, 3).map((specialty, index) => (
                      <span key={index} className="bg-islamic-50 text-islamic-700 px-2 py-1 rounded text-xs font-medium">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Bio */}
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                  {tutor.bio}
                </p>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link 
                    to={`/tutor/${tutor.id}`}
                    className="flex-1 bg-islamic-600 text-white py-2 px-4 rounded-lg hover:bg-islamic-700 transition-colors duration-200 font-medium text-center"
                  >
                    View Profile
                  </Link>
                  <Link
                    to={`/chat/${tutor.id}`}
                    className="bg-gray-100 text-gray-700 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Tutors CTA */}
        <div className="text-center mt-16">
          <Link 
            to="/tutors"
            className="bg-gradient-to-r from-islamic-600 to-islamic-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-islamic-700 hover:to-islamic-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Browse All Tutors
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedTutors