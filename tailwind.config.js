/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3669C9",
        secondary: "#0C1A30",
        red: "#FE3A30",
        neutral: "#C4C5C4",
        green: "#3A9B7A"
      }
    },
  },
  plugins: [],
};
