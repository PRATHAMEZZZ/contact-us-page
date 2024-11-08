/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      animation: {
        'slide-top-to-bottom': 'slideTopToBottom 3s ease-in-out infinite',
        'slide-in': 'slideIn 1s ease-out forwards',
      },
      keyframes: {
        slideTopToBottom: {
          '0%': {
            transform: 'translateY(-10%)',
          },
          '50%': {
            transform: 'translateY(10%)',
          },
          '100%': {
            transform: 'translateY(-10%)',
          },
        },
        slideIn: {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  plugins: [
   ],
}
