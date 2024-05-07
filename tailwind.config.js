/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "cream": "#F5F4F2", // background color
        "oasis-blue": "#B1DBD7" // navbar color
      },
    },
  },
  plugins: [],
};
