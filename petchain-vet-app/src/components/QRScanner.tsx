'use client'

import { useState } from 'react'
import { X, Camera, FileText } from 'lucide-react'

interface QRScannerProps {
  onClose: () => void
}

export default function QRScanner({ onClose }: QRScannerProps) {
  const [scannedData, setScannedData] = useState<string | null>(null)

  const handleManualEntry = () => {
    // Simulate scanning PC001
    setScannedData('PC001')
  }

  const handleAccessRecords = () => {
    if (scannedData) {
      window.open(`/patient/scan/${scannedData}`, '_blank')
    }
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="vet-card w-full max-w-sm">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold" style={{ color: 'var(--medical-text)' }}>Scan Pet Tag</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
              <X size={18} style={{ color: 'var(--medical-text-tertiary)' }} />
            </button>
          </div>

          {!scannedData ? (
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-lg border-2 border-dashed flex items-center justify-center" style={{ borderColor: 'var(--medical-border)' }}>
                <div className="text-center">
                  <Camera size={48} style={{ color: 'var(--medical-text-tertiary)' }} className="mx-auto mb-2" />
                  <p className="text-sm" style={{ color: 'var(--medical-text-secondary)' }}>Position QR code in frame</p>
                </div>
              </div>
              
              <button 
                onClick={handleManualEntry}
                className="w-full btn-medical mb-3"
              >
                Demo: Scan PC001
              </button>
              
              <p className="text-xs" style={{ color: 'var(--medical-text-tertiary)' }}>
                Camera access required for QR scanning
              </p>
            </div>
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'var(--medical-secondary)' }}>
                <FileText size={24} className="text-white" />
              </div>
              
              <h3 className="font-semibold mb-2" style={{ color: 'var(--medical-text)' }}>Tag Scanned Successfully</h3>
              <p className="text-sm mb-4" style={{ color: 'var(--medical-text-secondary)' }}>
                Tag ID: <span className="font-mono">{scannedData}</span>
              </p>
              
              <div className="space-y-2">
                <button 
                  onClick={handleAccessRecords}
                  className="w-full btn-medical"
                >
                  Access Medical Records
                </button>
                <button 
                  onClick={() => setScannedData(null)}
                  className="w-full py-3 px-4 border rounded-lg font-medium transition-colors"
                  style={{ 
                    borderColor: 'var(--medical-border)',
                    color: 'var(--medical-text-secondary)'
                  }}
                >
                  Scan Another
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}