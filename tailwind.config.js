/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        matter: ["Matter", "sans-serif"],
        Roboto: ["Roboto"],
      },
    },
  },
  plugins: [],
};
