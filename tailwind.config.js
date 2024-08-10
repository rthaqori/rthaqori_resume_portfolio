/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "9xl": "1440px",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "scale(0.8)", top: "-40px" },
          "50%": { transform: "scale(1.2)", top: "0px" },
        },
      },
      animation: {
        bounce: "bounce 1.5s ease-in-out infinite",
      },
      transitionProperty: {
        transform: "transform , translate",
      },
      colors: {
        primary: "#3498db",
        secondary: "#f1c40f",
        dark: "#111111",
        heroBackground: "rgba(240, 237, 232, 0.9)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
