import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { 
  Calendar, 
  Clock, 
  Users, 
  DollarSign, 
  Star, 
  Video, 
  MessageCircle, 
  BookOpen, 
  Settings, 
  Bell, 
  TrendingUp, 
  Award, 
  Eye, 
  Download, 
  Filter,
  Edit,
  Trash2,
  Plus,
  Search,
  Phone,
  Mail,
  MapPin,
  Globe,
  Camera,
  Save,
  X
} from 'lucide-react'

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

const allSessions = [
  ...upcomingSessions,
  {
    id: 4,
    studentName: "Yusuf Ali",
    studentImage: "https://images.pexels.com/photos/8111359/pexels-photo-8111359.jpeg",
    subject: "Advanced Tajweed",
    date: "Dec 15",
    time: "4:00 PM",
    duration: "60 minutes",
    type: "Video Call",
    status: "completed",
    sessionType: "Standard Session",
    price: 45
  },
  {
    id: 5,
    studentName: "Khadija Mohammed",
    studentImage: "https://images.pexels.com/photos/8111360/pexels-photo-8111360.jpeg",
    subject: "Quran Recitation",
    date: "Dec 12",
    time: "2:00 PM",
    duration: "45 minutes",
    type: "Video Call",
    status: "completed",
    sessionType: "Standard Session",
    price: 45
  }
]

const students = [
  {
    id: 1,
    name: "Amina Hassan",
    email: "amina.hassan@email.com",
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg",
    joinDate: "2024-01-15",
    totalSessions: 24,
    completedSessions: 22,
    averageRating: 4.9,
    lastSession: "2024-12-18",
    status: "active",
    location: "Toronto, Canada",
    subjects: ["Quran Recitation", "Tajweed"]
  },
  {
    id: 2,
    name: "Omar Abdullah",
    email: "omar.abdullah@email.com",
    image: "https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg",
    joinDate: "2024-02-20",
    totalSessions: 18,
    completedSessions: 16,
    averageRating: 4.8,
    lastSession: "2024-12-17",
    status: "active",
    location: "London, UK",
    subjects: ["Tajweed Basics", "Quran Memorization"]
  },
  {
    id: 3,
    name: "Fatima Al-Zahra",
    email: "fatima.alzahra@email.com",
    image: "https://images.pexels.com/photos/8111358/pexels-photo-8111358.jpeg",
    joinDate: "2024-03-10",
    totalSessions: 12,
    completedSessions: 10,
    averageRating: 4.7,
    lastSession: "2024-12-15",
    status: "active",
    location: "Sydney, Australia",
    subjects: ["Quran Memorization"]
  },
  {
    id: 4,
    name: "Yusuf Ali",
    email: "yusuf.ali@email.com",
    image: "https://images.pexels.com/photos/8111359/pexels-photo-8111359.jpeg",
    joinDate: "2024-04-05",
    totalSessions: 30,
    completedSessions: 28,
    averageRating: 5.0,
    lastSession: "2024-12-16",
    status: "active",
    location: "Dubai, UAE",
    subjects: ["Advanced Tajweed", "Qira'at"]
  }
]

const tutorProfile = {
  name: "Sheikh Ahmad Al-Mahmoud",
  title: "Quran & Tajweed Specialist",
  email: "ahmad@baytul-ilm.com",
  phone: "+20 123 456 7890",
  location: "Cairo, Egypt",
  timezone: "GMT+2",
  image: "https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg",
  bio: "Certified Qari with Ijazah in 7 different Qira'at. I have been teaching Quran recitation and Tajweed for over 15 years.",
  specialties: ["Quran Recitation", "Tajweed", "Memorization", "Qira'at"],
  languages: ["Arabic", "English", "Urdu"],
  experience: "15+ years",
  hourlyRate: 45,
  education: [
    "Ijazah in 7 Qira'at from Al-Azhar University",
    "Bachelor's in Islamic Studies - Al-Azhar University",
    "Master's in Quranic Sciences - Al-Azhar University"
  ],
  certifications: [
    { name: "Ijazah in Hafs", issuer: "Al-Azhar University", year: "2008" },
    { name: "Ijazah in Warsh", issuer: "Al-Azhar University", year: "2010" },
    { name: "Teaching Certificate", issuer: "International Quran Academy", year: "2015" }
  ]
}

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
  const [isEditingProfile, setIsEditingProfile] = useState(false)
  const [profileData, setProfileData] = useState(tutorProfile)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')

  const handleProfileSave = () => {
    setIsEditingProfile(false)
    // Save logic would go here
  }

  const handleProfileCancel = () => {
    setProfileData(tutorProfile)
    setIsEditingProfile(false)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
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

  const filteredSessions = allSessions.filter(session => {
    const matchesSearch = session.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         session.subject.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = selectedFilter === 'all' || session.status === selectedFilter
    return matchesSearch && matchesFilter
  })

  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
          <div className="flex space-x-8 mb-8 border-b overflow-x-auto">
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
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(session.status)}`}>
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
            </div>
          )}

          {activeTab === 'sessions' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">My Sessions</h2>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search sessions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                    />
                  </div>
                  <select
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                  >
                    <option value="all">All Sessions</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Earnings</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredSessions.map((session) => (
                        <tr key={session.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <img
                                src={session.studentImage}
                                alt={session.studentName}
                                className="w-10 h-10 rounded-full object-cover"
                              />
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{session.studentName}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {session.subject}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{session.date}</div>
                            <div className="text-sm text-gray-500">{session.time}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {session.duration}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(session.status)}`}>
                              {session.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">
                            ${session.price}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex items-center gap-2">
                              <button className="text-islamic-600 hover:text-islamic-700">
                                <Eye className="w-4 h-4" />
                              </button>
                              <button className="text-blue-600 hover:text-blue-700">
                                <Edit className="w-4 h-4" />
                              </button>
                              <button className="text-red-600 hover:text-red-700">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'students' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">My Students</h2>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search students..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                    />
                  </div>
                  <button className="bg-islamic-600 text-white px-4 py-2 rounded-lg hover:bg-islamic-700 transition-colors flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Add Student
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredStudents.map((student) => (
                  <div key={student.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={student.image}
                        alt={student.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{student.name}</h3>
                        <p className="text-sm text-gray-600">{student.email}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <MapPin className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{student.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Total Sessions:</span>
                        <span className="font-medium">{student.totalSessions}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Completed:</span>
                        <span className="font-medium">{student.completedSessions}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Average Rating:</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{student.averageRating}</span>
                        </div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Last Session:</span>
                        <span className="font-medium">{new Date(student.lastSession).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-xs text-gray-600 mb-2">Subjects:</p>
                      <div className="flex flex-wrap gap-1">
                        {student.subjects.map((subject, index) => (
                          <span key={index} className="bg-islamic-100 text-islamic-700 px-2 py-1 rounded text-xs">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="flex-1 bg-islamic-600 text-white py-2 px-3 rounded-lg hover:bg-islamic-700 transition-colors text-sm">
                        View Profile
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

          {activeTab === 'earnings' && (
            <div className="space-y-8">
              {/* Earnings Overview */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
                
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Available</h3>
                    <Award className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">$2,160</div>
                  <div className="text-sm text-blue-600">Ready for payout</div>
                </div>
              </div>

              {/* Earnings Chart */}
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
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Profile Settings</h2>
                {!isEditingProfile ? (
                  <button
                    onClick={() => setIsEditingProfile(true)}
                    className="bg-islamic-600 text-white px-6 py-2 rounded-lg hover:bg-islamic-700 transition-colors flex items-center gap-2"
                  >
                    <Edit className="w-4 h-4" />
                    Edit Profile
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={handleProfileSave}
                      className="bg-islamic-600 text-white px-6 py-2 rounded-lg hover:bg-islamic-700 transition-colors flex items-center gap-2"
                    >
                      <Save className="w-4 h-4" />
                      Save Changes
                    </button>
                    <button
                      onClick={handleProfileCancel}
                      className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
                    >
                      <X className="w-4 h-4" />
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-6 mb-8">
                      <div className="relative">
                        <img
                          src={profileData.image}
                          alt={profileData.name}
                          className="w-24 h-24 rounded-full object-cover"
                        />
                        {isEditingProfile && (
                          <button className="absolute bottom-0 right-0 bg-islamic-600 text-white p-2 rounded-full hover:bg-islamic-700 transition-colors">
                            <Camera className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                      <div className="flex-1">
                        {isEditingProfile ? (
                          <div className="space-y-4">
                            <input
                              type="text"
                              value={profileData.name}
                              onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                              className="w-full text-2xl font-bold bg-transparent border-b-2 border-islamic-300 focus:border-islamic-600 outline-none"
                            />
                            <input
                              type="text"
                              value={profileData.title}
                              onChange={(e) => setProfileData({...profileData, title: e.target.value})}
                              className="w-full text-lg text-islamic-600 bg-transparent border-b border-gray-300 focus:border-islamic-600 outline-none"
                            />
                          </div>
                        ) : (
                          <>
                            <h1 className="text-2xl font-bold text-gray-900">{profileData.name}</h1>
                            <p className="text-lg text-islamic-600">{profileData.title}</p>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        {isEditingProfile ? (
                          <input
                            type="email"
                            value={profileData.email}
                            onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                          />
                        ) : (
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-gray-500" />
                            <span>{profileData.email}</span>
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                        {isEditingProfile ? (
                          <input
                            type="tel"
                            value={profileData.phone}
                            onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                          />
                        ) : (
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-gray-500" />
                            <span>{profileData.phone}</span>
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                        {isEditingProfile ? (
                          <input
                            type="text"
                            value={profileData.location}
                            onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                          />
                        ) : (
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-gray-500" />
                            <span>{profileData.location}</span>
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                        {isEditingProfile ? (
                          <select
                            value={profileData.timezone}
                            onChange={(e) => setProfileData({...profileData, timezone: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                          >
                            <option value="GMT+2">GMT+2</option>
                            <option value="GMT+1">GMT+1</option>
                            <option value="GMT">GMT</option>
                            <option value="GMT-5">GMT-5</option>
                          </select>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Globe className="w-4 h-4 text-gray-500" />
                            <span>{profileData.timezone}</span>
                          </div>
                        )}
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Hourly Rate ($)</label>
                        {isEditingProfile ? (
                          <input
                            type="number"
                            value={profileData.hourlyRate}
                            onChange={(e) => setProfileData({...profileData, hourlyRate: parseInt(e.target.value)})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                          />
                        ) : (
                          <div className="text-2xl font-bold text-islamic-600">${profileData.hourlyRate}/hour</div>
                        )}
                      </div>
                    </div>

                    <div className="mt-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                      {isEditingProfile ? (
                        <textarea
                          value={profileData.bio}
                          onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                        />
                      ) : (
                        <p className="text-gray-700">{profileData.bio}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Specialties</h3>
                    <div className="flex flex-wrap gap-2">
                      {profileData.specialties.map((specialty, index) => (
                        <span key={index} className="bg-islamic-100 text-islamic-700 px-3 py-1 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {profileData.languages.map((language, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Education</h3>
                    <ul className="space-y-2">
                      {profileData.education.map((item, index) => (
                        <li key={index} className="text-sm text-gray-700">• {item}</li>
                      ))}
                    </ul>
                  </div>
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