/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        customGray: "#F4F4F4",
        customBorderGray: "#C1C1C1",
      },
    },
  },
  plugins: [],
};
