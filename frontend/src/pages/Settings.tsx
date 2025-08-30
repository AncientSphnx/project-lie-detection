import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Shield, 
  Palette,
  Save,
  ArrowLeft
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Label } from '../components/ui/label'
import { Input } from '../components/ui/input'
import { useAuth } from '../contexts/AuthContext'

export const Settings: React.FC = () => {
  const { user } = useAuth()
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    autoSave: true,
    confidenceThreshold: 75,
    language: 'en'
  })

  const handleSave = () => {
    // TODO: Connect to backend to save settings
    alert('Settings saved successfully!')
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-4xl font-display font-bold mb-4 text-blue-600">
            Settings
          </h1>
          <p className="text-muted-foreground text-lg">
            Manage your account preferences and application settings
          </p>
        </div>
        <Link to="/dashboard">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Profile Settings */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="shadow-elegant-lg bg-card/50 backdrop-blur-sm border-blue-600/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-blue-600" />
                Profile Settings
              </CardTitle>
              <CardDescription>
                Update your personal information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  defaultValue={user?.username || ''}
                  placeholder="Enter username"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue={user?.email || ''}
                  placeholder="Enter email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  defaultValue={user?.name || ''}
                  placeholder="Enter full name"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Application Settings */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="shadow-elegant-lg bg-card/50 backdrop-blur-sm border-purple-600/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <SettingsIcon className="h-5 w-5 text-purple-600" />
                Application Settings
              </CardTitle>
              <CardDescription>
                Configure application behavior
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive analysis alerts</p>
                </div>
                <Button
                  variant={settings.notifications ? "brand" : "outline"}
                  size="sm"
                  onClick={() => setSettings(prev => ({ ...prev, notifications: !prev.notifications }))}
                >
                  {settings.notifications ? 'On' : 'Off'}
                </Button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label>Auto-save Results</Label>
                  <p className="text-sm text-muted-foreground">Automatically save analysis results</p>
                </div>
                <Button
                  variant={settings.autoSave ? "brand" : "outline"}
                  size="sm"
                  onClick={() => setSettings(prev => ({ ...prev, autoSave: !prev.autoSave }))}
                >
                  {settings.autoSave ? 'On' : 'Off'}
                </Button>
              </div>

              <div className="space-y-2">
                <Label htmlFor="threshold">Confidence Threshold (%)</Label>
                <Input
                  id="threshold"
                  type="number"
                  min="0"
                  max="100"
                  value={settings.confidenceThreshold}
                  onChange={(e) => setSettings(prev => ({ ...prev, confidenceThreshold: parseInt(e.target.value) }))}
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Security Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="shadow-elegant-lg bg-card/50 backdrop-blur-sm border-green-600/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                Security & Privacy
              </CardTitle>
              <CardDescription>
                Manage your security preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full">
                Change Password
              </Button>
              <Button variant="outline" className="w-full">
                Two-Factor Authentication
              </Button>
              <Button variant="outline" className="w-full">
                Download My Data
              </Button>
              <Button variant="destructive" className="w-full">
                Delete Account
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Appearance Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="shadow-elegant-lg bg-card/50 backdrop-blur-sm border-orange-600/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-orange-600" />
                Appearance
              </CardTitle>
              <CardDescription>
                Customize the look and feel
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">Use dark theme</p>
                </div>
                <Button
                  variant={settings.darkMode ? "brand" : "outline"}
                  size="sm"
                  onClick={() => setSettings(prev => ({ ...prev, darkMode: !prev.darkMode }))}
                >
                  {settings.darkMode ? 'On' : 'Off'}
                </Button>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <select
                  id="language"
                  value={settings.language}
                  onChange={(e) => setSettings(prev => ({ ...prev, language: e.target.value }))}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                </select>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Save Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex justify-center"
      >
        <Button
          onClick={handleSave}
          size="lg"
          className="flex items-center gap-2 px-8"
        >
          <Save className="h-4 w-4" />
          Save All Settings
        </Button>
      </motion.div>
    </div>
  )
}
