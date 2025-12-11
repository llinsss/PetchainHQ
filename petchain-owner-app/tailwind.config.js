/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2d5a87',
        'primary-light': '#4a7ba7',
        accent: '#c17817',
        'accent-light': '#d4941f',
        success: '#2d7d32',
        warning: '#f57c00',
        error: '#c62828',
        'bg-primary': '#1a1f2e',
        'bg-secondary': '#242938',
        'bg-card': '#2a2f3e',
        'bg-elevated': '#323749',
        'border-primary': '#3a3f4e',
        'border-secondary': '#4a4f5e',
        'text-primary': '#f0f2f5',
        'text-secondary': '#b8bcc8',
        'text-tertiary': '#8b8f9b',
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}