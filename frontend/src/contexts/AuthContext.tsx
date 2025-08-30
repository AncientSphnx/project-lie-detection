import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface User {
  id: string
  name: string
  username: string
  email: string
}

interface AuthContextType {
  user: User | null
  login: (username: string, email: string, password: string) => Promise<boolean>
  signup: (name: string, username: string, email: string, password: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing session on app load
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        console.error('Error parsing stored user:', error)
        localStorage.removeItem('user')
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (username: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Mock authentication - in real app, this would be an API call
    if (username && email && password.length >= 6) {
      const mockUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        name: email.split('@')[0],
        username: username,
        email: email,
      }
      
      setUser(mockUser)
      localStorage.setItem('user', JSON.stringify(mockUser))
      setIsLoading(false)
      return true
    }
    
    setIsLoading(false)
    return false
  }

  const signup = async (name: string, username: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Mock registration - in real app, this would be an API call
    if (name && username && email && password.length >= 6) {
      const mockUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        name: name,
        username: username,
        email: email,
      }
      
      setUser(mockUser)
      localStorage.setItem('user', JSON.stringify(mockUser))
      setIsLoading(false)
      return true
    }
    
    setIsLoading(false)
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const value: AuthContextType = {
    user,
    login,
    signup,
    logout,
    isLoading,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
