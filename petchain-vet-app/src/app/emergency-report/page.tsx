'use client'

import { useState } from 'react'
import { ArrowLeft, AlertTriangle, Phone, Clock, FileText } from 'lucide-react'
import Link from 'next/link'

export default function EmergencyReportPage() {
  const [reportType, setReportType] = useState('critical')
  const [formData, setFormData] = useState({
    patientId: '',
    severity: 'high',
    symptoms: '',
    vitals: '',
    treatment: '',
    notes: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In real app, this would submit to backend
    alert('Emergency report submitted successfully!')
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--medical-surface)' }}>
      {/* Header */}
      <div className="vet-card border-0 rounded-none p-4">
        <div className="flex items-center gap-3 mb-4">
          <Link href="/" className="p-2 hover:bg-gray-700 rounded-lg">
            <ArrowLeft size={20} style={{ color: 'var(--medical-text)' }} />
          </Link>
          <div className="flex items-center gap-2">
            <AlertTriangle size={24} style={{ color: 'var(--medical-warning)' }} />
            <h1 className="text-xl font-bold" style={{ color: 'var(--medical-text)' }}>Emergency Report</h1>
          </div>
        </div>
        
        <div className="status-critical p-3 rounded-lg">
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span className="font-semibold">URGENT - Immediate Action Required</span>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Report Type */}
          <div className="vet-card p-4">
            <h3 className="font-semibold mb-3" style={{ color: 'var(--medical-text)' }}>Report Type</h3>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setReportType('critical')}
                className={`p-3 rounded-lg border text-sm font-medium ${
                  reportType === 'critical' ? 'border-2' : 'border'
                }`}
                style={{
                  background: reportType === 'critical' ? 'var(--medical-warning)' : 'var(--medical-card)',
                  borderColor: reportType === 'critical' ? 'var(--medical-warning)' : 'var(--medical-border)',
                  color: reportType === 'critical' ? 'white' : 'var(--medical-text)'
                }}
              >
                Critical Case
              </button>
              <button
                type="button"
                onClick={() => setReportType('emergency')}
                className={`p-3 rounded-lg border text-sm font-medium ${
                  reportType === 'emergency' ? 'border-2' : 'border'
                }`}
                style={{
                  background: reportType === 'emergency' ? 'var(--medical-warning)' : 'var(--medical-card)',
                  borderColor: reportType === 'emergency' ? 'var(--medical-warning)' : 'var(--medical-border)',
                  color: reportType === 'emergency' ? 'white' : 'var(--medical-text)'
                }}
              >
                Emergency Access
              </button>
            </div>
          </div>

          {/* Patient ID */}
          <div className="vet-card p-4">
            <label className="block text-sm font-medium mb-2" style={{ color: 'var(--medical-text-secondary)' }}>
              Patient ID or Tag ID
            </label>
            <input
              type="text"
              required
              value={formData.patientId}
              onChange={(e) => setFormData({...formData, patientId: e.target.value})}
              className="w-full p-3 rounded-lg border"
              style={{
                background: 'var(--medical-card)',
                borderColor: 'var(--medical-border)',
                color: 'var(--medical-text)'
              }}
              placeholder="PC001 or patient ID"
            />
          </div>

          {/* Severity */}
          <div className="vet-card p-4">
            <label className="block text-sm font-medium mb-2" style={{ color: 'var(--medical-text-secondary)' }}>
              Severity Level
            </label>
            <select
              value={formData.severity}
              onChange={(e) => setFormData({...formData, severity: e.target.value})}
              className="w-full p-3 rounded-lg border"
              style={{
                background: 'var(--medical-card)',
                borderColor: 'var(--medical-border)',
                color: 'var(--medical-text)'
              }}
            >
              <option value="critical">Critical - Life Threatening</option>
              <option value="high">High - Urgent Care Needed</option>
              <option value="medium">Medium - Prompt Attention</option>
            </select>
          </div>

          {/* Symptoms */}
          <div className="vet-card p-4">
            <label className="block text-sm font-medium mb-2" style={{ color: 'var(--medical-text-secondary)' }}>
              Symptoms & Observations
            </label>
            <textarea
              required
              value={formData.symptoms}
              onChange={(e) => setFormData({...formData, symptoms: e.target.value})}
              rows={3}
              className="w-full p-3 rounded-lg border resize-none"
              style={{
                background: 'var(--medical-card)',
                borderColor: 'var(--medical-border)',
                color: 'var(--medical-text)'
              }}
              placeholder="Describe symptoms, behavior, and observations"
            />
          </div>

          {/* Vitals */}
          <div className="vet-card p-4">
            <label className="block text-sm font-medium mb-2" style={{ color: 'var(--medical-text-secondary)' }}>
              Vital Signs
            </label>
            <textarea
              value={formData.vitals}
              onChange={(e) => setFormData({...formData, vitals: e.target.value})}
              rows={2}
              className="w-full p-3 rounded-lg border resize-none"
              style={{
                background: 'var(--medical-card)',
                borderColor: 'var(--medical-border)',
                color: 'var(--medical-text)'
              }}
              placeholder="Temperature, heart rate, breathing, etc."
            />
          </div>

          {/* Immediate Treatment */}
          <div className="vet-card p-4">
            <label className="block text-sm font-medium mb-2" style={{ color: 'var(--medical-text-secondary)' }}>
              Immediate Treatment Given
            </label>
            <textarea
              value={formData.treatment}
              onChange={(e) => setFormData({...formData, treatment: e.target.value})}
              rows={3}
              className="w-full p-3 rounded-lg border resize-none"
              style={{
                background: 'var(--medical-card)',
                borderColor: 'var(--medical-border)',
                color: 'var(--medical-text)'
              }}
              placeholder="Emergency treatment provided"
            />
          </div>

          {/* Additional Notes */}
          <div className="vet-card p-4">
            <label className="block text-sm font-medium mb-2" style={{ color: 'var(--medical-text-secondary)' }}>
              Additional Notes
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({...formData, notes: e.target.value})}
              rows={2}
              className="w-full p-3 rounded-lg border resize-none"
              style={{
                background: 'var(--medical-card)',
                borderColor: 'var(--medical-border)',
                color: 'var(--medical-text)'
              }}
              placeholder="Any additional information"
            />
          </div>

          {/* Emergency Actions */}
          <div className="vet-card p-4">
            <h3 className="font-semibold mb-3" style={{ color: 'var(--medical-text)' }}>Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <button type="button" className="btn-medical">
                <Phone size={16} className="mr-2" />
                Call Owner
              </button>
              <button type="button" className="btn-danger">
                <AlertTriangle size={16} className="mr-2" />
                Alert Team
              </button>
            </div>
          </div>

          {/* Submit */}
          <div className="flex gap-3">
            <Link href="/" className="flex-1">
              <button type="button" className="w-full py-3 border rounded-lg font-medium" style={{ 
                borderColor: 'var(--medical-border)',
                color: 'var(--medical-text-secondary)'
              }}>
                Cancel
              </button>
            </Link>
            <button type="submit" className="flex-1 btn-danger">
              <FileText size={16} className="mr-2" />
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}