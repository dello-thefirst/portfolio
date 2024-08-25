const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        sm: { max: "640px" }, // Max-width: 640px
        md: { max: "768px" }, // Max-width: 768px
        lg: { max: "1024px" }, // Max-width: 1024px
        xl: { max: "1280px" }, // Max-width: 1280px
        "2xl": { max: "1536px" }, // Max-width: 1536px
      },
      colors: {
        main: "rgba(var(--bg-main))",
        "color-1": "rgba(var(--color-1))",
        "color-2": "rgba(var(--color-2))",
        "color-3": "rgba(var(--color-3))",
        "color-4": "rgba(var(--color-4))",
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
