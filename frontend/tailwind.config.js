/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'background-blue-light': '#f3f4ff',
        'background-blue': '#bcc0e8',
        'button-blue': '#5960a0',
      },
    },
  },
  plugins: [],
}

