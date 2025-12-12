'use client'

import { useState } from 'react'
import { X, FileText, Shield, Stethoscope, Scissors } from 'lucide-react'

interface AddTreatmentModalProps {
  patientId: string
  patientName: string
  onClose: () => void
  onAdd: (treatment: any) => void
}

export default function AddTreatmentModal({ patientId, patientName, onClose, onAdd }: AddTreatmentModalProps) {
  const [formData, setFormData] = useState({
    type: 'treatment',
    title: '',
    date: new Date().toISOString().split('T')[0],
    time: new Date().toTimeString().slice(0, 5),
    diagnosis: '',
    treatment: '',
    medications: '',
    dosage: '',
    instructions: '',
    followUp: '',
    critical: false,
    cost: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newTreatment = {
      ...formData,
      id: Date.now().toString(),
      patientId,
      vet: 'Dr. Current User' // In real app, get from auth
    }
    onAdd(newTreatment)
    onClose()
  }

  const treatmentTypes = [
    { value: 'treatment', label: 'Treatment', icon: <Stethoscope size={16} /> },
    { value: 'vaccination', label: 'Vaccination', icon: <Shield size={16} /> },
    { value: 'surgery', label: 'Surgery', icon: <Scissors size={16} /> },
    { value: 'checkup', label: 'Checkup', icon: <FileText size={16} /> }
  ]

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="vet-card w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-semibold" style={{ color: 'var(--medical-text)' }}>Add Treatment</h2>
              <p className="text-sm" style={{ color: 'var(--medical-text-secondary)' }}>Patient: {patientName}</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
              <X size={18} style={{ color: 'var(--medical-text-tertiary)' }} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Treatment Type */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--medical-text-secondary)' }}>Treatment Type</label>
              <div className="grid grid-cols-2 gap-2">
                {treatmentTypes.map(type => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => setFormData({...formData, type: type.value})}
                    className={`p-3 rounded-lg border text-sm font-medium transition-all flex items-center gap-2 ${
                      formData.type === type.value
                        ? 'border-2'
                        : 'border'
                    }`}
                    style={{
                      background: formData.type === type.value ? 'var(--medical-primary)' : 'var(--medical-card)',
                      borderColor: formData.type === type.value ? 'var(--medical-primary)' : 'var(--medical-border)',
                      color: formData.type === type.value ? 'white' : 'var(--medical-text)'
                    }}
                  >
                    {type.icon}
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--medical-text-secondary)' }}>Title</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full p-3 rounded-lg border"
                style={{
                  background: 'var(--medical-card)',
                  borderColor: 'var(--medical-border)',
                  color: 'var(--medical-text)'
                }}
                placeholder="Brief description of treatment"
              />
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--medical-text-secondary)' }}>Date</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full p-3 rounded-lg border"
                  style={{
                    background: 'var(--medical-card)',
                    borderColor: 'var(--medical-border)',
                    color: 'var(--medical-text)'
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--medical-text-secondary)' }}>Time</label>
                <input
                  type="time"
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  className="w-full p-3 rounded-lg border"
                  style={{
                    background: 'var(--medical-card)',
                    borderColor: 'var(--medical-border)',
                    color: 'var(--medical-text)'
                  }}
                />
              </div>
            </div>

            {/* Diagnosis */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--medical-text-secondary)' }}>Diagnosis</label>
              <textarea
                value={formData.diagnosis}
                onChange={(e) => setFormData({...formData, diagnosis: e.target.value})}
                rows={2}
                className="w-full p-3 rounded-lg border resize-none"
                style={{
                  background: 'var(--medical-card)',
                  borderColor: 'var(--medical-border)',
                  color: 'var(--medical-text)'
                }}
                placeholder="Clinical findings and diagnosis"
              />
            </div>

            {/* Treatment */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--medical-text-secondary)' }}>Treatment Provided</label>
              <textarea
                required
                value={formData.treatment}
                onChange={(e) => setFormData({...formData, treatment: e.target.value})}
                rows={3}
                className="w-full p-3 rounded-lg border resize-none"
                style={{
                  background: 'var(--medical-card)',
                  borderColor: 'var(--medical-border)',
                  color: 'var(--medical-text)'
                }}
                placeholder="Describe treatment provided"
              />
            </div>

            {/* Medications */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--medical-text-secondary)' }}>Medications</label>
                <input
                  type="text"
                  value={formData.medications}
                  onChange={(e) => setFormData({...formData, medications: e.target.value})}
                  className="w-full p-3 rounded-lg border"
                  style={{
                    background: 'var(--medical-card)',
                    borderColor: 'var(--medical-border)',
                    color: 'var(--medical-text)'
                  }}
                  placeholder="Prescribed medications"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--medical-text-secondary)' }}>Dosage</label>
                <input
                  type="text"
                  value={formData.dosage}
                  onChange={(e) => setFormData({...formData, dosage: e.target.value})}
                  className="w-full p-3 rounded-lg border"
                  style={{
                    background: 'var(--medical-card)',
                    borderColor: 'var(--medical-border)',
                    color: 'var(--medical-text)'
                  }}
                  placeholder="Dosage instructions"
                />
              </div>
            </div>

            {/* Instructions */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--medical-text-secondary)' }}>Care Instructions</label>
              <textarea
                value={formData.instructions}
                onChange={(e) => setFormData({...formData, instructions: e.target.value})}
                rows={2}
                className="w-full p-3 rounded-lg border resize-none"
                style={{
                  background: 'var(--medical-card)',
                  borderColor: 'var(--medical-border)',
                  color: 'var(--medical-text)'
                }}
                placeholder="Instructions for pet owner"
              />
            </div>

            {/* Follow-up & Cost */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--medical-text-secondary)' }}>Follow-up Date</label>
                <input
                  type="date"
                  value={formData.followUp}
                  onChange={(e) => setFormData({...formData, followUp: e.target.value})}
                  className="w-full p-3 rounded-lg border"
                  style={{
                    background: 'var(--medical-card)',
                    borderColor: 'var(--medical-border)',
                    color: 'var(--medical-text)'
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--medical-text-secondary)' }}>Cost ($)</label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.cost}
                  onChange={(e) => setFormData({...formData, cost: e.target.value})}
                  className="w-full p-3 rounded-lg border"
                  style={{
                    background: 'var(--medical-card)',
                    borderColor: 'var(--medical-border)',
                    color: 'var(--medical-text)'
                  }}
                  placeholder="0.00"
                />
              </div>
            </div>

            {/* Critical Flag */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="critical"
                checked={formData.critical}
                onChange={(e) => setFormData({...formData, critical: e.target.checked})}
                className="w-4 h-4 text-red-600 rounded"
              />
              <label htmlFor="critical" className="text-sm font-medium" style={{ color: 'var(--medical-text-secondary)' }}>
                Mark as critical/urgent
              </label>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 border rounded-lg font-medium transition-colors"
                style={{ 
                  borderColor: 'var(--medical-border)',
                  color: 'var(--medical-text-secondary)'
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 btn-medical"
              >
                Add Treatment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}