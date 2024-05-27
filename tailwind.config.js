export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F5F4F2", // background color
        "oasis-blue": "#B1DBD7", // navbar color
        "tropical-cyan": "#4BB3A9", // button color 
        "darker-cyan": "#357F78", // footer link color
        "midnight-moss": "#0C0D0F", // text color
        "gray-moss": "#667085", // footer color 
        "light-orange": "#FFD89F",
      },
      fontFamily: {
        sans: ["Lato", "Helvetica", "Arial", "sans-serif"],
      },
      backgroundImage: {
        'tech-roles-bg': "url('./assets/tech-roles-bg.png')", // Add your image URL here
      },
    },
  },
  plugins: [],
};
