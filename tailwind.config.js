/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     
    },

    screens: {
      'xs': {'max': '320px'},
      'sm': {'max': '640px'},
      'md': {'max': '767px'},
      'lg': {'max': '1023px'},
      'xl': {'max': '1279px'},
      '2xl': {'max': '1535px'},
    }

  },
  
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light"]
  },

};