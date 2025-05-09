/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./**/*.{vue,js,ts}"],
    theme: {
        extend: {
          fontFamily: {
            figtree: ['Figtree', 'sans-serif'], 
          },
        },
      },
  };