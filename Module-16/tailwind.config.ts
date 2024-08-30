import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./mdx-components.tsx",
    "content/**/*.mdx",
  ],

  theme: {
    extend: {
      animation: {
        title: "title 4s ease-out forwards",
        "fade-in": "fade-in 4s ease-in-out forwards",
        "fade-left": "fade-left 4s ease-in-out forwards",
        "fade-right": "fade-right 4s ease-in-out forwards",
      },

      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0%",
          },
          "25%": {
            opacity: "0%",
          },
          "50%": {
            opacity: "0%",
          },
          "75%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },

        "fade-left": {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0%",
          },
          "30%": {
            transform: "translateX(0%)",
            opacity: "100%",
          },
          "100%": {
            opacity: "0%",
          },
        },

        "fade-right": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0%",
          },
          "30%": {
            transform: "translateX(0%)",
            opacity: "100%",
          },
          "100%": {
            opacity: "0%",
          },
        },

        title: {
          "0%": {
            "line-height": "0%",
            "letter-spacing": "0.25em",
            opacity: "0",
          },
          "25%": {
            "line-height": "0%",
            opacity: "0%",
          },
          "50%": {
            "line-height": "0%",
            opacity: "0%",
          },
          "75%": {
            opacity: "100%",
          },

          "100%": {
            "line-height": "100%",
            opacity: "100%",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
