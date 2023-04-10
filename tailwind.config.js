/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gunmetal: "#252a34",
        azure: "#edf7f6",
        keppel: "#15b097",
        thullian: "#ce7da5",
        raspberry: "#d81e5b",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
