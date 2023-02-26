const colors = require('tailwindcss/colors');

const config = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
  ],

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      gray: colors.gray,
      blue: colors.sky,
      red: colors.rose,
      pink: colors.fuchsia
    },
    fontFamily: {
      display: ['Quicksand', 'sans-serif'],
      body: ['Source Sans Pro', 'sans-serif']
    },
    extend: {
      spacing: {
        // 128: '32rem',
        // 144: '36rem'
      },
      borderRadius: {
        // '4xl': '2rem'
      }
    }
  },

  plugins: [require('flowbite/plugin')],
  darkMode: 'class'
};

module.exports = config;
