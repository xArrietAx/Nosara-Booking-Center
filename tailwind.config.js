const theme = require("./src/config/theme.json");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      colors: {
        text: theme.colors.text,

        dark: theme.colors.dark,

        primary: theme.colors.primary,
        
        secondary: theme.colors.secondary,
        
        border: theme.colors.border,
      },

      transitionDuration: {
        duration: "300ms"
      }

    },
    
    screens: {
      'xs': '520px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    container: {
      center:true,
      padding:{
        DEFAULT: '1rem',
        '2xl': '8rem',
      }
    },
  },
  plugins: [],
};
