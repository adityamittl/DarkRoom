module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#191A19',
        secondary: '#1E5128',
        tertiary: '#4E9F3D',
        fontColor: '#D8E9A8',
      },
      zIndex: {
        "-1": "-1",
      },
      spacing: {
        '128': '40rem',
        '256': '80rem',
      },
    },
    fontFamily: {
      'montserrat': ['Montserrat'],
      'loki': ['Loki-Regular']
    }
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },
  plugins: [],
}
