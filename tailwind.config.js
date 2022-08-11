/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        'primary': '#FF4D55',
        'secondary': '#484848',
        'secondary-darker': '#2F2929',
        'secondary-darkest': '#261E1E'
      },
    },

  },
  plugins: [],
};