import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  FileText, 
  Download, 
  Filter, 
  Search,
  Calendar,
  BarChart3,
  TrendingUp,
  Eye
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { formatDate } from '../lib/utils'

interface Report {
  id: string
  type: 'Voice' | 'Face' | 'Handwriting' | 'Fusion'
  result: 'Truth' | 'Lie'
  confidence: number
  timestamp: Date
  duration?: number
  notes?: string
}

export const Reports: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([])
  const [filteredReports, setFilteredReports] = useState<Report[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState<string>('all')
  const [filterResult, setFilterResult] = useState<string>('all')

  useEffect(() => {
    // Generate mock reports data
    const mockReports: Report[] = [
      {
        id: '1',
        type: 'Voice',
        result: 'Truth',
        confidence: 87,
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
        duration: 45,
        notes: 'Clear speech patterns, consistent pitch'
      },
      {
        id: '2',
        type: 'Face',
        result: 'Lie',
        confidence: 73,
        timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
        duration: 120,
        notes: 'Micro-expressions detected, eye movement patterns'
      },
      {
        id: '3',
        type: 'Handwriting',
        result: 'Truth',
        confidence: 91,
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
        notes: 'Consistent pressure and slant'
      },
      {
        id: '4',
        type: 'Fusion',
        result: 'Truth',
        confidence: 84,
        timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        duration: 180,
        notes: 'Combined analysis from all three methods'
      },
      {
        id: '5',
        type: 'Voice',
        result: 'Lie',
        confidence: 68,
        timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        duration: 60,
        notes: 'Irregular pitch variations detected'
      },
      {
        id: '6',
        type: 'Face',
        result: 'Truth',
        confidence: 79,
        timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
        duration: 90,
        notes: 'Natural facial expressions observed'
      }
    ]
    setReports(mockReports)
    setFilteredReports(mockReports)
  }, [])

  useEffect(() => {
    let filtered = reports

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(report => 
        report.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        report.result.toLowerCase().includes(searchTerm.toLowerCase()) ||
        report.notes?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by type
    if (filterType !== 'all') {
      filtered = filtered.filter(report => report.type === filterType)
    }

    // Filter by result
    if (filterResult !== 'all') {
      filtered = filtered.filter(report => report.result === filterResult)
    }

    setFilteredReports(filtered)
  }, [reports, searchTerm, filterType, filterResult])

  const getTypeColor = (type: string) => {
    const colors = {
      Voice: 'text-neon-blue',
      Face: 'text-neon-purple',
      Handwriting: 'text-neon-green',
      Fusion: 'text-neon-pink'
    }
    return colors[type as keyof typeof colors] || 'text-muted-foreground'
  }

  const getTypeBorder = (type: string) => {
    const borders = {
      Voice: 'border-neon-blue/30',
      Face: 'border-neon-purple/30',
      Handwriting: 'border-neon-green/30',
      Fusion: 'border-neon-pink/30'
    }
    return borders[type as keyof typeof borders] || 'border-muted/30'
  }

  const exportReports = () => {
    const csvContent = [
      ['ID', 'Type', 'Result', 'Confidence', 'Timestamp', 'Duration', 'Notes'],
      ...filteredReports.map(report => [
        report.id,
        report.type,
        report.result,
        `${report.confidence}%`,
        formatDate(report.timestamp),
        report.duration ? `${report.duration}s` : 'N/A',
        report.notes || ''
      ])
    ].map(row => row.join(',')).join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'lie-detection-reports.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  const stats = {
    total: reports.length,
    truthCount: reports.filter(r => r.result === 'Truth').length,
    lieCount: reports.filter(r => r.result === 'Lie').length,
    avgConfidence: Math.round(reports.reduce((sum, r) => sum + r.confidence, 0) / reports.length)
  }

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-2">
          <span className="text-neon-blue neon-text">Reports & Analytics</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          View and analyze your lie detection history and performance metrics
        </p>
      </motion.div>

      {/* Statistics Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        <Card className="glass-morphism border-neon-blue/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Reports</p>
                <p className="text-2xl font-bold text-neon-blue">{stats.total}</p>
              </div>
              <FileText className="h-8 w-8 text-neon-blue/60" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-morphism border-neon-green/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Truth Detected</p>
                <p className="text-2xl font-bold text-neon-green">{stats.truthCount}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-neon-green/60" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-morphism border-red-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Lies Detected</p>
                <p className="text-2xl font-bold text-red-500">{stats.lieCount}</p>
              </div>
              <Eye className="h-8 w-8 text-red-500/60" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-morphism border-neon-purple/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Confidence</p>
                <p className="text-2xl font-bold text-neon-purple">{stats.avgConfidence}%</p>
              </div>
              <BarChart3 className="h-8 w-8 text-neon-purple/60" />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card className="glass-morphism border-muted/30">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Filter className="h-5 w-5" />
              <span>Filters & Search</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="search">Search</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="search"
                    placeholder="Search reports..."
                    value={searchTerm}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="type-filter">Analysis Type</Label>
                <select
                  id="type-filter"
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="w-full h-10 px-3 py-2 bg-background border border-input rounded-md text-sm"
                >
                  <option value="all">All Types</option>
                  <option value="Voice">Voice</option>
                  <option value="Face">Face</option>
                  <option value="Handwriting">Handwriting</option>
                  <option value="Fusion">Fusion</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="result-filter">Result</Label>
                <select
                  id="result-filter"
                  value={filterResult}
                  onChange={(e) => setFilterResult(e.target.value)}
                  className="w-full h-10 px-3 py-2 bg-background border border-input rounded-md text-sm"
                >
                  <option value="all">All Results</option>
                  <option value="Truth">Truth</option>
                  <option value="Lie">Lie</option>
                </select>
              </div>

              <div className="flex items-end">
                <Button
                  onClick={exportReports}
                  variant="outline"
                  className="w-full"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Export CSV
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Reports Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Card className="glass-morphism border-muted/30">
          <CardHeader>
            <CardTitle>Analysis Reports</CardTitle>
            <CardDescription>
              {filteredReports.length} of {reports.length} reports shown
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {filteredReports.map((report, index) => (
                <motion.div
                  key={report.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.05 }}
                  className="p-6 hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${
                        report.result === 'Truth' ? 'bg-neon-green' : 'bg-red-500'
                      }`} />
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className={`font-medium ${getTypeColor(report.type)}`}>
                            {report.type} Analysis
                          </span>
                          <span className="text-xs text-muted-foreground">
                            #{report.id}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {formatDate(report.timestamp)}
                          {report.duration && ` • ${report.duration}s`}
                        </p>
                        {report.notes && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {report.notes}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold text-lg ${
                        report.result === 'Truth' ? 'text-neon-green' : 'text-red-500'
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

            {filteredReports.length === 0 && (
              <div className="p-16 text-center">
                <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Reports Found</h3>
                <p className="text-muted-foreground">
                  {searchTerm || filterType !== 'all' || filterResult !== 'all'
                    ? 'Try adjusting your filters or search terms'
                    : 'Start analyzing to see your reports here'
                  }
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
