import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Upload, CheckCircle, Star, Users, DollarSign, Clock, Award, BookOpen } from 'lucide-react'

const benefits = [
  {
    icon: DollarSign,
    title: "Earn Good Income",
    description: "Set your own rates and earn $20-$100+ per hour teaching what you love"
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Teach when you want, from anywhere in the world"
  },
  {
    icon: Users,
    title: "Global Students",
    description: "Connect with eager learners from around the world"
  },
  {
    icon: Award,
    title: "Professional Growth",
    description: "Build your reputation and grow your teaching career"
  }
]

const requirements = [
  "Strong knowledge in Islamic studies, Arabic, or Quran",
  "Teaching experience or relevant qualifications",
  "Fluency in English and/or Arabic",
  "Reliable internet connection and quiet teaching space",
  "Passion for sharing Islamic knowledge"
]

export default function BecomeTutor() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    languages: [],
    specialties: [],
    experience: '',
    qualifications: '',
    hourlyRate: '',
    availability: '',
    bio: '',
    teachingStyle: ''
  })

  const [step, setStep] = useState(1)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setStep(4) // Go to success step
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-islamic-600 to-islamic-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Become an Islamic Tutor
              </h1>
              <p className="text-xl text-islamic-100 mb-8 max-w-3xl mx-auto">
                Share your knowledge of Islam, Arabic, and Quran with students worldwide. Join our community of expert educators.
              </p>
              <div className="flex items-center justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gold-400" />
                  <span>500+ Active Tutors</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-gold-400 fill-current" />
                  <span>4.9/5 Average Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-gold-400" />
                  <span>$20-$100+ per hour</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Teach with Baytul-Ilm?</h2>
              <p className="text-xl text-gray-600">Join a platform that values quality education and supports your success</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-islamic-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-islamic-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Requirements</h2>
              <p className="text-xl text-gray-600">What we look for in our tutors</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-islamic-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Apply to Become a Tutor</h2>
              <p className="text-xl text-gray-600">Fill out the application form below to get started</p>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center justify-center gap-4 mb-12">
              {[1, 2, 3, 4].map((stepNum) => (
                <div key={stepNum} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= stepNum 
                      ? 'bg-islamic-600 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step > stepNum ? <CheckCircle className="w-4 h-4" /> : stepNum}
                  </div>
                  {stepNum < 4 && (
                    <div className={`w-12 h-0.5 ${
                      step > stepNum ? 'bg-islamic-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              {step === 1 && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select Country</option>
                        <option value="egypt">Egypt</option>
                        <option value="saudi-arabia">Saudi Arabia</option>
                        <option value="morocco">Morocco</option>
                        <option value="turkey">Turkey</option>
                        <option value="malaysia">Malaysia</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <button
                    onClick={() => setStep(2)}
                    className="mt-8 bg-islamic-600 text-white px-8 py-3 rounded-lg hover:bg-islamic-700 transition-colors font-medium"
                  >
                    Continue
                  </button>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Teaching Expertise</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Languages You Teach</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {['Arabic', 'English', 'Urdu', 'Turkish', 'Malay', 'French'].map((lang) => (
                          <label key={lang} className="flex items-center gap-2">
                            <input type="checkbox" className="rounded border-gray-300 text-islamic-600 focus:ring-islamic-500" />
                            <span className="text-sm">{lang}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Specialties</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {['Quran Recitation', 'Tajweed', 'Arabic Grammar', 'Islamic History', 'Fiqh', 'Hadith'].map((specialty) => (
                          <label key={specialty} className="flex items-center gap-2">
                            <input type="checkbox" className="rounded border-gray-300 text-islamic-600 focus:ring-islamic-500" />
                            <span className="text-sm">{specialty}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Years of Teaching Experience</label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select Experience</option>
                        <option value="1-2">1-2 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="6-10">6-10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Qualifications & Certifications</label>
                      <textarea
                        name="qualifications"
                        value={formData.qualifications}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                        placeholder="List your relevant qualifications, degrees, certifications, and Ijazahs..."
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mt-8">
                    <button
                      onClick={() => setStep(1)}
                      className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="bg-islamic-600 text-white px-8 py-3 rounded-lg hover:bg-islamic-700 transition-colors font-medium"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Teaching Details</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Hourly Rate (USD)</label>
                      <input
                        type="number"
                        name="hourlyRate"
                        value={formData.hourlyRate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                        placeholder="e.g., 45"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                      <textarea
                        name="availability"
                        value={formData.availability}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                        placeholder="Describe your typical availability (days, times, timezone)..."
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                      <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                        placeholder="Tell students about yourself, your background, and your passion for teaching..."
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Teaching Style</label>
                      <textarea
                        name="teachingStyle"
                        value={formData.teachingStyle}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                        placeholder="Describe your teaching methodology and approach..."
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Profile Photo</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Upload a professional photo</p>
                        <input type="file" className="hidden" accept="image/*" />
                        <button className="mt-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                          Choose File
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mt-8">
                    <button
                      onClick={() => setStep(2)}
                      className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="bg-islamic-600 text-white px-8 py-3 rounded-lg hover:bg-islamic-700 transition-colors font-medium"
                    >
                      Submit Application
                    </button>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Submitted!</h3>
                  <p className="text-gray-600 mb-8">
                    Thank you for your interest in becoming a tutor with Baytul-Ilm. We'll review your application and get back to you within 3-5 business days.
                  </p>
                  <div className="bg-islamic-50 rounded-lg p-6 mb-8">
                    <h4 className="font-semibold text-islamic-800 mb-2">What's Next?</h4>
                    <ul className="text-sm text-islamic-700 space-y-1">
                      <li>• We'll review your application and qualifications</li>
                      <li>• You may be contacted for a brief interview</li>
                      <li>• Once approved, you'll receive onboarding materials</li>
                      <li>• Start teaching and earning within a week!</li>
                    </ul>
                  </div>
                  <Link
                    to="/tutor-onboarding"
                    className="bg-islamic-600 text-white px-8 py-3 rounded-lg hover:bg-islamic-700 transition-colors font-medium inline-block"
                  >
                    Complete Full Onboarding
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}