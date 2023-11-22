/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
