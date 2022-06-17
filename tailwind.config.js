module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Clarendon Lt BT"'],
        secondary: ['LuloCleanOne'],
        tertiary: ['Georgia'],
      },
      fontSize: {
        xxs: ['12px', '13px'],
        xs: ['12px', '16px'],
        sm: ['14px', '18px'],
        base: ['16px', '20px'],
        lg: ['17px', '24px'],
        xl: ['20px', '24px'],
        '2xl': ['23px', '32px'],
        '3xl': ['32px', '40px'],
        '4xl': ['35px', '46px'],
      },
    },
  },
  plugins: [],
};
