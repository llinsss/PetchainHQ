import './globals.css'

export const metadata = {
  title: 'PetChain Vet Portal',
  description: 'Veterinarian portal for secure pet medical records',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen" style={{ background: '#0a0f1c' }}>
        <div className="max-w-md mx-auto min-h-screen" style={{ background: '#1a2332' }}>
          {children}
        </div>
      </body>
    </html>
  )
}