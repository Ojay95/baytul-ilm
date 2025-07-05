import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { 
  Users, 
  BookOpen, 
  DollarSign, 
  TrendingUp, 
  UserCheck, 
  UserX, 
  AlertTriangle,
  Eye,
  Edit,
  Trash2,
  Plus,
  Filter,
  Download,
  Search,
  MoreVertical,
  Calendar,
  Star,
  Award,
  Shield,
  Settings,
  Bell,
  Activity,
  BarChart3,
  PieChart,
  Clock,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'

const stats = [
  {
    icon: Users,
    label: "Total Users",
    value: "12,847",
    change: "+12% from last month",
    changeType: "positive"
  },
  {
    icon: BookOpen,
    label: "Active Sessions",
    value: "3,456",
    change: "+8% from last month",
    changeType: "positive"
  },
  {
    icon: DollarSign,
    label: "Monthly Revenue",
    value: "$89,432",
    change: "+15% from last month",
    changeType: "positive"
  },
  {
    icon: TrendingUp,
    label: "Platform Growth",
    value: "23.5%",
    change: "+3.2% from last month",
    changeType: "positive"
  }
]

const recentUsers = [
  {
    id: 1,
    name: "Ahmed Hassan",
    email: "ahmed.hassan@email.com",
    role: "student",
    status: "active",
    joinDate: "2024-12-15",
    lastActive: "2 hours ago",
    avatar: "https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg"
  },
  {
    id: 2,
    name: "Dr. Fatima Al-Zahra",
    email: "fatima@baytul-ilm.com",
    role: "tutor",
    status: "pending",
    joinDate: "2024-12-14",
    lastActive: "1 day ago",
    avatar: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg"
  },
  {
    id: 3,
    name: "Omar Abdullah",
    email: "omar.abdullah@email.com",
    role: "student",
    status: "active",
    joinDate: "2024-12-13",
    lastActive: "5 minutes ago",
    avatar: "https://images.pexels.com/photos/8111358/pexels-photo-8111358.jpeg"
  },
  {
    id: 4,
    name: "Aisha Rahman",
    email: "aisha.rahman@email.com",
    role: "tutor",
    status: "suspended",
    joinDate: "2024-12-12",
    lastActive: "3 days ago",
    avatar: "https://images.pexels.com/photos/8111360/pexels-photo-8111360.jpeg"
  }
]

const recentSessions = [
  {
    id: 1,
    student: "Ahmed Hassan",
    tutor: "Sheikh Ahmad Al-Mahmoud",
    subject: "Quran Recitation",
    date: "2024-12-20",
    time: "2:00 PM",
    duration: "60 min",
    status: "completed",
    earnings: 45
  },
  {
    id: 2,
    student: "Fatima Al-Zahra",
    tutor: "Dr. Omar Ibn Khattab",
    subject: "Arabic Grammar",
    date: "2024-12-20",
    time: "10:00 AM",
    duration: "45 min",
    status: "ongoing",
    earnings: 40
  },
  {
    id: 3,
    student: "Omar Abdullah",
    tutor: "Ustadha Aisha Rahman",
    subject: "Islamic History",
    date: "2024-12-19",
    time: "4:00 PM",
    duration: "60 min",
    status: "completed",
    earnings: 35
  }
]

const pendingApprovals = [
  {
    id: 1,
    type: "tutor_application",
    name: "Dr. Yusuf Al-Andalusi",
    email: "yusuf@email.com",
    specialties: ["Islamic Philosophy", "Aqeedah"],
    experience: "18+ years",
    submittedDate: "2024-12-18",
    status: "pending"
  },
  {
    id: 2,
    type: "course_submission",
    name: "Advanced Tajweed Course",
    tutor: "Sheikh Ahmad Al-Mahmoud",
    category: "Quran Studies",
    submittedDate: "2024-12-17",
    status: "pending"
  },
  {
    id: 3,
    type: "payout_request",
    name: "Monthly Payout Request",
    tutor: "Dr. Fatima Al-Zahra",
    amount: "$2,340",
    submittedDate: "2024-12-16",
    status: "pending"
  }
]

const analyticsData = {
  userGrowth: [
    { month: 'Jan', users: 8500, growth: 12 },
    { month: 'Feb', users: 9200, growth: 8 },
    { month: 'Mar', users: 9800, growth: 6 },
    { month: 'Apr', users: 10500, growth: 7 },
    { month: 'May', users: 11200, growth: 6 },
    { month: 'Jun', users: 11900, growth: 6 },
    { month: 'Jul', users: 12600, growth: 5 },
    { month: 'Aug', users: 13400, growth: 6 },
    { month: 'Sep', users: 14100, growth: 5 },
    { month: 'Oct', users: 14800, growth: 4 },
    { month: 'Nov', users: 15600, growth: 5 },
    { month: 'Dec', users: 16400, growth: 5 }
  ],
  revenue: [
    { month: 'Jan', revenue: 65000 },
    { month: 'Feb', revenue: 72000 },
    { month: 'Mar', revenue: 68000 },
    { month: 'Apr', revenue: 78000 },
    { month: 'May', revenue: 82000 },
    { month: 'Jun', revenue: 89000 },
    { month: 'Jul', revenue: 85000 },
    { month: 'Aug', revenue: 94000 },
    { month: 'Sep', revenue: 91000 },
    { month: 'Oct', revenue: 98000 },
    { month: 'Nov', revenue: 105000 },
    { month: 'Dec', revenue: 89432 }
  ],
  sessionAnalytics: {
    totalSessions: 45678,
    completedSessions: 42341,
    cancelledSessions: 2156,
    averageDuration: 52,
    peakHours: ['2:00 PM', '3:00 PM', '7:00 PM'],
    popularSubjects: [
      { name: 'Quran Recitation', sessions: 15234, percentage: 33 },
      { name: 'Arabic Language', sessions: 12456, percentage: 27 },
      { name: 'Islamic Studies', sessions: 8901, percentage: 19 },
      { name: 'Tajweed', sessions: 6789, percentage: 15 },
      { name: 'Hadith Studies', sessions: 2298, percentage: 6 }
    ]
  },
  demographics: {
    byCountry: [
      { country: 'United States', users: 3456, percentage: 27 },
      { country: 'United Kingdom', users: 2134, percentage: 17 },
      { country: 'Canada', users: 1876, percentage: 15 },
      { country: 'Australia', users: 1234, percentage: 10 },
      { country: 'Germany', users: 987, percentage: 8 },
      { country: 'Others', users: 2890, percentage: 23 }
    ],
    byAge: [
      { range: '18-25', users: 3456, percentage: 27 },
      { range: '26-35', users: 4123, percentage: 32 },
      { range: '36-45', users: 2987, percentage: 23 },
      { range: '46-55', users: 1567, percentage: 12 },
      { range: '55+', users: 714, percentage: 6 }
    ]
  }
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'sessions', label: 'Sessions', icon: BookOpen },
    { id: 'approvals', label: 'Approvals', icon: UserCheck },
    { id: 'analytics', label: 'Analytics', icon: PieChart },
    { id: 'settings', label: 'Settings', icon: Settings }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'pending':
      case 'ongoing':
        return 'bg-yellow-100 text-yellow-800'
      case 'suspended':
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin':
        return 'bg-purple-100 text-purple-800'
      case 'tutor':
        return 'bg-islamic-100 text-islamic-800'
      case 'student':
        return 'bg-blue-100 text-blue-800'
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
                <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-gray-600 mt-1">Manage your Islamic learning platform</p>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 text-gray-600 hover:text-islamic-600 transition-colors relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                </button>
                <button className="bg-islamic-600 text-white px-6 py-2 rounded-lg hover:bg-islamic-700 transition-colors flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Quick Action
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Navigation Tabs */}
          <div className="flex space-x-8 mb-8 border-b overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'border-islamic-600 text-islamic-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Overview Tab */}
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

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-islamic-300 hover:bg-islamic-50 transition-colors">
                    <UserCheck className="w-6 h-6 text-islamic-600" />
                    <div className="text-left">
                      <div className="font-medium text-gray-900">Approve Tutors</div>
                      <div className="text-sm text-gray-600">Review pending applications</div>
                    </div>
                  </button>
                  <button className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-islamic-300 hover:bg-islamic-50 transition-colors">
                    <BarChart3 className="w-6 h-6 text-islamic-600" />
                    <div className="text-left">
                      <div className="font-medium text-gray-900">View Analytics</div>
                      <div className="text-sm text-gray-600">Platform performance</div>
                    </div>
                  </button>
                  <button className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-islamic-300 hover:bg-islamic-50 transition-colors">
                    <Settings className="w-6 h-6 text-islamic-600" />
                    <div className="text-left">
                      <div className="font-medium text-gray-900">Platform Settings</div>
                      <div className="text-sm text-gray-600">Configure system</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Users */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-bold text-gray-900">Recent Users</h2>
                      <button 
                        onClick={() => setActiveTab('users')}
                        className="text-islamic-600 hover:text-islamic-700 font-medium text-sm"
                      >
                        View all →
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {recentUsers.slice(0, 4).map((user) => (
                        <div key={user.id} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <img
                              src={user.avatar}
                              alt={user.name}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                              <h4 className="font-medium text-gray-900">{user.name}</h4>
                              <p className="text-sm text-gray-600">{user.email}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
                              {user.role}
                            </span>
                            <p className="text-xs text-gray-500 mt-1">{user.lastActive}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pending Approvals */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-bold text-gray-900">Pending Approvals</h2>
                      <button 
                        onClick={() => setActiveTab('approvals')}
                        className="text-islamic-600 hover:text-islamic-700 font-medium text-sm"
                      >
                        View all →
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {pendingApprovals.slice(0, 3).map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                          <div>
                            <h4 className="font-medium text-gray-900">{item.name}</h4>
                            <p className="text-sm text-gray-600">{item.type.replace('_', ' ')}</p>
                            <p className="text-xs text-gray-500">{item.submittedDate}</p>
                          </div>
                          <div className="flex gap-2">
                            <button className="bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700">
                              Approve
                            </button>
                            <button className="bg-red-600 text-white px-3 py-1 rounded text-xs hover:bg-red-700">
                              Reject
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* User Management Tab */}
          {activeTab === 'users' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search users..."
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
                    <option value="all">All Users</option>
                    <option value="students">Students</option>
                    <option value="tutors">Tutors</option>
                    <option value="admins">Admins</option>
                  </select>
                  <button className="bg-islamic-600 text-white px-4 py-2 rounded-lg hover:bg-islamic-700 transition-colors flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Add User
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Active</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentUsers.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <img
                                src={user.avatar}
                                alt={user.name}
                                className="w-10 h-10 rounded-full object-cover"
                              />
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                <div className="text-sm text-gray-500">{user.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getRoleColor(user.role)}`}>
                              {user.role}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(user.status)}`}>
                              {user.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {user.joinDate}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {user.lastActive}
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

          {/* Sessions Tab */}
          {activeTab === 'sessions' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Session Management</h2>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Filter className="w-4 h-4" />
                    Filter
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Download className="w-4 h-4" />
                    Export
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Session</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tutor</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Earnings</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentSessions.map((session) => (
                        <tr key={session.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{session.subject}</div>
                            <div className="text-sm text-gray-500">{session.duration}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {session.student}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {session.tutor}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{session.date}</div>
                            <div className="text-sm text-gray-500">{session.time}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(session.status)}`}>
                              {session.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">
                            ${session.earnings}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-islamic-600 hover:text-islamic-700">
                              <Eye className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Approvals Tab */}
          {activeTab === 'approvals' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Pending Approvals</h2>
              
              <div className="grid grid-cols-1 gap-6">
                {pendingApprovals.map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="bg-yellow-100 p-2 rounded-lg">
                            <AlertTriangle className="w-5 h-5 text-yellow-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                            <p className="text-sm text-gray-600 capitalize">{item.type.replace('_', ' ')}</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          {item.type === 'tutor_application' && (
                            <>
                              <div>
                                <span className="text-gray-500">Email:</span>
                                <span className="ml-2 text-gray-900">{item.email}</span>
                              </div>
                              <div>
                                <span className="text-gray-500">Experience:</span>
                                <span className="ml-2 text-gray-900">{item.experience}</span>
                              </div>
                              <div className="col-span-2">
                                <span className="text-gray-500">Specialties:</span>
                                <div className="mt-1 flex flex-wrap gap-2">
                                  {item.specialties?.map((specialty, index) => (
                                    <span key={index} className="bg-islamic-100 text-islamic-700 px-2 py-1 rounded text-xs">
                                      {specialty}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </>
                          )}
                          
                          {item.type === 'payout_request' && (
                            <>
                              <div>
                                <span className="text-gray-500">Tutor:</span>
                                <span className="ml-2 text-gray-900">{item.tutor}</span>
                              </div>
                              <div>
                                <span className="text-gray-500">Amount:</span>
                                <span className="ml-2 text-gray-900 font-medium">{item.amount}</span>
                              </div>
                            </>
                          )}
                          
                          <div>
                            <span className="text-gray-500">Submitted:</span>
                            <span className="ml-2 text-gray-900">{item.submittedDate}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                          Approve
                        </button>
                        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                          Reject
                        </button>
                        <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                          Review
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900">Platform Analytics</h2>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Total Sessions</h3>
                    <BookOpen className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{analyticsData.sessionAnalytics.totalSessions.toLocaleString()}</div>
                  <div className="text-sm text-blue-600">+12% from last month</div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Completion Rate</h3>
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">92.7%</div>
                  <div className="text-sm text-green-600">+2.3% from last month</div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Avg Duration</h3>
                    <Clock className="w-6 h-6 text-purple-500" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{analyticsData.sessionAnalytics.averageDuration} min</div>
                  <div className="text-sm text-purple-600">+5 min from last month</div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Active Tutors</h3>
                    <Users className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">247</div>
                  <div className="text-sm text-orange-600">+18 new this month</div>
                </div>
              </div>

              {/* Charts Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* User Growth Chart */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">User Growth</h3>
                  <div className="h-64 flex items-end justify-between gap-2">
                    {analyticsData.userGrowth.slice(-6).map((month, index) => (
                      <div key={month.month} className="flex-1 flex flex-col items-center">
                        <div 
                          className="w-full bg-blue-500 rounded-t-lg transition-all duration-300 hover:bg-blue-600"
                          style={{ height: `${(month.users / 20000) * 200}px` }}
                          title={`${month.month}: ${month.users.toLocaleString()} users`}
                        ></div>
                        <div className="text-xs text-gray-600 mt-2">{month.month}</div>
                        <div className="text-xs font-medium text-gray-900">{(month.users / 1000).toFixed(1)}k</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Revenue Trends */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trends</h3>
                  <div className="h-64 flex items-end justify-between gap-2">
                    {analyticsData.revenue.slice(-6).map((month, index) => (
                      <div key={month.month} className="flex-1 flex flex-col items-center">
                        <div 
                          className="w-full bg-green-500 rounded-t-lg transition-all duration-300 hover:bg-green-600"
                          style={{ height: `${(month.revenue / 120000) * 200}px` }}
                          title={`${month.month}: $${month.revenue.toLocaleString()}`}
                        ></div>
                        <div className="text-xs text-gray-600 mt-2">{month.month}</div>
                        <div className="text-xs font-medium text-gray-900">${(month.revenue / 1000).toFixed(0)}k</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Popular Subjects */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Subjects</h3>
                  <div className="space-y-4">
                    {analyticsData.sessionAnalytics.popularSubjects.map((subject, index) => (
                      <div key={subject.name} className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-gray-900">{subject.name}</span>
                            <span className="text-sm text-gray-600">{subject.percentage}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-islamic-600 h-2 rounded-full" 
                              style={{ width: `${subject.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Demographics */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">User Demographics</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-3">By Country</h4>
                      <div className="space-y-2">
                        {analyticsData.demographics.byCountry.slice(0, 4).map((country, index) => (
                          <div key={country.country} className="flex justify-between text-sm">
                            <span className="text-gray-600">{country.country}</span>
                            <span className="font-medium">{country.percentage}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-3">By Age Group</h4>
                      <div className="space-y-2">
                        {analyticsData.demographics.byAge.map((age, index) => (
                          <div key={age.range} className="flex justify-between text-sm">
                            <span className="text-gray-600">{age.range}</span>
                            <span className="font-medium">{age.percentage}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Peak Hours */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Peak Session Hours</h3>
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-islamic-600" />
                  <div className="flex gap-4">
                    {analyticsData.sessionAnalytics.peakHours.map((hour, index) => (
                      <span key={index} className="bg-islamic-100 text-islamic-700 px-3 py-1 rounded-full text-sm font-medium">
                        {hour}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900">Platform Settings</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">General Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Platform Name</label>
                      <input
                        type="text"
                        defaultValue="Baytul-Ilm"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Support Email</label>
                      <input
                        type="email"
                        defaultValue="support@baytul-ilm.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Platform Commission (%)</label>
                      <input
                        type="number"
                        defaultValue="15"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">Two-Factor Authentication</h4>
                        <p className="text-sm text-gray-600">Require 2FA for admin accounts</p>
                      </div>
                      <input type="checkbox" defaultChecked className="rounded border-gray-300 text-islamic-600 focus:ring-islamic-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">Email Verification</h4>
                        <p className="text-sm text-gray-600">Require email verification for new users</p>
                      </div>
                      <input type="checkbox" defaultChecked className="rounded border-gray-300 text-islamic-600 focus:ring-islamic-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">Auto-approve Tutors</h4>
                        <p className="text-sm text-gray-600">Automatically approve tutor applications</p>
                      </div>
                      <input type="checkbox" className="rounded border-gray-300 text-islamic-600 focus:ring-islamic-500" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <button className="bg-islamic-600 text-white px-6 py-3 rounded-lg hover:bg-islamic-700 transition-colors">
                  Save Settings
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}