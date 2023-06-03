/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: "Josefin",
    },
    extend: {
      colors: {
        "bright-blue": "hsl(220, 98%, 61%)",
        "bg-check-1": "#57ddff",
        "bg-check-2": "#c058f3",
        "v-light-gray": "hsl(0, 0%, 98%)",
        "v-light-gray-blue": "hsl(236, 33%, 92%)",
        "light-gray-blue": "hsl(233, 11%, 84%)",
        "dark-gray-blue": "hsl(236, 9%, 61%)",
        "v-dark-gray-blue": "hsl(235, 19%, 35%)",
        "v-dark-blue": "hsl(235, 21%, 11%)",
        "v-dark-desaturated-blue": "hsl(235, 24%, 19%)",
        "custom-blue": "hsl(234, 39%, 85%)",
        "light-grayish-blue-hover": "hsl(236, 33%, 92%)",
        "dark-grayish-blue": "hsl(234, 11%, 52%)",
        "v-dark-grayish-blue": "hsl(233, 14%, 35%)",
        "e-dark-blue": "hsl(237, 14%, 26%)",
      },
    },
  },
  plugins: [],
  safelist: [
    "bg-indigo-950",
    {
      pattern: /bg-\w+-[1-9]00/,
    },
  ],
};
