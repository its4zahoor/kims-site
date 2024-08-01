const { green } = require("@mui/material/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          kims: "#BB3131",
        },
        blue: {
          kims: "#274474",
        },
        offwhite: {
          kims: "#F3F3F3",
        },
        green: {
          kims: "#04824B",
        },
      },
    },
  },
  plugins: [],
};
