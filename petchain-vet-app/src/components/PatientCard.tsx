'use client'

import { Calendar, User, Tag } from 'lucide-react'
import Link from 'next/link'

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

interface PatientCardProps {
  patient: Patient
}

export default function PatientCard({ patient }: PatientCardProps) {
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'critical': return 'status-critical'
      case 'warning': return 'status-warning'
      default: return 'status-normal'
    }
  }

  const getSpeciesEmoji = (species: string) => {
    return species.toLowerCase() === 'dog' ? '🐕' : species.toLowerCase() === 'cat' ? '🐱' : '🐾'
  }

  return (
    <Link href={`/patient/${patient.id}`}>
      <div className="vet-card p-4">
        <div className="flex items-center gap-4">
          {/* Pet Icon */}
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: 'var(--medical-surface)' }}>
            {getSpeciesEmoji(patient.species)}
          </div>

          {/* Patient Info */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold" style={{ color: 'var(--medical-text)' }}>{patient.name}</h3>
              <span className={getStatusClass(patient.status)}>
                {patient.status.toUpperCase()}
              </span>
            </div>
            <p className="text-sm mb-2" style={{ color: 'var(--medical-text-secondary)' }}>
              {patient.breed} • {patient.age} years
            </p>
            
            <div className="flex items-center gap-4 text-xs" style={{ color: 'var(--medical-text-tertiary)' }}>
              <div className="flex items-center gap-1">
                <User size={12} />
                <span>{patient.owner}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={12} />
                <span>{patient.lastVisit}</span>
              </div>
              <div className="flex items-center gap-1">
                <Tag size={12} />
                <span>{patient.tagId}</span>
              </div>
            </div>
          </div>

          {/* Action Indicator */}
          <div className="text-right">
            <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: 'var(--medical-primary)' }}>
              <span className="text-white text-xs">→</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}