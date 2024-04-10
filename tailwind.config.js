/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#7956FF",
        lightPrimary: "#AD98FF",
        secondary: "#FF9228",
        black: "#333333",
        bgWhite: "#F9F9F9",
        lightGray: "#A0A7B1",
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
