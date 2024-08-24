/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        orangeColor: "#ff8a1d",
        blueColor: "#0355cc",
        lightBlue: "#d1e3ff",
        darkBlue: "#0a0f43",
      },
      boxShadow: {
        "3xl": "0 0 10px 0 rgba(0, 0, 0, 0.3)",
      },
      screens: {
        sm: "340px",
        sm2: "500px",
        md: "750px",
        lg: "1080px",
        xl: "1440px",
        "2xl": "1600px",
      },
      container: {
        center: true,
        screens: {
          sm: "340px",
          sm2: "500px",
          md: "750px",
          lg: "1080px",
          xl: "1440px",
          "2xl": "1600px",
        },
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
