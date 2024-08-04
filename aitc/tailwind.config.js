/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#F5A200",
        abu: "#8E8E8E",
        Menu: "#EAEAEA",
      }
    },
  },
  plugins: [],
}

