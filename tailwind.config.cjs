/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#1d3556',
					dark: '#0f1b2b',
					light: '#457b9d'
				},
				secondary: '#ff5a5f',
				accent: '#a8dadc',
				white: '#f1faee',
				black: '#232323',
				gray: '#B5BAC1',
				'dark-gray': '#474747',
				success: '#62cc3f',
				error: '#e63946'
			},
			maxWidth: {
				'1/4': '1024px'
			},
			spacing: {
				1: '0.25rem',
				2: '0.5rem',
				3: '0.75rem',
				4: '1rem',
				5: '1.5rem',
				6: '2rem',
				7: '4rem'
			},
			fontSize: {
				xs: '0.75rem',
				sm: '0.875rem',
				base: '1rem',
				lg: '1.125rem',
				xl: '1.125rem',
				'2xl': '1.5rem',
				'3xl': '1.875rem',
				'4xl': '2.25rem',
				'5xl': '3rem'
			},
			fontFamily: {
				heading: 'Poppins, system-ui, sans-serif',
				body: 'Poppins, system-ui, sans-serif'
			},
			cubicBezier: {
				DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)'
			},
			transitionDuration: {
				150: '150ms'
			},
			transitionProperty: {
				all: 'all',
				colors: 'background-color, border-color, color, fill, stroke',
				opacity: 'opacity',
				shadow: 'box-shadow',
				transform: 'transform'
			}
		}
	},
	plugins: []
};
