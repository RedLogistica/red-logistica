/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "dim",
      "forest",
      "aqua",
      "emerald",
      "corporate",
      "retro",
      "cupcake",
      "winter",
      "synthwave",
      "night",
    ],
  },
};
