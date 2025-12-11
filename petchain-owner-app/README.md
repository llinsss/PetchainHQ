# PetChain Owner App

A mobile-first web application for pet owners to manage their pets' medical records on the blockchain.

## Features

- **Pet Management**: Add and manage multiple pets with photos and basic information
- **Medical Records**: Track vaccinations, treatments, and veterinary visits
- **QR Code Generation**: Create scannable QR codes for each pet's medical records
- **Privacy Controls**: Manage who can access pet medical information
- **Farcaster Integration**: Optimized frames for social sharing on Farcaster
- **Emergency Access**: Quick access to critical pet information

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **QR Codes**: qrcode library
- **Blockchain**: Base (Coinbase L2)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Farcaster Integration

The app includes Farcaster frame support for sharing pet medical records:

- `/frame?petId=1` - Farcaster frame for pet records
- `/api/frame-image` - Dynamic frame images
- `/api/frame-action` - Frame interaction handling

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Main dashboard
│   ├── pet/[id]/page.tsx     # Pet detail page
│   ├── frame/route.ts        # Farcaster frame
│   └── api/                  # API routes
├── components/
│   ├── PetCard.tsx           # Pet display component
│   ├── AddPetModal.tsx       # Add pet form
│   └── QRCodeGenerator.tsx   # QR code generation
└── lib/                      # Utilities
```

## Features Implemented

✅ Pet profile management
✅ Medical record tracking
✅ QR code generation
✅ Privacy settings
✅ Farcaster frame integration
✅ Mobile-responsive design
✅ Emergency contact management

## Blockchain Integration

The app is designed to work with Base blockchain for:
- Secure medical record storage
- Tamper-proof vaccination records
- Decentralized pet identification
- Smart contract interactions (coming soon)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details