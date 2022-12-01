/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "600px",
        lg: "1025px",
      },
      colors: {
        default: "#F7F8F9",
        background: "#0F1112",
        primary: "#0F1112",
        secondary: "#3C8443",
        secondaryLight: "#95DB9A",
        secondaryDark: "#274129",
        accent: "#AF201D",
        accentLight: "#E10B07",
        accentDark: "#7B191C",
        grey: "#8D9497",
        greyLight: "#EDEEEE",
        greyDark: "#2A2F31",
      },
      backgroundSize: {
        homePage: "50vw, 110vw 110vh",
        otherPage: "110vw 110vh",
      },
      fontFamily: {
        body: '"Open Sans", "Helvetica Neue", "Arial", sans-serif',
        heading: '"Heebo", "Roboto", "Helvetica Neue", "Arial", sans-serif',
        monospace: '"Courier Prime", Consolas, "Liberation Mono", monospace',
      },
      fontWeight: {
        body: 400,
        heading: 600,
        bold: 700,
      },
      fontSize: {
        body: ["14px", "1.6"],
        "body-sm": ["16px", "1.6"],
        "body-lg": ["18px", "1.6"],
        heading: ["3em", "1.2"],
        subheading: ["2em", "1.2"],
        "subheading-lg": ["2.5em", "1.2"],
        "1.5em": ["1.5em", "1.2"],
        tagline: ["1.2rem", "1.2"],
        "0.8em": ["0.8em", "1.2"],
        "footer-lg": ["1em", "1.2"],
      },
      lineHeight: {
        monospace: 1,
      },
      borderWidth: {
        3: "3px",
      },
      letterSpacing: {
        heading: "0.01em",
      },
      margin: {
        bodyBottom: "1.45em",
      },
      tracking: {
        heading: "0.01em",
      },
      width: {
        "burger-width": "25px",
      },
      height: {
        "burger-height": "3px",
      },
      minHeight: {
        "full-height": "calc(100vh - 4em)",
      },
      keyframes: {
        "pulse-slow": {
          "0%": {
            opacity: 1,
          },
          "70%": {
            opacity: 0.7,
          },
          "100%": {
            opacity: 1,
          },
        },
        float: {
          "0%": {
            transform: "translate(0, 0)",
          },
          "40%": {
            transform: "translate(-5px, 10px)",
          },
          "100%": {
            transform: "translate(0, 0)",
          },
        },
        flash: {
          "0%": {
            opacity: 0.5,
          },
          "50%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0.5,
          },
        },
        "fade-in": {
          "0%": {
            opacity: 0.5,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        appear: "fade-in 0.8s ease-out",
        ghost1: "pulse-slow 3s linear infinite, float 3s linear infinite",
        ghost2:
          "pulse-slow 2.8s 0.3s linear infinite, float 3.2s 0.5s linear infinite",
        ghost3:
          "pulse-slow 2.2s linear reverse infinite, float 3.6s linear reverse infinite",
        loader: "flash 1.3s ease-in-out infinite",
      },
    },
  },
  variants: {},
  plugins: [],
};
