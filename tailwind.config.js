/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2ECC71',
          50: '#E8F8F0',
          100: '#D1F1E1',
          200: '#A3E3C3',
          300: '#75D5A5',
          400: '#47C787',
          500: '#2ECC71',
          600: '#25A35A',
          700: '#1C7A44',
          800: '#13512D',
          900: '#0A2817',
        },
        secondary: {
          DEFAULT: '#9B59B6',
          50: '#F5EBFA',
          100: '#EBD7F5',
          200: '#D7AFEB',
          300: '#C387E1',
          400: '#AF5FD7',
          500: '#9B59B6',
          600: '#7C4792',
          700: '#5D356E',
          800: '#3E2349',
          900: '#1F1225',
        },
        accent: {
          DEFAULT: '#E67E22',
          50: '#FDF3EC',
          100: '#FBE7D9',
          200: '#F7CFB3',
          300: '#F3B78D',
          400: '#EF9F67',
          500: '#E67E22',
          600: '#C56515',
          700: '#944C10',
          800: '#63330B',
          900: '#321A06',
        },
        gold: '#F39C12',
        navy: '#2C3E50',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        arabic: ['Amiri', 'serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}