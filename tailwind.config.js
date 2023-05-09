/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1038px',
    },
    extend: {
      colors: {
        primary: {
          100: '#cbf3ff',
          200: '#2ea3f2',
          300: '#2088a9',
          400: '#98e6ff',
        },
        neutral: {
          100: '#f2f2f2',
          200: '#dedee3',
          300: '#9797a1',
          400: '#595962',
          500: '#131316',
        },
        page: '#fcfcff',
      },
      backgroundImage: {
        projects: "url('/src/assets/images/quote.jpg')",
        slide1: "url('/src/assets/images/hero/bg1.jpg')",
        slide2: "url('/src/assets/images/hero/bg2.jpg')",
        slide3: "url('/src/assets/images/hero/bg3.jpg')",
      },
    },
  },
  plugins: [],
};
