import React, { useState, useEffect } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { BookOpen, Eye, EyeOff, CheckCircle, AlertCircle, Shield, ArrowLeft } from 'lucide-react'

export default function ResetPassword() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const token = searchParams.get('token')

  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [tokenValid, setTokenValid] = useState(true)

  // Validate token on component mount
  useEffect(() => {
    if (!token) {
      setTokenValid(false)
      return
    }

    // In a real app, you would validate the token with your backend
    // For demo purposes, we'll accept any token except 'invalid'
    if (token === 'invalid') {
      setTokenValid(false)
    }
  }, [token])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const passwordStrength = (password: string) => {
    let strength = 0
    if (password.length >= 8) strength++
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++
    if (password.match(/\d/)) strength++
    if (password.match(/[^a-zA-Z\d]/)) strength++
    return strength
  }

  const getPasswordStrengthText = (strength: number) => {
    switch (strength) {
      case 0:
      case 1:
        return { text: 'Weak', color: 'text-red-500' }
      case 2:
        return { text: 'Fair', color: 'text-yellow-500' }
      case 3:
        return { text: 'Good', color: 'text-blue-500' }
      case 4:
        return { text: 'Strong', color: 'text-green-500' }
      default:
        return { text: '', color: '' }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Validation
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    const strength = passwordStrength(formData.password)
    if (strength < 2) {
      setError('Please choose a stronger password')
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Mock success
      setSuccess(true)
      
      // Redirect to login after 3 seconds
      setTimeout(() => {
        navigate('/login', {
          state: {
            message: 'Password reset successfully! You can now sign in with your new password.'
          }
        })
      }, 3000)
    } catch (err) {
      setError('Failed to reset password. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  // Invalid token screen
  if (!tokenValid) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-islamic-50 to-islamic-100 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full text-center">
          <Link to="/" className="flex items-center justify-center space-x-2 mb-8">
            <div className="bg-islamic-600 p-3 rounded-xl">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <span className="text-3xl font-bold text-islamic-800">Baytul-Ilm</span>
          </Link>
          
          <div className="bg-red-100 p-6 rounded-full w-24 h-24 mx-auto mb-8 flex items-center justify-center">
            <AlertCircle className="w-12 h-12 text-red-600" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Invalid Reset Link</h1>
          <p className="text-gray-600 mb-8">
            This password reset link is invalid or has expired. Please request a new one.
          </p>
          
          <div className="space-y-4">
            <Link
              to="/forgot-password"
              className="block bg-islamic-600 text-white px-6 py-3 rounded-lg hover:bg-islamic-700 transition-colors font-medium"
            >
              Request New Reset Link
            </Link>
            <Link
              to="/login"
              className="block text-islamic-600 hover:text-islamic-700 font-medium"
            >
              Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Success screen
  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-islamic-50 to-islamic-100 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full text-center">
          <Link to="/" className="flex items-center justify-center space-x-2 mb-8">
            <div className="bg-islamic-600 p-3 rounded-xl">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <span className="text-3xl font-bold text-islamic-800">Baytul-Ilm</span>
          </Link>
          
          <div className="bg-green-100 p-6 rounded-full w-24 h-24 mx-auto mb-8 flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Password Reset Successfully!</h1>
          <p className="text-gray-600 mb-8">
            Your password has been updated. You can now sign in with your new password.
          </p>
          <p className="text-sm text-gray-500">
            Redirecting to sign in page in 3 seconds...
          </p>
        </div>
      </div>
    )
  }

  const strength = passwordStrength(formData.password)
  const strengthInfo = getPasswordStrengthText(strength)

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
            <Shield className="w-12 h-12 text-islamic-600" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900">Reset Your Password</h2>
          <p className="mt-2 text-gray-600">
            Enter your new password below. Make sure it's strong and secure.
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

          <div className="space-y-4">
            {/* New Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                New Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent transition-colors"
                  placeholder="Enter your new password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              
              {/* Password Strength Indicator */}
              {formData.password && (
                <div className="mt-2">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all ${
                          strength <= 1 ? 'bg-red-500' :
                          strength === 2 ? 'bg-yellow-500' :
                          strength === 3 ? 'bg-blue-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${(strength / 4) * 100}%` }}
                      ></div>
                    </div>
                    <span className={`text-xs font-medium ${strengthInfo.color}`}>
                      {strengthInfo.text}
                    </span>
                  </div>
                  
                  {/* Password Requirements */}
                  <div className="mt-3 space-y-1">
                    <div className={`text-xs flex items-center gap-2 ${
                      formData.password.length >= 8 ? 'text-green-600' : 'text-gray-500'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        formData.password.length >= 8 ? 'bg-green-500' : 'bg-gray-300'
                      }`}></div>
                      At least 8 characters
                    </div>
                    <div className={`text-xs flex items-center gap-2 ${
                      formData.password.match(/[a-z]/) && formData.password.match(/[A-Z]/) ? 'text-green-600' : 'text-gray-500'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        formData.password.match(/[a-z]/) && formData.password.match(/[A-Z]/) ? 'bg-green-500' : 'bg-gray-300'
                      }`}></div>
                      Upper and lowercase letters
                    </div>
                    <div className={`text-xs flex items-center gap-2 ${
                      formData.password.match(/\d/) ? 'text-green-600' : 'text-gray-500'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        formData.password.match(/\d/) ? 'bg-green-500' : 'bg-gray-300'
                      }`}></div>
                      At least one number
                    </div>
                    <div className={`text-xs flex items-center gap-2 ${
                      formData.password.match(/[^a-zA-Z\d]/) ? 'text-green-600' : 'text-gray-500'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        formData.password.match(/[^a-zA-Z\d]/) ? 'bg-green-500' : 'bg-gray-300'
                      }`}></div>
                      At least one special character
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent transition-colors"
                  placeholder="Confirm your new password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">Passwords do not match</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading || formData.password !== formData.confirmPassword || strength < 2}
            className="w-full bg-islamic-600 text-white py-3 px-4 rounded-lg hover:bg-islamic-700 focus:ring-4 focus:ring-islamic-200 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Resetting Password...
              </div>
            ) : (
              'Reset Password'
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
        </form>
      </div>
    </div>
  )
}