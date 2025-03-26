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
      },
    },
    plugins: [],
  }