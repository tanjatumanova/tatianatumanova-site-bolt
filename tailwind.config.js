/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        serif: ['Unbounded', 'system-ui', 'sans-serif'],
      },
      colors: {
        beige: {
          50: '#FAF6F1',
          100: '#F5EFE7',
          200: '#E8DED0',
        },
        olive: {
          DEFAULT: '#A68C6D',
          dark: '#8F7759',
        },
        charcoal: {
          DEFAULT: '#3C3C3B',
          light: '#5C5C5A',
          lighter: '#6C6C6A',
        },
      },
    },
  },
  plugins: [],
};
