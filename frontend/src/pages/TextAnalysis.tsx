import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Type, 
  FileText, 
  Zap,
  BarChart3,
  MessageSquare,
  Brain
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Label } from '../components/ui/label'
import { AnalysisNavigation } from '../components/AnalysisNavigation'

export const TextAnalysis: React.FC = () => {
  const [textInput, setTextInput] = useState<string>('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const analyzeText = async () => {
    if (!textInput.trim()) return

    setIsAnalyzing(true)
    
    // TODO: Connect to your Python text detection model here
    // Example: const result = await fetch('/api/text-analysis', { method: 'POST', body: { text: textInput } })
    
    // Placeholder - remove this when connecting to your Python model
    alert('Text analysis will be connected to your Python model. Text ready for processing.')
    
    setIsAnalyzing(false)
  }

  const clearAnalysis = () => {
    setTextInput('')
  }

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
          Text-Based Lie Detection
        </h1>
        <p className="text-muted-foreground text-lg">
          Analyze written text for deception patterns using advanced NLP and linguistic analysis
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Text Input Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="shadow-elegant-lg bg-card/50 backdrop-blur-sm border-blue-600/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Type className="h-5 w-5 text-blue-600" />
                Text Input
              </CardTitle>
              <CardDescription>
                Enter the text you want to analyze for deception patterns
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Text Input Area */}
              <div className="space-y-2">
                <Label htmlFor="textInput">Text to Analyze</Label>
                <textarea
                  id="textInput"
                  placeholder="Enter or paste the text you want to analyze for deception patterns..."
                  value={textInput}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setTextInput(e.target.value)}
                  className="min-h-[200px] resize-none flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={isAnalyzing}
                />
                <p className="text-sm text-muted-foreground">
                  {textInput.length} characters • Minimum 50 characters recommended
                </p>
              </div>

              {/* Analysis Controls */}
              <div className="flex gap-4">
                <Button
                  onClick={analyzeText}
                  disabled={!textInput.trim() || textInput.length < 10 || isAnalyzing}
                  variant="brand"
                  size="lg"
                  className="flex-1"
                >
                  {isAnalyzing ? (
                    <>
                      <Zap className="h-4 w-4 mr-2 animate-pulse" />
                      Analyzing Text...
                    </>
                  ) : (
                    <>
                      <Brain className="h-4 w-4 mr-2" />
                      Analyze Text
                    </>
                  )}
                </Button>
                
                {textInput && (
                  <Button
                    onClick={clearAnalysis}
                    variant="outline"
                    size="lg"
                    disabled={isAnalyzing}
                  >
                    Clear
                  </Button>
                )}
              </div>

              {/* Analysis Features */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MessageSquare className="h-4 w-4" />
                  Linguistic Patterns
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <FileText className="h-4 w-4" />
                  Semantic Analysis
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <BarChart3 className="h-4 w-4" />
                  Statistical Modeling
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Brain className="h-4 w-4" />
                  AI-Powered Detection
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Results Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="shadow-elegant-lg bg-card/50 backdrop-blur-sm border-muted/30">
            <CardContent className="flex items-center justify-center h-96">
              <div className="text-center space-y-4">
                <Type className="h-16 w-16 text-muted-foreground mx-auto" />
                <h3 className="text-xl font-display font-semibold text-muted-foreground">
                  Ready for Text Analysis
                </h3>
                <p className="text-muted-foreground max-w-sm">
                  Enter text in the input area and click "Analyze Text" to connect with your Python model.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
