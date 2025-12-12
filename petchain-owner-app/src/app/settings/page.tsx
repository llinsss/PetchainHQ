'use client'

import { useState } from 'react'
import { ArrowLeft, User, Bell, Shield, Smartphone, Globe, Trash2 } from 'lucide-react'
import Link from 'next/link'

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    vaccinations: true,
    appointments: true,
    emergencies: true,
    marketing: false
  })

  const [privacy, setPrivacy] = useState({
    publicProfile: false,
    emergencyAccess: true,
    vetAccess: true,
    dataSharing: false
  })

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Header */}
      <div className="p-4 border-b" style={{ borderColor: 'var(--border-primary)' }}>
        <div className="flex items-center gap-3">
          <Link href="/" className="p-2 hover:bg-gray-700 rounded-lg">
            <ArrowLeft size={20} style={{ color: 'var(--text-primary)' }} />
          </Link>
          <h1 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Settings</h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Account Settings */}
        <div className="card p-4">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
            <User size={20} />
            Account
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium" style={{ color: 'var(--text-primary)' }}>Profile Information</p>
                <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>Update your personal details</p>
              </div>
              <button className="text-sm" style={{ color: 'var(--primary)' }}>Edit</button>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium" style={{ color: 'var(--text-primary)' }}>Change Password</p>
                <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>Update your password</p>
              </div>
              <button className="text-sm" style={{ color: 'var(--primary)' }}>Change</button>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="card p-4">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
            <Bell size={20} />
            Notifications
          </h2>
          <div className="space-y-4">
            {Object.entries(notifications).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center">
                <div>
                  <p className="font-medium capitalize" style={{ color: 'var(--text-primary)' }}>
                    {key.replace(/([A-Z])/g, ' $1')}
                  </p>
                  <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                    {key === 'vaccinations' && 'Reminders for upcoming vaccinations'}
                    {key === 'appointments' && 'Vet appointment notifications'}
                    {key === 'emergencies' && 'Critical health alerts'}
                    {key === 'marketing' && 'Product updates and tips'}
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={(e) => setNotifications({...notifications, [key]: e.target.checked})}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="card p-4">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
            <Shield size={20} />
            Privacy & Security
          </h2>
          <div className="space-y-4">
            {Object.entries(privacy).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center">
                <div>
                  <p className="font-medium capitalize" style={{ color: 'var(--text-primary)' }}>
                    {key.replace(/([A-Z])/g, ' $1')}
                  </p>
                  <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                    {key === 'publicProfile' && 'Allow public access to basic pet info'}
                    {key === 'emergencyAccess' && 'Emergency responders can view critical info'}
                    {key === 'vetAccess' && 'Veterinarians can request record access'}
                    {key === 'dataSharing' && 'Share anonymized data for research'}
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={(e) => setPrivacy({...privacy, [key]: e.target.checked})}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* App Settings */}
        <div className="card p-4">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
            <Smartphone size={20} />
            App Preferences
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium" style={{ color: 'var(--text-primary)' }}>Language</p>
                <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>English (US)</p>
              </div>
              <button className="text-sm" style={{ color: 'var(--primary)' }}>Change</button>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium" style={{ color: 'var(--text-primary)' }}>Data Usage</p>
                <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>Manage offline storage</p>
              </div>
              <button className="text-sm" style={{ color: 'var(--primary)' }}>Manage</button>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="card p-4">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
            <Globe size={20} />
            Support
          </h2>
          <div className="space-y-3">
            <button className="w-full text-left">
              <p className="font-medium" style={{ color: 'var(--text-primary)' }}>Help Center</p>
              <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>FAQs and guides</p>
            </button>
            <button className="w-full text-left">
              <p className="font-medium" style={{ color: 'var(--text-primary)' }}>Contact Support</p>
              <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>Get help from our team</p>
            </button>
            <button className="w-full text-left">
              <p className="font-medium" style={{ color: 'var(--text-primary)' }}>Report Issue</p>
              <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>Report bugs or problems</p>
            </button>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="card p-4 border-red-600">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-red-400">
            <Trash2 size={20} />
            Danger Zone
          </h2>
          <div className="space-y-3">
            <button className="w-full text-left">
              <p className="font-medium text-red-400">Export Data</p>
              <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>Download all your pet's data</p>
            </button>
            <button className="w-full text-left">
              <p className="font-medium text-red-400">Delete Account</p>
              <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>Permanently delete your account</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}