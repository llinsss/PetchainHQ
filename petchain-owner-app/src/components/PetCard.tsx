'use client'

import { Heart, Calendar, Shield, QrCode } from 'lucide-react'
import Link from 'next/link'
import { Pet } from '@/types'
import { isVaccinationDue } from '@/utils/date'

interface PetCardProps {
  pet: Pet
}

export default function PetCard({ pet }: PetCardProps) {
  const vaccinationDue = isVaccinationDue(pet.nextVaccination)

  return (
    <Link href={`/pet/${pet.id}`}>
      <div className="card p-4 relative">
        <div className="flex items-center gap-4">
          {/* Pet Photo */}
          <div className="relative">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl" style={{ background: 'var(--bg-elevated)' }}>
              {pet.photo}
            </div>
            {vaccinationDue && (
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full" style={{ background: 'var(--warning)' }}></div>
            )}
          </div>

          {/* Pet Info */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold" style={{ color: 'var(--text-primary)' }}>{pet.name}</h3>
              <Heart size={14} className="text-red-400" />
            </div>
            <p className="text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>{pet.breed} • {pet.age} years</p>
            
            <div className="flex items-center gap-3">
              <div className="status-badge status-success flex items-center gap-1">
                <Shield size={11} />
                <span>{pet.vaccinations} shots</span>
              </div>
              <div className="status-badge status-info flex items-center gap-1">
                <QrCode size={11} />
                <span>{pet.tagId}</span>
              </div>
            </div>
          </div>

          {/* Status Indicator */}
          <div className="flex flex-col items-center">
            {vaccinationDue ? (
              <div className="text-center">
                <div className="p-2 rounded-lg" style={{ background: 'rgba(245, 124, 0, 0.15)' }}>
                  <Calendar size={16} style={{ color: 'var(--warning)' }} />
                </div>
                <span className="text-xs font-medium mt-1" style={{ color: 'var(--warning)' }}>Due</span>
              </div>
            ) : (
              <div className="p-2 rounded-lg" style={{ background: 'rgba(45, 125, 50, 0.15)' }}>
                <Shield size={16} style={{ color: 'var(--success)' }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}