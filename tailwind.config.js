module.exports = {
   theme: {
     extend: {
       keyframes: {
         gradient: {
           '0%': { backgroundPosition: '0% 50%' },
           '50%': { backgroundPosition: '100% 50%' },
           '100%': { backgroundPosition: '0% 50%' },
         },
       },
       animation: {
         gradient: 'gradient 88s linear infinite'
       },
     },
   },
   plugins: [],
 };