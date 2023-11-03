/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-light': '#9b59b6',
        'secondary-light': '#3498db',
        'ascent-light': '#f1c40f',
        'primary-dark': '#333333',
        'secondary-dark': '#555555',
        'ascent-dark': '#27ae60'
      },
      backgroundImage: {
        'navbar-menu': 'url(/bgWhite.png)',
        'hero': 'url(./assets/GYM.jpg)',
        'image-1': 'url(./assets/GYM1.jpg)',
        'image-2': 'url(./assets/GYM2.jpg)'
      },
    },
    
  },
  plugins: [],
}

