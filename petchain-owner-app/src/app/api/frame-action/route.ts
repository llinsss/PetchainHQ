import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { untrustedData } = body
    const { buttonIndex, inputText } = untrustedData

    // Handle different button actions
    switch (buttonIndex) {
      case 1:
        // View Records button
        return NextResponse.json({
          type: 'frame',
          frameUrl: `${request.nextUrl.origin}/pet/1`
        })
      
      case 2:
        // Emergency Info button
        return NextResponse.json({
          type: 'frame',
          frameUrl: `${request.nextUrl.origin}/pet/1?tab=emergency`
        })
      
      default:
        return NextResponse.json({
          type: 'frame',
          frameUrl: `${request.nextUrl.origin}/`
        })
    }
  } catch (error) {
    console.error('Frame action error:', error)
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}