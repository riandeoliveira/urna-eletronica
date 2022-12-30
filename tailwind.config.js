/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "digit-btn": "inset -3px -3px 0px 1px rgba(12, 12, 12, 0.8)",
        "white-btn": "inset -3px -3px 0px 1px rgba(131, 131, 131, 0.8)",
        "corrects-btn": "inset -3px -3px 0px 1px rgba(148, 26, 0, 0.8)",
        "confirm-btn": "inset -3px -3px 0px 1px rgba(2, 87, 0, 0.8)",
        "active-digit-btn": "inset 1px 1px 0px 1px rgba(12, 12, 12, 0.8)",
        "active-white-btn": "inset 1px 1px 0px 1px rgba(131, 131, 131, 0.8)",
        "active-corrects-btn": "inset 1px 1px 0px 1px rgba(148, 26, 0, 0.8)",
        "active-confirm-btn": "inset 1px 1px 0px 1px rgba(2, 87, 0, 0.8)",
      },
      colors: {
        "primary-500": "#006aeb",
      },
      fontFamily: {
        primary: ["Inter", "sans-serif"],
      },
      screens: {
        desktop: "2560px",
        "laptop-l": "1440px",
        "laptop-m": "1280px",
        "laptop-s": "1024px",
        "tablet-l": "900px",
        "tablet-m": "768px",
        "tablet-s": "600px",
        "mobile-l": "425px",
        "mobile-m": "375px",
        "mobile-s": "320px",
      },
    },
  },
  plugins: [],
};
