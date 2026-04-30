/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
        primary: "#2563EB",
        secondary: "#06B6D4",
        accent: "#8B5CF6",
        dark: "#08111F",
        surface: "rgba(10, 18, 32, 0.72)",
        surfaceSoft: "rgba(255, 255, 255, 0.05)",
        line: "rgba(148, 163, 184, 0.16)",
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      animation: {
        glow: 'glow 2.2s ease-in-out infinite alternate',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 1.8s linear infinite',
        fadeUp: 'fadeUp 0.7s ease-out both',
        gradientShift: 'gradientShift 16s ease-in-out infinite',
        gradientPulse: 'gradientPulse 8s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 0 0 rgba(37, 99, 235, 0.16), 0 0 24px rgba(6, 182, 212, 0.16)' },
          '100%': { boxShadow: '0 0 0 8px rgba(37, 99, 235, 0.04), 0 0 36px rgba(139, 92, 246, 0.28)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        gradientPulse: {
          '0%, 100%': { filter: 'saturate(1) brightness(1)' },
          '50%': { filter: 'saturate(1.18) brightness(1.08)' },
        },
      }
    },
  },
  plugins: [],
}
