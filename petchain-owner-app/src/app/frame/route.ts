import { NextRequest, NextResponse } from 'next/server'
import { APP_CONFIG } from '@/constants'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const petId = searchParams.get('petId') || '1'

  const frameHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>PetChain - Pet Medical Records</title>
        
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${APP_CONFIG.BASE_URL}/api/frame-image?petId=${petId}" />
        <meta property="fc:frame:button:1" content="View Records" />
        <meta property="fc:frame:button:2" content="Emergency Info" />
        <meta property="fc:frame:post_url" content="${APP_CONFIG.BASE_URL}/api/frame-action" />
        
        <meta property="og:title" content="PetChain - Secure Pet Records" />
        <meta property="og:description" content="Blockchain-secured pet medical records" />
      </head>
      <body>
        <div style="font-family: system-ui; max-width: 400px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; background: white; padding: 20px; border-radius: 12px;">
            <div style="font-size: 48px;">🐕</div>
            <h2>Buddy</h2>
            <p>Golden Retriever • Tag: PC001</p>
            <a href="/pet/${petId}" style="display: block; background: #2563eb; color: white; padding: 12px; border-radius: 8px; text-decoration: none; margin: 10px 0;">
              View Medical Records
            </a>
          </div>
        </div>
      </body>
    </html>
  `

  return new NextResponse(frameHtml, {
    headers: { 'Content-Type': 'text/html' },
  })
}