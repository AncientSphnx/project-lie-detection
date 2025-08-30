import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Mic, 
  Camera, 
  Type, 
  BarChart3,
  ChevronRight,
  Home
} from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'

const navigationItems = [
  {
    path: '/voice-analysis',
    label: 'Voice Analysis',
    icon: Mic,
    description: 'Audio-based detection'
  },
  {
    path: '/face-analysis',
    label: 'Face Analysis',
    icon: Camera,
    description: 'Video-based detection'
  },
  {
    path: '/text-analysis',
    label: 'Text Analysis',
    icon: Type,
    description: 'Text-based detection'
  },
  {
    path: '/fusion-dashboard',
    label: 'Fusion Dashboard',
    icon: BarChart3,
    description: 'Combined analysis'
  }
]

export const AnalysisNavigation: React.FC = () => {
  const location = useLocation()

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <Card className="shadow-elegant-lg bg-card/50 backdrop-blur-sm border-blue-600/30">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-display font-semibold text-blue-600">
              Detection Methods
            </h3>
            <Link to="/dashboard">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Return to Dashboard
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? "brand" : "outline"}
                    className={`w-full h-auto p-4 flex flex-col items-center gap-2 transition-all duration-200 ${
                      isActive 
                        ? 'bg-blue-600 text-white border-blue-600' 
                        : 'hover:bg-blue-50 hover:border-blue-300'
                    }`}
                  >
                    <Icon className={`h-6 w-6 ${isActive ? 'text-white' : 'text-blue-600'}`} />
                    <div className="text-center">
                      <div className={`font-medium ${isActive ? 'text-white' : 'text-foreground'}`}>
                        {item.label}
                      </div>
                      <div className={`text-xs ${isActive ? 'text-blue-100' : 'text-muted-foreground'}`}>
                        {item.description}
                      </div>
                    </div>
                    {isActive && (
                      <ChevronRight className="h-4 w-4 text-white" />
                    )}
                  </Button>
                </Link>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
