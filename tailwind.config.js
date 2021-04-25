module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary": "#035c03",
        "secondary": "#f9e0a6",
        "accent": "#fff700",
        "background": "#fdfcfa",
        'my-black': "#040404",
        'my-gray': "#edeff7",
        'my-blue': "#3B3DBE",
        'my-white': "#F9F7F4",
        'my-orange': "#F2BD53"
      },
      fontSize: {
        '10xl': '9rem',
        '11xl': '10rem',
        '12xl': '11rem',
        '13xl': '12rem',
        '14xl': '13rem',
       },
       backgroundImage: theme => ({
        'hero-gradient-1': "url('./dist/img/UltraVoilet.jpg')",
       }),
       borderWidth: {
        'max': '14px',
        "lg": '24px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
