/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'maxime-primary': '#222222',
        'maxime-secondary': '#7B7B7B',
        'maxime-tertiary': '#F8F8F8',
        'maxime-white': '#FFFFFF',
        'maxime-dark-bg': '#222222',
        'maxime-dark-card': '#7B7B7B'
      },
      aspectRatio: {
        '3/4': '3 / 4',
      },
      screens: {
        'xs': '375px',
        'xr': '414px',
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=2000&q=80')"
      },
    },
  },
  darkMode: 'class',
  plugins: [
    require('tailwindcss-animate'),
  ],
} 