import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { DollarSign, TrendingUp, Calendar, Download, Filter, Eye, CreditCard, Clock, Users, Star, ArrowUpRight, ArrowDownRight } from 'lucide-react'

const earningsData = {
  totalEarnings: 12450,
  thisMonth: 2340,
  lastMonth: 1980,
  pending: 180,
  available: 2160,
  averageHourlyRate: 45,
  totalSessions: 276,
  totalHours: 345
}

const monthlyEarnings = [
  { month: 'Jan', earnings: 1850, sessions: 42 },
  { month: 'Feb', earnings: 2100, sessions: 47 },
  { month: 'Mar', earnings: 1950, sessions: 44 },
  { month: 'Apr', earnings: 2200, sessions: 49 },
  { month: 'May', earnings: 2050, sessions: 46 },
  { month: 'Jun', earnings: 2300, sessions: 51 },
  { month: 'Jul', earnings: 2150, sessions: 48 },
  { month: 'Aug', earnings: 2400, sessions: 53 },
  { month: 'Sep', earnings: 2250, sessions: 50 },
  { month: 'Oct', earnings: 2500, sessions: 56 },
  { month: 'Nov', earnings: 2340, sessions: 52 },
  { month: 'Dec', earnings: 1200, sessions: 27 } // Partial month
]

const paymentHistory = [
  {
    id: 1,
    date: '2024-12-15',
    student: 'Amina Hassan',
    session: 'Quran Recitation - Standard Session',
    amount: 45,
    status: 'paid',
    paymentMethod: 'Credit Card',
    transactionId: 'TXN-001234'
  },
  {
    id: 2,
    date: '2024-12-14',
    student: 'Omar Abdullah',
    session: 'Tajweed Basics - Standard Session',
    amount: 45,
    status: 'paid',
    paymentMethod: 'PayPal',
    transactionId: 'TXN-001233'
  },
  {
    id: 3,
    date: '2024-12-13',
    student: 'Fatima Al-Zahra',
    session: 'Quran Memorization - Trial Session',
    amount: 20,
    status: 'pending',
    paymentMethod: 'Credit Card',
    transactionId: 'TXN-001232'
  },
  {
    id: 4,
    date: '2024-12-12',
    student: 'Yusuf Ali',
    session: 'Advanced Tajweed - Intensive Package',
    amount: 160,
    status: 'paid',
    paymentMethod: 'Bank Transfer',
    transactionId: 'TXN-001231'
  },
  {
    id: 5,
    date: '2024-12-11',
    student: 'Khadija Mohammed',
    session: 'Quran Recitation - Standard Session',
    amount: 45,
    status: 'paid',
    paymentMethod: 'Credit Card',
    transactionId: 'TXN-001230'
  }
]

const payoutHistory = [
  {
    id: 1,
    date: '2024-12-01',
    amount: 1980,
    status: 'completed',
    method: 'Bank Transfer',
    reference: 'PAY-001234'
  },
  {
    id: 2,
    date: '2024-11-01',
    amount: 2200,
    status: 'completed',
    method: 'PayPal',
    reference: 'PAY-001233'
  },
  {
    id: 3,
    date: '2024-10-01',
    amount: 2050,
    status: 'completed',
    method: 'Bank Transfer',
    reference: 'PAY-001232'
  }
]

export default function TutorEarnings() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedPeriod, setSelectedPeriod] = useState('6months')
  const [showPayoutModal, setShowPayoutModal] = useState(false)

  const monthlyGrowth = ((earningsData.thisMonth - earningsData.lastMonth) / earningsData.lastMonth * 100).toFixed(1)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Earnings Dashboard</h1>
                <p className="text-gray-600 mt-1">Track your income and manage payouts</p>
              </div>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Download className="w-4 h-4" />
                  Export Report
                </button>
                <button 
                  onClick={() => setShowPayoutModal(true)}
                  className="bg-islamic-600 text-white px-6 py-2 rounded-lg hover:bg-islamic-700 transition-colors"
                >
                  Request Payout
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
              { id: 'payments', label: 'Payment History' },
              { id: 'payouts', label: 'Payouts' },
              { id: 'analytics', label: 'Analytics' },
              { id: 'settings', label: 'Payment Settings' }
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
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <DollarSign className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex items-center gap-1 text-green-600">
                      <ArrowUpRight className="w-4 h-4" />
                      <span className="text-sm font-medium">+{monthlyGrowth}%</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">${earningsData.totalEarnings.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Total Earnings</div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-islamic-100 p-3 rounded-lg">
                      <Calendar className="w-6 h-6 text-islamic-600" />
                    </div>
                    <div className="flex items-center gap-1 text-green-600">
                      <ArrowUpRight className="w-4 h-4" />
                      <span className="text-sm font-medium">+{monthlyGrowth}%</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">${earningsData.thisMonth.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">This Month</div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <CreditCard className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">${earningsData.available.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Available for Payout</div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-yellow-100 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-yellow-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">${earningsData.pending.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Pending Payment</div>
                </div>
              </div>

              {/* Earnings Chart */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Earnings Trend</h2>
                  <select 
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                  >
                    <option value="3months">Last 3 months</option>
                    <option value="6months">Last 6 months</option>
                    <option value="12months">Last 12 months</option>
                  </select>
                </div>
                
                
                {/* Earnings Chart */}
                <div className="h-64 flex items-end justify-between gap-2 bg-gray-50 rounded-lg p-4">
                  {monthlyEarnings.slice(-6).map((month, index) => (
                    <div key={month.month} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-full bg-islamic-600 rounded-t-lg transition-all duration-300 hover:bg-islamic-700 relative group"
                        style={{ height: `${(month.earnings / 2500) * 200}px` }}
                      >
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-900 text-white px-3 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          ${month.earnings} • {month.sessions} sessions
                        </div>
                      </div>
                      <div className="text-xs text-gray-600 mt-2 font-medium">{month.month}</div>
                      <div className="text-xs text-gray-900 font-bold">${month.earnings}</div>
                    </div>
                  ))}
                </div>
                
                {/* Chart Legend */}
                <div className="mt-4 flex items-center justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-islamic-600 rounded"></div>
                    <span className="text-gray-600">Monthly Earnings</span>
                  </div>
                  <div className="text-gray-500">
                    Average: ${(monthlyEarnings.reduce((sum, month) => sum + month.earnings, 0) / monthlyEarnings.length).toFixed(0)}/month
                  </div>
                  {monthlyEarnings.slice(-6).map((month, index) => (
                    <div key={month.month} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-full bg-islamic-600 rounded-t-lg transition-all duration-300 hover:bg-islamic-700"
                        style={{ height: `${(month.earnings / 2500) * 200}px` }}
                        title={`${month.month}: $${month.earnings}`}
                      ></div>
                      <div className="text-xs text-gray-600 mt-2">{month.month}</div>
                      <div className="text-xs font-medium text-gray-900">${month.earnings}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{earningsData.totalSessions}</div>
                      <div className="text-sm text-gray-600">Total Sessions</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{earningsData.totalHours}</div>
                      <div className="text-sm text-gray-600">Hours Taught</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="bg-pink-100 p-3 rounded-lg">
                      <Star className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">${earningsData.averageHourlyRate}</div>
                      <div className="text-sm text-gray-600">Avg. Hourly Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'payments' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Payment History</h2>
                <div className="flex items-center gap-4">
                  <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                    <option>All Payments</option>
                    <option>Paid</option>
                    <option>Pending</option>
                    <option>Failed</option>
                  </select>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Filter className="w-4 h-4" />
                    Filter
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Session</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {paymentHistory.map((payment) => (
                        <tr key={payment.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {new Date(payment.date).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {payment.student}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            {payment.session}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">
                            ${payment.amount.toFixed(2)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              payment.status === 'paid' 
                                ? 'bg-green-100 text-green-800'
                                : payment.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
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

          {activeTab === 'payouts' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Payout History</h2>
                <button 
                  onClick={() => setShowPayoutModal(true)}
                  className="bg-islamic-600 text-white px-6 py-2 rounded-lg hover:bg-islamic-700 transition-colors"
                >
                  Request New Payout
                </button>
              </div>

              {/* Available Balance */}
              <div className="bg-gradient-to-r from-islamic-600 to-islamic-700 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Available Balance</h3>
                <div className="text-3xl font-bold mb-4">${earningsData.available.toLocaleString()}</div>
                <p className="text-islamic-100 text-sm">
                  This amount is available for immediate payout. Minimum payout amount is $50.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reference</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {payoutHistory.map((payout) => (
                        <tr key={payout.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {new Date(payout.date).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            ${payout.amount.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {payout.method}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {payout.reference}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                              {payout.status.charAt(0).toUpperCase() + payout.status.slice(1)}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Other tabs would be implemented similarly */}
        </div>

        {/* Payout Modal */}
        {showPayoutModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Payout</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Available Balance</label>
                  <div className="text-2xl font-bold text-islamic-600">${earningsData.available.toLocaleString()}</div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Payout Amount</label>
                  <input
                    type="number"
                    max={earningsData.available}
                    min="50"
                    defaultValue={earningsData.available}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                  />
                  <p className="text-sm text-gray-500 mt-1">Minimum payout amount is $50</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Payout Method</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent">
                    <option>Bank Transfer</option>
                    <option>PayPal</option>
                    <option>Stripe</option>
                  </select>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => setShowPayoutModal(false)}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowPayoutModal(false)}
                  className="flex-1 bg-islamic-600 text-white py-3 px-4 rounded-lg hover:bg-islamic-700 transition-colors"
                >
                  Request Payout
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}