/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 4px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-up-1.5s': 'fadeUp 1s ease-in-out',
        // Only start this animation after 2 seconds
        'fade-up-2s': 'slideLeft 1s ease-in-out 1s both',
        'revBlock': 'appearText 0.0001s linear  1.7s forwards',
        'revBlockAfter': 'revBlock 2s cubic-bezier(0.19,1,0.22,1) 1s forwards'
      },
      keyframes: {
        fadeUp: {
          '0%': {
            opacity: 0,
            transform: 'translateY(40px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        appearText: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          }

        },
        revBlock: {
          '0%': {
            left: 0,
            height: '100%',
            width: '0%'
          },
          '50%': {
            left: 0,
            height: '100%',
            width: '100%'
          },
          '100%': {
            left: '100%',
            height: '100%',
            width: '0%'
          },
        }
      },
      fontFamily: {
        'sansita': ['"Sansita Swashed"', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

