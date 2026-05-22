/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8B5CF6",
          dark: "#6D28D9",
          light: "#A78BFA",
        },
        secondary: {
          DEFAULT: "#D946EF",
          dark: "#A21CAF",
          light: "#F0ABFC",
        },
        accent: {
          DEFAULT: "#F472B6",
          dark: "#DB2777",
          light: "#FBCFE8",
        },
        dark: {
          DEFAULT: "#050508",
          lighter: "#0A0A14",
          card: "rgba(10, 10, 20, 0.82)",
        },
        surface: "rgba(10, 10, 20, 0.75)",
        surfaceSoft: "rgba(255, 255, 255, 0.05)",
        line: "rgba(168, 85, 247, 0.15)",
      },
      fontFamily: {
        display: ['Sora', 'Kantumruy Pro', 'Plus Jakarta Sans', 'sans-serif'],
        body:    ['Nunito', 'Kantumruy Pro', 'Plus Jakarta Sans', 'sans-serif'],
        mono:    ['Fira Code', 'JetBrains Mono', 'monospace'],
        khmer:   ['Kantumruy Pro', 'Battambang', 'sans-serif'],
        outfit:  ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 20px 60px rgba(0, 0, 0, 0.6)',
        'premium-hover': '0 30px 80px rgba(0, 0, 0, 0.7)',
        'glow-primary': '0 0 30px rgba(139, 92, 246, 0.4)',
        'glow-secondary': '0 0 30px rgba(217, 70, 239, 0.4)',
        'glow-text': '0 0 20px rgba(167, 139, 250, 0.6), 0 0 60px rgba(217, 70, 239, 0.2)',
      },
      dropShadow: {
        'premium': '0 10px 30px rgba(0, 0, 0, 0.8)',
        'glow': '0 0 20px rgba(168, 85, 247, 0.5)',
      },
      animation: {
        glow: 'glow 3s ease-in-out infinite alternate',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        fadeUp: 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        gradientShift: 'gradientShift 12s ease-in-out infinite',
        gradientPulse: 'gradientPulse 8s ease-in-out infinite',
        spinSlow: 'spin 12s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(139, 92, 246, 0.1), 0 0 20px rgba(217, 70, 239, 0.1)' },
          '100%': { boxShadow: '0 0 40px rgba(139, 92, 246, 0.3), 0 0 60px rgba(139, 92, 246, 0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        gradientPulse: {
          '0%, 100%': { filter: 'saturate(1) brightness(1)' },
          '50%': { filter: 'saturate(1.2) brightness(1.1)' },
        },
      }
    },
  },
  plugins: [],
}
