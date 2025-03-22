/** @type {import('tailwindcss').Config} */
export default {
  	content: [
    	"./index.html",
    	"./src/**/*.{js,jsx,ts,tsx}",
  	],
  	theme: {
    	extend: {
			colors: {
				primary: '#1F2841',
				secondary: '#374D62',
				button: '#04594B',
				text: '#ECEDEE',
			},
			fontFamily: {
				sans: ['"Open Sans"', 'sans-serif'],
			},
    	},
  	},
  	plugins: [],
};
