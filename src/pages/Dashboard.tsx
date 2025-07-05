import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Calendar, Clock, Users, DollarSign, Star, Video, MessageCircle, BookOpen, Settings, Bell, CheckCircle, TrendingUp, Award, Eye, Edit, Trash2, Plus, Search, Filter } from 'lucide-react'

const upcomingSessions = [
  {
    id: 1,
    tutorName: "Sheikh Ahmad Al-Mahmoud",
    tutorImage: "https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg",
    subject: "Quran Recitation",
    date: "Today",
    time: "2:00 PM",
    duration: "60 minutes",
    type: "Video Call",
    status: "confirmed"
  },
  {
    id: 2,
    tutorName: "Dr. Fatima Al-Zahra",
    tutorImage: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg",
    subject: "Arabic Grammar",
    date: "Tomorrow",
    time: "10:00 AM", 
    duration: "60 minutes",
    type: "Video Call",
    status: "confirmed"
  },
  {
    id: 3,
    tutorName: "Sheikh Omar Ibn Khattab",
    tutorImage: "https://images.pexels.com/photos/8111358/pexels-photo-8111358.jpeg",
    subject: "Islamic History",
    date: "Dec 22",
    time: "3:00 PM",
    duration: "60 minutes",
    type: "Audio Call",
    status: "pending"
  }
]

const recentSessions = [
  {
    id: 1,
    tutorName: "Sheikh Ahmad Al-Mahmoud",
    tutorImage: "https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg",
    subject: "Tajweed Basics",
    date: "Dec 15",
    duration: "60 minutes",
    rating: 5,
    status: "completed"
  },
  {
    id: 2,
    tutorName: "Dr. Fatima Al-Zahra", 
    tutorImage: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg",
    subject: "Arabic Conversation",
    date: "Dec 12",
    duration: "45 minutes",
    rating: 5,
    status: "completed"
  }
]

const myTutors = [
  {
    id: 1,
    name: "Sheikh Ahmad Al-Mahmoud",
    title: "Quran & Tajweed Specialist",
    image: "https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg",
    rating: 4.9,
    totalSessions: 24,
    lastSession: "2024-12-18",
    subjects: ["Quran Recitation", "Tajweed"],
    hourlyRate: 45,
    nextAvailable: "Today 4:00 PM"
  },
  {
    id: 2,
    name: "Dr. Fatima Al-Zahra",
    title: "Arabic Language Expert",
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg",
    rating: 4.8,
    totalSessions: 18,
    lastSession: "2024-12-17",
    subjects: ["Arabic Grammar", "Literature"],
    hourlyRate: 40,
    nextAvailable: "Tomorrow 10:00 AM"
  },
  {
    id: 3,
    name: "Sheikh Omar Ibn Khattab",
    title: "Islamic Studies Scholar",
    image: "https://images.pexels.com/photos/8111358/pexels-photo-8111358.jpeg",
    rating: 4.9,
    totalSessions: 12,
    lastSession: "2024-12-15",
    subjects: ["Islamic History", "Fiqh"],
    hourlyRate: 50,
    nextAvailable: "Dec 22 3:00 PM"
  }
]

const learningProgress = [
  {
    subject: "Quran Recitation",
    tutor: "Sheikh Ahmad Al-Mahmoud",
    progress: 75,
    totalLessons: 20,
    completedLessons: 15,
    nextMilestone: "Complete Surah Al-Baqarah",
    estimatedCompletion: "2 weeks"
  },
  {
    subject: "Arabic Grammar",
    tutor: "Dr. Fatima Al-Zahra",
    progress: 60,
    totalLessons: 16,
    completedLessons: 10,
    nextMilestone: "Master Verb Conjugations",
    estimatedCompletion: "3 weeks"
  },
  {
    subject: "Islamic History",
    tutor: "Sheikh Omar Ibn Khattab",
    progress: 90,
    totalLessons: 12,
    completedLessons: 11,
    nextMilestone: "Course Completion",
    estimatedCompletion: "1 week"
  }
]

const stats = [
  {
    icon: BookOpen,
    label: "Total Sessions",
    value: "54",
    change: "+6 this month"
  },
  {
    icon: Clock,
    label: "Hours Learned",
    value: "78",
    change: "+12 this month"
  },
  {
    icon: Users,
    label: "Tutors Worked With",
    value: "5",
    change: "+1 this month"
  },
  {
    icon: Star,
    label: "Average Rating Given",
    value: "4.9",
    change: "Excellent feedback"
  }
]

const achievements = [
  {
    id: 1,
    title: "First Session Complete",
    description: "Completed your first learning session",
    date: "March 2024",
    icon: BookOpen,
    earned: true
  },
  {
    id: 2,
    title: "Consistent Learner",
    description: "Attended 10 consecutive sessions",
    date: "June 2024",
    icon: Calendar,
    earned: true
  },
  {
    id: 3,
    title: "Quran Recitation Progress",
    description: "Completed 50% of Quran recitation course",
    date: "November 2024",
    icon: Award,
    earned: true
  },
  {
    id: 4,
    title: "Perfect Attendance",
    description: "Attend 20 sessions without missing any",
    date: "In Progress",
    icon: Star,
    earned: false
  }
]

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const [searchTerm, setSearchTerm] = useState('')

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Student Dashboard</h1>
                <p className="text-gray-600 mt-1">Welcome back! Here's your learning progress.</p>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 text-gray-600 hover:text-islamic-600 transition-colors">
                  <Bell className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-islamic-600 transition-colors">
                  <Settings className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Navigation Tabs */}
          <div className="flex space-x-8 mb-8 border-b overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'sessions', label: 'My Sessions' },
              { id: 'tutors', label: 'My Tutors' },
              { id: 'progress', label: 'Progress' },
              { id: 'settings', label: 'Settings' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-islamic-600 text-islamic-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-islamic-100 p-3 rounded-lg">
                        <stat.icon className="w-6 h-6 text-islamic-600" />
                      </div>
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
                    <div className="text-xs text-green-600">{stat.change}</div>
                  </div>
                ))}
              </div>

              {/* Upcoming Sessions */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-bold text-gray-900">Upcoming Sessions</h2>
                </div>
                <div className="p-6">
                  {upcomingSessions.length > 0 ? (
                    <div className="space-y-4">
                      {upcomingSessions.map((session) => (
                        <div key={session.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-4">
                            <img
                              src={session.tutorImage}
                              alt={session.tutorName}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                              <h3 className="font-semibold text-gray-900">{session.subject}</h3>
                              <p className="text-sm text-gray-600">with {session.tutorName}</p>
                              <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                                <span>{session.date} at {session.time}</span>
                                <span>{session.duration}</span>
                                <span className="capitalize">{session.type}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(session.status)}`}>
                              {session.status}
                            </span>
                            <button className="bg-islamic-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-islamic-700 transition-colors">
                              Join
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">No upcoming sessions</p>
                      <button className="mt-4 bg-islamic-600 text-white px-6 py-2 rounded-lg hover:bg-islamic-700 transition-colors">
                        Book a Session
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Recent Sessions */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-bold text-gray-900">Recent Sessions</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {recentSessions.map((session) => (
                      <div key={session.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="bg-green-100 p-2 rounded-lg">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          </div>
                          <img
                            src={session.tutorImage}
                            alt={session.tutorName}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="font-semibold text-gray-900">{session.subject}</h3>
                            <p className="text-sm text-gray-600">with {session.tutorName}</p>
                            <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                              <span>{session.date}</span>
                              <span>{session.duration}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            {[...Array(session.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <button className="text-islamic-600 hover:text-islamic-700 text-sm font-medium">
                            Book Again
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'sessions' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">All Sessions</h2>
                <div className="flex items-center gap-4">
                  <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent">
                    <option>All Sessions</option>
                    <option>Upcoming</option>
                    <option>Completed</option>
                    <option>Cancelled</option>
                  </select>
                  <button className="bg-islamic-600 text-white px-4 py-2 rounded-lg hover:bg-islamic-700 transition-colors">
                    Book New Session
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="p-6">
                  <div className="space-y-4">
                    {[...upcomingSessions, ...recentSessions].map((session, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className={`p-2 rounded-lg ${
                            session.status === 'completed' ? 'bg-green-100' : 'bg-islamic-100'
                          }`}>
                            {session.status === 'completed' ? (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            ) : (
                              <Video className="w-5 h-5 text-islamic-600" />
                            )}
                          </div>
                          <img
                            src={session.tutorImage}
                            alt={session.tutorName}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="font-semibold text-gray-900">{session.subject}</h3>
                            <p className="text-sm text-gray-600">with {session.tutorName}</p>
                            <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                              <span>{session.date}</span>
                              <span>{session.duration}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(session.status)}`}>
                            {session.status}
                          </span>
                          {session.status !== 'completed' && (
                            <button className="bg-islamic-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-islamic-700 transition-colors">
                              {session.status === 'confirmed' ? 'Join' : 'Reschedule'}
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tutors' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">My Tutors</h2>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search tutors..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                    />
                  </div>
                  <button className="bg-islamic-600 text-white px-4 py-2 rounded-lg hover:bg-islamic-700 transition-colors">
                    Find New Tutor
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {myTutors.map((tutor) => (
                  <div key={tutor.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={tutor.image}
                        alt={tutor.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{tutor.name}</h3>
                        <p className="text-sm text-gray-600">{tutor.title}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs text-gray-600">{tutor.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Total Sessions:</span>
                        <span className="font-medium">{tutor.totalSessions}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Last Session:</span>
                        <span className="font-medium">{new Date(tutor.lastSession).toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Hourly Rate:</span>
                        <span className="font-medium text-islamic-600">${tutor.hourlyRate}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Next Available:</span>
                        <span className="font-medium text-green-600">{tutor.nextAvailable}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-xs text-gray-600 mb-2">Subjects:</p>
                      <div className="flex flex-wrap gap-1">
                        {tutor.subjects.map((subject, index) => (
                          <span key={index} className="bg-islamic-100 text-islamic-700 px-2 py-1 rounded text-xs">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="flex-1 bg-islamic-600 text-white py-2 px-3 rounded-lg hover:bg-islamic-700 transition-colors text-sm">
                        Book Session
                      </button>
                      <button className="bg-gray-100 text-gray-700 p-2 rounded-lg hover:bg-gray-200 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'progress' && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900">Learning Progress</h2>
              
              {/* Progress Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-islamic-600 mb-2">75%</div>
                    <div className="text-sm text-gray-600">Overall Progress</div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">36</div>
                    <div className="text-sm text-gray-600">Lessons Completed</div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                    <div className="text-sm text-gray-600">Active Courses</div>
                  </div>
                </div>
              </div>

              {/* Detailed Progress */}
              <div className="space-y-6">
                {learningProgress.map((course, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{course.subject}</h3>
                        <p className="text-sm text-gray-600">with {course.tutor}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-islamic-600">{course.progress}%</div>
                        <div className="text-sm text-gray-600">{course.completedLessons}/{course.totalLessons} lessons</div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-islamic-600 h-3 rounded-full transition-all duration-300" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Next Milestone:</span>
                        <span className="ml-2 font-medium">{course.nextMilestone}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Estimated Completion:</span>
                        <span className="ml-2 font-medium text-green-600">{course.estimatedCompletion}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Achievements */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Achievements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.map((achievement) => (
                    <div key={achievement.id} className={`p-4 rounded-lg border-2 ${
                      achievement.earned 
                        ? 'border-green-200 bg-green-50' 
                        : 'border-gray-200 bg-gray-50'
                    }`}>
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg ${
                          achievement.earned 
                            ? 'bg-green-100 text-green-600' 
                            : 'bg-gray-100 text-gray-400'
                        }`}>
                          <achievement.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                          <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                          <p className="text-xs text-gray-500">{achievement.date}</p>
                        </div>
                        {achievement.earned && (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        )}
                      </div>
                    </div>
                  ))}
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
      </main>
      <Footer />
    </>
  )
}