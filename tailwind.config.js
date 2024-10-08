/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customcolor: "rgba(26, 239, 226, 1)",
        customcolor2: "rgba(57, 185, 177, 1)",
        customCyanHover: "rgba(20, 180, 170, 1)",
        react: "#61DAFB", // React logo color
        node: "#68A063", // Node.js logo color
        vercel: "white", // Vercel logo color
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
