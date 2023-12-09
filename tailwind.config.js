/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple : '#755CDE',
        yellow: '#F6A560',
        pink: '#F39E9E',	
        orange: '#EB7565',
        green: '#61C4B7',
        'purple-dark': '#552049',
        black: '#030303',
        gray: '#7A746E',
        white: '#FFF7F0',
      },
      fontFamily: {
        'sans': ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

