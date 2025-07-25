/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Important for Angular
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          400: "#60a5fa",
          600: "#2563eb",
          900: "#1e3a8a",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
