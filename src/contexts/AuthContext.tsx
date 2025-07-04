import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type UserRole = 'admin' | 'tutor' | 'student'

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  avatar?: string
  isVerified: boolean
  createdAt: string
  lastLogin?: string
  profile?: {
    phone?: string
    location?: string
    bio?: string
    specialties?: string[]
    languages?: string[]
  }
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  signup: (userData: SignupData) => Promise<void>
  logout: () => void
  loading: boolean
  isAuthenticated: boolean
  hasRole: (role: UserRole) => boolean
  hasAnyRole: (roles: UserRole[]) => boolean
}

interface SignupData {
  name: string
  email: string
  password: string
  role: UserRole
  phone?: string
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock users for demonstration
const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@baytul-ilm.com',
    name: 'Admin User',
    role: 'admin',
    isVerified: true,
    createdAt: '2023-01-01',
    lastLogin: '2024-12-20',
    avatar: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg'
  },
  {
    id: '2',
    email: 'sheikh.ahmad@baytul-ilm.com',
    name: 'Sheikh Ahmad Al-Mahmoud',
    role: 'tutor',
    isVerified: true,
    createdAt: '2023-02-01',
    lastLogin: '2024-12-20',
    avatar: 'https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg',
    profile: {
      phone: '+20 123 456 7890',
      location: 'Cairo, Egypt',
      bio: 'Certified Qari with Ijazah in 7 Qira\'at',
      specialties: ['Quran Recitation', 'Tajweed', 'Memorization'],
      languages: ['Arabic', 'English', 'Urdu']
    }
  },
  {
    id: '3',
    email: 'amina.hassan@email.com',
    name: 'Amina Hassan',
    role: 'student',
    isVerified: true,
    createdAt: '2023-03-01',
    lastLogin: '2024-12-20',
    avatar: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg',
    profile: {
      phone: '+1 555 123 4567',
      location: 'Toronto, Canada',
      bio: 'Passionate about learning Islamic studies'
    }
  }
]

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for stored auth data on mount
    const storedUser = localStorage.getItem('auth_user')
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        localStorage.removeItem('auth_user')
      }
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<void> => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const foundUser = mockUsers.find(u => u.email === email)
      if (!foundUser) {
        throw new Error('Invalid email or password')
      }

      // Update last login
      const updatedUser = { ...foundUser, lastLogin: new Date().toISOString() }
      setUser(updatedUser)
      localStorage.setItem('auth_user', JSON.stringify(updatedUser))
    } catch (error) {
      throw error
    } finally {
      setLoading(false)
    }
  }

  const signup = async (userData: SignupData): Promise<void> => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Check if user already exists
      const existingUser = mockUsers.find(u => u.email === userData.email)
      if (existingUser) {
        throw new Error('User with this email already exists')
      }

      const newUser: User = {
        id: Date.now().toString(),
        email: userData.email,
        name: userData.name,
        role: userData.role,
        isVerified: false,
        createdAt: new Date().toISOString(),
        profile: userData.phone ? { phone: userData.phone } : undefined
      }

      mockUsers.push(newUser)
      setUser(newUser)
      localStorage.setItem('auth_user', JSON.stringify(newUser))
    } catch (error) {
      throw error
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('auth_user')
  }

  const hasRole = (role: UserRole): boolean => {
    return user?.role === role
  }

  const hasAnyRole = (roles: UserRole[]): boolean => {
    return user ? roles.includes(user.role) : false
  }

  const value: AuthContextType = {
    user,
    login,
    signup,
    logout,
    loading,
    isAuthenticated: !!user,
    hasRole,
    hasAnyRole
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}