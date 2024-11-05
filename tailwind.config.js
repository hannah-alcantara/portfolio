/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
           fontFamily: {
        brastika: ["Brastika", "sans-serif"],          // Fallbacks to sans-serif
        spaceGrotesk: ["Space Grotesk", "sans-serif"], // Fallbacks to sans-serif
        robotoMono: ["Roboto Mono", "monospace"],      // Fallbacks to monospace
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
