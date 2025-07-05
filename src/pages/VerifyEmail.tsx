import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BookOpen, Mail, RefreshCw, CheckCircle, AlertCircle } from 'lucide-react'

export default function VerifyEmail() {
  const [code, setCode] = useState(['', '', '', '', '', ''])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes
  const [canResend, setCanResend] = useState(false)
  const [isResending, setIsResending] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()
  const email = location.state?.email || ''

  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else {
      setCanResend(true)
    }
  }, [timeLeft])

  // Format time display
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  // Handle code input
  const handleCodeChange = (index: number, value: string) => {
    if (value.length > 1) return // Prevent multiple characters
    
    const newCode = [...code]
    newCode[index] = value
    setCode(newCode)

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`)
      nextInput?.focus()
    }
  }

  // Handle backspace
  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`)
      prevInput?.focus()
    }
  }

  // Handle paste
  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').slice(0, 6)
    const newCode = [...code]
    
    for (let i = 0; i < pastedData.length && i < 6; i++) {
      if (/^\d$/.test(pastedData[i])) {
        newCode[i] = pastedData[i]
      }
    }
    
    setCode(newCode)
  }

  // Verify code
  const handleVerify = async () => {
    const verificationCode = code.join('')
    
    if (verificationCode.length !== 6) {
      setError('Please enter the complete 6-digit code')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Mock verification - in real app, this would call your backend
      if (verificationCode === '123456') {
        setSuccess(true)
        setTimeout(() => {
          navigate('/login', { 
            state: { 
              message: 'Email verified successfully! You can now sign in.' 
            }
          })
        }, 2000)
      } else {
        setError('Invalid verification code. Please try again.')
      }
    } catch (err) {
      setError('Verification failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  // Resend code
  const handleResend = async () => {
    setIsResending(true)
    setError('')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Reset timer and state
      setTimeLeft(300)
      setCanResend(false)
      setCode(['', '', '', '', '', ''])
      
      // Show success message
      const successMsg = document.createElement('div')
      successMsg.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50'
      successMsg.textContent = 'Verification code sent successfully!'
      document.body.appendChild(successMsg)
      
      setTimeout(() => {
        document.body.removeChild(successMsg)
      }, 3000)
      
    } catch (err) {
      setError('Failed to resend code. Please try again.')
    } finally {
      setIsResending(false)
    }
  }

  if (!email) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-islamic-50 to-islamic-100 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-red-100 p-6 rounded-full w-24 h-24 mx-auto mb-8 flex items-center justify-center">
            <AlertCircle className="w-12 h-12 text-red-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Invalid Access</h1>
          <p className="text-gray-600 mb-8">Please sign up first to verify your email.</p>
          <Link
            to="/signup"
            className="bg-islamic-600 text-white px-6 py-3 rounded-lg hover:bg-islamic-700 transition-colors font-medium"
          >
            Go to Sign Up
          </Link>
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
          
          {success ? (
            <div className="mb-8">
              <div className="bg-green-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Email Verified!</h2>
              <p className="mt-2 text-gray-600">Your account has been successfully verified. Redirecting to login...</p>
            </div>
          ) : (
            <div className="mb-8">
              <div className="bg-islamic-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Mail className="w-12 h-12 text-islamic-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Verify Your Email</h2>
              <p className="mt-2 text-gray-600">
                We've sent a 6-digit verification code to
              </p>
              <p className="font-medium text-islamic-600">{email}</p>
            </div>
          )}
        </div>

        {!success && (
          <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-red-700 text-sm">{error}</span>
              </div>
            )}

            {/* Code Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4 text-center">
                Enter the 6-digit code
              </label>
              <div className="flex justify-center gap-3" onPaste={handlePaste}>
                {code.map((digit, index) => (
                  <input
                    key={index}
                    id={`code-${index}`}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-lg focus:border-islamic-500 focus:ring-2 focus:ring-islamic-200 transition-colors"
                    autoComplete="off"
                  />
                ))}
              </div>
            </div>

            {/* Timer */}
            <div className="text-center">
              {timeLeft > 0 ? (
                <p className="text-sm text-gray-600">
                  Code expires in <span className="font-medium text-islamic-600">{formatTime(timeLeft)}</span>
                </p>
              ) : (
                <p className="text-sm text-red-600">Code has expired</p>
              )}
            </div>

            {/* Verify Button */}
            <button
              onClick={handleVerify}
              disabled={isLoading || code.join('').length !== 6}
              className="w-full bg-islamic-600 text-white py-3 px-4 rounded-lg hover:bg-islamic-700 focus:ring-4 focus:ring-islamic-200 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Verifying...
                </div>
              ) : (
                'Verify Email'
              )}
            </button>

            {/* Resend Code */}
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Didn't receive the code?</p>
              <button
                onClick={handleResend}
                disabled={!canResend || isResending}
                className="text-islamic-600 hover:text-islamic-700 font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mx-auto"
              >
                {isResending ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-4 h-4" />
                    Resend Code
                  </>
                )}
              </button>
            </div>

            {/* Help Text */}
            <div className="text-center pt-4 border-t">
              <p className="text-xs text-gray-500 mb-2">
                For testing purposes, use code: <span className="font-mono font-bold">123456</span>
              </p>
              <Link
                to="/signup"
                className="text-sm text-islamic-600 hover:text-islamic-700 font-medium"
              >
                ← Back to Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}