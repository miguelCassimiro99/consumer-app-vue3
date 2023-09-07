  // tailwind.config.js
  module.exports = {
    content: [
      'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
      'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
    ],
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {},
     },
     variants: {
       extend: {},
     },
     plugins: [
      require('flowbite/plugin')
     ],
   }