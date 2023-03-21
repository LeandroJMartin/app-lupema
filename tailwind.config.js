configCss = require('./src/styles/config_css');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx,jsx}'],
  theme: {
    extend: {
      colors: {
        blue: configCss.colors.blue,
        black: configCss.colors.black,
        green: configCss.colors.green,
      },
      backgroundImage: {
        bgi: "url('/bg.jpg')",
        bgVideoAbout: "url('/bg-sobre.jpeg')",
      },
      cursor: {
        gallery: "url('/cursor.png'), pointer",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        xl: '30px',
        '2xl': '0',
      },
    },
  },
  plugins: [],
};
