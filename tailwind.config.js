/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#7956FF",
        lightPrimary: "#7956FF",
        secondary: "#FF9228",
        black: "#333333",
      },
      fontFamily: {
        Roboto: ["Roboto"],
      },
      maxWidth: {
        panel: "50rem",
      },
    },
  },
  plugins: [],
};
