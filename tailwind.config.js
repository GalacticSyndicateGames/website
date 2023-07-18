/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1400px',
			'3xl': '1700px'
		},
		extend: {
			fontFamily: {
				aldrich: ['Aldrich', 'sans-serif'],
				anonymous: ['Anonymous Pro', 'sans-serif']
			},
			colors: {
				yellow: '#DFA736',
				blue: '#3F94C7',
				navy: '#004A8D',
				pistachio: '#8BD36F',
				sky: '#7AC7D7',
				peach: '#FBA793',
				pink: '#C046C9',
				siena: '#E86B42'
			},
			spacing: {
				headerHeight: '7rem',
				wrapper: '4rem'
			},
			borderRadius: {
				'4xl': '4rem'
			}
		}
	},
	plugins: []
};
