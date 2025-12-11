import QRCode from 'qrcode'
import { APP_CONFIG } from '@/constants'

export interface QRCodeOptions {
  width?: number
  margin?: number
  color?: {
    dark: string
    light: string
  }
}

export const generatePetQRCode = async (
  petId: string,
  options: QRCodeOptions = {}
): Promise<string> => {
  const defaultOptions: QRCodeOptions = {
    width: 256,
    margin: 2,
    color: {
      dark: '#2563eb',
      light: '#ffffff'
    }
  }

  const qrOptions = { ...defaultOptions, ...options }
  const url = `${APP_CONFIG.BASE_URL}/pet/${petId}`

  try {
    return await QRCode.toDataURL(url, qrOptions)
  } catch (error) {
    console.error('Error generating QR code:', error)
    throw new Error('Failed to generate QR code')
  }
}

export const downloadQRCode = (dataUrl: string, filename: string): void => {
  const link = document.createElement('a')
  link.download = filename
  link.href = dataUrl
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export const shareQRCode = async (petId: string, petName: string): Promise<void> => {
  if (!navigator.share) {
    throw new Error('Web Share API not supported')
  }

  try {
    await navigator.share({
      title: `${petName} - PetChain Medical Records`,
      text: `View ${petName}'s secure medical records`,
      url: `${APP_CONFIG.BASE_URL}/pet/${petId}`
    })
  } catch (error) {
    if ((error as Error).name !== 'AbortError') {
      console.error('Error sharing:', error)
      throw error
    }
  }
}