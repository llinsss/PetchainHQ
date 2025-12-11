import './globals.css'

export const metadata = {
  title: 'PetChain - Pet Owner Dashboard',
  description: 'Secure pet medical records on blockchain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-md mx-auto min-h-screen" style={{ background: 'var(--bg-secondary)' }}>
          {children}
        </div>
      </body>
    </html>
  )
}