/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",  // Scans /src/app/ (your pages/layouts)
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",  // For future /src/components/
    "./components/**/*.{js,ts,jsx,tsx,mdx}",  // Fallback if you put components at root (per plan)
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A1E2E', // Deep teal background
        accent: '#FF6B00', // Orange for titles/buttons
      },
      backgroundImage: {
        'gradient-hero': 'gradient-to-br from-primary to-accent/20',
      },
      boxShadow: {
        'card-glow': '0 4px 6px rgba(255, 107, 0, 0.1)', // Subtle orange glow
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        times: ['Times', 'serif'],
      },
    },
  },
  plugins: [],
};