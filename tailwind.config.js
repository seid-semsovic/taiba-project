/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf5f0',
          100: '#f3e8d6',
          200: '#e9d4b3',
          300: '#ddb987',
          400: '#d29f5f',
          500: '#c68647',
          600: '#b7723d',
          700: '#965732',
          800: '#7a462f',
          900: '#663c2a',
          950: '#3a1f15',
        },
        secondary: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#333333',
          950: '#1a1a1a',
        },
        accent: {
          50: '#fbf7f1',
          100: '#f5ebdc',
          200: '#ead6b8',
          300: '#deba89',
          400: '#d09c5e',
          500: '#c68340',
          600: '#b76935',
          700: '#97502d',
          800: '#7c422b',
          900: '#663a26',
          950: '#391d13',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Open Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'wood-pattern': "url('https://images.pexels.com/photos/172289/pexels-photo-172289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        'stone-pattern': "url('https://images.pexels.com/photos/326311/pexels-photo-326311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      },
    },
  },
  plugins: [],
};