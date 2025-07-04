import React, { useState, useRef, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import { Send, Paperclip, Smile, Phone, Video, MoreVertical, ArrowLeft, Star, Calendar, Clock, Image as ImageIcon, File, Mic, MicOff } from 'lucide-react'

// Mock tutor data
const tutorData = {
  1: {
    id: 1,
    name: "Sheikh Ahmad Al-Mahmoud",
    title: "Quran & Tajweed Specialist",
    image: "https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg",
    isOnline: true,
    lastSeen: "Active now",
    hourlyRate: 45
  }
}

// Mock chat messages
const initialMessages = [
  {
    id: 1,
    senderId: 1,
    senderName: "Sheikh Ahmad Al-Mahmoud",
    message: "Assalamu Alaikum! Thank you for your interest in learning Quran recitation. I'm excited to help you on your journey.",
    timestamp: "10:30 AM",
    type: "text",
    isOwn: false
  },
  {
    id: 2,
    senderId: 2,
    senderName: "You",
    message: "Wa alaikum assalam! I'm really looking forward to starting. I have some basic knowledge but want to improve my Tajweed.",
    timestamp: "10:32 AM",
    type: "text",
    isOwn: true
  },
  {
    id: 3,
    senderId: 1,
    senderName: "Sheikh Ahmad Al-Mahmoud",
    message: "That's wonderful! Tajweed is the foundation of beautiful Quran recitation. What specific areas would you like to focus on?",
    timestamp: "10:33 AM",
    type: "text",
    isOwn: false
  },
  {
    id: 4,
    senderId: 2,
    senderName: "You",
    message: "I struggle with the pronunciation of some letters, especially the heavy letters like ص and ض. Also, I want to learn the proper rules for stopping and starting.",
    timestamp: "10:35 AM",
    type: "text",
    isOwn: true
  },
  {
    id: 5,
    senderId: 1,
    senderName: "Sheikh Ahmad Al-Mahmoud",
    message: "Excellent! Those are very important aspects. I have a structured approach for teaching heavy letters and Waqf rules. Would you like to schedule a trial session to assess your current level?",
    timestamp: "10:37 AM",
    type: "text",
    isOwn: false
  },
  {
    id: 6,
    senderId: 1,
    senderName: "Sheikh Ahmad Al-Mahmoud",
    message: "I'm available this week for a 30-minute trial session. Here are some time slots:",
    timestamp: "10:38 AM",
    type: "schedule",
    isOwn: false,
    scheduleData: {
      slots: [
        { day: "Tomorrow", time: "2:00 PM", available: true },
        { day: "Thursday", time: "10:00 AM", available: true },
        { day: "Friday", time: "3:00 PM", available: true }
      ]
    }
  }
]

export default function Chat() {
  const { tutorId } = useParams()
  const tutor = tutorData[tutorId as keyof typeof tutorData]
  const [messages, setMessages] = useState(initialMessages)
  const [newMessage, setNewMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        senderId: 2,
        senderName: "You",
        message: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: "text" as const,
        isOwn: true
      }
      setMessages([...messages, message])
      setNewMessage('')
      
      // Simulate tutor typing
      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        // Add auto-response (in real app, this would come from backend)
        const autoResponse = {
          id: messages.length + 2,
          senderId: 1,
          senderName: tutor?.name || "Tutor",
          message: "Thank you for your message. I'll get back to you shortly with a detailed response.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          type: "text" as const,
          isOwn: false
        }
        setMessages(prev => [...prev, autoResponse])
      }, 2000)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleFileUpload = () => {
    fileInputRef.current?.click()
  }

  const handleScheduleSlot = (slot: any) => {
    const message = {
      id: messages.length + 1,
      senderId: 2,
      senderName: "You",
      message: `I'd like to book the ${slot.day} at ${slot.time} slot.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: "text" as const,
      isOwn: true
    }
    setMessages([...messages, message])
  }

  if (!tutor) {
    return <div>Tutor not found</div>
  }

  return (
    <>
      <Header />
      <div className="flex h-screen bg-gray-50 pt-16">
        {/* Chat Container */}
        <div className="flex-1 flex flex-col max-w-4xl mx-auto bg-white shadow-lg">
          {/* Chat Header */}
          <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                to={`/tutor/${tutor.id}`}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </Link>
              <img
                src={tutor.image}
                alt={tutor.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h2 className="font-semibold text-gray-900">{tutor.name}</h2>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${tutor.isOnline ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                  <span className="text-sm text-gray-600">{tutor.lastSeen}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Phone className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Video className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <MoreVertical className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md ${message.isOwn ? 'order-2' : 'order-1'}`}>
                  {!message.isOwn && (
                    <div className="flex items-center gap-2 mb-1">
                      <img
                        src={tutor.image}
                        alt={tutor.name}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span className="text-xs text-gray-600">{message.senderName}</span>
                    </div>
                  )}
                  
                  {message.type === 'text' && (
                    <div className={`rounded-2xl px-4 py-3 ${
                      message.isOwn 
                        ? 'bg-islamic-600 text-white' 
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.message}</p>
                    </div>
                  )}
                  
                  {message.type === 'schedule' && (
                    <div className="bg-gray-100 rounded-2xl p-4">
                      <p className="text-sm text-gray-900 mb-3">{message.message}</p>
                      <div className="space-y-2">
                        {message.scheduleData?.slots.map((slot, index) => (
                          <button
                            key={index}
                            onClick={() => handleScheduleSlot(slot)}
                            className="w-full bg-white border border-gray-200 rounded-lg p-3 hover:border-islamic-300 hover:bg-islamic-50 transition-colors text-left"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-islamic-600" />
                                <span className="font-medium text-gray-900">{slot.day}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-gray-500" />
                                <span className="text-gray-600">{slot.time}</span>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className={`text-xs text-gray-500 mt-1 ${message.isOwn ? 'text-right' : 'text-left'}`}>
                    {message.timestamp}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-xs lg:max-w-md">
                  <div className="flex items-center gap-2 mb-1">
                    <img
                      src={tutor.image}
                      alt={tutor.name}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span className="text-xs text-gray-600">{tutor.name}</span>
                  </div>
                  <div className="bg-gray-100 rounded-2xl px-4 py-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <div className="bg-white border-t border-gray-200 p-4">
            <div className="flex items-end gap-3">
              <div className="flex-1">
                <div className="relative">
                  <textarea
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-islamic-500 focus:border-transparent resize-none"
                    rows={1}
                    style={{ minHeight: '44px', maxHeight: '120px' }}
                  />
                  <div className="absolute right-3 bottom-3 flex items-center gap-2">
                    <button 
                      onClick={handleFileUpload}
                      className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <Paperclip className="w-4 h-4 text-gray-500" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                      <Smile className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                </div>
                
                {/* Quick Actions */}
                <div className="flex items-center gap-2 mt-2">
                  <button 
                    onClick={handleFileUpload}
                    className="flex items-center gap-1 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-xs text-gray-600 transition-colors"
                  >
                    <ImageIcon className="w-3 h-3" />
                    Image
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-xs text-gray-600 transition-colors">
                    <File className="w-3 h-3" />
                    File
                  </button>
                  <Link 
                    to={`/book-session/${tutor.id}`}
                    className="flex items-center gap-1 px-3 py-1 bg-islamic-100 hover:bg-islamic-200 rounded-full text-xs text-islamic-700 transition-colors"
                  >
                    <Calendar className="w-3 h-3" />
                    Book Session
                  </Link>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsRecording(!isRecording)}
                  className={`p-3 rounded-full transition-colors ${
                    isRecording 
                      ? 'bg-red-500 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                  }`}
                >
                  {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                </button>
                <button
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                  className="p-3 bg-islamic-600 text-white rounded-full hover:bg-islamic-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-80 bg-white border-l border-gray-200 p-6 hidden lg:block">
          <div className="space-y-6">
            {/* Tutor Info */}
            <div className="text-center">
              <img
                src={tutor.image}
                alt={tutor.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-gray-900">{tutor.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{tutor.title}</p>
              <div className="flex items-center justify-center gap-1 mb-4">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">4.9</span>
                <span className="text-sm text-gray-600">(247 reviews)</span>
              </div>
              <div className="text-2xl font-bold text-islamic-600">${tutor.hourlyRate}/hour</div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
              <Link
                to={`/book-session/${tutor.id}`}
                className="w-full bg-islamic-600 text-white py-3 px-4 rounded-lg hover:bg-islamic-700 transition-colors font-medium text-center block"
              >
                Book a Session
              </Link>
              <Link
                to={`/tutor/${tutor.id}`}
                className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium text-center block"
              >
                View Profile
              </Link>
            </div>

            {/* Chat Info */}
            <div className="border-t pt-6">
              <h4 className="font-semibold text-gray-900 mb-4">Chat Information</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Response time:</span>
                  <span className="font-medium">1 hour</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Languages:</span>
                  <span className="font-medium">Arabic, English</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Timezone:</span>
                  <span className="font-medium">GMT+2</span>
                </div>
              </div>
            </div>

            {/* Shared Files */}
            <div className="border-t pt-6">
              <h4 className="font-semibold text-gray-900 mb-4">Shared Files</h4>
              <div className="text-sm text-gray-600">
                No files shared yet
              </div>
            </div>
          </div>
        </div>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept="image/*,application/pdf,.doc,.docx"
          onChange={(e) => {
            // Handle file upload
            console.log('File selected:', e.target.files?.[0])
          }}
        />
      </div>
    </>
  )
}