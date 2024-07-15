
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
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("rippleui"),
    flowbite.plugin(),
 ],
};


 

