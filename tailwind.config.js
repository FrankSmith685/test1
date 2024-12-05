/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lobster': ['Lobster', 'cursive'],
        'comic': ['"Comic Sans MS"', 'cursive'],
        'bell': ['"Bell MT"', 'serif'],
        'streamline': ['"Streamline Moderne"', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
        'roboto-thin': ['Roboto', 'sans-serif'],  // Agrega esta línea
      },
      height:{
        h_screen_80: "80vh",
        h_custom_1: "calc(100vh - 100px)",
        favorite_1:"1px"
      },
      width:{
        favorite_1:'1px',
        favorite_2:'0.2px'
      },
      borderWidth:{
        border_1: "1px",
        border__5: "0.5px",
      },
      backgroundColor:{
        bg_favorite_1: "rgba(0,0,0,0.5)",
        bg_favorite_2: "rgba(219, 187, 136, 1)",
        bg_favorite_gradient_start: "rgba(219,187,136,1)",
        bg_favorite_3: "#2F3452",
        bg_favorite_4: "#404858",
        bg_favorite_5: "rgb(150, 148, 201)"
      },
      colors: {
        customColor1: "rgba(219, 187, 136, 1)",
        customColor2: "rgba(209, 169, 101, 1)",
        customColor3: "rgba(175, 150, 108, 1)",
        customColor4: "rgba(167, 135, 81, 1)",
        customColor5: "rgb(150, 148, 201)",
        customColor6: "rgb(90, 89, 121)",

      },
      animation: {
        waving: "waving 1s infinite",
        typing: "typing 3s steps(40, end)",
        erasing: "erasing 1.5s steps(40, end) 1.5s",
      },
      keyframes: {
        waving: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(20deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        typing: {
          "0%": { width: "0" },
          "50%": { width: "100%" },
          "100%": { width: "100%" },
        },
        erasing: {
          "0%": { width: "100%" },
          "50%": { width: "100%" },
          "100%": { width: "0" },
        },
      },
      screens: {
        // md: "1035px",
        md: "1120px",
        lg: "1200px",
      },
    },
  },
  plugins: [],
};
