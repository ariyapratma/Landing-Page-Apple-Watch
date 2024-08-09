/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primarycolor: "#C8DCE5",
        secondarycolor: "#C8DCE5",
      },
    },
    animation: {
      'gradient-x': 'gradient-x 15s ease infinite',
      'gradient-y': 'gradient-y 15s ease infinite',
      'gradient-xy': 'gradient-xy 15s ease infinite',
    },
    keyframes: {
      'gradient-x': {
        '0%': { 'background-position': '0% 50%' },
        '100%': { 'background-position': '100% 50%' },
      },
      'gradient-y': {
        '0%': { 'background-position': '50% 0%' },
        '100%': { 'background-position': '50% 100%' },
      },
      'gradient-xy': {
        '0%': { 'background-position': '0% 0%' },
        '100%': { 'background-position': '100% 100%' },
      },
    },
    keyframes: {
      pulseRing: {
        '0%': { transform: 'scale(1)', opacity: '1' },
        '50%': { transform: 'scale(1.05)', opacity: '0.5' },
        '100%': { transform: 'scale(1)', opacity: '1' },
      },
    },
    animation: {
      pulseRing: 'pulseRing 8s ease-in-out infinite',
    },
  },
  plugins: [],
};
