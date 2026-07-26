/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui"]
      },
      colors: {
        midnight: "#03040a",
        ink: "#070913",
        cyanGlow: "#44d8ff",
        violetGlow: "#a855f7",
        electric: "#5d7cff"
      },
      boxShadow: {
        neon: "0 0 32px rgba(68, 216, 255, 0.22), 0 0 80px rgba(168, 85, 247, 0.14)",
        card: "0 24px 80px rgba(0, 0, 0, 0.45)"
      },
      backgroundImage: {
        "radial-neon":
          "radial-gradient(circle at 20% 20%, rgba(68,216,255,.18), transparent 32%), radial-gradient(circle at 80% 0%, rgba(168,85,247,.18), transparent 34%), radial-gradient(circle at 50% 90%, rgba(93,124,255,.14), transparent 36%)"
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        pulseGlow: "pulseGlow 3.4s ease-in-out infinite",
        shimmer: "shimmer 2.8s linear infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(3deg)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55", filter: "blur(0px)" },
          "50%": { opacity: "1", filter: "blur(1px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" }
        }
      }
    }
  },
  plugins: []
};
