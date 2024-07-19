
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */

module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Poppins", "sans-serif"],
        "serif": ["Roboto", "sans-serif"]
      },
      colors: {
        "freedom-blue": "#055faf",
        "freedom-ligh-blue": "#01d8f4",
        "freedom-yellow": "#f7f1b5",
        "freedom-violet": "#8431b5",
        "freedom-gray": "#959595",
        "freedom-text": "#232323",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("rippleui"),
    flowbite.plugin(),
 ],
};


 

