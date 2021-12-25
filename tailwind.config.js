const colors = require('tailwindcss/colors');
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
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
  plugins: [require('@tailwindcss/line-clamp')],
};
