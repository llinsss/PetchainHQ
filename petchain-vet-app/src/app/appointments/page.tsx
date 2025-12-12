'use client'

import { useState } from 'react'
import { ArrowLeft, Calendar, Clock, Plus, Search, Filter } from 'lucide-react'
import Link from 'next/link'

interface Appointment {
  id: string
  petName: string
  petSpecies: string
  owner: string
  time: string
  type: string
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled'
  notes?: string
}

export default function AppointmentsPage() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
  const [searchQuery, setSearchQuery] = useState('')

  const appointments: Appointment[] = [
    {
      id: '1',
      petName: 'Buddy',
      petSpecies: 'Dog',
      owner: 'John Doe',
      time: '09:00',
      type: 'Checkup',
      status: 'scheduled'
    },
    {
      id: '2',
      petName: 'Whiskers',
      petSpecies: 'Cat',
      owner: 'Jane Smith',
      time: '10:30',
      type: 'Vaccination',
      status: 'in-progress'
    },
    {
      id: '3',
      petName: 'Max',
      petSpecies: 'Dog',
      owner: 'Bob Wilson',
      time: '14:00',
      type: 'Surgery Consultation',
      status: 'scheduled'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return 'status-normal'
      case 'in-progress': return 'status-warning'
      case 'completed': return 'status-success'
      case 'cancelled': return 'status-critical'
      default: return 'status-normal'
    }
  }

  const getSpeciesEmoji = (species: string) => {
    return species.toLowerCase() === 'dog' ? '🐕' : species.toLowerCase() === 'cat' ? '🐱' : '🐾'
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
            <Calendar size={24} style={{ color: 'var(--medical-primary)' }} />
            <h1 className="text-xl font-bold" style={{ color: 'var(--medical-text)' }}>Appointments</h1>
          </div>
        </div>

        {/* Date Selector */}
        <div className="flex gap-3 mb-4">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="flex-1 p-3 rounded-lg border"
            style={{
              background: 'var(--medical-card)',
              borderColor: 'var(--medical-border)',
              color: 'var(--medical-text)'
            }}
          />
          <button className="btn-medical">
            <Plus size={16} className="mr-2" />
            New
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search size={18} className="absolute left-3 top-3" style={{ color: 'var(--medical-text-tertiary)' }} />
          <input
            type="text"
            placeholder="Search appointments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border"
            style={{
              background: 'var(--medical-card)',
              borderColor: 'var(--medical-border)',
              color: 'var(--medical-text)'
            }}
          />
        </div>
      </div>

      {/* Appointments List */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold" style={{ color: 'var(--medical-text)' }}>
            Today's Schedule ({appointments.length})
          </h2>
          <button className="flex items-center gap-2 text-sm" style={{ color: 'var(--medical-primary)' }}>
            <Filter size={16} />
            Filter
          </button>
        </div>

        <div className="space-y-3">
          {appointments.map(appointment => (
            <div key={appointment.id} className="vet-card p-4">
              <div className="flex items-center gap-4">
                {/* Time */}
                <div className="text-center">
                  <div className="font-bold" style={{ color: 'var(--medical-primary)' }}>{appointment.time}</div>
                  <div className="text-xs" style={{ color: 'var(--medical-text-tertiary)' }}>
                    {appointment.type.split(' ')[0]}
                  </div>
                </div>

                {/* Pet Info */}
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl" style={{ background: 'var(--medical-surface)' }}>
                    {getSpeciesEmoji(appointment.petSpecies)}
                  </div>
                  <div>
                    <h3 className="font-semibold" style={{ color: 'var(--medical-text)' }}>{appointment.petName}</h3>
                    <p className="text-sm" style={{ color: 'var(--medical-text-secondary)' }}>{appointment.owner}</p>
                    <p className="text-xs" style={{ color: 'var(--medical-text-tertiary)' }}>{appointment.type}</p>
                  </div>
                </div>

                {/* Status */}
                <div className="text-right">
                  <span className={getStatusColor(appointment.status)}>
                    {appointment.status.toUpperCase()}
                  </span>
                  {appointment.status === 'scheduled' && (
                    <div className="mt-2 space-y-1">
                      <button className="w-full text-xs bg-green-600 text-white px-3 py-1 rounded">
                        Start
                      </button>
                      <button className="w-full text-xs border border-gray-600 text-gray-300 px-3 py-1 rounded">
                        Reschedule
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button className="vet-card p-4 text-center">
            <Calendar size={24} className="mx-auto mb-2" style={{ color: 'var(--medical-primary)' }} />
            <p className="text-sm font-medium" style={{ color: 'var(--medical-text)' }}>Schedule Follow-up</p>
          </button>
          <button className="vet-card p-4 text-center">
            <Clock size={24} className="mx-auto mb-2" style={{ color: 'var(--medical-secondary)' }} />
            <p className="text-sm font-medium" style={{ color: 'var(--medical-text)' }}>Emergency Slot</p>
          </button>
        </div>

        {/* Daily Summary */}
        <div className="mt-6 vet-card p-4">
          <h3 className="font-semibold mb-3" style={{ color: 'var(--medical-text)' }}>Today's Summary</h3>
          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div>
              <div className="text-lg font-bold" style={{ color: 'var(--medical-secondary)' }}>8</div>
              <div style={{ color: 'var(--medical-text-tertiary)' }}>Scheduled</div>
            </div>
            <div>
              <div className="text-lg font-bold" style={{ color: 'var(--medical-warning)' }}>2</div>
              <div style={{ color: 'var(--medical-text-tertiary)' }}>In Progress</div>
            </div>
            <div>
              <div className="text-lg font-bold" style={{ color: 'var(--medical-primary)' }}>5</div>
              <div style={{ color: 'var(--medical-text-tertiary)' }}>Completed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}