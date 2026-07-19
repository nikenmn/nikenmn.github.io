const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: 'class',
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '8rem'
      }
    },
    extend: {
      colors: {
        primary: {
          lightest: '#F0FAFF',
          light: '#D6F0FF',
          DEFAULT: '#6199ED',
          dark: '#6BB7E6',
          darkest: '#4A9FCC'
        },
        accent: {
          DEFAULT: '#2F6FA3',
          light: '#7DD3FC'
        },
        teal: {
          ...colors.teal,
          DEFAULT: '#6DBC8A'
        },
        gray: {
          ...colors.gray,
          dark: '#46464A',
          light: '#575761'
        },
        white: {
          ...colors.white,
          DEFAULT: '#FFFFFF',
          darker: '#F4F4F4'
        },
        black: {
          DEFAULT: '#000000'
        },
      }
    },
    fontFamily: {
      body: [
        'Plus Jakarta Sans',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif'
      ],
      display: [
        'Plus Jakarta Sans',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif'
      ],
      article: [
        'Plus Jakarta Sans',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif'
      ]
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
