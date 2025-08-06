import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { 
  User, 
  GraduationCap, 
  BookOpen, 
  DollarSign, 
  Camera, 
  Upload, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft,
  Star,
  Clock,
  Video,
  Users,
  Award,
  Globe,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Plus,
  Trash2,
  Edit,
  Save,
  X
} from 'lucide-react'

interface Package {
  id: string
  name: string
  description: string
  duration: string
  price: number
  features: string[]
  deliveryTime: string
  revisions: number
}

interface OnboardingData {
  // Personal Info
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  gender: string
  country: string
  city: string
  timezone: string
  languages: string[]
  
  // Professional Info
  title: string
  bio: string
  experience: string
  education: string[]
  certifications: { name: string; issuer: string; year: string }[]
  specialties: string[]
  teachingStyle: string
  
  // Media
  profileImage: File | null
  introVideo: File | null
  certificates: File[]
  
  // Packages
  packages: Package[]
  
  // Availability
  availability: {
    [key: string]: string[]
  }
  
  // Payment
  hourlyRate: number
  paymentMethods: {
    bankAccount: {
      accountName: string
      accountNumber: string
      bankName: string
      routingNumber: string
      swiftCode: string
    }
    paypal: string
    stripe: string
  }
}

const initialData: OnboardingData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  dateOfBirth: '',
  gender: '',
  country: '',
  city: '',
  timezone: '',
  languages: [],
  title: '',
  bio: '',
  experience: '',
  education: [''],
  certifications: [{ name: '', issuer: '', year: '' }],
  specialties: [],
  teachingStyle: '',
  profileImage: null,
  introVideo: null,
  certificates: [],
  packages: [],
  availability: {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: []
  },
  hourlyRate: 30,
  paymentMethods: {
    bankAccount: {
      accountName: '',
      accountNumber: '',
      bankName: '',
      routingNumber: '',
      swiftCode: ''
    },
    paypal: '',
    stripe: ''
  }
}

const countries = [
  'Egypt', 'Saudi Arabia', 'Morocco', 'Turkey', 'Malaysia', 'Pakistan', 
  'Jordan', 'Lebanon', 'Tunisia', 'Algeria', 'United Kingdom', 'United States', 
  'Canada', 'Australia', 'Germany', 'France', 'Spain', 'Netherlands'
]

const languages = [
  'Arabic', 'English', 'French', 'Spanish', 'Turkish', 'Urdu', 'Malay', 
  'Indonesian', 'Persian', 'German', 'Dutch', 'Italian', 'Russian'
]

const specialties = [
  'Quran Recitation', 'Tajweed', 'Quran Memorization', 'Arabic Grammar', 
  'Arabic Conversation', 'Classical Arabic', 'Islamic History', 'Fiqh', 
  'Hadith Studies', 'Tafseer', 'Aqeedah', 'Seerah', 'Islamic Ethics',
  'Comparative Religion', 'Islamic Philosophy', 'Islamic Law'
]

const timeSlots = [
  '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
  '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'
]

const packageTemplates = [
  {
    name: 'Trial Session',
    description: 'Get to know my teaching style and assess your current level',
    duration: '30 minutes',
    price: 20,
    features: ['Assessment', 'Learning plan', 'Q&A session'],
    deliveryTime: 'Same day',
    revisions: 0
  },
  {
    name: 'Standard Session',
    description: 'Regular one-on-one lessons with personalized instruction',
    duration: '60 minutes',
    price: 45,
    features: ['Personalized instruction', 'Progress tracking', 'Homework assignments'],
    deliveryTime: 'Flexible scheduling',
    revisions: 1
  },
  {
    name: 'Intensive Package',
    description: 'Weekly intensive sessions for accelerated learning',
    duration: '4 sessions (60 min each)',
    price: 160,
    features: ['4 sessions', 'Study materials', 'Progress reports', 'WhatsApp support'],
    deliveryTime: '1 month',
    revisions: 2
  }
]

export default function TutorOnboarding() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<OnboardingData>(initialData)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const navigate = useNavigate()

  const totalSteps = 8

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleNestedInputChange = (parent: string, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [parent]: {
        ...prev[parent as keyof OnboardingData],
        [field]: value
      }
    }))
  }

  const addEducation = () => {
    setFormData(prev => ({
      ...prev,
      education: [...prev.education, '']
    }))
  }

  const removeEducation = (index: number) => {
    setFormData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }))
  }

  const updateEducation = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      education: prev.education.map((item, i) => i === index ? value : item)
    }))
  }

  const addCertification = () => {
    setFormData(prev => ({
      ...prev,
      certifications: [...prev.certifications, { name: '', issuer: '', year: '' }]
    }))
  }

  const removeCertification = (index: number) => {
    setFormData(prev => ({
      ...prev,
      certifications: prev.certifications.filter((_, i) => i !== index)
    }))
  }

  const updateCertification = (index: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      certifications: prev.certifications.map((cert, i) => 
        i === index ? { ...cert, [field]: value } : cert
      )
    }))
  }

  const addPackage = (template?: any) => {
    const newPackage: Package = {
      id: Date.now().toString(),
      name: template?.name || '',
      description: template?.description || '',
      duration: template?.duration || '',
      price: template?.price || 0,
      features: template?.features || [''],
      deliveryTime: template?.deliveryTime || '',
      revisions: template?.revisions || 0
    }
    setFormData(prev => ({
      ...prev,
      packages: [...prev.packages, newPackage]
    }))
  }

  const removePackage = (id: string) => {
    setFormData(prev => ({
      ...prev,
      packages: prev.packages.filter(pkg => pkg.id !== id)
    }))
  }

  const updatePackage = (id: string, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      packages: prev.packages.map(pkg => 
        pkg.id === id ? { ...pkg, [field]: value } : pkg
      )
    }))
  }

  const addPackageFeature = (packageId: string) => {
    setFormData(prev => ({
      ...prev,
      packages: prev.packages.map(pkg => 
        pkg.id === packageId ? { ...pkg, features: [...pkg.features, ''] } : pkg
      )
    }))
  }

  const removePackageFeature = (packageId: string, featureIndex: number) => {
    setFormData(prev => ({
      ...prev,
      packages: prev.packages.map(pkg => 
        pkg.id === packageId ? { 
          ...pkg, 
          features: pkg.features.filter((_, i) => i !== featureIndex) 
        } : pkg
      )
    }))
  }

  const updatePackageFeature = (packageId: string, featureIndex: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      packages: prev.packages.map(pkg => 
        pkg.id === packageId ? { 
          ...pkg, 
          features: pkg.features.map((feature, i) => i === featureIndex ? value : feature) 
        } : pkg
      )
    }))
  }

  const toggleTimeSlot = (day: string, time: string) => {
    setFormData(prev => ({
      ...prev,
      availability: {
        ...prev.availability,
        [day]: prev.availability[day].includes(time)
          ? prev.availability[day].filter(t => t !== time)
          : [...prev.availability[day], time]
      }
    }))
  }

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}

    switch (step) {
      case 1:
        if (!formData.firstName) newErrors.firstName = 'First name is required'
        if (!formData.lastName) newErrors.lastName = 'Last name is required'
        if (!formData.email) newErrors.email = 'Email is required'
        if (!formData.phone) newErrors.phone = 'Phone is required'
        if (!formData.country) newErrors.country = 'Country is required'
        break
      case 2:
        if (!formData.title) newErrors.title = 'Professional title is required'
        if (!formData.bio) newErrors.bio = 'Bio is required'
        if (!formData.experience) newErrors.experience = 'Experience is required'
        if (formData.specialties.length === 0) newErrors.specialties = 'At least one specialty is required'
        break
      case 5:
        if (formData.packages.length === 0) newErrors.packages = 'At least one package is required'
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps))
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      navigate('/tutor-dashboard', { 
        state: { 
          message: 'Welcome! Your tutor profile has been created successfully. You can now start accepting students!' 
        }
      })
    } catch (error) {
      console.error('Onboarding failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Personal Information</h2>
              <p className="text-gray-600">Let's start with your basic information</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent ${
                    errors.firstName ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter your first name"
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent ${
                    errors.lastName ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter your last name"
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent ${
                    errors.email ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent ${
                    errors.phone ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                <input
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                <select
                  value={formData.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
                <select
                  value={formData.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent ${
                    errors.country ? 'border-red-300' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select Country</option>
                  {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
                {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                  placeholder="Enter your city"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Languages You Speak</label>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                  {languages.map(language => (
                    <label key={language} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={formData.languages.includes(language)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleInputChange('languages', [...formData.languages, language])
                          } else {
                            handleInputChange('languages', formData.languages.filter(l => l !== language))
                          }
                        }}
                        className="rounded border-gray-300 text-islamic-600 focus:ring-islamic-500"
                      />
                      <span className="text-sm">{language}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Information</h2>
              <p className="text-gray-600">Tell us about your expertise and teaching background</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Professional Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent ${
                    errors.title ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="e.g., Quran & Tajweed Specialist"
                />
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Professional Bio *</label>
                <textarea
                  value={formData.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent ${
                    errors.bio ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Describe your background, expertise, and teaching philosophy..."
                />
                {errors.bio && <p className="text-red-500 text-sm mt-1">{errors.bio}</p>}
                <p className="text-sm text-gray-500 mt-1">{formData.bio.length}/500 characters</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Years of Teaching Experience *</label>
                <select
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent ${
                    errors.experience ? 'border-red-300' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select Experience</option>
                  <option value="1-2">1-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="6-10">6-10 years</option>
                  <option value="11-15">11-15 years</option>
                  <option value="15+">15+ years</option>
                </select>
                {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Teaching Specialties *</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {specialties.map(specialty => (
                    <label key={specialty} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={formData.specialties.includes(specialty)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleInputChange('specialties', [...formData.specialties, specialty])
                          } else {
                            handleInputChange('specialties', formData.specialties.filter(s => s !== specialty))
                          }
                        }}
                        className="rounded border-gray-300 text-islamic-600 focus:ring-islamic-500"
                      />
                      <span className="text-sm">{specialty}</span>
                    </label>
                  ))}
                </div>
                {errors.specialties && <p className="text-red-500 text-sm mt-1">{errors.specialties}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Teaching Style & Methodology</label>
                <textarea
                  value={formData.teachingStyle}
                  onChange={(e) => handleInputChange('teachingStyle', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                  placeholder="Describe your teaching approach, methodology, and what makes you unique..."
                />
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
              <p className="text-gray-600">Share your educational background and qualifications</p>
            </div>

            <div className="space-y-8">
              {/* Education */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="block text-sm font-medium text-gray-700">Education</label>
                  <button
                    type="button"
                    onClick={addEducation}
                    className="flex items-center gap-2 text-islamic-600 hover:text-islamic-700 text-sm"
                  >
                    <Plus className="w-4 h-4" />
                    Add Education
                  </button>
                </div>
                <div className="space-y-3">
                  {formData.education.map((edu, index) => (
                    <div key={index} className="flex gap-3">
                      <input
                        type="text"
                        value={edu}
                        onChange={(e) => updateEducation(index, e.target.value)}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                        placeholder="e.g., Bachelor's in Islamic Studies - Al-Azhar University"
                      />
                      {formData.education.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeEducation(index)}
                          className="p-3 text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="block text-sm font-medium text-gray-700">Certifications & Ijazahs</label>
                  <button
                    type="button"
                    onClick={addCertification}
                    className="flex items-center gap-2 text-islamic-600 hover:text-islamic-700 text-sm"
                  >
                    <Plus className="w-4 h-4" />
                    Add Certification
                  </button>
                </div>
                <div className="space-y-4">
                  {formData.certifications.map((cert, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-medium text-gray-900">Certification {index + 1}</h4>
                        {formData.certifications.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeCertification(index)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <input
                          type="text"
                          value={cert.name}
                          onChange={(e) => updateCertification(index, 'name', e.target.value)}
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                          placeholder="Certification name"
                        />
                        <input
                          type="text"
                          value={cert.issuer}
                          onChange={(e) => updateCertification(index, 'issuer', e.target.value)}
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                          placeholder="Issuing institution"
                        />
                        <input
                          type="text"
                          value={cert.year}
                          onChange={(e) => updateCertification(index, 'year', e.target.value)}
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                          placeholder="Year"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Profile Media</h2>
              <p className="text-gray-600">Upload your profile photo and introduction video</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Profile Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">Profile Photo *</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-islamic-400 transition-colors">
                  <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">Upload a professional headshot</p>
                  <button className="bg-islamic-600 text-white px-6 py-2 rounded-lg hover:bg-islamic-700 transition-colors">
                    Choose Photo
                  </button>
                  <p className="text-xs text-gray-500 mt-2">JPG, PNG up to 5MB</p>
                </div>
              </div>

              {/* Intro Video */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">Introduction Video (Optional)</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-islamic-400 transition-colors">
                  <Video className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">Record a 2-3 minute introduction</p>
                  <button className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                    Upload Video
                  </button>
                  <p className="text-xs text-gray-500 mt-2">MP4, MOV up to 100MB</p>
                </div>
              </div>
            </div>

            {/* Certificate Uploads */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">Upload Certificates & Ijazahs</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-islamic-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">Upload your certificates, degrees, and Ijazahs</p>
                <button className="bg-islamic-600 text-white px-6 py-2 rounded-lg hover:bg-islamic-700 transition-colors">
                  Choose Files
                </button>
                <p className="text-xs text-gray-500 mt-2">PDF, JPG, PNG up to 10MB each</p>
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Create Your Packages</h2>
              <p className="text-gray-600">Define your teaching packages and pricing</p>
            </div>

            {/* Package Templates */}
            {formData.packages.length === 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Start Templates</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {packageTemplates.map((template, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-islamic-300 transition-colors">
                      <h4 className="font-semibold text-gray-900 mb-2">{template.name}</h4>
                      <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                      <div className="text-lg font-bold text-islamic-600 mb-3">${template.price}</div>
                      <button
                        onClick={() => addPackage(template)}
                        className="w-full bg-islamic-600 text-white py-2 px-4 rounded-lg hover:bg-islamic-700 transition-colors text-sm"
                      >
                        Use Template
                      </button>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <button
                    onClick={() => addPackage()}
                    className="border border-islamic-600 text-islamic-600 px-6 py-2 rounded-lg hover:bg-islamic-50 transition-colors"
                  >
                    Create Custom Package
                  </button>
                </div>
              </div>
            )}

            {/* Created Packages */}
            {formData.packages.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Your Packages</h3>
                  <button
                    onClick={() => addPackage()}
                    className="flex items-center gap-2 bg-islamic-600 text-white px-4 py-2 rounded-lg hover:bg-islamic-700 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    Add Package
                  </button>
                </div>

                {formData.packages.map((pkg) => (
                  <div key={pkg.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-lg font-semibold text-gray-900">Package Details</h4>
                      <button
                        onClick={() => removePackage(pkg.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Package Name</label>
                        <input
                          type="text"
                          value={pkg.name}
                          onChange={(e) => updatePackage(pkg.id, 'name', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                          placeholder="e.g., Standard Session"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                        <input
                          type="text"
                          value={pkg.duration}
                          onChange={(e) => updatePackage(pkg.id, 'duration', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                          placeholder="e.g., 60 minutes"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Price ($)</label>
                        <input
                          type="number"
                          value={pkg.price}
                          onChange={(e) => updatePackage(pkg.id, 'price', parseInt(e.target.value))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                          placeholder="45"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Time</label>
                        <input
                          type="text"
                          value={pkg.deliveryTime}
                          onChange={(e) => updatePackage(pkg.id, 'deliveryTime', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                          placeholder="e.g., Same day"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                      <textarea
                        value={pkg.description}
                        onChange={(e) => updatePackage(pkg.id, 'description', e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                        placeholder="Describe what's included in this package..."
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-sm font-medium text-gray-700">Package Features</label>
                        <button
                          onClick={() => addPackageFeature(pkg.id)}
                          className="text-islamic-600 hover:text-islamic-700 text-sm"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="space-y-2">
                        {pkg.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex gap-2">
                            <input
                              type="text"
                              value={feature}
                              onChange={(e) => updatePackageFeature(pkg.id, featureIndex, e.target.value)}
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                              placeholder="e.g., Personalized instruction"
                            />
                            {pkg.features.length > 1 && (
                              <button
                                onClick={() => removePackageFeature(pkg.id, featureIndex)}
                                className="p-2 text-red-600 hover:text-red-700"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {errors.packages && <p className="text-red-500 text-sm">{errors.packages}</p>}
          </div>
        )

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Set Your Availability</h2>
              <p className="text-gray-600">Choose when you're available to teach</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="space-y-6">
                {Object.keys(formData.availability).map(day => (
                  <div key={day}>
                    <h4 className="font-medium text-gray-900 mb-3 capitalize">{day}</h4>
                    <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                      {timeSlots.map(time => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => toggleTimeSlot(day, time)}
                          className={`p-2 text-sm rounded-lg border transition-colors ${
                            formData.availability[day].includes(time)
                              ? 'bg-islamic-600 text-white border-islamic-600'
                              : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-islamic-300'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                <strong>Note:</strong> You can always update your availability later from your dashboard. 
                Students will see these times in your timezone.
              </p>
            </div>
          </div>
        )

      case 7:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Payment Setup</h2>
              <p className="text-gray-600">Configure how you'll receive payments</p>
            </div>

            <div className="space-y-8">
              {/* Hourly Rate */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Base Hourly Rate ($)</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="number"
                    value={formData.hourlyRate}
                    onChange={(e) => handleInputChange('hourlyRate', parseInt(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                    placeholder="45"
                    min="10"
                    max="200"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">Platform takes 15% commission. You'll receive ${Math.round(formData.hourlyRate * 0.85)}/hour</p>
              </div>

              {/* Bank Account */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Bank Account (Primary)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Account Holder Name</label>
                    <input
                      type="text"
                      value={formData.paymentMethods.bankAccount.accountName}
                      onChange={(e) => handleNestedInputChange('paymentMethods', 'bankAccount', {
                        ...formData.paymentMethods.bankAccount,
                        accountName: e.target.value
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                      placeholder="Full name as on bank account"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Account Number</label>
                    <input
                      type="text"
                      value={formData.paymentMethods.bankAccount.accountNumber}
                      onChange={(e) => handleNestedInputChange('paymentMethods', 'bankAccount', {
                        ...formData.paymentMethods.bankAccount,
                        accountNumber: e.target.value
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                      placeholder="Account number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bank Name</label>
                    <input
                      type="text"
                      value={formData.paymentMethods.bankAccount.bankName}
                      onChange={(e) => handleNestedInputChange('paymentMethods', 'bankAccount', {
                        ...formData.paymentMethods.bankAccount,
                        bankName: e.target.value
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                      placeholder="Bank name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Routing Number</label>
                    <input
                      type="text"
                      value={formData.paymentMethods.bankAccount.routingNumber}
                      onChange={(e) => handleNestedInputChange('paymentMethods', 'bankAccount', {
                        ...formData.paymentMethods.bankAccount,
                        routingNumber: e.target.value
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                      placeholder="Routing number"
                    />
                  </div>
                </div>
              </div>

              {/* PayPal */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">PayPal (Alternative)</h3>
                <input
                  type="email"
                  value={formData.paymentMethods.paypal}
                  onChange={(e) => handleNestedInputChange('paymentMethods', 'paypal', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                  placeholder="PayPal email address"
                />
              </div>
            </div>
          </div>
        )

      case 8:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Review & Submit</h2>
              <p className="text-gray-600">Review your information before submitting</p>
            </div>

            <div className="space-y-6">
              {/* Profile Summary */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Name:</span>
                    <span className="ml-2 font-medium">{formData.firstName} {formData.lastName}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Title:</span>
                    <span className="ml-2 font-medium">{formData.title}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Location:</span>
                    <span className="ml-2 font-medium">{formData.city}, {formData.country}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Experience:</span>
                    <span className="ml-2 font-medium">{formData.experience}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Hourly Rate:</span>
                    <span className="ml-2 font-medium">${formData.hourlyRate}/hour</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Packages:</span>
                    <span className="ml-2 font-medium">{formData.packages.length} created</span>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Terms & Conditions</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <label className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 rounded border-gray-300 text-islamic-600 focus:ring-islamic-500" />
                    <span>I confirm that all information provided is accurate and truthful</span>
                  </label>
                  <label className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 rounded border-gray-300 text-islamic-600 focus:ring-islamic-500" />
                    <span>I agree to Baytul-Ilm's Terms of Service and Tutor Agreement</span>
                  </label>
                  <label className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 rounded border-gray-300 text-islamic-600 focus:ring-islamic-500" />
                    <span>I understand the 15% platform commission on all earnings</span>
                  </label>
                  <label className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 rounded border-gray-300 text-islamic-600 focus:ring-islamic-500" />
                    <span>I commit to providing high-quality Islamic education</span>
                  </label>
                </div>
              </div>

              {/* What's Next */}
              <div className="bg-islamic-50 border border-islamic-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-islamic-800 mb-4">What happens next?</h3>
                <ul className="space-y-2 text-sm text-islamic-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-islamic-600 mt-0.5 flex-shrink-0" />
                    <span>We'll review your application within 24-48 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-islamic-600 mt-0.5 flex-shrink-0" />
                    <span>You may be contacted for a brief verification interview</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-islamic-600 mt-0.5 flex-shrink-0" />
                    <span>Once approved, your profile will go live</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-islamic-600 mt-0.5 flex-shrink-0" />
                    <span>Start receiving student bookings immediately</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Progress Header */}
        <section className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Become a Tutor</h1>
              <p className="text-gray-600">Complete your profile to start teaching on Baytul-Ilm</p>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-8">
              {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                    currentStep >= step 
                      ? 'bg-islamic-600 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {currentStep > step ? <CheckCircle className="w-5 h-5" /> : step}
                  </div>
                  {step < totalSteps && (
                    <div className={`flex-1 h-1 mx-2 transition-colors ${
                      currentStep > step ? 'bg-islamic-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>

            {/* Step Labels */}
            <div className="grid grid-cols-4 md:grid-cols-8 gap-2 text-xs text-center text-gray-600">
              <span className={currentStep >= 1 ? 'text-islamic-600 font-medium' : ''}>Personal</span>
              <span className={currentStep >= 2 ? 'text-islamic-600 font-medium' : ''}>Professional</span>
              <span className={currentStep >= 3 ? 'text-islamic-600 font-medium' : ''}>Education</span>
              <span className={currentStep >= 4 ? 'text-islamic-600 font-medium' : ''}>Media</span>
              <span className={currentStep >= 5 ? 'text-islamic-600 font-medium' : ''}>Packages</span>
              <span className={currentStep >= 6 ? 'text-islamic-600 font-medium' : ''}>Availability</span>
              <span className={currentStep >= 7 ? 'text-islamic-600 font-medium' : ''}>Payment</span>
              <span className={currentStep >= 8 ? 'text-islamic-600 font-medium' : ''}>Review</span>
            </div>
          </div>
        </section>

        {/* Form Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {renderStepContent()}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-12 pt-8 border-t border-gray-200">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </button>

                {currentStep < totalSteps ? (
                  <button
                    onClick={nextStep}
                    className="flex items-center gap-2 bg-islamic-600 text-white px-6 py-3 rounded-lg hover:bg-islamic-700 transition-colors"
                  >
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="flex items-center gap-2 bg-islamic-600 text-white px-8 py-3 rounded-lg hover:bg-islamic-700 transition-colors disabled:opacity-50"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        Submit Application
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}