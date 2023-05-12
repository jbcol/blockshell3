/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors : {
				navy: {
					100: '#02a3e8',
					200: '#0066ff',
					300: '#0019bb',
					400: '#000587',
					500: '#000040',
				},
			},
			keyframes: {
				/*typing: {
					'0%':{width: '100%'},
					'50%':{width: '0'},
					'100%':{width: '0'},
				},*/

				slide: {
					'0%':{transform: 'translateY(0)'},
					'100%':{transform: 'translateY(-100%)'},
				},

				svgLine: {
					'0%':{},
					'50%':{'stroke-dashoffset': '0'},
					'100%':{'stroke-dashoffset': '20000'},
				},
			},

			animation: {
				//typing: 'typing 3s steps(10) infinite',
				//slide: 'slide 12s step(4) infinite',
			},
		},
	},
	plugins: [],
	darkMode: 'class',
	mode: 'jit',
	corePlugins: {preflight: false,},
}