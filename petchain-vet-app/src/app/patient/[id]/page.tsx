'use client'

import { useState } from 'react'
import { ArrowLeft, Plus, Calendar, FileText, AlertTriangle, Shield, Phone } from 'lucide-react'
import Link from 'next/link'

interface MedicalRecord {
  id: string
  date: string
  type: 'vaccination' | 'checkup' | 'treatment' | 'surgery'
  title: string
  vet: string
  notes: string
  critical?: boolean
}

export default function PatientDetail({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState('records')

  // Mock patient data
  const patient = {
    id: params.id,
    name: 'Buddy',
    species: 'Dog',
    breed: 'Golden Retriever',
    age: 3,
    weight: '30 kg',
    owner: 'John Doe',
    phone: '+1 234-567-8900',
    tagId: 'PC001',
    microchip: 'MC123456789',
    allergies: ['Penicillin', 'Chicken'],
    emergencyContact: '+1 234-567-8900'
  }

  const medicalRecords: MedicalRecord[] = [
    {
      id: '1',
      date: '2024-01-15',
      type: 'vaccination',
      title: 'Rabies Vaccination',
      vet: 'Dr. Smith',
      notes: 'Annual rabies vaccination completed. No adverse reactions observed.',
    },
    {
      id: '2',
      date: '2024-01-10',
      type: 'checkup',
      title: 'Routine Health Check',
      vet: 'Dr. Johnson',
      notes: 'Overall health good. Slight weight gain noted. Recommend diet adjustment.',
    },
    {
      id: '3',
      date: '2023-12-20',
      type: 'treatment',
      title: 'Ear Infection Treatment',
      vet: 'Dr. Smith',
      notes: 'Prescribed antibiotic drops. Follow-up in 1 week.',
      critical: true
    }
  ]

  return (
    <div className="min-h-screen" style={{ background: 'var(--medical-surface)' }}>
      {/* Header */}
      <div className="vet-card border-0 rounded-none p-4">
        <div className="flex items-center gap-3 mb-4">
          <Link href="/" className="p-2 hover:bg-gray-700 rounded-lg">
            <ArrowLeft size={20} style={{ color: 'var(--medical-text)' }} />
          </Link>
          <h1 className="text-xl font-bold" style={{ color: 'var(--medical-text)' }}>{patient.name}</h1>
        </div>

        {/* Patient Info Card */}
        <div className="vet-card p-4 mb-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl" style={{ background: 'var(--medical-surface)' }}>
              🐕
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold" style={{ color: 'var(--medical-text)' }}>{patient.name}</h2>
              <p style={{ color: 'var(--medical-text-secondary)' }}>{patient.breed} • {patient.age} years</p>
              <p className="text-sm" style={{ color: 'var(--medical-text-tertiary)' }}>Tag: {patient.tagId}</p>
            </div>
            <button className="btn-medical">
              <Phone size={16} className="mr-2" />
              Call Owner
            </button>
          </div>

          {/* Critical Info */}
          {patient.allergies.length > 0 && (
            <div className="status-critical p-3 rounded-lg mb-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle size={16} />
                <span className="font-semibold">ALLERGIES</span>
              </div>
              <p className="text-sm">{patient.allergies.join(', ')}</p>
            </div>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="vet-card border-0 rounded-none">
        <div className="flex">
          {['records', 'info', 'emergency'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-sm font-medium capitalize ${
                activeTab === tab
                  ? 'border-b-2'
                  : ''
              }`}
              style={{
                color: activeTab === tab ? 'var(--medical-primary)' : 'var(--medical-text-secondary)',
                borderColor: activeTab === tab ? 'var(--medical-primary)' : 'transparent'
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === 'records' && (
          <div className="space-y-4">
            {/* Add Record Button */}
            <button className="w-full vet-card p-4 flex items-center justify-center gap-2 border-2 border-dashed" style={{ borderColor: 'var(--medical-primary)' }}>
              <Plus size={20} style={{ color: 'var(--medical-primary)' }} />
              <span style={{ color: 'var(--medical-primary)' }} className="font-medium">Add Medical Record</span>
            </button>

            {/* Medical Records */}
            {medicalRecords.map(record => (
              <div key={record.id} className="vet-card p-4">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${record.critical ? 'bg-red-500/20' : 'bg-blue-500/20'}`}>
                    {record.type === 'vaccination' ? <Shield size={16} style={{ color: record.critical ? 'var(--medical-warning)' : 'var(--medical-secondary)' }} /> :
                     record.type === 'checkup' ? <Calendar size={16} style={{ color: record.critical ? 'var(--medical-warning)' : 'var(--medical-primary)' }} /> :
                     <FileText size={16} style={{ color: record.critical ? 'var(--medical-warning)' : 'var(--medical-primary)' }} />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium" style={{ color: 'var(--medical-text)' }}>{record.title}</h4>
                      {record.critical && <span className="status-critical">CRITICAL</span>}
                    </div>
                    <p className="text-sm mb-2" style={{ color: 'var(--medical-text-secondary)' }}>{record.vet} • {record.date}</p>
                    <p className="text-sm" style={{ color: 'var(--medical-text-tertiary)' }}>{record.notes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'info' && (
          <div className="space-y-4">
            <div className="vet-card p-4">
              <h3 className="font-semibold mb-3" style={{ color: 'var(--medical-text)' }}>Patient Information</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span style={{ color: 'var(--medical-text-tertiary)' }}>Weight</span>
                  <span style={{ color: 'var(--medical-text)' }}>{patient.weight}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--medical-text-tertiary)' }}>Microchip</span>
                  <span style={{ color: 'var(--medical-text)' }}>{patient.microchip}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--medical-text-tertiary)' }}>Owner</span>
                  <span style={{ color: 'var(--medical-text)' }}>{patient.owner}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--medical-text-tertiary)' }}>Phone</span>
                  <span style={{ color: 'var(--medical-text)' }}>{patient.phone}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'emergency' && (
          <div className="space-y-4">
            <div className="vet-card p-4">
              <h3 className="font-semibold mb-3 flex items-center gap-2" style={{ color: 'var(--medical-text)' }}>
                <AlertTriangle size={18} style={{ color: 'var(--medical-warning)' }} />
                Emergency Information
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium mb-1" style={{ color: 'var(--medical-text-secondary)' }}>Emergency Contact</p>
                  <p style={{ color: 'var(--medical-text)' }}>{patient.emergencyContact}</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1" style={{ color: 'var(--medical-text-secondary)' }}>Known Allergies</p>
                  <p style={{ color: 'var(--medical-warning)' }}>{patient.allergies.join(', ')}</p>
                </div>
              </div>
            </div>
            
            <button className="w-full btn-danger">
              <AlertTriangle size={16} className="mr-2" />
              Report Emergency Case
            </button>
          </div>
        )}
      </div>
    </div>
  )
}