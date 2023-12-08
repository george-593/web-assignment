/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "title": ["Montserrat", "sans-serif"],
        "text": ["Roboto", "sans-serif"]
      },
      screens: {
        "header": "965px"
      }
    },
    colors: {
      "primary": "#f23005",
      "secondary": "#f25c05",
      "accent": "#f27405",
      "black": "#262526",
      "grey": "#889190",
      "transparent": "transparent",
      "white": "white"
    }
  },
  plugins: [],
}

