/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forestDark: '#363C30',
        canvas: '#FAF8EC',
        sand: '#E3DAAE',
        sage: '#59866F',
        dustyRose: '#CE9199',
        slateBlue: '#6E7FB7',
        neutralLight: '#EEEEEE',
        mutedOlive: '#5C6454',
      },
      fontFamily: {
        sans: ['Inter', '"Noto Sans JP"', '"Hiragino Sans"', '"Hiragino Kaku Gothic ProN"', 'sans-serif'],
        japanese: ['"Noto Sans JP"', '"Hiragino Sans"', '"Hiragino Kaku Gothic ProN"', 'sans-serif'],
        zen: ['"Zen Kaku Gothic New"', '"Noto Sans JP"', 'sans-serif'],
        serif: ['"The Portray Italic"', '"Instrument Serif"', '"Playfair Display"', 'Georgia', 'serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
