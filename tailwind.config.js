/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      gray: '#c2c6ce',
      'blue-light-2': '#dde8f0',
      'blue-light': '#97cbdc',
      'blue': '#018abd',
      'blue-king': '#004581',
      'blue-dark': '#001b48',
      'white': 'white',
      "gray-dark": "#2C3333"
    },
    // colors: {
    //   gray: '#c2c6ce',
    //   'blue-light': '#c0d0ef',
    //   'blue': '#668dc0',
    //   'blue-king': '#304age',
    //   'blue-dark': '#0f1c30'

    // },
    // colors: {
    //   'blue': '#1fb6ff',
    //   'purple': '#7e5bef',
    //   'pink': '#ff49db',
    //   'orange': '#ff7849',
    //   'green': '#13ce66',
    //   'yellow': '#ffc82c',
    //   'gray-dark': '#273444',
    //   'gray': '#8492a6',
    //   'gray-light': '#d3dce6',
    // },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      backgroundImage: {
        'home-me': "url('/public/me.jpg')",
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}

