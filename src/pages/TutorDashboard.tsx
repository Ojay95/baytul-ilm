import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Calendar, Clock, Users, DollarSign, Star, Video, MessageCircle, BookOpen, Settings, Bell, TrendingUp, Award, Eye, Download, Filter } from 'lucide-react'

const upcomingSessions = [
  {
    id: 1,
    studentName: "Amina Hassan",
    studentImage: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg",
    subject: "Quran Recitation",
    date: "Today",
    time: "2:00 PM",
    duration: "60 minutes",
    type: "Video Call",
    status: "confirmed",
    sessionType: "Standard Session",
    price: 45
  },
  {
    id: 2,
    studentName: "Omar Abdullah",
    studentImage: "https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg",
    subject: "Tajweed Basics",
    date: "Tomorrow",
    time: "10:00 AM", 
    duration: "60 minutes",
    type: "Video Call",
    status: "confirmed",
    sessionType: "Standard Session",
    price: 45
  },
  {
    id: 3,
    studentName: "Fatima Al-Zahra",
    studentImage: "https://images.pexels.com/photos/8111358/pexels-photo-8111358.jpeg",
    subject: "Quran Memorization",
    date: "Dec 22",
    time: "3:00 PM",
    duration: "30 minutes",
    type: "Video Call",
    status: "pending",
    sessionType: "Trial Session",
    price: 20
  }
]

const recentSessions = [
  {
    id: 1,
    studentName: "Yusuf Ali",
    subject: "Advanced Tajweed",
    date: "Dec 15",
    duration: "60 minutes",
    earnings: 45,
    rating: 5,
    status: "completed"
  },
  {
    id: 2,
    studentName: "Khadija Mohammed", 
    subject: "Quran Recitation",
    date: "Dec 12",
    duration: "45 minutes",
    earnings: 45,
    rating: 5,
    status: "completed"
  }
]

const stats = [
  {
    icon: DollarSign,
    label: "This Month's Earnings",
    value: "$2,340",
    change: "+18% from last month",
    changeType: "positive"
  },
  {
    icon: Users,
    label: "Active Students",
    value: "47",
    change: "+5 new this month",
    changeType: "positive"
  },
  {
    icon: Clock,
    label: "Hours Taught",
    value: "156",
    change: "+23 hours this month",
    changeType: "positive"
  },
  {
    icon: Star,
    label: "Average Rating",
    value: "4.9",
    change: "Excellent feedback",
    changeType: "neutral"
  }
]

const notifications = [
  {
    id: 1,
    type: "booking",
    message: "New session booked by Amina Hassan for tomorrow at 2:00 PM",
    time: "5 minutes ago",
    unread: true
  },
  {
    id: 2,
    type: "review",
    message: "Omar Abdullah left a 5-star review for your session",
    time: "2 hours ago",
    unread: true
  },
  {
    id: 3,
    type: "payment",
    message: "Payment of $45 received for session with Fatima",
    time: "1 day ago",
    unread: false
  }
]

export default function TutorDashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const [showNotifications, setShowNotifications] = useState(false)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Tutor Dashboard</h1>
                <p className="text-gray-600 mt-1">Manage your teaching schedule and track your progress</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <button 
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="p-2 text-gray-600 hover:text-islamic-600 transition-colors relative"
                  >
                    <Bell className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                  </button>
                  
                  {showNotifications && (
                    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                      <div className="p-4 border-b border-gray-200">
                        <h3 className="font-semibold text-gray-900">Notifications</h3>
                      </div>
                      <div className="max-h-64 overflow-y-auto">
                        {notifications.map((notification) => (
                          <div key={notification.id} className={`p-4 border-b border-gray-100 hover:bg-gray-50 ${notification.unread ? 'bg-blue-50' : ''}`}>
                            <p className="text-sm text-gray-900">{notification.message}</p>
                            <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                          </div>
                        ))}
                      </div>
                      <div className="p-4">
                        <button className="text-sm text-islamic-600 hover:text-islamic-700">View all notifications</button>
                      </div>
                    </div>
                  )}
                </div>
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
              { id: 'students', label: 'Students' },
              { id: 'earnings', label: 'Earnings' },
              { id: 'profile', label: 'Profile Settings' }
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
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
                    <div className={`text-xs ${
                      stat.changeType === 'positive' ? 'text-green-600' : 
                      stat.changeType === 'negative' ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      {stat.change}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-islamic-300 hover:bg-islamic-50 transition-colors">
                    <Calendar className="w-6 h-6 text-islamic-600" />
                    <div className="text-left">
                      <div className="font-medium text-gray-900">Set Availability</div>
                      <div className="text-sm text-gray-600">Update your schedule</div>
                    </div>
                  </button>
                  <button className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-islamic-300 hover:bg-islamic-50 transition-colors">
                    <DollarSign className="w-6 h-6 text-islamic-600" />
                    <div className="text-left">
                      <div className="font-medium text-gray-900">Update Rates</div>
                      <div className="text-sm text-gray-600">Modify your pricing</div>
                    </div>
                  </button>
                  <button className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-islamic-300 hover:bg-islamic-50 transition-colors">
                    <BookOpen className="w-6 h-6 text-islamic-600" />
                    <div className="text-left">
                      <div className="font-medium text-gray-900">Create Course</div>
                      <div className="text-sm text-gray-600">Add new course content</div>
                    </div>
                  </button>
                </div>
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
                              src={session.studentImage}
                              alt={session.studentName}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                              <h3 className="font-semibold text-gray-900">{session.subject}</h3>
                              <p className="text-sm text-gray-600">with {session.studentName}</p>
                              <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                                <span>{session.date} at {session.time}</span>
                                <span>{session.duration}</span>
                                <span className="capitalize">{session.type}</span>
                                <span className="font-medium text-islamic-600">${session.price}</span>
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
                              Start Session
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">No upcoming sessions</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-bold text-gray-900">Recent Sessions</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {recentSessions.map((session) => (
                      <div key={session.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <h3 className="font-semibold text-gray-900">{session.subject}</h3>
                          <p className="text-sm text-gray-600">with {session.studentName}</p>
                          <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                            <span>{session.date}</span>
                            <span>{session.duration}</span>
                            <span className="font-medium text-green-600">+${session.earnings}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            {[...Array(session.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                            Completed
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'earnings' && (
            <div className="space-y-8">
              {/* Earnings Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Total Earnings</h3>
                    <DollarSign className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">$12,450</div>
                  <div className="text-sm text-green-600">+15% from last month</div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">This Month</h3>
                    <TrendingUp className="w-6 h-6 text-islamic-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">$2,340</div>
                  <div className="text-sm text-islamic-600">52 sessions completed</div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Pending</h3>
                    <Clock className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">$180</div>
                  <div className="text-sm text-yellow-600">4 sessions pending payment</div>
                </div>
              </div>

              {/* Earnings Chart Placeholder */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Earnings Overview</h2>
                  <div className="flex items-center gap-2">
                    <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                      <option>Last 6 months</option>
                      <option>Last 3 months</option>
                      <option>This year</option>
                    </select>
                    <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Earnings chart would be displayed here</p>
                </div>
              </div>

              {/* Payment History */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-900">Payment History</h2>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Filter className="w-4 h-4" />
                      Filter
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Session</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Dec 15, 2024</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Amina Hassan</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Quran Recitation</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">$45.00</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Paid</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Dec 12, 2024</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Omar Abdullah</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Tajweed Basics</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">$45.00</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Paid</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Dec 10, 2024</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Fatima Al-Zahra</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Trial Session</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-yellow-600">$20.00</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Pending</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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