import Link from 'next/link'
import { Button } from '../../components/ui/Button'

export default function DashboardPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to PetChain</h1>
          <p className="text-xl text-gray-300">Manage your pet's medical records securely on the blockchain</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="card p-8">
            <h2 className="text-2xl font-bold mb-4">🐕 Pet Owner</h2>
            <p className="text-gray-300 mb-6">
              Manage your pet's medical records, generate QR tags, and control access to veterinary information.
            </p>
            <ul className="space-y-2 text-sm text-gray-400 mb-6">
              <li>• Add and manage multiple pets</li>
              <li>• Track vaccinations and medical history</li>
              <li>• Generate scannable QR tags</li>
              <li>• Control privacy settings</li>
            </ul>
            <Link href="http://localhost:3001" target="_blank">
              <Button className="w-full">Open Pet Owner App</Button>
            </Link>
          </div>

          <div className="card p-8">
            <h2 className="text-2xl font-bold mb-4">🏥 Veterinarian</h2>
            <p className="text-gray-300 mb-6">
              Access patient records, update medical information, and integrate with your clinic management system.
            </p>
            <ul className="space-y-2 text-sm text-gray-400 mb-6">
              <li>• Scan QR codes for instant access</li>
              <li>• View complete medical history</li>
              <li>• Add treatment records</li>
              <li>• Emergency contact information</li>
            </ul>
            <Button variant="secondary" className="w-full" disabled>
              Vet Portal (Coming Soon)
            </Button>
          </div>
        </div>

        <div className="card p-8 text-center">
          <h3 className="text-xl font-bold mb-4">🔗 Blockchain Features</h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="text-2xl mb-2">🔒</div>
              <h4 className="font-semibold mb-2">Tamper-Proof Records</h4>
              <p className="text-gray-400">Medical records stored securely on Base blockchain</p>
            </div>
            <div>
              <div className="text-2xl mb-2">🌐</div>
              <h4 className="font-semibold mb-2">Always Available</h4>
              <p className="text-gray-400">Access records anywhere, anytime with internet connection</p>
            </div>
            <div>
              <div className="text-2xl mb-2">🔐</div>
              <h4 className="font-semibold mb-2">Privacy Control</h4>
              <p className="text-gray-400">You control who can access your pet's information</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}