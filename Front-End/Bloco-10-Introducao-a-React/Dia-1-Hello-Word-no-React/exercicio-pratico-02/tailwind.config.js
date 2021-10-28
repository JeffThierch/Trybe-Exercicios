module.exports = {
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      height: {
        maxContent: 'max-content',
        customHeight: '81vh'
       }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }