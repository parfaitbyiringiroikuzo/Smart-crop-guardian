# Smart Crop Guardian

An AI-powered agricultural decision-support platform that helps farmers monitor crops, identify diseases, understand farm conditions, and receive evidence-based recommendations.

## Features

- 🌾 **Crop Monitoring** - Track crop health and growth stages
- 🔍 **Disease Identification** - AI-powered crop disease detection
- 🌍 **Field Monitoring** - Monitor field conditions in real-time
- 💧 **Soil Health Analysis** - Understand soil conditions and nutrient levels
- ☀️ **Weather Integration** - Access weather data and forecasts
- 💧 **Irrigation Management** - Optimize irrigation strategies
- ⚙️ **Equipment Management** - Track and manage farm equipment
- 📋 **Reports** - Generate comprehensive farm and crop reports
- ⚠️ **Alert System** - Receive timely alerts for crop risks
- 🤖 **AI Assistant** - Ask agricultural questions and get expert guidance
- 🌐 **Multilingual Support** - Support for multiple languages

## Technology Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Runtime**: Node.js 24+
- **Package Manager**: npm 11+

## Getting Started

### Prerequisites

- Node.js 24.19.0 or higher
- npm 11.17.0 or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/parfaitbyiringiroikuzo/smart-crop-guardian.git
   cd smart-crop-guardian
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.local.example .env.local
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
smart-crop-guardian/
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          # Reusable React components
├── lib/                 # Utility functions
├── types/               # TypeScript type definitions
├── public/              # Static assets
├── .env.local.example   # Environment template
├── next.config.ts       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── package.json         # Project dependencies
```

## Development Principles

1. **Evidence-Based Diagnosis** - AI assessments are based on multiple sources of evidence, never simple guesses
2. **Honest Uncertainty** - The system will acknowledge when there's insufficient information
3. **No Fabrication** - All sources and recommendations are genuine and verifiable
4. **Farmer-Centric** - Design decisions prioritize usability for agricultural professionals
5. **Security** - API keys and sensitive data never exposed in client-side code

## Contributing

Contributions are welcome. Please ensure:

- Code follows TypeScript best practices
- Components are reusable and well-documented
- Changes maintain the agricultural design language
- All tests pass before submitting

## License

MIT License - See LICENSE file for details

## Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

**Smart Crop Guardian**: Empowering farmers with AI-driven agricultural insights.
