'use client'

import { useState } from 'react'
import { Plus, Bell, Settings, QrCode } from 'lucide-react'
import PetCard from '@/components/PetCard'
import AddPetModal from '@/components/AddPetModal'
import { usePets } from '@/hooks/usePets'
import { APP_CONFIG } from '@/constants'

export default function Dashboard() {
  const { pets, loading, addPet } = usePets()
  const [showAddPet, setShowAddPet] = useState(false)

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-gray-600 border-t-blue-500 mx-auto mb-4"></div>
          <p style={{ color: 'var(--text-secondary)' }} className="font-medium">Loading your pets...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-5">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'var(--primary)' }}>
              <span className="text-white font-semibold text-sm">🐾</span>
            </div>
            <h1 className="text-2xl font-semibold" style={{ color: 'var(--text-primary)' }}>PetChain</h1>
          </div>
          <p style={{ color: 'var(--text-tertiary)' }} className="text-sm">Secure records on {APP_CONFIG.BLOCKCHAIN}</p>
        </div>
        <div className="flex gap-2">
          <button className="btn-secondary p-2.5">
            <Bell size={18} />
          </button>
          <button className="btn-secondary p-2.5">
            <Settings size={18} />
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="card p-3 text-center">
          <div className="text-xl font-semibold mb-1" style={{ color: 'var(--primary-light)' }}>{pets.length}</div>
          <div className="text-xs font-medium" style={{ color: 'var(--text-tertiary)' }}>Pets</div>
        </div>
        <div className="card p-3 text-center">
          <div className="text-xl font-semibold mb-1" style={{ color: 'var(--success)' }}>
            {pets.reduce((acc, pet) => acc + pet.vaccinations, 0)}
          </div>
          <div className="text-xs font-medium" style={{ color: 'var(--text-tertiary)' }}>Vaccinations</div>
        </div>
        <div className="card p-3 text-center">
          <QrCode className="mx-auto mb-1" style={{ color: 'var(--accent)' }} size={20} />
          <div className="text-xs font-medium" style={{ color: 'var(--text-tertiary)' }}>Active Tags</div>
        </div>
      </div>

      {/* Pet List */}
      <div className="space-y-3 mb-6">
        {pets.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'var(--bg-elevated)' }}>
              <Heart size={28} style={{ color: 'var(--text-tertiary)' }} />
            </div>
            <p className="font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>No pets added yet</p>
            <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>Add your first pet to get started</p>
          </div>
        ) : (
          pets.map(pet => (
            <PetCard key={pet.id} pet={pet} />
          ))
        )}
      </div>

      {/* Add Pet Button */}
      <button
        onClick={() => setShowAddPet(true)}
        className="w-full btn-primary py-3.5 flex items-center justify-center gap-2 font-medium"
      >
        <Plus size={18} />
        Add New Pet
      </button>

      {/* Add Pet Modal */}
      {showAddPet && (
        <AddPetModal
          onClose={() => setShowAddPet(false)}
          onAdd={(newPet) => {
            addPet(newPet)
            setShowAddPet(false)
          }}
        />
      )}
    </div>
  )
}