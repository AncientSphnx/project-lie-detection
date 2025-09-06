import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Mic, 
  Camera, 
  Type, 
  BarChart3, 
  TrendingUp,
  Clock,
  CheckCircle
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { useAuth } from '../contexts/AuthContext'

export const Dashboard: React.FC = () => {
  const { user } = useAuth()

  const quickActions = [
    {
      icon: Mic,
      title: 'Voice Analysis',
      description: 'Analyze voice patterns for deception detection',
      path: '/voice-analysis',
      color: 'neon-blue'
    },
    {
      icon: Camera,
      title: 'Face Analysis',
      description: 'Detect micro-expressions and facial cues',
      path: '/face-analysis',
      color: 'neon-purple'
    },
    {
      icon: Type,
      title: 'Text Analysis',
      description: 'Analyze written text for deception patterns',
      path: '/text-analysis',
      color: 'neon-green'
    },
    {
      icon: BarChart3,
      title: 'Fusion Results',
      description: 'Combined analysis from all detection methods',
      path: '/fusion-dashboard',
      color: 'neon-pink'
    }
  ]

  const recentReports = [
    {
      id: '1',
      type: 'Voice Analysis',
      result: 'Truth',
      confidence: 87,
      timestamp: '2 hours ago',
      status: 'completed'
    },
    {
      id: '2',
      type: 'Face Analysis',
      result: 'Lie',
      confidence: 73,
      timestamp: '5 hours ago',
      status: 'completed'
    },
    {
      id: '3',
      type: 'Fusion Analysis',
      result: 'Truth',
      confidence: 91,
      timestamp: '1 day ago',
      status: 'completed'
    }
  ]

  const stats = [
    { label: 'Total Analyses', value: '24', icon: BarChart3 },
    { label: 'Accuracy Rate', value: '94%', icon: TrendingUp },
    { label: 'This Month', value: '8', icon: Clock },
    { label: 'Completed', value: '22', icon: CheckCircle }
  ]

  return (
    <div className="w-full">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold mb-2">
          Welcome back, <span className="text-blue-600 font-display font-semibold">{user?.username}</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          Ready to analyze truth patterns with AI-powered detection
        </p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        {stats.map((stat, index) => (
          <Card key={stat.label} className="shadow-elegant-lg bg-card/50 backdrop-blur-sm border-blue-600/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-display font-semibold text-blue-600">{stat.value}</p>
                </div>
                <stat.icon className="h-8 w-8 text-blue-600/60" />
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-display font-semibold mb-6 text-purple-600">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <Link to={action.path}>
                <Card className="shadow-elegant-lg bg-card/50 backdrop-blur-sm border-blue-600/30 hover:border-blue-600/60 transition-all duration-300 cursor-pointer group">
                  <CardHeader className="text-center">
                    <action.icon className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <CardTitle className="text-lg font-display font-semibold">{action.title}</CardTitle>
                    <CardDescription>{action.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button variant="ghost" className="w-full">
                      Start Analysis
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Recent Reports */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-display font-semibold text-green-600">
            Recent Reports
          </h2>
          <Link to="/reports">
            <Button variant="outline">View All</Button>
          </Link>
        </div>
        
        <Card className="shadow-elegant-lg bg-card/50 backdrop-blur-sm border-green-600/30">
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {recentReports.map((report, index) => (
                <motion.div
                  key={report.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="p-6 hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${
                        report.result === 'Truth' ? 'bg-green-600' : 'bg-red-500'
                      }`} />
                      <div>
                        <p className="font-medium">{report.type}</p>
                        <p className="text-sm text-muted-foreground">{report.timestamp}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-display font-semibold ${
                        report.result === 'Truth' ? 'text-green-600' : 'text-red-500'
                      }`}>
                        {report.result}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {report.confidence}% confidence
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
