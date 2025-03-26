/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#3b82f6', // Blue-500
            light: '#60a5fa',   // Blue-400
            dark: '#2563eb',    // Blue-600
          },
        },
        animation: {
          "float": "float 6s ease-in-out infinite",
          "pulse": "pulse 4s ease-in-out infinite",
          "blob": "blob 25s linear infinite",
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          },
          pulse: {
            '0%, 100%': { opacity: 0.6 },
            '50%': { opacity: 1 },
          },
          blob: {
            '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
            '25%': { transform: 'translate(20px, -30px) scale(1.1)' },
            '50%': { transform: 'translate(-20px, 20px) scale(0.9)' },
            '75%': { transform: 'translate(20px, 40px) scale(1.05)' },
          },
        },
      },
    },
    plugins: [],
  }