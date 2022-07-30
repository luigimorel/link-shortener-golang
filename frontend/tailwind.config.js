/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { "gray-primary": "#828282" },
      textColor: {
        "blue-primary": "#2D9CDB",
        "gray-primary": "#828282",
      },
      height: {
        72: "72px",
      },
      width: { 72: "72px" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
