import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Calendar, Clock, Users, DollarSign, Star, Video, MessageCircle, BookOpen, Settings, Bell } from 'lucide-react'

const upcomingSessions = [
  {
    id: 1,
    tutorName: "Sheikh Ahmad Al-Mahmoud",
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
    subject: "Tajweed Basics",
    date: "Dec 15",
    duration: "60 minutes",
    rating: 5,
    status: "completed"
  },
  {
    id: 2,
    tutorName: "Dr. Fatima Al-Zahra", 
    subject: "Arabic Conversation",
    date: "Dec 12",
    duration: "45 minutes",
    rating: 5,
    status: "completed"
  }
]

const stats = [
  {
    icon: BookOpen,
    label: "Total Sessions",
    value: "24",
    change: "+3 this month"
  },
  {
    icon: Clock,
    label: "Hours Learned",
    value: "36",
    change: "+8 this month"
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

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
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
          <div className="flex space-x-8 mb-8 border-b">
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
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
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
                            <div className="bg-islamic-100 p-2 rounded-lg">
                              <Video className="w-5 h-5 text-islamic-600" />
                            </div>
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
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              session.status === 'confirmed' 
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
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
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">All Sessions</h2>
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
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        session.status === 'completed' 
                          ? 'bg-green-100 text-green-800'
                          : session.status === 'confirmed'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
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
          )}

          {/* Other tabs would be implemented similarly */}
        </div>
      </main>
      <Footer />
    </>
  )
}