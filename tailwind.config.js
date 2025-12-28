/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-outfit)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        school: {
          primary: 'var(--school-primary)',
          secondary: 'var(--school-secondary)',
          text: 'var(--school-text)',
          accent: 'var(--school-accent)',
          glass: 'var(--school-glass)',
        },
        pastel: {
          pink: '#EBE2C8',
          blue: '#9BB2CD',
          purple: '#B8A6C9',
          teal: '#7A6F9B',
          yellow: '#FFFBEB',
        },
      },
      animation: {
        blob: "blob 7s infinite",
        float: "float 6s ease-in-out infinite",
        fadeIn: "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        float: {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-10px)" }
        },
        fadeIn: {
            "0%": { opacity: "0", transform: "translateY(-10px)" },
            "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
    },
  },
  plugins: [],
}
