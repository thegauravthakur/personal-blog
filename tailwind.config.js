const { rose } = require('tailwindcss/colors');
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        rose,
        slate: {
          800: '#1E293B',
        },
        background: {
          200: '#e5e7eb',
          800: '#161b22',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
