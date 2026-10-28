/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          background: '#030712',
          card: '#081226',
          border: '#bb08f4',
          text: '#bb08f4',
          glow: 'rgba(187, 8, 244, 0.32)',
        },
        portfolio: {
          light: '#f8fafc',
          dark: '#090d16',
        },
      },
      boxShadow: {
        'accent-glow': '0 0 24px rgba(187, 8, 244, 0.24)',
      },
    },
  },
  plugins: [],
}
