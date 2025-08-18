module.exports = {
   theme: {
     extend: {
       keyframes: {
         gradient: {
           '0%': { backgroundPosition: '0% 50%' },
           '50%': { backgroundPosition: '100% 50%' },
           '100%': { backgroundPosition: '0% 50%' },
         },
         bottom: {
           '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
           '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
       },
         top: {
           '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
           '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
         },
       },
       animation: {
         gradient: 'gradient 8s linear infinite',
         bottom: 'star-movement-bottom linear infinite alternate',
         top: 'star-movement-top linear infinite alternate',
   
       },
     },
   },
   plugins: [],
 };