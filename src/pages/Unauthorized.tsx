import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, ArrowLeft, Home } from 'lucide-react'

export default function Unauthorized() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="bg-red-100 p-6 rounded-full w-24 h-24 mx-auto mb-8 flex items-center justify-center">
          <Shield className="w-12 h-12 text-red-600" />
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Access Denied</h1>
        <p className="text-lg text-gray-600 mb-8">
          You don't have permission to access this page. Please contact your administrator if you believe this is an error.
        </p>
        
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-islamic-600 text-white px-6 py-3 rounded-lg hover:bg-islamic-700 transition-colors font-medium"
          >
            <Home className="w-5 h-5" />
            Go to Homepage
          </Link>
          
          <div>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-islamic-600 hover:text-islamic-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}