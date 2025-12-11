'use client'

import { useState } from 'react'
import { Scan, Search, Calendar, FileText, AlertTriangle, Shield } from 'lucide-react'
import PatientCard from '@/components/PatientCard'
import QRScanner from '@/components/QRScanner'

interface Patient {
  id: string
  name: string
  species: string
  breed: string
  age: number
  owner: string
  lastVisit: string
  status: 'critical' | 'normal' | 'warning'
  tagId: string
}

export default function VetDashboard() {
  const [showScanner, setShowScanner] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const patients: Patient[] = [
    {
      id: '1',
      name: 'Buddy',
      species: 'Dog',
      breed: 'Golden Retriever',
      age: 3,
      owner: 'John Doe',
      lastVisit: '2024-01-15',
      status: 'normal',
      tagId: 'PC001'
    },
    {
      id: '2',
      name: 'Whiskers',
      species: 'Cat',
      breed: 'Persian',
      age: 5,
      owner: 'Jane Smith',
      lastVisit: '2024-01-10',
      status: 'warning',
      tagId: 'PC002'
    }
  ]

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.owner.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.tagId.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="p-5">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--medical-primary)' }}>
            <span className="text-white font-semibold text-sm">🏥</span>
          </div>
          <h1 className="text-2xl font-semibold" style={{ color: 'var(--medical-text)' }}>Vet Portal</h1>
        </div>
        <p style={{ color: 'var(--medical-text-tertiary)' }} className="text-sm">Access patient records securely</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button 
          onClick={() => setShowScanner(true)}
          className="vet-card p-4 flex flex-col items-center gap-2 text-center"
        >
          <Scan size={24} style={{ color: 'var(--medical-primary)' }} />
          <span className="text-sm font-medium" style={{ color: 'var(--medical-text)' }}>Scan QR Tag</span>
        </button>
        <button className="vet-card p-4 flex flex-col items-center gap-2 text-center">
          <Calendar size={24} style={{ color: 'var(--medical-secondary)' }} />
          <span className="text-sm font-medium" style={{ color: 'var(--medical-text)' }}>Appointments</span>
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search size={18} className="absolute left-3 top-3" style={{ color: 'var(--medical-text-tertiary)' }} />
          <input
            type="text"
            placeholder="Search patients, owners, or tag IDs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border transition-all"
            style={{
              background: 'var(--medical-card)',
              borderColor: 'var(--medical-border)',
              color: 'var(--medical-text)'
            }}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="vet-card p-3 text-center">
          <div className="text-lg font-semibold mb-1" style={{ color: 'var(--medical-secondary)' }}>12</div>
          <div className="text-xs" style={{ color: 'var(--medical-text-tertiary)' }}>Today's Patients</div>
        </div>
        <div className="vet-card p-3 text-center">
          <div className="text-lg font-semibold mb-1" style={{ color: 'var(--medical-warning)' }}>3</div>
          <div className="text-xs" style={{ color: 'var(--medical-text-tertiary)' }}>Critical Cases</div>
        </div>
        <div className="vet-card p-3 text-center">
          <div className="text-lg font-semibold mb-1" style={{ color: 'var(--medical-primary)' }}>156</div>
          <div className="text-xs" style={{ color: 'var(--medical-text-tertiary)' }}>Total Records</div>
        </div>
      </div>

      {/* Patient List */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3" style={{ color: 'var(--medical-text)' }}>Recent Patients</h2>
        <div className="space-y-3">
          {filteredPatients.length === 0 ? (
            <div className="text-center py-8">
              <FileText size={32} style={{ color: 'var(--medical-text-tertiary)' }} className="mx-auto mb-2" />
              <p style={{ color: 'var(--medical-text-secondary)' }}>No patients found</p>
            </div>
          ) : (
            filteredPatients.map(patient => (
              <PatientCard key={patient.id} patient={patient} />
            ))
          )}
        </div>
      </div>

      {/* Emergency Actions */}
      <div className="vet-card p-4">
        <h3 className="font-semibold mb-3 flex items-center gap-2" style={{ color: 'var(--medical-text)' }}>
          <AlertTriangle size={18} style={{ color: 'var(--medical-warning)' }} />
          Emergency Actions
        </h3>
        <div className="space-y-2">
          <button className="w-full btn-medical text-left">
            <Shield size={16} className="inline mr-2" />
            Access Emergency Records
          </button>
          <button className="w-full btn-danger text-left">
            <AlertTriangle size={16} className="inline mr-2" />
            Report Critical Case
          </button>
        </div>
      </div>

      {/* QR Scanner Modal */}
      {showScanner && (
        <QRScanner onClose={() => setShowScanner(false)} />
      )}
    </div>
  )
}