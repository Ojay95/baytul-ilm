import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Mail, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address')
      setIsLoading(false)
      return
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Mock success - in real app, this would call your backend
      setSuccess(true)
    } catch (err) {
      setError('Failed to send reset email. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-islamic-50 to-islamic-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <Link to="/" className="flex items-center justify-center space-x-2 mb-8">
              <div className="bg-islamic-600 p-3 rounded-xl">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <span className="text-3xl font-bold text-islamic-800">Baytul-Ilm</span>
            </Link>
            
            <div className="bg-green-100 p-6 rounded-full w-24 h-24 mx-auto mb-8 flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Check Your Email</h2>
            <p className="text-gray-600 mb-2">
              We've sent a password reset link to:
            </p>
            <p className="font-medium text-islamic-600 mb-8">{email}</p>
            <p className="text-sm text-gray-500 mb-8">
              If you don't see the email in your inbox, please check your spam folder.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What's next?</h3>
              <div className="space-y-3 text-sm text-gray-600 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-islamic-100 text-islamic-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">1</div>
                  <p>Check your email for a message from Baytul-Ilm</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-islamic-100 text-islamic-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">2</div>
                  <p>Click the "Reset Password" link in the email</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-islamic-100 text-islamic-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">3</div>
                  <p>Create a new password for your account</p>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => window.location.reload()}
                  className="w-full bg-islamic-600 text-white py-3 px-4 rounded-lg hover:bg-islamic-700 transition-colors font-medium"
                >
                  Resend Email
                </button>
                <Link
                  to="/login"
                  className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium text-center"
                >
                  Back to Sign In
                </Link>
              </div>
            </div>

            {/* Demo Link */}
            <div className="text-center pt-4 border-t">
              <p className="text-xs text-gray-500 mb-2">For testing purposes:</p>
              <Link
                to="/reset-password?token=demo-token"
                className="text-sm text-islamic-600 hover:text-islamic-700 font-medium"
              >
                Go directly to Reset Password →
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-islamic-50 to-islamic-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link to="/" className="flex items-center justify-center space-x-2 mb-8">
            <div className="bg-islamic-600 p-3 rounded-xl">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <span className="text-3xl font-bold text-islamic-800">Baytul-Ilm</span>
          </Link>
          
          <div className="bg-islamic-100 p-6 rounded-full w-24 h-24 mx-auto mb-8 flex items-center justify-center">
            <Mail className="w-12 h-12 text-islamic-600" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900">Forgot Password?</h2>
          <p className="mt-2 text-gray-600">
            No worries! Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6 bg-white p-8 rounded-2xl shadow-lg" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
              <span className="text-red-700 text-sm">{error}</span>
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent transition-colors"
              placeholder="Enter your email address"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-islamic-600 text-white py-3 px-4 rounded-lg hover:bg-islamic-700 focus:ring-4 focus:ring-islamic-200 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending Reset Link...
              </div>
            ) : (
              'Send Reset Link'
            )}
          </button>

          <div className="text-center">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-islamic-600 hover:text-islamic-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Sign In
            </Link>
          </div>

          {/* Help Text */}
          <div className="text-center pt-4 border-t">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-islamic-600 hover:text-islamic-700 font-medium">
                Sign up here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}