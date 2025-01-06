/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0828f5',
        secondary: '#f58b08',
      },
      fontFamily: {
        courier: ['Courier', 'Courier New', 'monospace'],
      },
      backgroundColor: {
        card: 'rgba(255, 255, 255, 0.9)',
      },
    },
  },
  plugins: [],
};