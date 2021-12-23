const colors = require('tailwindcss/colors');
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        moon: {
          '0%': { transform: 'rotate(50deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        moon: 'moon 0.3s ease-out',
      },
      colors: {
        rose: colors.rose,
        slate: {
          800: '#1E293B',
        },
        background: {
          800: '#161b22',
        },
      },
    },
  },
  plugins: [],
};
