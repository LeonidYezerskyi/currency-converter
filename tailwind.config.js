/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: () => ({
        primary: {
          0: "#F8FBFF",
          100: "#DDEBFE",
          200: "#A9CCFD",
          300: "#76AEFC",
          400: "#3185FB",
          500: "#0E72FA",
          600: "#055FDF",
          700: "#0450BA",
          800: "#034095",
          900: "#02306F",
        },
        secondary: {
          100: "#FAFAFB",
          200: "#F3F5F7",
          300: "#C3D4E9",
          400: "#90A3BF",
          500: "#596780",
          600: "#475266",
          700: "#3A4353",
          800: "#20252E",
          900: "#040815",
        },
        lime: {
          100: "#ecfccb",
          200: "#d9f99d",
          300: "#bef264",
          400: "#a3e635",
          500: "#84cc16",
          600: "#65a30d",
          700: "#4d7c0f",
          800: "#3f6212",
          900: "#365314",
        },
      }),
    },
  },
  plugins: [],
};
