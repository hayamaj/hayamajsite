/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'phone': '390px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient": "linear-gradient(to right, #eb7494, #ae77b2, #97b5da, #0099ca)"
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 45s linear infinite',
        'text-slide-3': 'text-slide-3 4.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        typewriter: "typewriter 2s steps(85) forwards",
        caret: 'typewriter 2s steps(85) forwards, blink 1s steps(85) infinite 2s',
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%"
          },
        },
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'text-slide-3': {
            '0%, 26.66%': {
                transform: 'translateY(0%)',
            },
            '33.33%, 60%': {
                transform: 'translateY(-25%)',
            },
            '66.66%, 93.33%': {
                transform: 'translateY(-50%)',
            },
            '100%': {
                transform: 'translateY(-75%)',
            },
        },
    },
      colors: {
        "pm": "#000000",
        "eng": "#ce1126",
        "art": "#007a3d",
        "pm-light": "#c7c7c7",
        "eng-light": "#fac5cb",
        "art-light": "#aaffd4",
        "accent": "#5f39f4",
        "accy": "#f9f9fc",
        "bl": "#323132",
        "gr":"#b3b3b3",
        "yellow": "#EBFF0E",
        "bg":"#fafafa",
        "secondary-glow": "conic-gradient(from 10deg at 50% 50%, #eb7494 0deg, #ae77b2 55deg, #97b5da 120deg, #0099ca 160deg, transparent 360deg)",
        "third-glow": "conic-gradient(from 90deg at 50% 50%, #ff8b7e 0deg, #e24e6b 160deg, #7ed2da 120deg, #8bdce0 55deg, transparent 360deg)"
      },
      fontFamily: {
        sans: ['var(--font-didot)'],
        serif: ['var(--font-proxnova)']
      },
      
    },
  plugins: [],
  },
};