module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          light: "#232F3E",
          DEFAULT: "#131921",
        },
      },
    },
    screens: {
      small: "300px",
      xs: "450px",
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",
    },
  },
  plugins: [require('tailwind-scrollbar'), require("tailwind-scrollbar-hide")],
};
