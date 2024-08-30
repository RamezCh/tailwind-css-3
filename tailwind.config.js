/** @type {import('tailwindcss').Config} */
// below comment disables eslint for next line only
// eslint-disable-next-line
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      pizza: 'Roboto Mono, monospace',
      sans: 'Roboto Mono, monospace',
    },

    extend: {
      colors: {
        pizza: '#123456',
      },

      fontSize: {
        huge: ['80rem', { lineHeight: '1' }],
      },

      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};

// pizza is now new font class lol as font-pizza
// by overwriting sans which is used as base for tailwind new base becomes roboto mono

// If we put in theme it will override all so using colors in theme will remove all other tailwind colors, if you dont want that put it in extend instead, meaning tailwind + urs available

// You can use doc to see props and tailwind config
