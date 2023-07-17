/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily:{
				'aldrich':  ['Aldrich', 'sans-serif'],
				'anonymous':  ['Anonymous Pro', 'sans-serif'],
			},
			colors: {
				"yellow": "#DFA736",
				"blue": "#3F94C7",
				"pistachio":"#8BD36F",
				"sky": "#7AC7D7",
				"peach": "#FBA793",
				"pink": "#C046C9",
				"siena": "#E86B42"
			},
			spacing:{
				"headerHeight": "7rem",
				"wrapper": "4rem"
			}
		}
	},
	plugins: []
};
