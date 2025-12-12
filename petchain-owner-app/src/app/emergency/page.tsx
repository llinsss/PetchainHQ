'use client'

import { useState } from 'react'
import { ArrowLeft, AlertTriangle, MapPin, Phone, Clock, Camera } from 'lucide-react'
import Link from 'next/link'
import { usePets } from '@/hooks/usePets'

export default function EmergencyPage() {
  const { pets } = usePets()
  const [selectedPet, setSelectedPet] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [contactInfo, setContactInfo] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate emergency report submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('Emergency report submitted! Local authorities and nearby vets have been notified.')
    setIsSubmitting(false)
  }

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setLocation(`${latitude.toFixed(6)}, ${longitude.toFixed(6)}`)
        },
        (error) => {
          console.error('Error getting location:', error)
          alert('Unable to get current location. Please enter manually.')
        }
      )
    }
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Header */}
      <div className="p-4 border-b border-red-600 bg-red-900/20">
        <div className="flex items-center gap-3">
          <Link href="/" className="p-2 hover:bg-red-800/50 rounded-lg">
            <ArrowLeft size={20} className="text-red-400" />
          </Link>
          <div className="flex items-center gap-2">
            <AlertTriangle size={24} className="text-red-400" />
            <h1 className="text-xl font-bold text-red-400">Emergency Report</h1>
          </div>
        </div>
        <p className="text-sm text-red-300 mt-2">Report a lost pet or emergency situation</p>
      </div>

      <div className="p-4">
        {/* Emergency Contacts */}
        <div className="card p-4 mb-6 border-red-600">
          <h2 className="font-semibold mb-3 text-red-400 flex items-center gap-2">
            <Phone size={18} />
            Emergency Contacts
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <a href="tel:911" className="flex items-center gap-2 p-3 bg-red-600 text-white rounded-lg font-medium">
              <Phone size={16} />
              911
            </a>
            <a href="tel:+15551234567" className="flex items-center gap-2 p-3 bg-blue-600 text-white rounded-lg font-medium">
              <Phone size={16} />
              Animal Control
            </a>
          </div>
        </div>

        {/* Report Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Pet Selection */}
          <div className="card p-4">
            <label className="block text-sm font-medium mb-3" style={{ color: 'var(--text-secondary)' }}>
              Which pet needs help?
            </label>
            <div className="space-y-2">
              {pets.map(pet => (
                <label key={pet.id} className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-800/50" style={{ borderColor: 'var(--border-primary)' }}>
                  <input
                    type="radio"
                    name="pet"
                    value={pet.id}
                    checked={selectedPet === pet.id}
                    onChange={(e) => setSelectedPet(e.target.value)}
                    className="text-red-600"
                  />
                  <span className="text-xl">{pet.photo}</span>
                  <div>
                    <p className="font-medium" style={{ color: 'var(--text-primary)' }}>{pet.name}</p>
                    <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>{pet.breed} • Tag: {pet.tagId}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="card p-4">
            <label className="block text-sm font-medium mb-3" style={{ color: 'var(--text-secondary)' }}>
              Last known location
            </label>
            <div className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter address or coordinates"
                  className="flex-1 p-3 rounded-lg border"
                  style={{
                    background: 'var(--bg-elevated)',
                    borderColor: 'var(--border-primary)',
                    color: 'var(--text-primary)'
                  }}
                />
                <button
                  type="button"
                  onClick={getCurrentLocation}
                  className="p-3 border rounded-lg flex items-center gap-2"
                  style={{ borderColor: 'var(--border-primary)', color: 'var(--text-secondary)' }}
                >
                  <MapPin size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="card p-4">
            <label className="block text-sm font-medium mb-3" style={{ color: 'var(--text-secondary)' }}>
              What happened?
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              placeholder="Describe the situation, when you last saw your pet, any injuries, etc."
              className="w-full p-3 rounded-lg border resize-none"
              style={{
                background: 'var(--bg-elevated)',
                borderColor: 'var(--border-primary)',
                color: 'var(--text-primary)'
              }}
            />
          </div>

          {/* Contact Info */}
          <div className="card p-4">
            <label className="block text-sm font-medium mb-3" style={{ color: 'var(--text-secondary)' }}>
              Your contact information
            </label>
            <input
              type="text"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              placeholder="Phone number for updates"
              className="w-full p-3 rounded-lg border"
              style={{
                background: 'var(--bg-elevated)',
                borderColor: 'var(--border-primary)',
                color: 'var(--text-primary)'
              }}
            />
          </div>

          {/* Photo Upload */}
          <div className="card p-4">
            <label className="block text-sm font-medium mb-3" style={{ color: 'var(--text-secondary)' }}>
              Recent photo (optional)
            </label>
            <div className="border-2 border-dashed rounded-lg p-6 text-center" style={{ borderColor: 'var(--border-primary)' }}>
              <Camera size={32} className="mx-auto mb-2" style={{ color: 'var(--text-tertiary)' }} />
              <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                Tap to add a recent photo of your pet
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!selectedPet || !location || isSubmitting}
            className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                Submitting Report...
              </>
            ) : (
              <>
                <AlertTriangle size={20} />
                Submit Emergency Report
              </>
            )}
          </button>
        </form>

        {/* Info */}
        <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-600 rounded-lg">
          <div className="flex items-start gap-3">
            <Clock size={20} className="text-yellow-400 mt-0.5" />
            <div>
              <p className="font-medium text-yellow-400 mb-1">Quick Response</p>
              <p className="text-sm text-yellow-200">
                Your report will be sent to local animal control, nearby veterinarians, and pet recovery networks within minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}