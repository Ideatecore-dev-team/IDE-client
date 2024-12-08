/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B4068",
        secondary: "#A88646",
        "neutral-1": "#121212",
        "neutral-2": "#494949",
        "neutral-3": "#979797",
        "brand-red": "#C82121",
      },
    },
  },
  plugins: [],
};
