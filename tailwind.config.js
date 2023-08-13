/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: 'rgba(6, 45, 52,0.5)',
        blue1: 'rgba(6, 45, 52,1)',
        gold: 'rgba(244, 218, 191)',
      },
    },
  },
  plugins: [],
};
