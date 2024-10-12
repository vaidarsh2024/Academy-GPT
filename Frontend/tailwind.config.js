/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ["Urbanist"],
        inter: ["Inter"],
        poppins: ["Poppins"],
        manrope: ["Manrope"],
      },

      colors: {
        primary: "#FF8000",
      },
    },
  },
  plugins: [],
};
