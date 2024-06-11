export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "oasis-blue": "#B1DBD7", // navbar color
        "tropical-cyan": "#4BB3A9", // button color 
        "light-gray": "#F9FAFB", // back button color
        "darker-gray": "#EAECF0", // back button hover color
        "darker-cyan": "#36817A", // link color
        "darkest-cyan": "#2D6B65", // link hover color
        "midnight-moss": "#0C0D0F", // text color
        "gray-moss": "#667085", // footer color 
        "green-blue": "#C7E7E4", // footer border 1
        "light-orange": "#FFD89F", // footer border 2
        "lightest-cyan": "#EDF7F6", // skill hover button color
        "light-cyan": "#86CCC5", // skill hover border color
      },
      fontFamily: {
        sans: ["Lato", "Helvetica", "Arial", "sans-serif"],
      },
      backgroundImage: {
        'tech-roles-bg': "url('./assets/tech-roles-bg.png')",
      },
      fontSize: {
        'xxs': '0.75rem',
      }
    },
  },
  plugins: [],
};
