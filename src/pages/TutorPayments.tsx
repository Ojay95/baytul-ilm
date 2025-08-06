import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { 
  DollarSign, 
  CreditCard, 
  Bank, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Download,
  Eye,
  Filter,
  Calendar,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  RefreshCw,
  Shield,
  Info,
  ExternalLink,
  Copy,
  Settings,
  Plus,
  Edit,
  Trash2,
  X
} from 'lucide-react'

const earningsData = {
  totalEarnings: 12450,
  thisMonth: 2340,
  lastMonth: 1980,
  pending: 180,
  available: 2160,
  withdrawn: 8950,
  platformFee: 1865,
  netEarnings: 10585
}

const paymentMethods = [
  {
    id: 1,
    type: 'bank',
    name: 'Bank Account',
    details: 'Chase Bank ****1234',
    isDefault: true,
    status: 'verified',
    icon: Bank
  },
  {
    id: 2,
    type: 'paypal',
    name: 'PayPal',
    details: 'ahmad@baytul-ilm.com',
    isDefault: false,
    status: 'verified',
    icon: Wallet
  }
]

const withdrawalHistory = [
  {
    id: 1,
    amount: 1980,
    method: 'Bank Transfer',
    status: 'completed',
    requestDate: '2024-12-01',
    processedDate: '2024-12-03',
    reference: 'WD-001234',
    fee: 5
  },
  {
    id: 2,
    amount: 2200,
    method: 'PayPal',
    status: 'completed',
    requestDate: '2024-11-01',
    processedDate: '2024-11-02',
    reference: 'WD-001233',
    fee: 3
  },
  {
    id: 3,
    amount: 1850,
    method: 'Bank Transfer',
    status: 'processing',
    requestDate: '2024-12-15',
    processedDate: null,
    reference: 'WD-001235',
    fee: 5
  }
]

const earningsHistory = [
  {
    id: 1,
    date: '2024-12-20',
    student: 'Amina Hassan',
    session: 'Quran Recitation - Standard Session',
    gross: 45,
    platformFee: 6.75,
    net: 38.25,
    status: 'completed'
  },
  {
    id: 2,
    date: '2024-12-19',
    student: 'Omar Abdullah',
    session: 'Tajweed Basics - Trial Session',
    gross: 20,
    platformFee: 3,
    net: 17,
    status: 'completed'
  },
  {
    id: 3,
    date: '2024-12-18',
    student: 'Fatima Al-Zahra',
    session: 'Quran Memorization - Intensive Package',
    gross: 160,
    platformFee: 24,
    net: 136,
    status: 'pending'
  }
]

const monthlyData = [
  { month: 'Jul', earnings: 1850, sessions: 42 },
  { month: 'Aug', earnings: 2100, sessions: 47 },
  { month: 'Sep', earnings: 1950, sessions: 44 },
  { month: 'Oct', earnings: 2200, sessions: 49 },
  { month: 'Nov', earnings: 1980, sessions: 46 },
  { month: 'Dec', earnings: 2340, sessions: 52 }
]

export default function TutorPayments() {
  const [activeTab, setActiveTab] = useState('overview')
  const [showWithdrawModal, setShowWithdrawModal] = useState(false)
  const [showAddPaymentModal, setShowAddPaymentModal] = useState(false)
  const [withdrawAmount, setWithdrawAmount] = useState('')
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(paymentMethods[0].id)
  const [isProcessing, setIsProcessing] = useState(false)

  const monthlyGrowth = ((earningsData.thisMonth - earningsData.lastMonth) / earningsData.lastMonth * 100).toFixed(1)

  const handleWithdraw = async () => {
    setIsProcessing(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setShowWithdrawModal(false)
      setWithdrawAmount('')
      // Show success message
    } catch (error) {
      console.error('Withdrawal failed:', error)
    } finally {
      setIsProcessing(false)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'processing':
        return 'bg-yellow-100 text-yellow-800'
      case 'pending':
        return 'bg-blue-100 text-blue-800'
      case 'failed':
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
                <h1 className="text-3xl font-bold text-gray-900">Payments & Earnings</h1>
                <p className="text-gray-600 mt-1">Manage your earnings and withdrawal methods</p>
              </div>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Download className="w-4 h-4" />
                  Export Report
                </button>
                <button 
                  onClick={() => setShowWithdrawModal(true)}
                  disabled={earningsData.available < 50}
                  className="bg-islamic-600 text-white px-6 py-2 rounded-lg hover:bg-islamic-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Withdraw Funds
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
              { id: 'earnings', label: 'Earnings History' },
              { id: 'withdrawals', label: 'Withdrawals' },
              { id: 'methods', label: 'Payment Methods' },
              { id: 'tax', label: 'Tax Information' }
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
              {/* Balance Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <DollarSign className="w-8 h-8" />
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                  <div className="text-3xl font-bold mb-1">${earningsData.available.toLocaleString()}</div>
                  <div className="text-green-100">Available for Withdrawal</div>
                  <div className="text-sm text-green-100 mt-2">Minimum: $50</div>
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
                    <div className="bg-yellow-100 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-yellow-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">${earningsData.pending.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Pending Payment</div>
                  <div className="text-xs text-gray-500 mt-1">Processing in 2-3 days</div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">${earningsData.totalEarnings.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Total Earnings</div>
                  <div className="text-xs text-gray-500 mt-1">All time</div>
                </div>
              </div>

              {/* Earnings Chart */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Earnings Trend</h2>
                  <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                    <option>Last 6 months</option>
                    <option>Last 3 months</option>
                    <option>This year</option>
                  </select>
                </div>
                
                <div className="h-64 flex items-end justify-between gap-2 bg-gray-50 rounded-lg p-4">
                  {monthlyData.map((month, index) => (
                    <div key={month.month} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-full bg-islamic-600 rounded-t-lg transition-all duration-300 hover:bg-islamic-700 relative group"
                        style={{ height: `${(month.earnings / 2500) * 200}px` }}
                      >
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-900 text-white px-3 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          ${month.earnings} • {month.sessions} sessions
                        </div>
                      </div>
                      <div className="text-xs text-gray-600 mt-2 font-medium">{month.month}</div>
                      <div className="text-xs text-gray-900 font-bold">${month.earnings}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <button 
                  onClick={() => setShowWithdrawModal(true)}
                  className="bg-white border-2 border-islamic-200 rounded-2xl p-6 hover:border-islamic-400 hover:bg-islamic-50 transition-colors text-left"
                >
                  <DollarSign className="w-8 h-8 text-islamic-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Withdraw Earnings</h3>
                  <p className="text-sm text-gray-600">Transfer available balance to your account</p>
                </button>

                <button 
                  onClick={() => setActiveTab('methods')}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-gray-400 hover:bg-gray-50 transition-colors text-left"
                >
                  <CreditCard className="w-8 h-8 text-gray-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Payment Methods</h3>
                  <p className="text-sm text-gray-600">Manage your withdrawal methods</p>
                </button>

                <button 
                  onClick={() => setActiveTab('tax')}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-gray-400 hover:bg-gray-50 transition-colors text-left"
                >
                  <Shield className="w-8 h-8 text-gray-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Tax Information</h3>
                  <p className="text-sm text-gray-600">Download tax documents</p>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'earnings' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Earnings History</h2>
                <div className="flex items-center gap-4">
                  <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                    <option>All Earnings</option>
                    <option>This Month</option>
                    <option>Last Month</option>
                    <option>This Year</option>
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
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gross</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform Fee</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Net Earnings</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {earningsHistory.map((earning) => (
                        <tr key={earning.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {new Date(earning.date).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {earning.student}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            {earning.session}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            ${earning.gross.toFixed(2)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">
                            -${earning.platformFee.toFixed(2)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">
                            ${earning.net.toFixed(2)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(earning.status)}`}>
                              {earning.status}
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

          {activeTab === 'withdrawals' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Withdrawal History</h2>
                <button 
                  onClick={() => setShowWithdrawModal(true)}
                  className="bg-islamic-600 text-white px-6 py-2 rounded-lg hover:bg-islamic-700 transition-colors"
                >
                  New Withdrawal
                </button>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reference</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requested</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Processed</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {withdrawalHistory.map((withdrawal) => (
                        <tr key={withdrawal.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">
                            {withdrawal.reference}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            ${withdrawal.amount.toLocaleString()}
                            <div className="text-xs text-gray-500">Fee: ${withdrawal.fee}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {withdrawal.method}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {new Date(withdrawal.requestDate).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {withdrawal.processedDate ? new Date(withdrawal.processedDate).toLocaleDateString() : '-'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(withdrawal.status)}`}>
                              {withdrawal.status}
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

          {activeTab === 'methods' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Payment Methods</h2>
                <button 
                  onClick={() => setShowAddPaymentModal(true)}
                  className="bg-islamic-600 text-white px-6 py-2 rounded-lg hover:bg-islamic-700 transition-colors flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add Method
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-gray-100 p-3 rounded-lg">
                          <method.icon className="w-6 h-6 text-gray-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{method.name}</h3>
                          <p className="text-sm text-gray-600">{method.details}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {method.isDefault && (
                          <span className="bg-islamic-100 text-islamic-700 px-2 py-1 rounded text-xs font-medium">
                            Default
                          </span>
                        )}
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          method.status === 'verified' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {method.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                        Edit
                      </button>
                      {!method.isDefault && (
                        <button className="border border-gray-300 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                          Set Default
                        </button>
                      )}
                      <button className="text-red-600 hover:text-red-700 py-2 px-3">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Withdrawal Limits */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Withdrawal Information</h3>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Minimum withdrawal amount: $50</li>
                      <li>• Bank transfers: 3-5 business days, $5 fee</li>
                      <li>• PayPal transfers: 1-2 business days, $3 fee</li>
                      <li>• Withdrawals processed Monday-Friday</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Withdraw Modal */}
        {showWithdrawModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Withdraw Earnings</h3>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Available Balance:</span>
                    <span className="font-bold text-green-600">${earningsData.available.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Minimum Withdrawal:</span>
                    <span className="font-medium">$50</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Withdrawal Amount</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="number"
                      value={withdrawAmount}
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                      max={earningsData.available}
                      min="50"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                      placeholder="Enter amount"
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Min: $50</span>
                    <span>Max: ${earningsData.available}</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                  <div className="space-y-2">
                    {paymentMethods.map((method) => (
                      <label key={method.id} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method.id}
                          checked={selectedPaymentMethod === method.id}
                          onChange={(e) => setSelectedPaymentMethod(parseInt(e.target.value))}
                          className="text-islamic-600 focus:ring-islamic-500"
                        />
                        <method.icon className="w-5 h-5 text-gray-600" />
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{method.name}</div>
                          <div className="text-sm text-gray-600">{method.details}</div>
                        </div>
                        {method.type === 'bank' && <span className="text-xs text-gray-500">3-5 days, $5 fee</span>}
                        {method.type === 'paypal' && <span className="text-xs text-gray-500">1-2 days, $3 fee</span>}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Withdrawal Summary */}
                {withdrawAmount && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Withdrawal Summary</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Amount:</span>
                        <span>${parseFloat(withdrawAmount || '0').toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Processing Fee:</span>
                        <span>-${selectedPaymentMethod === 1 ? '5.00' : '3.00'}</span>
                      </div>
                      <div className="flex justify-between font-medium border-t pt-1">
                        <span>You'll Receive:</span>
                        <span className="text-green-600">
                          ${(parseFloat(withdrawAmount || '0') - (selectedPaymentMethod === 1 ? 5 : 3)).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => setShowWithdrawModal(false)}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleWithdraw}
                  disabled={!withdrawAmount || parseFloat(withdrawAmount) < 50 || parseFloat(withdrawAmount) > earningsData.available || isProcessing}
                  className="flex-1 bg-islamic-600 text-white py-3 px-4 rounded-lg hover:bg-islamic-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <div className="flex items-center justify-center gap-2">
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Processing...
                    </div>
                  ) : (
                    'Confirm Withdrawal'
                  )}
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