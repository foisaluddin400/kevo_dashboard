export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },

      colors: {
        primary: "#2B7FFF",
        "primary-light": "#2B7FFF1A",
        textColor: "#4B5563",
        borderColor: "#E5E7EB",
      },
    },
  },
  plugins: [],
}