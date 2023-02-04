/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        heading: ["Sporting Grotesque", "serif"],
      },
      colors: {
        primary: "#1D2238",
        secondary: "#465286",
      },
      fontSize: {
        "heading-one": "3.375rem",
        "heading-two": "2.5rem",
        "heading-three": "1.625rem",
      },
      maxWidth: {
        container: "1290px",
      },
    },
  },
  plugins: [],
};
