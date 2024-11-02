/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        1: '#FC4747',
        2: '#10141e',
        3: '#5A698F',
        4: '#161d2F',
        5: '#FFFFFF',
      },
      typography:{
        
      }
    },
  },
  plugins: [],
}

