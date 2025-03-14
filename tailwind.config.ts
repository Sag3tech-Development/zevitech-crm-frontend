import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/custom-pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "secondary-background": "var(--secondary-background)",

        foreground: "var(--foreground)",
        "general-hover": "var(--general-hover)",

        heading: "var(--heading)",
        paragraph: "var(--paragraph)",

        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },

        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },

        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          hover: "var(--primary-hover)",
        },

        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
          hover: "var(--secondary-hover)",
        },

        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },

        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },

        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },

        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",

        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
      },

      boxShadow: {
        "card-shadow-1": "0 0.375rem 1rem rgba(0, 0, 0, 0.1)",
        "card-shadow-2": "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        "card-shadow-3":
          "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
        "button-shadow":
          "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      fontFamily: {
        poppins: ["var(--font-poppins)", "serif"],
        inter: ["var(--font-inter)", "serif"],
        jetbrains: ["var(--font-jetbrains)", "monospace"],
      },

      screens: {
        xs: "320px",
        sm: "480px",
        md: "768px",
        lg: "1098px",
        xl: "1440px",
        "2xl": "1536px",
      },

      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },

        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

  plugins: [
    function ({ addComponents }: PluginAPI) {
      addComponents({
        ".layout-standard": {
          width: "92%",
          marginLeft: "auto",
          marginRight: "auto",

          "@screen lg": {
            width: "97%",
          },
        },

        ".page-layout-standard": {
          width: "92%",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",

          "@screen lg": {
            width: "97%",
          },
        },

        ".flex-center": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },

        ".animation-standard": {
          transition: "all ease-in-out 0.5s",
        },

        ".section-padding-standard": {
          paddingTop: "2rem",
          paddingBottom: "2rem",
        },

        ".section-margin-standard": {
          marginTop: "2rem",
          marginBottom: "2rem",
        },

        ".standard-card-styling": {
          width: "100%",
          borderRadius: "0.5rem",
          border: "1px solid var(--border)",
          boxShadow: "0 0.375rem 1rem rgba(0, 0, 0, 0.1)",
        },
      });
    },

    tailwindcssAnimate,
  ],
} satisfies Config;
