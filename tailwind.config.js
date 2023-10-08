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
      fontFamily: {
        titilium_semibold: ['var(--font-titilium_web_sb)'],
        titilium_bold: ['var(--font-titilium_web_b)'],
        signikaN: ['var(--font-signika_negative)']
      },
    },
  },
  plugins: [],
}