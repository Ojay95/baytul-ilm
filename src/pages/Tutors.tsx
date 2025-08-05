import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Search, Filter, Star, Clock, Users, BookOpen, Video, MessageCircle, MapPin, Award, GraduationCap } from 'lucide-react'

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
    location: "Cairo, Egypt",
    country: "Egypt",
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
    location: "Rabat, Morocco",
    country: "Morocco",
    bio: "PhD in Arabic Literature from Al-Azhar. Expert in teaching Arabic to non-native speakers."
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
    location: "Riyadh, Saudi Arabia",
    country: "Saudi Arabia",
    bio: "Senior Islamic scholar with expertise in comparative Fiqh and Hadith sciences."
  },
  {
    id: 4,
    name: "Ustadha Aisha Rahman",
    title: "Islamic Studies for Women",
    image: "https://images.pexels.com/photos/8111360/pexels-photo-8111360.jpeg",
    rating: 4.9,
    reviews: 156,
    students: 650,
    hourlyRate: 35,
    responseTime: "1 hour",
    languages: ["Arabic", "English", "Malay"],
    specialties: ["Women's Fiqh", "Family Law", "Spirituality"],
    experience: "10+ years",
    sessionTypes: ["1-on-1", "Group"],
    availability: "Available",
    location: "Kuala Lumpur, Malaysia",
    country: "Malaysia",
    bio: "Specialized in Islamic education for women and families. Expert in women's rights in Islam."
  },
  {
    id: 5,
    name: "Dr. Yusuf Al-Andalusi",
    title: "Islamic Philosophy & Theology",
    image: "https://images.pexels.com/photos/8111361/pexels-photo-8111361.jpeg",
    rating: 4.7,
    reviews: 98,
    students: 420,
    hourlyRate: 55,
    responseTime: "3 hours",
    languages: ["Arabic", "English", "Spanish"],
    specialties: ["Aqeedah", "Philosophy", "Comparative Religion"],
    experience: "18+ years",
    sessionTypes: ["1-on-1"],
    availability: "Available",
    location: "Cordoba, Spain",
    country: "Spain",
    bio: "PhD in Islamic Philosophy. Specializes in classical Islamic theology and contemporary issues."
  },
  {
    id: 6,
    name: "Hafiz Ibrahim Al-Qadri",
    title: "Quran Memorization Coach",
    image: "https://images.pexels.com/photos/8111359/pexels-photo-8111359.jpeg",
    rating: 4.8,
    reviews: 203,
    students: 890,
    hourlyRate: 38,
    responseTime: "45 mins",
    languages: ["Arabic", "English", "Turkish"],
    specialties: ["Hifz", "Quran Memorization", "Revision"],
    experience: "14+ years",
    sessionTypes: ["1-on-1", "Group"],
    availability: "Available",
    location: "Istanbul, Turkey",
    country: "Turkey",
    bio: "Hafiz with proven track record of helping students complete Quran memorization efficiently."
  }
]

const subjects = [
  "All Subjects",
  "Quran Recitation",
  "Tajweed",
  "Quran Memorization",
  "Arabic Grammar",
  "Arabic Conversation",
  "Classical Arabic",
  "Islamic History",
  "Fiqh",
  "Hadith Studies",
  "Tafseer",
  "Aqeedah",
  "Seerah",
  "Islamic Ethics"
]

const countries = [
  "All Countries",
  "Egypt",
  "Saudi Arabia",
  "Morocco",
  "Turkey",
  "Malaysia",
  "Pakistan",
  "Jordan",
  "Lebanon",
  "Tunisia",
  "Algeria",
  "United Kingdom",
  "United States",
  "Canada",
  "Australia",
  "Spain"
]

const priceRanges = [
  "All Prices",
  "$20 - $30",
  "$30 - $40", 
  "$40 - $50",
  "$50+"
]

const availabilityOptions = [
  "All",
  "Available Now",
  "Busy"
]

export default function Tutors() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSubject, setSelectedSubject] = useState('All Subjects')
  const [selectedCountry, setSelectedCountry] = useState('All Countries')
  const [selectedPriceRange, setSelectedPriceRange] = useState('All Prices')
  const [selectedAvailability, setSelectedAvailability] = useState('All')
  const [showFilters, setShowFilters] = useState(false)

  // Filter and sort tutors
  const filteredTutors = tutors
    .filter(tutor => {
      const matchesSearch = tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tutor.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase())) ||
                           tutor.languages.some(l => l.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesSubject = selectedSubject === 'All Subjects' || 
                            tutor.specialties.some(s => s.toLowerCase().includes(selectedSubject.toLowerCase().replace(/\s+/g, ' ')))
      
      const matchesCountry = selectedCountry === 'All Countries' || 
                            tutor.country === selectedCountry
      
      const matchesPrice = selectedPriceRange === 'All Prices' || 
                          (selectedPriceRange === '$20 - $30' && tutor.hourlyRate >= 20 && tutor.hourlyRate <= 30) ||
                          (selectedPriceRange === '$30 - $40' && tutor.hourlyRate >= 30 && tutor.hourlyRate <= 40) ||
                          (selectedPriceRange === '$40 - $50' && tutor.hourlyRate >= 40 && tutor.hourlyRate <= 50) ||
                          (selectedPriceRange === '$50+' && tutor.hourlyRate >= 50)
      
      const matchesAvailability = selectedAvailability === 'All' || 
                                  tutor.availability === selectedAvailability
      
      return matchesSearch && matchesSubject && matchesCountry && matchesPrice && matchesAvailability
    })
    .sort((a, b) => {
      // Ranking algorithm: Featured first, then by students count, then by rating
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      
      if (a.students !== b.students) return b.students - a.students
      if (a.rating !== b.rating) return b.rating - a.rating
      
      return a.name.localeCompare(b.name)
    })
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-islamic-600 to-islamic-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Find Your Perfect Islamic Tutor
              </h1>
              <p className="text-xl text-islamic-100 mb-8 max-w-3xl mx-auto">
                Browse through our verified tutors and find the perfect match for your learning goals
              </p>
              
              {/* Dual Search Bar */}
              <div className="max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {/* Country Search */}
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <select 
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-islamic-300 bg-white"
                      >
                        {countries.map((country) => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                    </div>

                    {/* Subject Search */}
                    <div className="relative">
                      <GraduationCap className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <select 
                        value={selectedSubject}
                        onChange={(e) => setSelectedSubject(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-islamic-300 bg-white"
                      >
                        {subjects.map((subject) => (
                          <option key={subject} value={subject}>{subject}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  {/* Text Search */}
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search by name, specialty, or language..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-islamic-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-4">
                {/* Price Filter */}
                <select 
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                >
                  {priceRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>

                {/* Availability Filter */}
                <select 
                  value={selectedAvailability}
                  onChange={(e) => setSelectedAvailability(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                >
                  {availabilityOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-islamic-500 transition-colors"
              >
                <Filter className="w-4 h-4" />
                More Filters
              </button>
            </div>
          </div>
        </section>

        {/* Results Summary */}
        <section className="py-6 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <p className="text-gray-600">
                Showing {filteredTutors.length} of {tutors.length} tutors
                {selectedCountry !== 'All Countries' && ` in ${selectedCountry}`}
                {selectedSubject !== 'All Subjects' && ` for ${selectedSubject}`}
              </p>
              <p className="text-sm text-gray-500">
                Sorted by: Featured → Students → Rating
              </p>
            </div>
          </div>
        </section>

        {/* Tutors Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredTutors.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTutors.map((tutor) => (
                <div key={tutor.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group border border-gray-100">
                  <div className="relative">
                    <img
                      src={tutor.image}
                      alt={tutor.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
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
                    {tutor.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-gold-500 text-islamic-900 px-2 py-1 rounded text-sm font-bold flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          Featured
                        </span>
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-gray-500" />
                            <span className="text-gray-600">{tutor.location}</span>
                          </div>
                          <span className="font-medium text-islamic-600">⚡ {tutor.responseTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-islamic-600 transition-colors">
                          {tutor.name}
                        </h3>
                        <p className="text-islamic-600 font-medium">{tutor.title}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-islamic-600">${tutor.hourlyRate}</div>
                        <div className="text-sm text-gray-500">/hour</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{tutor.rating}</span>
                        <span>({tutor.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{tutor.students}</span>
                      </div>
                    </div>
                    
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
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {tutor.specialties.slice(0, 3).map((specialty, index) => (
                          <span key={index} className="bg-islamic-50 text-islamic-700 px-2 py-1 rounded text-xs font-medium">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                      {tutor.bio}
                    </p>
                    
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
            ) : (
              <div className="text-center py-16">
                <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No tutors found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search criteria or browse all tutors
                </p>
                <button 
                  onClick={() => {
                    setSelectedCountry('All Countries')
                    setSelectedSubject('All Subjects')
                    setSearchTerm('')
                    setSelectedPriceRange('All Prices')
                    setSelectedAvailability('All')
                  }}
                  className="bg-islamic-600 text-white px-6 py-3 rounded-lg hover:bg-islamic-700 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}