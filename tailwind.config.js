const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {

  purge: [],

  darkMode: false, // or 'media' or 'class'

  theme: {
    screens: {
      'tablet': '475px',
      'mobile': '325px',
      ...defaultTheme.screens,
    },

    extend: {
      colors: {
       'gray': '#EFEFEF',
       'accent': '#66C05D',
       'dark': '#333333',
       'footer': '#828282',
      },
      width: {
        '112': '448px',
        '169': '676px',
        'goodsItem': '255px',
        'nameItem': '195px',
        'subscribeItem': '540px',
      },
      height: {
        'intro': '604px',
        'goods': '430px',
        'goodsItem': '363px',
        'goodsBig': '954px',
        'subscribeItem': '470px',
        'subscribe': '212px',
        'mediaGoods': '2000px',
        'containerGoods': '1550px',
        'mediaSubcribe': '1500px',
      },
      
    },

  },

  variants: {

    extend: {},

  },

  plugins: [],
  
}
