/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        brastika: ["Brastika"],
        spaceGrotesk: ["Space Grotesk"],
        robotoMono: ["Roboto Mono"],
      },
      colors: {
        // 'dark-purple': '#202030',
        "light-purple": "#8A80F9",
        "bright-purple": "#42239F",
      },
    },
  },
  plugins: [],
};
