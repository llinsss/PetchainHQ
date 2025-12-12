'use client'

import { useState } from 'react'
import { X, Calendar, FileText, Shield, Stethoscope } from 'lucide-react'
import { MEDICAL_RECORD_TYPES, VACCINATION_TYPES } from '@/constants'

interface AddMedicalRecordModalProps {
  petId: string
  onClose: () => void
  onAdd: (record: any) => void
}

export default function AddMedicalRecordModal({ petId, onClose, onAdd }: AddMedicalRecordModalProps) {
  const [formData, setFormData] = useState({
    type: 'vaccination',
    title: '',
    date: new Date().toISOString().split('T')[0],
    vet: '',
    clinic: '',
    notes: '',
    nextDue: '',
    batchNumber: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newRecord = {
      ...formData,
      id: Date.now().toString(),
      petId
    }
    onAdd(newRecord)
    onClose()
  }

  const getIcon = (type: string) => {
    switch (type) {
      case 'vaccination': return <Shield size={20} className="text-green-500" />
      case 'checkup': return <Stethoscope size={20} className="text-blue-500" />
      case 'treatment': return <FileText size={20} className="text-orange-500" />
      default: return <Calendar size={20} className="text-gray-500" />
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div style={{ background: 'var(--bg-card)', borderColor: 'var(--border-primary)' }} className="border rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>Add Medical Record</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
              <X size={18} style={{ color: 'var(--text-tertiary)' }} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Record Type */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Record Type</label>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(MEDICAL_RECORD_TYPES).map(([key, value]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setFormData({...formData, type: value})}
                    className={`p-3 rounded-lg border text-sm font-medium transition-all flex items-center gap-2 ${
                      formData.type === value
                        ? 'border-2'
                        : 'border'
                    }`}
                    style={{
                      background: formData.type === value ? 'var(--primary)' : 'var(--bg-elevated)',
                      borderColor: formData.type === value ? 'var(--primary-light)' : 'var(--border-primary)',
                      color: formData.type === value ? 'white' : 'var(--text-primary)'
                    }}
                  >
                    {getIcon(value)}
                    {key}
                  </button>
                ))}
              </div>
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                {formData.type === 'vaccination' ? 'Vaccine Type' : 'Title'}
              </label>
              {formData.type === 'vaccination' ? (
                <select
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full p-3 rounded-lg border transition-all"
                  style={{
                    background: 'var(--bg-elevated)',
                    borderColor: 'var(--border-primary)',
                    color: 'var(--text-primary)'
                  }}
                >
                  <option value="">Select vaccine type</option>
                  {VACCINATION_TYPES.map(vaccine => (
                    <option key={vaccine} value={vaccine}>{vaccine}</option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full p-3 rounded-lg border transition-all"
                  style={{
                    background: 'var(--bg-elevated)',
                    borderColor: 'var(--border-primary)',
                    color: 'var(--text-primary)'
                  }}
                  placeholder="Enter title"
                />
              )}
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Date</label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full p-3 rounded-lg border transition-all"
                style={{
                  background: 'var(--bg-elevated)',
                  borderColor: 'var(--border-primary)',
                  color: 'var(--text-primary)'
                }}
              />
            </div>

            {/* Vet & Clinic */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Veterinarian</label>
                <input
                  type="text"
                  required
                  value={formData.vet}
                  onChange={(e) => setFormData({...formData, vet: e.target.value})}
                  className="w-full p-3 rounded-lg border transition-all"
                  style={{
                    background: 'var(--bg-elevated)',
                    borderColor: 'var(--border-primary)',
                    color: 'var(--text-primary)'
                  }}
                  placeholder="Dr. Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Clinic</label>
                <input
                  type="text"
                  value={formData.clinic}
                  onChange={(e) => setFormData({...formData, clinic: e.target.value})}
                  className="w-full p-3 rounded-lg border transition-all"
                  style={{
                    background: 'var(--bg-elevated)',
                    borderColor: 'var(--border-primary)',
                    color: 'var(--text-primary)'
                  }}
                  placeholder="Animal Hospital"
                />
              </div>
            </div>

            {/* Next Due (for vaccinations) */}
            {formData.type === 'vaccination' && (
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Next Due Date</label>
                <input
                  type="date"
                  value={formData.nextDue}
                  onChange={(e) => setFormData({...formData, nextDue: e.target.value})}
                  className="w-full p-3 rounded-lg border transition-all"
                  style={{
                    background: 'var(--bg-elevated)',
                    borderColor: 'var(--border-primary)',
                    color: 'var(--text-primary)'
                  }}
                />
              </div>
            )}

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Notes</label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                rows={3}
                className="w-full p-3 rounded-lg border transition-all resize-none"
                style={{
                  background: 'var(--bg-elevated)',
                  borderColor: 'var(--border-primary)',
                  color: 'var(--text-primary)'
                }}
                placeholder="Additional notes..."
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 border rounded-lg font-medium transition-colors"
                style={{ 
                  borderColor: 'var(--border-primary)',
                  color: 'var(--text-secondary)'
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-3 rounded-lg font-medium transition-colors"
                style={{ background: 'var(--primary)', color: 'white' }}
              >
                Add Record
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}