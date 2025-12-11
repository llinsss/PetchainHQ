import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const petId = searchParams.get('petId') || '1'

  // Generate SVG image for the frame
  const svg = `
    <svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#3b82f6"/>
          <stop offset="100%" style="stop-color:#1e40af"/>
        </linearGradient>
      </defs>
      
      <rect width="600" height="400" fill="url(#bg)"/>
      
      <circle cx="150" cy="150" r="60" fill="white" opacity="0.2"/>
      <text x="150" y="170" text-anchor="middle" font-size="60" fill="white">🐕</text>
      
      <text x="300" y="120" font-family="system-ui" font-size="36" font-weight="bold" fill="white">Buddy</text>
      <text x="300" y="160" font-family="system-ui" font-size="20" fill="white" opacity="0.9">Golden Retriever • 3 years</text>
      <text x="300" y="190" font-family="system-ui" font-size="16" fill="white" opacity="0.7">Tag ID: PC001</text>
      
      <rect x="50" y="250" width="500" height="100" rx="12" fill="white" opacity="0.1"/>
      <text x="300" y="285" text-anchor="middle" font-family="system-ui" font-size="18" font-weight="600" fill="white">
        Secure Pet Medical Records
      </text>
      <text x="300" y="315" text-anchor="middle" font-family="system-ui" font-size="14" fill="white" opacity="0.8">
        Powered by PetChain on Base Blockchain
      </text>
    </svg>
  `

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}