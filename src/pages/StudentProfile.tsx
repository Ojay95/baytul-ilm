import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { User, Mail, Phone, MapPin, Calendar, BookOpen, Star, Award, Clock, Edit, Camera, Save, X, Globe, Heart, Share2, Download, Eye, MessageCircle } from 'lucide-react'

const studentData = {
  id: 1,
  name: "Amina Hassan",
  email: "amina.hassan@email.com",
  phone: "+1 (555) 123-4567",
  location: "Toronto, Canada",
  timezone: "EST (GMT-5)",
  joinedDate: "March 2023",
  dateOfBirth: "1995-08-15",
  gender: "Female",
  languages: ["English", "Arabic", "French"],
  learningGoals: ["Improve Quran recitation", "Learn Arabic grammar", "Understand Islamic history"],
  bio: "I'm passionate about deepening my understanding of Islam and improving my Arabic language skills. I've been learning with Baytul-Ilm for over a year and have made significant progress in my Quran recitation.",
  image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg",
  preferences: {
    sessionType: "Video Call",
    preferredTime: "Evening",
    learningPace: "Moderate",
    notifications: {
      email: true,
      sms: false,
      push: true
    }
  }
}

const learningStats = [
  {
    icon: BookOpen,
    label: "Sessions Completed",
    value: "47",
    description: "Total learning sessions"
  },
  {
    icon: Clock,
    label: "Hours Learned",
    value: "78",
    description: "Time spent learning"
  },
  {
    icon: Award,
    label: "Certificates Earned",
    value: "3",
    description: "Course completions"
  },
  {
    icon: Star,
    label: "Average Rating Given",
    value: "4.9",
    description: "Tutor feedback rating"
  }
]

const enrolledCourses = [
  {
    id: 1,
    title: "Advanced Quran Recitation",
    tutor: "Sheikh Ahmad Al-Mahmoud",
    progress: 75,
    totalSessions: 12,
    completedSessions: 9,
    nextSession: "Dec 20, 2024 at 2:00 PM",
    image: "https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg"
  },
  {
    id: 2,
    title: "Arabic Grammar Fundamentals",
    tutor: "Dr. Fatima Al-Zahra",
    progress: 60,
    totalSessions: 10,
    completedSessions: 6,
    nextSession: "Dec 22, 2024 at 10:00 AM",
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg"
  },
  {
    id: 3,
    title: "Islamic History & Civilization",
    tutor: "Prof. Omar Ibn Khattab",
    progress: 100,
    totalSessions: 8,
    completedSessions: 8,
    nextSession: "Completed",
    image: "https://images.pexels.com/photos/8111358/pexels-photo-8111358.jpeg"
  }
]

const achievements = [
  {
    id: 1,
    title: "Quran Recitation Certificate",
    description: "Completed advanced Quran recitation course",
    date: "November 2024",
    icon: Award,
    color: "bg-gold-100 text-gold-600"
  },
  {
    id: 2,
    title: "Perfect Attendance",
    description: "Attended 20 consecutive sessions",
    date: "October 2024",
    icon: Calendar,
    color: "bg-green-100 text-green-600"
  },
  {
    id: 3,
    title: "Top Student",
    description: "Highest progress in Arabic Grammar course",
    date: "September 2024",
    icon: Star,
    color: "bg-blue-100 text-blue-600"
  }
]

const recentActivity = [
  {
    id: 1,
    type: "session",
    description: "Completed session with Sheikh Ahmad Al-Mahmoud",
    date: "2 days ago",
    icon: BookOpen
  },
  {
    id: 2,
    type: "review",
    description: "Left a 5-star review for Dr. Fatima Al-Zahra",
    date: "1 week ago",
    icon: Star
  },
  {
    id: 3,
    type: "certificate",
    description: "Earned Quran Recitation Certificate",
    date: "2 weeks ago",
    icon: Award
  }
]

export default function StudentProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [formData, setFormData] = useState(studentData)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSave = () => {
    // Save logic would go here
    setIsEditing(false)
  }

  const handleCancel = () => {
    setFormData(studentData)
    setIsEditing(false)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Profile Header */}
        <section className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="relative">
                <img
                  src={formData.image}
                  alt={formData.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
                {isEditing && (
                  <button className="absolute bottom-2 right-2 bg-islamic-600 text-white p-2 rounded-full hover:bg-islamic-700 transition-colors">
                    <Camera className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    {isEditing ? (
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="text-3xl font-bold text-gray-900 bg-transparent border-b-2 border-islamic-300 focus:border-islamic-600 outline-none"
                      />
                    ) : (
                      <h1 className="text-3xl font-bold text-gray-900">{formData.name}</h1>
                    )}
                    <p className="text-gray-600 mt-1">Student since {formData.joinedDate}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 mt-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">{formData.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">{formData.timezone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">Member for {new Date().getFullYear() - new Date(formData.joinedDate).getFullYear()} years</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {isEditing ? (
                      <>
                        <button
                          onClick={handleSave}
                          className="flex items-center gap-2 bg-islamic-600 text-white px-4 py-2 rounded-lg hover:bg-islamic-700 transition-colors"
                        >
                          <Save className="w-4 h-4" />
                          Save
                        </button>
                        <button
                          onClick={handleCancel}
                          className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <X className="w-4 h-4" />
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => setIsEditing(true)}
                          className="flex items-center gap-2 bg-islamic-600 text-white px-4 py-2 rounded-lg hover:bg-islamic-700 transition-colors"
                        >
                          <Edit className="w-4 h-4" />
                          Edit Profile
                        </button>
                        <button className="p-2 text-gray-600 hover:text-red-500 transition-colors">
                          <Heart className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-islamic-600 transition-colors">
                          <Share2 className="w-5 h-5" />
                        </button>
                      </>
                    )}
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
                { id: 'courses', label: 'My Courses' },
                { id: 'achievements', label: 'Achievements' },
                { id: 'activity', label: 'Activity' },
                { id: 'settings', label: 'Settings' }
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
                  {/* Learning Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {learningStats.map((stat, index) => (
                      <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4">
                          <div className="bg-islamic-100 p-3 rounded-lg">
                            <stat.icon className="w-6 h-6 text-islamic-600" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                            <div className="text-sm text-gray-600">{stat.label}</div>
                            <div className="text-xs text-gray-500">{stat.description}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* About Section */}
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
                    {isEditing ? (
                      <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="text-gray-700 leading-relaxed">{formData.bio}</p>
                    )}
                  </div>

                  {/* Learning Goals */}
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Goals</h2>
                    <div className="space-y-3">
                      {formData.learningGoals.map((goal, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-islamic-500 rounded-full"></div>
                          <span className="text-gray-700">{goal}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Contact Information */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-gray-500" />
                        {isEditing ? (
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="flex-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                          />
                        ) : (
                          <span className="text-gray-700">{formData.email}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-gray-500" />
                        {isEditing ? (
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="flex-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                          />
                        ) : (
                          <span className="text-gray-700">{formData.phone}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-gray-500" />
                        {isEditing ? (
                          <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            className="flex-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                          />
                        ) : (
                          <span className="text-gray-700">{formData.location}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {formData.languages.map((language, index) => (
                        <span key={index} className="bg-islamic-100 text-islamic-700 px-3 py-1 rounded-full text-sm font-medium">
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Recent Achievements */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Achievements</h3>
                    <div className="space-y-3">
                      {achievements.slice(0, 2).map((achievement) => (
                        <div key={achievement.id} className="flex items-start gap-3">
                          <div className={`p-2 rounded-lg ${achievement.color}`}>
                            <achievement.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 text-sm">{achievement.title}</h4>
                            <p className="text-xs text-gray-600">{achievement.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button 
                      onClick={() => setActiveTab('achievements')}
                      className="w-full mt-4 text-islamic-600 hover:text-islamic-700 font-medium text-sm"
                    >
                      View all achievements →
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'courses' && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">My Courses</h2>
                  <div className="flex items-center gap-4">
                    <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent">
                      <option>All Courses</option>
                      <option>In Progress</option>
                      <option>Completed</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {enrolledCourses.map((course) => (
                    <div key={course.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">with {course.tutor}</p>
                        
                        <div className="mb-4">
                          <div className="flex justify-between text-sm text-gray-600 mb-2">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-islamic-600 h-2 rounded-full" 
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="text-sm text-gray-600 mb-4">
                          {course.completedSessions} of {course.totalSessions} sessions completed
                        </div>
                        
                        <div className="text-sm text-gray-600 mb-4">
                          <strong>Next session:</strong> {course.nextSession}
                        </div>
                        
                        <div className="flex gap-2">
                          <button className="flex-1 bg-islamic-600 text-white py-2 px-4 rounded-lg hover:bg-islamic-700 transition-colors text-sm">
                            Continue Learning
                          </button>
                          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                            <MessageCircle className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-900">Achievements & Certificates</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {achievements.map((achievement) => (
                    <div key={achievement.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                      <div className={`w-12 h-12 rounded-lg ${achievement.color} flex items-center justify-center mb-4`}>
                        <achievement.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                      <p className="text-gray-600 mb-4">{achievement.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{achievement.date}</span>
                        <div className="flex gap-2">
                          <button className="p-2 text-gray-600 hover:text-islamic-600 transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-600 hover:text-islamic-600 transition-colors">
                            <Download className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-600 hover:text-islamic-600 transition-colors">
                            <Share2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'activity' && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-900">Recent Activity</h2>
                
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="p-6">
                    <div className="space-y-6">
                      {recentActivity.map((activity) => (
                        <div key={activity.id} className="flex items-start gap-4 pb-6 border-b border-gray-100 last:border-b-0">
                          <div className="bg-islamic-100 p-2 rounded-lg">
                            <activity.icon className="w-5 h-5 text-islamic-600" />
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-900">{activity.description}</p>
                            <p className="text-sm text-gray-500 mt-1">{activity.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-900">Account Settings</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Learning Preferences</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Session Type</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent">
                          <option>Video Call</option>
                          <option>Audio Call</option>
                          <option>In-Person</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent">
                          <option>Morning</option>
                          <option>Afternoon</option>
                          <option>Evening</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Learning Pace</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent">
                          <option>Slow</option>
                          <option>Moderate</option>
                          <option>Fast</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Settings</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">Email Notifications</h4>
                          <p className="text-sm text-gray-600">Receive updates via email</p>
                        </div>
                        <input type="checkbox" defaultChecked className="rounded border-gray-300 text-islamic-600 focus:ring-islamic-500" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">SMS Notifications</h4>
                          <p className="text-sm text-gray-600">Receive updates via SMS</p>
                        </div>
                        <input type="checkbox" className="rounded border-gray-300 text-islamic-600 focus:ring-islamic-500" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">Push Notifications</h4>
                          <p className="text-sm text-gray-600">Receive push notifications</p>
                        </div>
                        <input type="checkbox" defaultChecked className="rounded border-gray-300 text-islamic-600 focus:ring-islamic-500" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Actions</h3>
                  <div className="space-y-4">
                    <button className="w-full md:w-auto bg-islamic-600 text-white px-6 py-3 rounded-lg hover:bg-islamic-700 transition-colors">
                      Save Changes
                    </button>
                    <button className="w-full md:w-auto border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors ml-0 md:ml-4">
                      Reset Password
                    </button>
                    <button className="w-full md:w-auto border border-red-300 text-red-600 px-6 py-3 rounded-lg hover:bg-red-50 transition-colors ml-0 md:ml-4">
                      Delete Account
                    </button>
                  </div>
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