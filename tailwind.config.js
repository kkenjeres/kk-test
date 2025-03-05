/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00D15F",
        hover: "#009277",
        inputBorder: "#232323",
        inputHoverBg: "#F0F0F0",
      },
    },
  },
  plugins: [],
};
