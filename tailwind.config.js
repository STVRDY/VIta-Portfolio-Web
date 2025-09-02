/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'crt-black': '#0a0514', // Un negro con un toque morado/azul
        'crt-green': '#39FF14', // Verde neón principal
        'crt-amber': '#FFB000', // Ámbar para acentos
        'crt-blue': '#00BFFF',  // Azul cian para otros acentos
      },
      fontFamily: {
        mono: ['"Fira Code"', '"Courier New"', 'monospace'],
      },
      animation: {
        'scanline': 'scanline 10s linear infinite',
        'flicker': 'flicker 1.5s infinite alternate',
      },
      keyframes: {
        scanline: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100%' },
        },
        flicker: {
          '0%, 19%, 21%, 50%, 52%, 100%': {
             opacity: 1,
             textShadow: 
                '0 0 5px rgba(57, 255, 20, 0.8), 0 0 10px rgba(57, 255, 20, 0.8), 0 0 20px rgba(57, 255, 20, 0.8)'
            },
          '20%, 51%': {
              opacity: 0.5,
              textShadow: 'none'
            },
        },
      },
    },
  },
  plugins: [],
};