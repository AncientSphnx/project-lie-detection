import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mic, 
  Camera, 
  PenTool, 
  BarChart3,
  Brain,
  Zap,
  Target,
  ArrowRight,
  Play
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Button } from '../components/ui/button'

export const HowItWorks: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null)

  const analysisSteps = [
    {
      step: '01',
      title: 'Data Input',
      description: 'User provides voice recording, video, or handwriting sample',
      icon: Target,
      color: 'neon-blue'
    },
    {
      step: '02',
      title: 'Feature Extraction',
      description: 'AI algorithms extract relevant patterns and characteristics',
      icon: Brain,
      color: 'neon-purple'
    },
    {
      step: '03',
      title: 'Model Analysis',
      description: 'Trained models analyze features for deception indicators',
      icon: Zap,
      color: 'neon-green'
    },
    {
      step: '04',
      title: 'Result Generation',
      description: 'System provides truth/lie determination with confidence score',
      icon: BarChart3,
      color: 'neon-pink'
    }
  ]

  const voiceFeatures = [
    { name: 'Pitch Variation', description: 'Changes in fundamental frequency patterns' },
    { name: 'MFCC Coefficients', description: 'Mel-frequency cepstral coefficients for spectral analysis' },
    { name: 'Jitter & Shimmer', description: 'Voice quality measurements for irregularities' },
    { name: 'Spectral Features', description: 'Frequency domain characteristics of speech' },
    { name: 'Prosodic Features', description: 'Rhythm, stress, and intonation patterns' }
  ]

  const faceFeatures = [
    { name: 'Micro-expressions', description: 'Brief involuntary facial expressions' },
    { name: 'Eye Movement', description: 'Gaze patterns and blink rate analysis' },
    { name: 'Facial Action Units', description: 'Individual muscle movements in the face' },
    { name: 'Emotion Recognition', description: 'Detection of basic and complex emotions' },
    { name: 'Head Pose', description: 'Orientation and movement of the head' }
  ]

  const handwritingFeatures = [
    { name: 'Pressure Patterns', description: 'Force applied while writing' },
    { name: 'Slant Analysis', description: 'Angle and consistency of letter slant' },
    { name: 'Spacing Metrics', description: 'Letter and word spacing variations' },
    { name: 'Stroke Dynamics', description: 'Speed and fluency of pen movements' },
    { name: 'Baseline Deviation', description: 'Consistency of writing line alignment' }
  ]

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-neon-purple neon-text">How It Works</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Understanding the science and technology behind our AI-driven lie detection system
        </p>
      </motion.div>

      {/* Process Overview */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-neon-blue neon-text">
          Analysis Process
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {analysisSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card className={`glass-morphism border-${step.color}/30 text-center`}>
                <CardContent className="p-6">
                  <div className={`text-4xl font-bold text-${step.color}/30 mb-4`}>
                    {step.step}
                  </div>
                  <step.icon className={`h-12 w-12 text-${step.color} mx-auto mb-4`} />
                  <h3 className={`text-lg font-semibold text-${step.color} mb-2`}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Detailed Analysis Methods */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-neon-green neon-text">
          Analysis Methods
        </h2>
        <Tabs defaultValue="voice" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="voice" className="flex items-center space-x-2">
              <Mic className="h-4 w-4" />
              <span>Voice Analysis</span>
            </TabsTrigger>
            <TabsTrigger value="face" className="flex items-center space-x-2">
              <Camera className="h-4 w-4" />
              <span>Face Analysis</span>
            </TabsTrigger>
            <TabsTrigger value="handwriting" className="flex items-center space-x-2">
              <PenTool className="h-4 w-4" />
              <span>Handwriting</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="voice">
            <Card className="glass-morphism border-neon-blue/30">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mic className="h-6 w-6 text-neon-blue" />
                  <span>Voice Pattern Analysis</span>
                </CardTitle>
                <CardDescription>
                  Our voice analysis system examines multiple acoustic and linguistic features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-4 text-neon-blue">Key Features Analyzed:</h4>
                    <div className="space-y-3">
                      {voiceFeatures.map((feature, index) => (
                        <div key={feature.name} className="p-3 bg-neon-blue/10 rounded-lg border border-neon-blue/20">
                          <h5 className="font-medium text-neon-blue">{feature.name}</h5>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-neon-blue">How It Works:</h4>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-neon-blue rounded-full flex items-center justify-center text-xs font-bold text-black">1</div>
                        <p className="text-sm">Audio preprocessing and noise reduction</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-neon-blue rounded-full flex items-center justify-center text-xs font-bold text-black">2</div>
                        <p className="text-sm">Feature extraction using signal processing techniques</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-neon-blue rounded-full flex items-center justify-center text-xs font-bold text-black">3</div>
                        <p className="text-sm">Machine learning model analyzes patterns</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-neon-blue rounded-full flex items-center justify-center text-xs font-bold text-black">4</div>
                        <p className="text-sm">Confidence score calculation and result generation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="face">
            <Card className="glass-morphism border-neon-purple/30">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Camera className="h-6 w-6 text-neon-purple" />
                  <span>Facial Expression Analysis</span>
                </CardTitle>
                <CardDescription>
                  Advanced computer vision techniques to detect micro-expressions and emotional cues
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-4 text-neon-purple">Key Features Analyzed:</h4>
                    <div className="space-y-3">
                      {faceFeatures.map((feature, index) => (
                        <div key={feature.name} className="p-3 bg-neon-purple/10 rounded-lg border border-neon-purple/20">
                          <h5 className="font-medium text-neon-purple">{feature.name}</h5>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-neon-purple">Detection Process:</h4>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-neon-purple rounded-full flex items-center justify-center text-xs font-bold text-black">1</div>
                        <p className="text-sm">Face detection and landmark identification</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-neon-purple rounded-full flex items-center justify-center text-xs font-bold text-black">2</div>
                        <p className="text-sm">Real-time tracking of facial movements</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-neon-purple rounded-full flex items-center justify-center text-xs font-bold text-black">3</div>
                        <p className="text-sm">Micro-expression detection using temporal analysis</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-neon-purple rounded-full flex items-center justify-center text-xs font-bold text-black">4</div>
                        <p className="text-sm">Emotion classification and deception scoring</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="handwriting">
            <Card className="glass-morphism border-neon-green/30">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <PenTool className="h-6 w-6 text-neon-green" />
                  <span>Handwriting Pattern Analysis</span>
                </CardTitle>
                <CardDescription>
                  Graphological analysis combined with machine learning for deception detection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-4 text-neon-green">Key Features Analyzed:</h4>
                    <div className="space-y-3">
                      {handwritingFeatures.map((feature, index) => (
                        <div key={feature.name} className="p-3 bg-neon-green/10 rounded-lg border border-neon-green/20">
                          <h5 className="font-medium text-neon-green">{feature.name}</h5>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-neon-green">Analysis Pipeline:</h4>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-neon-green rounded-full flex items-center justify-center text-xs font-bold text-black">1</div>
                        <p className="text-sm">Image preprocessing and text segmentation</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-neon-green rounded-full flex items-center justify-center text-xs font-bold text-black">2</div>
                        <p className="text-sm">Character and word-level feature extraction</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-neon-green rounded-full flex items-center justify-center text-xs font-bold text-black">3</div>
                        <p className="text-sm">Statistical analysis of writing patterns</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-neon-green rounded-full flex items-center justify-center text-xs font-bold text-black">4</div>
                        <p className="text-sm">Deception indicator scoring and classification</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.section>

      {/* Fusion Algorithm */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Card className="glass-morphism border-neon-pink/30">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-2xl">
              <BarChart3 className="h-6 w-6 text-neon-pink" />
              <span>Multi-Modal Fusion Algorithm</span>
            </CardTitle>
            <CardDescription>
              Advanced ensemble method combining results from all three analysis types
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-neon-pink">Fusion Process:</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-neon-blue/20 rounded-full flex items-center justify-center">
                      <Mic className="h-4 w-4 text-neon-blue" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Voice confidence: 87%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-neon-purple/20 rounded-full flex items-center justify-center">
                      <Camera className="h-4 w-4 text-neon-purple" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Face confidence: 73%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-neon-green/20 rounded-full flex items-center justify-center">
                      <PenTool className="h-4 w-4 text-neon-green" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Handwriting confidence: 91%</span>
                  </div>
                  <div className="border-t border-muted pt-4 mt-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-neon-pink/20 rounded-full flex items-center justify-center">
                        <BarChart3 className="h-4 w-4 text-neon-pink" />
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-semibold">Final result: 84% Truth</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-neon-pink">Algorithm Features:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Weighted ensemble based on individual method reliability</li>
                  <li>• Dynamic confidence adjustment based on data quality</li>
                  <li>• Conflict resolution when methods disagree</li>
                  <li>• Uncertainty quantification for borderline cases</li>
                  <li>• Continuous learning from new data</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  )
}
