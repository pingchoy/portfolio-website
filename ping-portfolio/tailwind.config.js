/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
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
        'slow-pulse': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-up-short': 'fadeUp 0.5s ease-in-out 0s both',
        'fade-down-short': 'fadeDown 0.5s ease-in-out 0s both',
        // Only start this animation after 2 seconds
        'fade-up-long': 'fadeUp 1s ease-in-out 1s both',
        'revBlock': 'appearText 0.0001s linear  0.5s forwards',
        'revBlockAfter': 'revBlock 2s cubic-bezier(0.19,1,0.22,1) 0s forwards',
        'oneTimerevBlock': 'appearText 0.0001s linear  2.5s forwards',
        'oneTimerevBlockAfter': 'revBlock 2s cubic-bezier(0.19,1,0.22,1) 2s forwards'

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
        fadeDown: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-40px)',
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

