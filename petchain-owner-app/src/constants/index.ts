export const PET_EMOJIS = ['🐕', '🐱', '🐰', '🐹', '🐦', '🐢', '🐠', '🐍'] as const

export const MEDICAL_RECORD_TYPES = {
  VACCINATION: 'vaccination',
  CHECKUP: 'checkup',
  TREATMENT: 'treatment',
  SURGERY: 'surgery'
} as const

export const VACCINATION_TYPES = [
  'Rabies',
  'DHPP (Distemper, Hepatitis, Parvovirus, Parainfluenza)',
  'Bordetella',
  'Lyme Disease',
  'Canine Influenza',
  'Feline Distemper (FVRCP)',
  'FeLV (Feline Leukemia)',
  'FIV (Feline Immunodeficiency)'
] as const

export const ROUTES = {
  HOME: '/',
  PET_DETAIL: '/pet',
  FRAME: '/frame',
  API: {
    FRAME_IMAGE: '/api/frame-image',
    FRAME_ACTION: '/api/frame-action'
  }
} as const

export const APP_CONFIG = {
  NAME: 'PetChain',
  DESCRIPTION: 'Secure pet medical records on blockchain',
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  BLOCKCHAIN: 'Base'
} as const