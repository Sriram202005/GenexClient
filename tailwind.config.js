/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        jet: '#2E2E2E',  // Jet dark gray
         beige: '#F5F1E9',
         maroondark: '#4b0000',
      },
    },
  },
  plugins: [],
};
