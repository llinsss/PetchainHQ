'use client'

import { useState, useEffect } from 'react'
import { Pet } from '@/types'
import { generateTagId } from '@/utils/date'

const STORAGE_KEY = 'petchain_pets'

export const usePets = () => {
  const [pets, setPets] = useState<Pet[]>([])
  const [loading, setLoading] = useState(true)

  // Load pets from localStorage on mount
  useEffect(() => {
    try {
      const storedPets = localStorage.getItem(STORAGE_KEY)
      if (storedPets) {
        setPets(JSON.parse(storedPets))
      } else {
        // Initialize with sample data
        const samplePet: Pet = {
          id: '1',
          name: 'Buddy',
          breed: 'Golden Retriever',
          age: 3,
          photo: '🐕',
          tagId: 'PC001',
          vaccinations: 5,
          nextVaccination: '2024-03-15',
          weight: '30 kg',
          microchip: 'MC123456789',
          owner: 'John Doe',
          emergencyContact: '+1 234-567-8900'
        }
        setPets([samplePet])
        localStorage.setItem(STORAGE_KEY, JSON.stringify([samplePet]))
      }
    } catch (error) {
      console.error('Error loading pets:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  // Save pets to localStorage whenever pets change
  useEffect(() => {
    if (!loading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(pets))
    }
  }, [pets, loading])

  const addPet = (petData: Omit<Pet, 'id' | 'tagId' | 'vaccinations' | 'nextVaccination'>) => {
    const newPet: Pet = {
      ...petData,
      id: Date.now().toString(),
      tagId: generateTagId(),
      vaccinations: 0,
      nextVaccination: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    }
    setPets(prev => [...prev, newPet])
    return newPet
  }

  const updatePet = (petId: string, updates: Partial<Pet>) => {
    setPets(prev => prev.map(pet => 
      pet.id === petId ? { ...pet, ...updates } : pet
    ))
  }

  const deletePet = (petId: string) => {
    setPets(prev => prev.filter(pet => pet.id !== petId))
  }

  const getPetById = (petId: string): Pet | undefined => {
    return pets.find(pet => pet.id === petId)
  }

  return {
    pets,
    loading,
    addPet,
    updatePet,
    deletePet,
    getPetById
  }
}