'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { Pet } from '@/types'
import { PET_EMOJIS } from '@/constants'

interface AddPetModalProps {
  onClose: () => void
  onAdd: (pet: Omit<Pet, 'id' | 'tagId' | 'vaccinations' | 'nextVaccination'>) => void
}

export default function AddPetModal({ onClose, onAdd }: AddPetModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    breed: '',
    age: 1,
    photo: '🐕'
  })

  const petEmojis = PET_EMOJIS

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAdd(formData)
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div className="card w-full max-w-sm">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>Add New Pet</h2>
            <button 
              onClick={onClose} 
              className="btn-secondary p-2"
            >
              <X size={18} />
            </button>
          </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Pet Photo Selection */}
          <div>
            <label className="block text-sm font-medium mb-3" style={{ color: 'var(--text-secondary)' }}>Pet Photo</label>
            <div className="grid grid-cols-4 gap-2">
              {petEmojis.map(emoji => (
                <button
                  key={emoji}
                  type="button"
                  onClick={() => setFormData({...formData, photo: emoji})}
                  className={`w-12 h-12 rounded-lg text-xl flex items-center justify-center transition-all ${
                    formData.photo === emoji 
                      ? 'border-2' 
                      : 'border'
                  }`}
                  style={{
                    background: formData.photo === emoji ? 'var(--primary)' : 'var(--bg-elevated)',
                    borderColor: formData.photo === emoji ? 'var(--primary-light)' : 'var(--border-primary)'
                  }}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          {/* Pet Name */}
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Pet Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full p-3 rounded-lg border transition-all"
              style={{
                background: 'var(--bg-elevated)',
                borderColor: 'var(--border-primary)',
                color: 'var(--text-primary)'
              }}
              placeholder="Enter pet name"
            />
          </div>

          {/* Breed */}
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Breed</label>
            <input
              type="text"
              required
              value={formData.breed}
              onChange={(e) => setFormData({...formData, breed: e.target.value})}
              className="w-full p-3 rounded-lg border transition-all"
              style={{
                background: 'var(--bg-elevated)',
                borderColor: 'var(--border-primary)',
                color: 'var(--text-primary)'
              }}
              placeholder="Enter breed"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Age (years)</label>
            <input
              type="number"
              min="0"
              max="30"
              required
              value={formData.age}
              onChange={(e) => setFormData({...formData, age: parseInt(e.target.value)})}
              className="w-full p-3 rounded-lg border transition-all"
              style={{
                background: 'var(--bg-elevated)',
                borderColor: 'var(--border-primary)',
                color: 'var(--text-primary)'
              }}
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 btn-secondary py-3 font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 btn-primary py-3 font-medium"
            >
              Add Pet
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}