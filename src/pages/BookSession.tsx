import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Calendar, Clock, Video, CreditCard, CheckCircle, ArrowLeft } from 'lucide-react'

// Mock tutor data
const tutorData = {
  1: {
    id: 1,
    name: "Sheikh Ahmad Al-Mahmoud",
    title: "Quran & Tajweed Specialist",
    image: "https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg",
    hourlyRate: 45,
    packages: [
      {
        name: "Trial Session",
        duration: "30 minutes",
        price: 20,
        description: "Get to know my teaching style and assess your current level"
      },
      {
        name: "Standard Session",
        duration: "60 minutes", 
        price: 45,
        description: "Regular one-on-one Quran and Tajweed lessons"
      },
      {
        name: "Intensive Package",
        duration: "4 sessions (60 min each)",
        price: 160,
        description: "Weekly intensive sessions for faster progress",
        savings: "Save $20"
      }
    ]
  }
}

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
]

const weekDays = [
  { day: "Mon", date: "Dec 18", available: true },
  { day: "Tue", date: "Dec 19", available: true },
  { day: "Wed", date: "Dec 20", available: false },
  { day: "Thu", date: "Dec 21", available: true },
  { day: "Fri", date: "Dec 22", available: true },
  { day: "Sat", date: "Dec 23", available: true },
  { day: "Sun", date: "Dec 24", available: false }
]

export default function BookSession() {
  const { tutorId } = useParams()
  const tutor = tutorData[tutorId as keyof typeof tutorData]
  
  const [selectedPackage, setSelectedPackage] = useState(tutor?.packages[1])
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [sessionType, setSessionType] = useState("video")
  const [specialRequests, setSpecialRequests] = useState("")
  const [step, setStep] = useState(1)

  if (!tutor) {
    return <div>Tutor not found</div>
  }

  const handleBooking = () => {
    // Handle booking logic here
    setStep(4) // Go to confirmation step
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Link 
              to={`/tutor/${tutor.id}`}
              className="inline-flex items-center gap-2 text-islamic-600 hover:text-islamic-700 mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Profile
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <img
                src={tutor.image}
                alt={tutor.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Book a Session</h1>
                <p className="text-gray-600">with {tutor.name}</p>
              </div>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center gap-4 mb-8">
              {[1, 2, 3, 4].map((stepNum) => (
                <div key={stepNum} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= stepNum 
                      ? 'bg-islamic-600 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step > stepNum ? <CheckCircle className="w-4 h-4" /> : stepNum}
                  </div>
                  {stepNum < 4 && (
                    <div className={`w-12 h-0.5 ${
                      step > stepNum ? 'bg-islamic-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {step === 1 && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Package</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tutor.packages.map((pkg, index) => (
                  <div
                    key={index}
                    className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${
                      selectedPackage?.name === pkg.name
                        ? 'border-islamic-600 bg-islamic-50'
                        : 'border-gray-200 hover:border-islamic-300'
                    }`}
                    onClick={() => setSelectedPackage(pkg)}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{pkg.name}</h3>
                    <div className="text-2xl font-bold text-islamic-600 mb-2">${pkg.price}</div>
                    <p className="text-sm text-gray-600 mb-3">{pkg.duration}</p>
                    <p className="text-sm text-gray-700">{pkg.description}</p>
                    {pkg.savings && (
                      <div className="mt-2 text-sm text-green-600 font-medium">{pkg.savings}</div>
                    )}
                  </div>
                ))}
              </div>
              <button
                onClick={() => setStep(2)}
                className="mt-8 bg-islamic-600 text-white px-8 py-3 rounded-lg hover:bg-islamic-700 transition-colors font-medium"
              >
                Continue
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Date & Time</h2>
              
              {/* Date Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Date</h3>
                <div className="grid grid-cols-7 gap-2">
                  {weekDays.map((day, index) => (
                    <button
                      key={index}
                      disabled={!day.available}
                      className={`p-3 rounded-lg text-center transition-all ${
                        selectedDate === `${day.day} ${day.date}`
                          ? 'bg-islamic-600 text-white'
                          : day.available
                          ? 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                          : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                      }`}
                      onClick={() => setSelectedDate(`${day.day} ${day.date}`)}
                    >
                      <div className="text-sm font-medium">{day.day}</div>
                      <div className="text-xs">{day.date}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Time</h3>
                <div className="grid grid-cols-4 gap-3">
                  {timeSlots.map((time, index) => (
                    <button
                      key={index}
                      className={`p-3 rounded-lg text-center transition-all ${
                        selectedTime === time
                          ? 'bg-islamic-600 text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                      }`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Session Type */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Session Type</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    className={`p-4 rounded-lg border-2 transition-all ${
                      sessionType === 'video'
                        ? 'border-islamic-600 bg-islamic-50'
                        : 'border-gray-200 hover:border-islamic-300'
                    }`}
                    onClick={() => setSessionType('video')}
                  >
                    <Video className="w-6 h-6 text-islamic-600 mx-auto mb-2" />
                    <div className="font-medium">Video Call</div>
                    <div className="text-sm text-gray-600">Online session via video</div>
                  </button>
                  <button
                    className={`p-4 rounded-lg border-2 transition-all ${
                      sessionType === 'audio'
                        ? 'border-islamic-600 bg-islamic-50'
                        : 'border-gray-200 hover:border-islamic-300'
                    }`}
                    onClick={() => setSessionType('audio')}
                  >
                    <Clock className="w-6 h-6 text-islamic-600 mx-auto mb-2" />
                    <div className="font-medium">Audio Call</div>
                    <div className="text-sm text-gray-600">Voice-only session</div>
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!selectedDate || !selectedTime}
                  className="bg-islamic-600 text-white px-8 py-3 rounded-lg hover:bg-islamic-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Review & Payment</h2>
              
              {/* Booking Summary */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Package:</span>
                    <span className="font-medium">{selectedPackage?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{selectedPackage?.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date & Time:</span>
                    <span className="font-medium">{selectedDate} at {selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Session Type:</span>
                    <span className="font-medium capitalize">{sessionType} Call</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-lg font-bold text-islamic-600">${selectedPackage?.price}</span>
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                  placeholder="Any specific topics you'd like to focus on or special requirements..."
                />
              </div>

              {/* Payment Method */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h3>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <CreditCard className="w-5 h-5 text-gray-500" />
                    <span className="font-medium">Credit/Debit Card</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Cardholder Name"
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleBooking}
                  className="bg-islamic-600 text-white px-8 py-3 rounded-lg hover:bg-islamic-700 transition-colors font-medium"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
              <p className="text-gray-600 mb-8">
                Your session with {tutor.name} has been successfully booked. You will receive a confirmation email with the meeting details shortly.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">Session Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date & Time:</span>
                    <span>{selectedDate} at {selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span>{selectedPackage?.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Session Type:</span>
                    <span className="capitalize">{sessionType} Call</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 justify-center">
                <Link
                  to="/dashboard"
                  className="bg-islamic-600 text-white px-6 py-3 rounded-lg hover:bg-islamic-700 transition-colors font-medium"
                >
                  Go to Dashboard
                </Link>
                <Link
                  to="/tutors"
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Book Another Session
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}