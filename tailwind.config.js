const { rose } = require('tailwindcss/colors');
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        facebook: '#4267b2',
        twitter: '#1da1f2',
        whatsapp: '#128c7e',
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
