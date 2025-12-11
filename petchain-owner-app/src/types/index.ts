export interface Pet {
  id: string
  name: string
  breed: string
  age: number
  photo: string
  tagId: string
  vaccinations: number
  nextVaccination: string
  weight?: string
  microchip?: string
  owner?: string
  emergencyContact?: string
}

export interface MedicalRecord {
  id: string
  petId: string
  type: 'vaccination' | 'checkup' | 'treatment' | 'surgery'
  title: string
  date: string
  vet: string
  notes: string
  documents?: string[]
}

export interface VaccinationRecord {
  id: string
  petId: string
  vaccine: string
  date: string
  nextDue: string
  vet: string
  batchNumber?: string
}

export interface EmergencyContact {
  id: string
  name: string
  phone: string
  relationship: string
  isPrimary: boolean
}

export interface PrivacySettings {
  petId: string
  publicVaccinationStatus: boolean
  emergencyInfoVisible: boolean
  vetAccessEnabled: boolean
  allowDataSharing: boolean
}