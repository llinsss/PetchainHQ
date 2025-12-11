import './globals.css'
import { SimpleHeader } from '../components/layout/SimpleHeader'

export const metadata = {
  title: 'PetChain - Secure Pet Medical Records',
  description: 'Tamper-proof pet medical records on blockchain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SimpleHeader />
        <main>{children}</main>
      </body>
    </html>
  )
}