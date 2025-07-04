import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Star, Clock, Users, BookOpen, Video, MessageCircle, MapPin, Award, Calendar, Globe, CheckCircle, Play, Heart, Share2, Flag, Phone, Mail, Linkedin, Twitter } from 'lucide-react'

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
    joinedDate: "January 2020",
    totalSessions: 2847,
    bio: "Assalamu Alaikum! I am Sheikh Ahmad Al-Mahmoud, a certified Qari with Ijazah in 7 different Qira'at. I have been teaching Quran recitation and Tajweed for over 15 years, helping students from around the world perfect their recitation and develop a deep connection with the Holy Quran. My approach combines traditional Islamic scholarship with modern teaching methods to ensure effective learning.",
    education: [
      "Ijazah in 7 Qira'at from Al-Azhar University",
      "Bachelor's in Islamic Studies - Al-Azhar University", 
      "Master's in Quranic Sciences - Al-Azhar University",
      "Certified Tajweed Instructor - International Quran Academy"
    ],
    achievements: [
      "Trained over 1200 students worldwide",
      "Featured speaker at International Quran Conference 2023",
      "Author of 'Mastering Tajweed: A Comprehensive Guide'",
      "Winner of Excellence in Islamic Education Award 2022",
      "Certified by 5 renowned Quranic scholars"
    ],
    teachingStyle: "I believe in patient, step-by-step instruction that builds confidence. My teaching method focuses on proper pronunciation, understanding the rules of Tajweed, and developing a beautiful recitation style. I customize my approach based on each student's learning pace and goals.",
    packages: [
      {
        name: "Trial Session",
        duration: "30 minutes",
        price: 20,
        description: "Get to know my teaching style and assess your current level",
        features: ["Assessment", "Learning plan", "Q&A session"]
      },
      {
        name: "Standard Session",
        duration: "60 minutes", 
        price: 45,
        description: "Regular one-on-one Quran and Tajweed lessons",
        features: ["Personalized instruction", "Progress tracking", "Homework assignments"]
      },
      {
        name: "Intensive Package",
        duration: "4 sessions (60 min each)",
        price: 160,
        description: "Weekly intensive sessions for faster progress",
        savings: "Save $20",
        features: ["4 sessions", "Study materials", "Progress reports", "WhatsApp support"]
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
    },
    socialMedia: {
      linkedin: "https://linkedin.com/in/sheikh-ahmad",
      twitter: "https://twitter.com/sheikh_ahmad",
      email: "ahmad@baytul-ilm.com"
    },
    videoIntro: "https://example.com/intro-video.mp4",
    certifications: [
      { name: "Ijazah in Hafs", issuer: "Al-Azhar University", year: "2008" },
      { name: "Ijazah in Warsh", issuer: "Al-Azhar University", year: "2010" },
      { name: "Teaching Certificate", issuer: "International Quran Academy", year: "2015" }
    ]
  }
}

const reviews = [
  {
    id: 1,
    name: "Amina Hassan",
    avatar: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg",
    rating: 5,
    date: "2 weeks ago",
    comment: "Sheikh Ahmad is an exceptional teacher. His patience and clear explanations helped me improve my Tajweed significantly. The way he breaks down complex rules into simple steps is amazing. Highly recommended!",
    verified: true,
    helpful: 12
  },
  {
    id: 2,
    name: "Omar Abdullah", 
    avatar: "https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg",
    rating: 5,
    date: "1 month ago",
    comment: "Amazing teacher! He helped my son memorize 5 surahs with perfect pronunciation. Very professional, punctual, and creates a comfortable learning environment. The progress has been remarkable.",
    verified: true,
    helpful: 8
  },
  {
    id: 3,
    name: "Fatima Al-Zahra",
    avatar: "https://images.pexels.com/photos/8111358/pexels-photo-8111358.jpeg",
    rating: 5,
    date: "2 months ago", 
    comment: "I've been learning with Sheikh Ahmad for 6 months now. My recitation has improved tremendously. He's very knowledgeable, patient, and provides excellent feedback. Worth every penny!",
    verified: true,
    helpful: 15
  },
  {
    id: 4,
    name: "Yusuf Ali",
    avatar: "https://images.pexels.com/photos/8111359/pexels-photo-8111359.jpeg",
    rating: 5,
    date: "3 months ago",
    comment: "Sheikh Ahmad helped me prepare for my Ijazah. His deep knowledge of different Qira'at and teaching methodology is outstanding. I passed my examination with excellence!",
    verified: true,
    helpful: 20
  }
]

export default function TutorProfile() {
  const { id } = useParams()
  const tutor = tutorData[id as keyof typeof tutorData]
  const [activeTab, setActiveTab] = useState('overview')
  const [showAllReviews, setShowAllReviews] = useState(false)

  if (!tutor) {
    return <div>Tutor not found</div>
  }

  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 3)

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
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        {tutor.availability}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors">
                        <Play className="w-4 h-4 text-islamic-600" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{tutor.name}</h1>
                        <p className="text-xl text-islamic-600 font-medium mb-2">{tutor.title}</p>
                        <p className="text-gray-600">Member since {tutor.joinedDate}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-gray-600 hover:text-red-500 transition-colors">
                          <Heart className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-islamic-600 transition-colors">
                          <Share2 className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-red-500 transition-colors">
                          <Flag className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    
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
                        <BookOpen className="w-5 h-5 text-islamic-500" />
                        <span>{tutor.totalSessions} sessions</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-islamic-500" />
                        <span>Responds in {tutor.responseTime}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">{tutor.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">{tutor.timezone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">{tutor.experience}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Video className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">{tutor.sessionTypes.join(", ")}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {tutor.specialties.map((specialty, index) => (
                        <span key={index} className="bg-islamic-100 text-islamic-700 px-3 py-1 rounded-full text-sm font-medium">
                          {specialty}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {tutor.languages.map((language, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm border">
                          {language}
                        </span>
                      ))}
                    </div>

                    {/* Social Media Links */}
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-600">Connect:</span>
                      <div className="flex gap-2">
                        <a href={tutor.socialMedia.linkedin} className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a href={tutor.socialMedia.twitter} className="p-2 bg-sky-100 text-sky-600 rounded-lg hover:bg-sky-200 transition-colors">
                          <Twitter className="w-4 h-4" />
                        </a>
                        <a href={`mailto:${tutor.socialMedia.email}`} className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                          <Mail className="w-4 h-4" />
                        </a>
                      </div>
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
                    <Link
                      to={`/chat/${tutor.id}`}
                      className="w-full border border-islamic-600 text-islamic-600 py-3 px-6 rounded-lg hover:bg-islamic-50 transition-colors duration-200 font-medium flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Send Message
                    </Link>
                    <button className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5" />
                      Request Call
                    </button>
                  </div>
                  
                  <div className="border-t pt-4 space-y-3">
                    <h4 className="font-semibold mb-3">Quick Stats</h4>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Response time:</span>
                      <span className="font-medium">{tutor.responseTime}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Total sessions:</span>
                      <span className="font-medium">{tutor.totalSessions}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Repeat students:</span>
                      <span className="font-medium">89%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="bg-white border-b sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'about', label: 'About' },
                { id: 'reviews', label: 'Reviews' },
                { id: 'schedule', label: 'Schedule' },
                { id: 'packages', label: 'Packages' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'border-islamic-600 text-islamic-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tab Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  {/* About Preview */}
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">About {tutor.name}</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">{tutor.bio}</p>
                    <button 
                      onClick={() => setActiveTab('about')}
                      className="text-islamic-600 hover:text-islamic-700 font-medium"
                    >
                      Read more →
                    </button>
                  </div>

                  {/* Recent Reviews */}
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold text-gray-900">Recent Reviews</h2>
                      <button 
                        onClick={() => setActiveTab('reviews')}
                        className="text-islamic-600 hover:text-islamic-700 font-medium"
                      >
                        View all →
                      </button>
                    </div>
                    <div className="space-y-6">
                      {reviews.slice(0, 2).map((review) => (
                        <div key={review.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                          <div className="flex items-start gap-4">
                            <img
                              src={review.avatar}
                              alt={review.name}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <h4 className="font-medium text-gray-900">{review.name}</h4>
                                  {review.verified && (
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                  )}
                                </div>
                                <span className="text-sm text-gray-500">{review.date}</span>
                              </div>
                              <div className="flex items-center gap-1 mb-2">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                              <p className="text-gray-700 text-sm leading-relaxed">{review.comment}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Availability */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">This Week's Availability</h3>
                    <div className="space-y-3">
                      {Object.entries(tutor.schedule).slice(0, 3).map(([day, times]) => (
                        <div key={day} className="flex justify-between">
                          <span className="capitalize font-medium text-gray-700">{day}</span>
                          <span className="text-sm text-gray-600">
                            {Array.isArray(times) ? `${times.length} slots` : times}
                          </span>
                        </div>
                      ))}
                    </div>
                    <button 
                      onClick={() => setActiveTab('schedule')}
                      className="w-full mt-4 text-islamic-600 hover:text-islamic-700 font-medium text-sm"
                    >
                      View full schedule →
                    </button>
                  </div>

                  {/* Certifications */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Certifications</h3>
                    <div className="space-y-3">
                      {tutor.certifications.map((cert, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Award className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-gray-900 text-sm">{cert.name}</h4>
                            <p className="text-xs text-gray-600">{cert.issuer} • {cert.year}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'about' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">About {tutor.name}</h2>
                    <p className="text-gray-700 leading-relaxed mb-8">{tutor.bio}</p>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Teaching Philosophy</h3>
                      <p className="text-gray-700 leading-relaxed">{tutor.teachingStyle}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Education & Certifications</h3>
                        <ul className="space-y-3">
                          {tutor.education.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-islamic-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Achievements</h3>
                        <ul className="space-y-3">
                          {tutor.achievements.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <Award className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-1">
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Teaching Specialties</h3>
                    <div className="space-y-3">
                      {tutor.specialties.map((specialty, index) => (
                        <div key={index} className="bg-white rounded-lg p-3 border border-gray-200">
                          <span className="font-medium text-gray-900">{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">Student Reviews</h2>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gray-900">{tutor.rating}</div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <div className="text-sm text-gray-600">{tutor.reviews} reviews</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-8">
                  {displayedReviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-100 pb-8 last:border-b-0">
                      <div className="flex items-start gap-4">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium text-gray-900">{review.name}</h4>
                              {review.verified && (
                                <div className="flex items-center gap-1">
                                  <CheckCircle className="w-4 h-4 text-green-500" />
                                  <span className="text-xs text-green-600">Verified</span>
                                </div>
                              )}
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          
                          <div className="flex items-center gap-1 mb-3">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          
                          <p className="text-gray-700 leading-relaxed mb-4">{review.comment}</p>
                          
                          <div className="flex items-center gap-4 text-sm">
                            <button className="text-gray-600 hover:text-islamic-600 transition-colors">
                              👍 Helpful ({review.helpful})
                            </button>
                            <button className="text-gray-600 hover:text-gray-800 transition-colors">
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {!showAllReviews && reviews.length > 3 && (
                  <div className="text-center mt-8">
                    <button 
                      onClick={() => setShowAllReviews(true)}
                      className="bg-islamic-600 text-white px-6 py-3 rounded-lg hover:bg-islamic-700 transition-colors"
                    >
                      Show All Reviews ({reviews.length})
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'schedule' && (
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Weekly Schedule ({tutor.timezone})</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(tutor.schedule).map(([day, times]) => (
                    <div key={day} className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 capitalize mb-3">{day}</h3>
                      {Array.isArray(times) ? (
                        <div className="space-y-2">
                          {times.map((time, index) => (
                            <div key={index} className="bg-islamic-50 text-islamic-700 px-3 py-2 rounded text-sm font-medium">
                              {time}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-gray-500 text-sm">{times}</div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Note:</strong> All times are shown in {tutor.timezone}. The tutor may have additional availability for urgent sessions.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'packages' && (
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Lesson Packages</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {tutor.packages.map((pkg, index) => (
                    <div key={index} className="border-2 border-gray-200 rounded-xl p-6 hover:border-islamic-300 transition-colors">
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                        <div className="text-3xl font-bold text-islamic-600 mb-1">${pkg.price}</div>
                        <div className="text-gray-600">{pkg.duration}</div>
                        {pkg.savings && (
                          <div className="text-sm text-green-600 font-medium mt-1">{pkg.savings}</div>
                        )}
                      </div>
                      
                      <p className="text-gray-700 text-center mb-6">{pkg.description}</p>
                      
                      <ul className="space-y-2 mb-6">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-islamic-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link
                        to={`/book-session/${tutor.id}?package=${index}`}
                        className="w-full bg-islamic-600 text-white py-3 px-6 rounded-lg hover:bg-islamic-700 transition-colors font-medium text-center block"
                      >
                        Select Package
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default TutorProfile