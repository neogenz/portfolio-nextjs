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
        'maxime-primary': '#0D0D0D',
        'maxime-secondary': '#767676',
        'maxime-tertiary': '#F0F0F0',
        'maxime-white': '#FFFFFF',
        'maxime-dark-bg': '#121212',
      },
      aspectRatio: {
        '3/4': '3 / 4',
      },
      screens: {
        'xs': '375px',
        'xr': '414px',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    require('tailwindcss-animate'),
  ],
} 