/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#7C3AED',
          600: '#6D28D9',
        },
      },
      boxShadow: {
        glass: '0 8px 32px rgba(31, 38, 135, 0.25)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(124,58,237,.25), rgba(6,182,212,.25))',
      },
    },
  },
  plugins: [],
};
