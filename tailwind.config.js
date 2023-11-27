/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.vue" ],
  theme: {
      extend: {
        colors: {
          'lightbg': '#E5E7EB',
          'darkbg': '#101727',
          'darkitem': '#4B5563',
          'white1' : '#F2EAF2',
          'white2' : '#96A4BF',
          'white3' : '#7989A2',
        },
        fontFamily: {
          'open': ['Open Sans'],
          'quick': ['Quicksand'],
          'roboto': ['Roboto Slab'],
        },
        keyframes: {
          'fade-in' : {
            '0%' : {
              opacity: '0'
            },
            '100%' : {
              opacity: '1'
            }
          },
          'fade-in-up': {
            '0%': {
              opacity: '0',
              transform: 'translateY(50px)'
            },
            '100%': {
              opacity: '1',
              transform: 'translateY(0)'
            },
          },
          'fade-in-down': {
            '0%': {
              opacity: '0',
              transform: 'translateY(-50px)'
            },
            '100%': {
              opacity: '1',
              transform: 'translateY(0)'
            },
          },
          'fade-in-left': {
            '0%': {
              opacity: '0',
              transform: 'translateX(-50px)'
            },
            '100%': {
              opacity: '1',
              transform: 'translateX(0)'
            },
          },
          'fade-in-right': {
            '0%': {
              opacity: '0',
              transform: 'translateX(50px)'
            },
            '100%': {
              opacity: '1',
              transform: 'translateX(0)'
            },
          },
          'fade-in-zoom': {
            '0%': {
              transform: 'scale(0)',
              opacity: '0'
            },
            '70%': {
              transform: 'scale(1.2)'
            },
            '100%': {
              transform: 'scale(1)',
              opacity: '1'
            },
          },
          'fade-out-zoom' : {
            '0%' : {
              transform: 'scale(1)',
              opacity: '1'
            },
            '30%' : {
              transform: 'scale(1.2)'
            },
            '100%' : {
              transform: 'scale(0)',
              opacity: '0'
            }
          },
          'fade-in-nav': {
            '0%': {
              opacity: '0',
              transform: 'translateY(-100%)',
            },
            '100%': {
              opacity: '0.8',
              transform: 'translateY(0)'
            },
          },
          'fade-out-nav': {
            '0%': {
              opacity: '0.8',
              transform: 'translateY(0)'
            },
            '100%': {
              opacity: '0',
              transform: 'translateY(-100%)',
            },
          },
        },
        animation: {
          'fade-in': 'fade-in 1s ease-in-out',
          'fade-in-up': 'fade-in-up 0.5s ease-out',
          'fade-in-down': 'fade-in-down 0.5s ease-out',
          'fade-in-left': 'fade-in-left 0.5s ease-out',
          'fade-in-right': 'fade-in-right 0.5s ease-out',
          'fade-in-zoom': 'fade-in-zoom 0.5s ease-in',
          'fade-out-zoom': 'fade-out-zoom 0.5s ease-in',
          'fade-in-nav': 'fade-in-nav 0.5s ease-in-out',
          'fade-out-nav': 'fade-out-nav 0.5s ease-in-out',
        },
      },
  },
  plugins: [],
}