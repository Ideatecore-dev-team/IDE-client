/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "639px" },
      },
      colors: {
        primary: "#0B4068",
        secondary: "#A88646",
        "neutral-1": "#121212",
        "neutral-2": "#494949",
        "neutral-3": "#979797",
        "brand-red": "#C82121",
        "brand-red-hover": "#EB2929",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      gap: {
        '24-48': '24px 48px',
      },
      backgroundImage: {
        "batik-mobile-bg":
          "linear-gradient(0deg, rgba(18, 18, 18, 0.00) 0.4%, #121212 99.58%), url('/src/assets/images/batik-footer-Mobile.png')",
        "batik-desktop-bg":
          "url('/src/assets/images/batik-footer-Desktop.png')",
        // "gallery-1": "url('./assets/images/gallery-1.png')",
        // "gallery-2": "url('./assets/images/gallery-2.png')",
        // "gallery-3": "url('./assets/images/gallery-3.png')",
        // "gallery-4": "url('./assets/images/gallery-4.png')",
        // "gallery-5": "url('./assets/images/gallery-5.png')",
      },
    },
  },
  plugins: [],
};
