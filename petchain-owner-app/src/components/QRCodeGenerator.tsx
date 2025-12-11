'use client'

import { useState, useEffect } from 'react'
import { X, Download, Share2 } from 'lucide-react'
import { generatePetQRCode, downloadQRCode, shareQRCode } from '@/utils/qr-generator'

interface QRCodeGeneratorProps {
  petId: string
  tagId: string
  petName: string
  onClose: () => void
}

export default function QRCodeGenerator({ petId, tagId, petName, onClose }: QRCodeGeneratorProps) {
  const [qrDataUrl, setQrDataUrl] = useState('')

  useEffect(() => {
    generateQRCode()
  }, [petId])

  const generateQRCode = async () => {
    try {
      const dataUrl = await generatePetQRCode(petId)
      setQrDataUrl(dataUrl)
    } catch (error) {
      console.error('Error generating QR code:', error)
    }
  }

  const downloadQR = () => {
    downloadQRCode(qrDataUrl, `petchain-${tagId}-qr.png`)
  }

  const shareQR = async () => {
    try {
      await shareQRCode(petId, petName)
    } catch (error) {
      console.log('Error sharing:', error)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Pet QR Code</h2>
          <button onClick={onClose} className="p-1">
            <X size={20} />
          </button>
        </div>

        <div className="text-center">
          {qrDataUrl ? (
            <div className="mb-4">
              <img 
                src={qrDataUrl} 
                alt="Pet QR Code" 
                className="w-64 h-64 mx-auto border border-gray-200 rounded-lg"
              />
              <p className="text-sm text-gray-600 mt-2">Tag ID: {tagId}</p>
            </div>
          ) : (
            <div className="w-64 h-64 mx-auto bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-gray-400">Generating QR Code...</span>
            </div>
          )}

          <div className="space-y-2">
            <button
              onClick={downloadQR}
              disabled={!qrDataUrl}
              className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-lg font-medium disabled:opacity-50"
            >
              <Download size={20} />
              Download QR Code
            </button>
            
            <button
              onClick={shareQR}
              className="w-full flex items-center justify-center gap-2 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium"
            >
              <Share2 size={20} />
              Share Link
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            This QR code links to your pet's secure medical records on the blockchain
          </p>
        </div>
      </div>
    </div>
  )
}