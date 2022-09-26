/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "pacifico": ["Pacifico", "sans-serif"]
      },
      colors: {
        "gray-primary": "#828282",
        "purple-primary": "#6c63ff",
      },
      textColor: {
        "purple-primary": "#6c63ff",
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
