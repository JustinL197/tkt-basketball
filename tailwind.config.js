export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        transform: ['group-hover'],
      },
    },
    plugins: [
      function ({ addUtilities }) {
        addUtilities({
          '.perspective': {
            perspective: '1000px',
          },
          '.backface-hidden': {
            'backface-visibility': 'hidden',
          },
          '.rotate-y-180': {
            transform: 'rotateY(180deg)',
          },
        })
      }
    ],
  }