import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  BarChart3, 
  TrendingUp, 
  Zap, 
  CheckCircle, 
  AlertTriangle,
  Brain,
  Activity,
  Target,
  Mic,
  Camera,
  Type
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts'
import { MOCK_RESPONSES } from '../config/api'
import { AnalysisNavigation } from '../components/AnalysisNavigation'

export const FusionDashboard: React.FC = () => {
  const [fusionResult, setFusionResult] = useState<any>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [historicalData, setHistoricalData] = useState<any[]>([])

  useEffect(() => {
    // Generate mock historical data
    const mockHistory = Array.from({ length: 10 }, (_, i) => ({
      date: new Date(Date.now() - (9 - i) * 24 * 60 * 60 * 1000).toLocaleDateString(),
      accuracy: 0.75 + Math.random() * 0.2,
      voiceScore: 0.7 + Math.random() * 0.3,
      faceScore: 0.6 + Math.random() * 0.4,
      handwritingScore: 0.8 + Math.random() * 0.2,
    }))
    setHistoricalData(mockHistory)
  }, [])

  const runFusionAnalysis = async () => {
    setIsAnalyzing(true)
    
    // TODO: Connect to your Python fusion model here
    // Example: const result = await fetch('/api/fusion-analysis', { method: 'POST', body: analysisData })
    
    // Placeholder - remove this when connecting to your Python model
    alert('Fusion analysis will be connected to your Python model. Combined analysis ready for processing.')
    
    setIsAnalyzing(false)
  }

  // Prepare chart data
  const individualResults = fusionResult ? [
    { 
      method: 'Voice', 
      confidence: fusionResult.individualResults.voice.confidence * 100,
      result: fusionResult.individualResults.voice.result,
      fill: '#00d4ff'
    },
    { 
      method: 'Face', 
      confidence: fusionResult.individualResults.face.confidence * 100,
      result: fusionResult.individualResults.face.result,
      fill: '#8b5cf6'
    },
    { 
      method: 'Handwriting', 
      confidence: fusionResult.individualResults.handwriting.confidence * 100,
      result: fusionResult.individualResults.handwriting.result,
      fill: '#00ff88'
    }
  ] : []

  const methodDistribution = fusionResult ? [
    { name: 'Voice Analysis', value: 33.3, fill: '#00d4ff' },
    { name: 'Face Analysis', value: 33.3, fill: '#8b5cf6' },
    { name: 'Handwriting Analysis', value: 33.4, fill: '#00ff88' }
  ] : []

  return (
    <div className="space-y-8">
      {/* Navigation */}
      <AnalysisNavigation />
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-display font-bold mb-4 text-blue-600">
          Fusion Dashboard
        </h1>
        <p className="text-muted-foreground text-lg">
          Combine and analyze results from all detection methods for comprehensive lie detection
        </p>
      </motion.div>

      {/* Run Fusion Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Card className="glass-morphism border-neon-pink/30">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center space-x-2">
              <BarChart3 className="h-6 w-6 text-neon-pink" />
              <span>Multi-Modal Fusion Analysis</span>
            </CardTitle>
            <CardDescription>
              Combine results from all three detection methods for enhanced accuracy
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button
              onClick={runFusionAnalysis}
              disabled={isAnalyzing}
              variant="brand"
              size="lg"
              className="px-8"
            >
              {isAnalyzing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
                  Running Fusion Analysis...
                </>
              ) : (
                <>
                  <Zap className="h-4 w-4 mr-2" />
                  Run Fusion Analysis
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {fusionResult && (
        <>
          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="shadow-elegant-lg bg-card/50 backdrop-blur-sm border-muted/30">
              <CardContent className="flex items-center justify-center h-96">
                <div className="text-center space-y-4">
                  <BarChart3 className="h-16 w-16 text-muted-foreground mx-auto" />
                  <h3 className="text-xl font-display font-semibold text-muted-foreground">
                    Ready for Fusion Analysis
                  </h3>
                  <p className="text-muted-foreground max-w-sm">
                    Click "Run Fusion Analysis" to combine results from all detection methods using your Python model.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Final Result */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className={`glass-morphism ${
              fusionResult.finalResult === 'Truth' 
                ? 'border-neon-green/50' 
                : 'border-red-500/50'
            }`}>
              <CardHeader className="text-center">
                <CardTitle className={`text-4xl ${
                  fusionResult.finalResult === 'Truth' 
                    ? 'text-neon-green' 
                    : 'text-red-500'
                }`}>
                  {fusionResult.finalResult}
                </CardTitle>
                <CardDescription className="text-lg">
                  Overall Confidence: {(fusionResult.overallConfidence * 100).toFixed(1)}%
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full bg-muted rounded-full h-4 mb-4">
                  <div
                    className={`h-4 rounded-full ${
                      fusionResult.finalResult === 'Truth' 
                        ? 'bg-neon-green' 
                        : 'bg-red-500'
                    }`}
                    style={{ width: `${fusionResult.overallConfidence * 100}%` }}
                  />
                </div>
                <div className="text-center text-sm text-muted-foreground">
                  Weighted Score: {(fusionResult.weightedScore * 100).toFixed(1)}%
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Individual Method Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-neon-blue neon-text">
              Individual Method Results
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Voice Analysis Result */}
              <Card className="glass-morphism border-neon-blue/30">
                <CardHeader className="text-center">
                  <Mic className="h-5 w-5 text-blue-600" />
                  <CardTitle>Voice Analysis</CardTitle>
                  <CardDescription>
                    {fusionResult.individualResults.voice.result}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-neon-blue mb-2">
                      {(fusionResult.individualResults.voice.confidence * 100).toFixed(1)}%
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-neon-blue h-2 rounded-full"
                        style={{ width: `${fusionResult.individualResults.voice.confidence * 100}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Face Analysis Result */}
              <Card className="glass-morphism border-neon-purple/30">
                <CardHeader className="text-center">
                  <Camera className="h-8 w-8 text-neon-purple mx-auto mb-2" />
                  <CardTitle>Face Analysis</CardTitle>
                  <CardDescription>
                    {fusionResult.individualResults.face.result}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-neon-purple mb-2">
                      {(fusionResult.individualResults.face.confidence * 100).toFixed(1)}%
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-neon-purple h-2 rounded-full"
                        style={{ width: `${fusionResult.individualResults.face.confidence * 100}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Handwriting Analysis Result */}
              <Card className="glass-morphism border-neon-green/30">
                <CardHeader className="text-center">
                  <Type className="h-5 w-5 text-green-600" />
                  <CardTitle>Handwriting Analysis</CardTitle>
                  <CardDescription>
                    {fusionResult.individualResults.handwriting.result}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-neon-green mb-2">
                      {(fusionResult.individualResults.handwriting.confidence * 100).toFixed(1)}%
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-neon-green h-2 rounded-full"
                        style={{ width: `${fusionResult.individualResults.handwriting.confidence * 100}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Confidence Comparison Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="glass-morphism border-neon-blue/30">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-neon-blue" />
                  <span>Method Confidence Comparison</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={individualResults}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="method" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px'
                      }} 
                    />
                    <Bar dataKey="confidence" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Method Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="glass-morphism border-neon-purple/30">
              <CardHeader>
                <CardTitle>Analysis Method Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={methodDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {methodDistribution.map((entry: any, index: number) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </>
      )}

      {/* Historical Performance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Card className="glass-morphism border-neon-green/30">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-neon-green" />
              <span>Historical Performance</span>
            </CardTitle>
            <CardDescription>
              Accuracy trends over the past 10 analyses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={historicalData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="date" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="accuracy" 
                  stroke="#00ff88" 
                  strokeWidth={2}
                  name="Overall Accuracy"
                />
                <Line 
                  type="monotone" 
                  dataKey="voiceScore" 
                  stroke="#00d4ff" 
                  strokeWidth={2}
                  name="Voice Score"
                />
                <Line 
                  type="monotone" 
                  dataKey="faceScore" 
                  stroke="#8b5cf6" 
                  strokeWidth={2}
                  name="Face Score"
                />
                <Line 
                  type="monotone" 
                  dataKey="handwritingScore" 
                  stroke="#ff0080" 
                  strokeWidth={2}
                  name="Handwriting Score"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
