/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#F2F2F2",
          200: "#D9D9D9",
          300: "#808080",
          400: "#333333",
          500: "#262626",
          600: "#1A1A1A",
          700: "#0D0D0D",
        },

        purple: {
          300: "#8284FA",
          500: "#5360CE",
        },

        blue: {
          300: "#4EA8D3",
          500: "#1E6F9F",
        },
      },

      fontFamily: {
        body: "Inter, sans-serif",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
