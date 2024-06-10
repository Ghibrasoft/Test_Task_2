/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        vio: "#8A73FF",
        "vio-deep": "#1A0745",
        "vio-dark": "#533E81",
        "vio-soft": "#9C71FC",
        "vio-pale": "#D5D1FB",
        "frost-soft": "#ADFE4F9",
        "light-frost-pale": "#F6F9FA",
      },
    },
  },
  plugins: [],
};
