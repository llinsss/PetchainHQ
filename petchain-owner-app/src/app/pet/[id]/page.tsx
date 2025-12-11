'use client'

import { useState } from 'react'
import { ArrowLeft, QrCode, Shield, Calendar, Plus, FileText } from 'lucide-react'
import Link from 'next/link'
import { usePets } from '@/hooks/usePets'
import { MedicalRecord } from '@/types'
import QRCodeGenerator from '@/components/QRCodeGenerator'

export default function PetDetail({ params }: { params: { id: string } }) {
  const { getPetById } = usePets()
  const [showQR, setShowQR] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  
  const pet = getPetById(params.id)
  
  if (!pet) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Pet not found</p>
          <Link href="/" className="text-blue-600 underline">Go back to dashboard</Link>
        </div>
      </div>
    )
  }

  const medicalRecords: MedicalRecord[] = [
    {
      id: '1',
      petId: pet.id,
      type: 'vaccination',
      title: 'Rabies Vaccination',
      date: '2024-01-15',
      vet: 'Dr. Smith',
      notes: 'Annual rabies shot completed'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center gap-3 mb-4">
          <Link href="/" className="p-2 hover:bg-gray-100 rounded-lg">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-xl font-bold">{pet.name}</h1>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-4 text-white">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-3xl">
              {pet.photo}
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold">{pet.name}</h2>
              <p className="opacity-90">{pet.breed} • {pet.age} years</p>
              <p className="opacity-75 text-sm">Tag ID: {pet.tagId}</p>
            </div>
            <button
              onClick={() => setShowQR(true)}
              className="bg-white bg-opacity-20 p-3 rounded-lg"
            >
              <QrCode size={24} />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200">
        <div className="flex">
          {['overview', 'medical', 'settings'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-sm font-medium capitalize ${
                activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4">
        {activeTab === 'overview' && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-white p-4 rounded-xl border border-gray-200 flex flex-col items-center gap-2">
                <Shield className="text-green-500" size={24} />
                <span className="text-sm font-medium">Add Vaccination</span>
              </button>
              <button className="bg-white p-4 rounded-xl border border-gray-200 flex flex-col items-center gap-2">
                <Calendar className="text-blue-500" size={24} />
                <span className="text-sm font-medium">Schedule Checkup</span>
              </button>
            </div>

            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <h3 className="font-semibold mb-3">Pet Information</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Weight</span>
                  <span className="font-medium">{pet.weight}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Microchip</span>
                  <span className="font-medium">{pet.microchip}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'medical' && (
          <div className="space-y-4">
            <button className="w-full bg-blue-50 border-2 border-dashed border-blue-300 rounded-xl p-4 flex items-center justify-center gap-2 text-blue-600">
              <Plus size={20} />
              Add Medical Record
            </button>

            <div className="space-y-3">
              {medicalRecords.map(record => (
                <div key={record.id} className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Shield size={16} className="text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{record.title}</h4>
                      <p className="text-sm text-gray-600">{record.vet} • {record.date}</p>
                      <p className="text-sm text-gray-500 mt-1">{record.notes}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <h3 className="font-semibold mb-3">Privacy & Access</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Public vaccination status</span>
                  <input type="checkbox" defaultChecked />
                </div>
                <div className="flex justify-between items-center">
                  <span>Emergency info visible</span>
                  <input type="checkbox" defaultChecked />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <h3 className="font-semibold mb-3">Tag Management</h3>
              <div className="space-y-2">
                <button className="w-full p-3 bg-blue-50 text-blue-600 rounded-lg font-medium">
                  Generate New QR Code
                </button>
                <button className="w-full p-3 bg-red-50 text-red-600 rounded-lg font-medium">
                  Report Lost Pet
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {showQR && (
        <QRCodeGenerator
          petId={pet.id}
          tagId={pet.tagId}
          petName={pet.name}
          onClose={() => setShowQR(false)}
        />
      )}
    </div>
  )
}