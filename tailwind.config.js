/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arimo: ["Arimo", "sans-serif"],
        sansSerif: "ui-sans-serif",
      },
    },
  },
  plugins: [],
};
