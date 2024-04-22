/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      screens: {
        sm: "320px",
        xl: "1440px",
      },
    },
    extend: {
      colors: {
        Green: "hsl(75, 94%, 57%)",
        White: "hsl(0, 0%, 100%)",
        grey: "hsl(0, 0%, 20%)",
        "dark-Grey": "hsl(0, 0%, 12%)",
        "off-Black": "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        "inter-bold": ["Inter-Bold", "sans-serif"],
        "inter-semibold": ["Inter-Semibold", "sans-serif"],
        "inter-regular": ["Inter-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
