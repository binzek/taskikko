/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "palette-grey": "#F4F4F4",
        "palette-mint": "#6DECB9",
        "palette-teal": "#11999E",
        "palette-black": "#3C3C3C",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
