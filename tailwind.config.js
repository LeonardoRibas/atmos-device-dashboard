/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5DD629',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
