'use client'

import { useEffect, useState } from 'react'
import { ArrowLeft, Shield, AlertTriangle, Phone, FileText } from 'lucide-react'
import Link from 'next/link'

export default function ScannedPatient({ params }: { params: { tagId: string } }) {
  const [patient, setPatient] = useState<any>(null)

  useEffect(() => {
    // Mock patient lookup by tag ID
    const mockPatients: any = {
      'PC001': {
        id: '1',
        name: 'Buddy',
        species: 'Dog',
        breed: 'Golden Retriever',
        age: 3,
        owner: 'John Doe',
        phone: '+1 234-567-8900',
        allergies: ['Penicillin'],
        emergencyContact: '+1 234-567-8900',
        lastVaccination: '2024-01-15',
        status: 'normal'
      }
    }
    
    setPatient(mockPatients[params.tagId] || null)
  }, [params.tagId])

  if (!patient) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <AlertTriangle size={48} style={{ color: 'var(--medical-warning)' }} className="mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--medical-text)' }}>Tag Not Found</h2>
          <p style={{ color: 'var(--medical-text-secondary)' }} className="mb-4">
            Tag ID "{params.tagId}" not found in system
          </p>
          <Link href="/">
            <button className="btn-medical">Return to Dashboard</button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Link href="/" className="p-2 hover:bg-gray-700 rounded-lg">
          <ArrowLeft size={20} style={{ color: 'var(--medical-text)' }} />
        </Link>
        <div>
          <h1 className="text-xl font-bold" style={{ color: 'var(--medical-text)' }}>Scanned: {patient.name}</h1>
          <p className="text-sm" style={{ color: 'var(--medical-text-tertiary)' }}>Tag ID: {params.tagId}</p>
        </div>
      </div>

      {/* Quick Info Card */}
      <div className="vet-card p-4 mb-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl" style={{ background: 'var(--medical-surface)' }}>
            🐕
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold" style={{ color: 'var(--medical-text)' }}>{patient.name}</h2>
            <p style={{ color: 'var(--medical-text-secondary)' }}>{patient.breed} • {patient.age} years</p>
            <p className="text-sm" style={{ color: 'var(--medical-text-tertiary)' }}>Owner: {patient.owner}</p>
          </div>
          <a href={`tel:${patient.phone}`} className="btn-medical">
            <Phone size={16} className="mr-2" />
            Call
          </a>
        </div>

        {/* Allergies Alert */}
        {patient.allergies.length > 0 && (
          <div className="status-critical p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <AlertTriangle size={16} />
              <span className="font-semibold">ALLERGIES</span>
            </div>
            <p className="text-sm">{patient.allergies.join(', ')}</p>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <Link href={`/patient/${patient.id}`}>
          <button className="w-full btn-medical">
            <FileText size={16} className="mr-2" />
            Full Records
          </button>
        </Link>
        <button className="w-full btn-success">
          <Shield size={16} className="mr-2" />
          Quick Treatment
        </button>
      </div>

      {/* Recent Info */}
      <div className="vet-card p-4">
        <h3 className="font-semibold mb-3" style={{ color: 'var(--medical-text)' }}>Recent Information</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span style={{ color: 'var(--medical-text-tertiary)' }}>Last Vaccination</span>
            <span style={{ color: 'var(--medical-text)' }}>{patient.lastVaccination}</span>
          </div>
          <div className="flex justify-between">
            <span style={{ color: 'var(--medical-text-tertiary)' }}>Status</span>
            <span className="status-normal">{patient.status.toUpperCase()}</span>
          </div>
          <div className="flex justify-between">
            <span style={{ color: 'var(--medical-text-tertiary)' }}>Emergency Contact</span>
            <span style={{ color: 'var(--medical-text)' }}>{patient.emergencyContact}</span>
          </div>
        </div>
      </div>
    </div>
  )
}