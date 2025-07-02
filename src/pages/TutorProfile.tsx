import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Star, Clock, Users, BookOpen, Video, MessageCircle, MapPin, Award, Calendar, Globe, CheckCircle, Play } from 'lucide-react'

// Mock tutor data - in real app this would come from API
const tutorData = {
  1: {
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
    specialties: ["Quran Recitation", "Tajweed", "Memorization", "Qira'at"],
    experience: "15+ years",
    sessionTypes: ["1-on-1", "Group"],
    availability: "Available",
    location: "Cairo, Egypt",
    timezone: "GMT+2",
    bio: "Assalamu Alaikum! I am Sheikh Ahmad Al-Mahmoud, a certified Qari with Ijazah in 7 different Qira'at. I have been teaching Quran recitation and Tajweed for over 15 years, helping students from around the world perfect their recitation and develop a deep connection with the Holy Quran.",
    education: [
      "Ijazah in 7 Qira'at from Al-Azhar University",
      "Bachelor's in Islamic Studies - Al-Azhar University",
      "Certified Tajweed Instructor"
    ],
    achievements: [
      "Trained over 1200 students worldwide",
      "Featured speaker at International Quran Conference 2023",
      "Author of 'Mastering Tajweed: A Comprehensive Guide'"
    ],
    teachingStyle: "I believe in patient, step-by-step instruction that builds confidence. My teaching method focuses on proper pronunciation, understanding the rules of Tajweed, and developing a beautiful recitation style.",
    packages: [
      {
        name: "Trial Session",
        duration: "30 minutes",
        price: 20,
        description: "Get to know my teaching style and assess your current level"
      },
      {
        name: "Standard Session",
        duration: "60 minutes", 
        price: 45,
        description: "Regular one-on-one Quran and Tajweed lessons"
      },
      {
        name: "Intensive Package",
        duration: "4 sessions (60 min each)",
        price: 160,
        description: "Weekly intensive sessions for faster progress",
        savings: "Save $20"
      }
    ],
    schedule: {
      monday: ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"],
      tuesday: ["9:00 AM", "11:00 AM", "2:00 PM"],
      wednesday: ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"],
      thursday: ["9:00 AM", "11:00 AM"],
      friday: ["2:00 PM", "4:00 PM"],
      saturday: ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"],
      sunday: ["Unavailable"]
    }
  }
}

const reviews = [
  {
    id: 1,
    name: "Amina Hassan",
    rating: 5,
    date: "2 weeks ago",
    comment: "Sheikh Ahmad is an exceptional teacher. His patience and clear explanations helped me improve my Tajweed significantly. Highly recommended!",
    verified: true
  },
  {
    id: 2,
    name: "Omar Abdullah", 
    rating: 5,
    date: "1 month ago",
    comment: "Amazing teacher! He helped my son memorize 5 surahs with perfect pronunciation. Very professional and punctual.",
    verified: true
  },
  {
    id: 3,
    name: "Fatima Al-Zahra",
    rating: 5,
    date: "2 months ago", 
    comment: "I've been learning with Sheikh Ahmad for 6 months now. My recitation has improved tremendously. He's very knowledgeable and patient.",
    verified: true
  }
]

export default function TutorProfile() {
  const { id } = useParams()
  const tutor = tutorData[id as keyof typeof tutorData]

  if (!tutor) {
    return <div>Tutor not found</div>
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Tutor Info */}
              <div className="lg:col-span-2">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative">
                    <img
                      src={tutor.image}
                      alt={tutor.name}
                      className="w-48 h-48 rounded-2xl object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {tutor.availability}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{tutor.name}</h1>
                    <p className="text-xl text-islamic-600 font-medium mb-4">{tutor.title}</p>
                    
                    <div className="flex flex-wrap items-center gap-6 mb-6">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-bold">{tutor.rating}</span>
                        <span className="text-gray-600">({tutor.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-islamic-500" />
                        <span>{tutor.students} students</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-islamic-500" />
                        <span>Responds in {tutor.responseTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">{tutor.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">{tutor.timezone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">{tutor.experience}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {tutor.specialties.map((specialty, index) => (
                        <span key={index} className="bg-islamic-100 text-islamic-700 px-3 py-1 rounded-full text-sm font-medium">
                          {specialty}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {tutor.languages.map((language, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Booking Card */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 sticky top-24">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-islamic-600 mb-2">${tutor.hourlyRate}</div>
                    <div className="text-gray-600">per hour</div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <Link 
                      to={`/book-session/${tutor.id}`}
                      className="w-full bg-islamic-600 text-white py-3 px-6 rounded-lg hover:bg-islamic-700 transition-colors duration-200 font-medium text-center block"
                    >
                      Book a Session
                    </Link>
                    <button className="w-full border border-islamic-600 text-islamic-600 py-3 px-6 rounded-lg hover:bg-islamic-50 transition-colors duration-200 font-medium flex items-center justify-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      Send Message
                    </button>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-3">Session Types</h4>
                    <div className="space-y-2">
                      {tutor.sessionTypes.map((type, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Video className="w-4 h-4 text-islamic-500" />
                          <span className="text-sm">{type} Sessions</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">About {tutor.name}</h2>
                <p className="text-gray-700 leading-relaxed mb-8">{tutor.bio}</p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Teaching Style</h3>
                  <p className="text-gray-700 leading-relaxed">{tutor.teachingStyle}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Education & Certifications</h3>
                    <ul className="space-y-2">
                      {tutor.education.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-islamic-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Achievements</h3>
                    <ul className="space-y-2">
                      {tutor.achievements.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Award className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Lesson Packages</h3>
                  <div className="space-y-4">
                    {tutor.packages.map((pkg, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-gray-900">{pkg.name}</h4>
                          <div className="text-right">
                            <div className="text-lg font-bold text-islamic-600">${pkg.price}</div>
                            {pkg.savings && (
                              <div className="text-sm text-green-600">{pkg.savings}</div>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{pkg.duration}</p>
                        <p className="text-sm text-gray-700">{pkg.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Student Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <div key={review.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-islamic-100 rounded-full flex items-center justify-center">
                        <span className="text-islamic-600 font-semibold text-sm">
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{review.name}</div>
                        {review.verified && (
                          <div className="flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-green-500" />
                            <span className="text-xs text-green-600">Verified</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed">{review.comment}</p>
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