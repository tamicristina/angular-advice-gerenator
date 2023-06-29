/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "light-blue": "rgb(0, 117, 247)",
        "dark-blue": "rgb(26, 38, 62)",
      },
    },
  },
  plugins: [],
};
