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
				buttonHover: '#044439',
				text: '#ECEDEE',
				textHover: '#A6ABAB',
			},
			fontFamily: {
				sans: ['"Open Sans"', 'sans-serif'],
			},
    	},
  	},
  	plugins: [],
};
