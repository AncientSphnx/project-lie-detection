import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Zap, Target, Brain } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

export const Landing: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze multiple data points for accurate detection.'
    },
    {
      icon: Shield,
      title: 'Multi-Modal Detection',
      description: 'Combines voice, facial expression, and handwriting analysis for comprehensive results.'
    },
    {
      icon: Zap,
      title: 'Real-Time Processing',
      description: 'Get instant results with our optimized processing pipeline.'
    },
    {
      icon: Target,
      title: 'High Accuracy',
      description: 'Trained on extensive datasets to provide reliable truth detection capabilities.'
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-neon-purple/10 to-neon-green/10" />
        <div className="relative container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-neon-blue neon-text">AI-Driven</span>
              <br />
              <span className="text-neon-purple neon-text">Lie Detection</span>
              <br />
              <span className="text-neon-green neon-text">System</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Advanced truth analysis using cutting-edge AI technology. 
              Analyze voice patterns, facial expressions, and handwriting to detect deception with unprecedented accuracy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button variant="brand" size="lg" className="text-lg px-8 py-3">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                  Login
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-neon-blue/20 rounded-full animate-glow" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-neon-purple/20 rounded-full animate-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-neon-green/20 rounded-full animate-glow" style={{ animationDelay: '2s' }} />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-neon-blue neon-text">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our system analyzes multiple behavioral and physiological indicators 
              to provide comprehensive lie detection capabilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-morphism border-neon-blue/30 hover:border-neon-blue/60 transition-all duration-300">
                  <CardHeader className="text-center">
                    <feature.icon className="h-12 w-12 text-neon-blue mx-auto mb-4" />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-neon-purple neon-text">
              Analysis Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple three-step process to get accurate lie detection results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: '01', title: 'Input Data', desc: 'Upload voice, video, or handwriting samples' },
              { step: '02', title: 'AI Analysis', desc: 'Our algorithms analyze patterns and extract features' },
              { step: '03', title: 'Get Results', desc: 'Receive detailed analysis with confidence scores' }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl font-bold text-neon-green/30 mb-4">{item.step}</div>
                <h3 className="text-2xl font-semibold mb-2 text-neon-green">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-neon-blue neon-text">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust our AI-powered lie detection system 
              for accurate and reliable truth analysis.
            </p>
            <Link to="/signup">
              <Button variant="brand" size="lg" className="text-lg px-8 py-3">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
