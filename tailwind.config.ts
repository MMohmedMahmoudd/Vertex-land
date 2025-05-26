
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Material Design 3 colors
				md3: {
					primary: '#1976D2',
					'primary-container': '#CCE7FF',
					'on-primary': '#FFFFFF',
					'on-primary-container': '#001D36',
					secondary: '#535F70',
					'secondary-container': '#D6E3F7',
					'on-secondary': '#FFFFFF',
					'on-secondary-container': '#101C2A',
					tertiary: '#6B5B95',
					'tertiary-container': '#E8DEF8',
					'on-tertiary': '#FFFFFF',
					'on-tertiary-container': '#251431',
					surface: '#FEFBFF',
					'surface-variant': '#DFE2EB',
					'on-surface': '#1A1C1E',
					'on-surface-variant': '#43474E',
					outline: '#73777F',
					'outline-variant': '#C3C7CF',
					shadow: '#000000',
					scrim: '#000000',
					'inverse-surface': '#2F3033',
					'inverse-on-surface': '#F1F0F4',
					'inverse-primary': '#90CCFF'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'roboto': ['Roboto', 'system-ui', 'sans-serif'],
				'roboto-mono': ['Roboto Mono', 'monospace'],
			},
			boxShadow: {
				'md3-1': '0px 1px 3px 0px rgba(0, 0, 0, 0.3), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)',
				'md3-2': '0px 1px 5px 0px rgba(0, 0, 0, 0.3), 0px 4px 12px 6px rgba(0, 0, 0, 0.15)',
				'md3-3': '0px 1px 8px 0px rgba(0, 0, 0, 0.3), 0px 6px 16px 6px rgba(0, 0, 0, 0.15)',
				'md3-4': '0px 2px 12px 0px rgba(0, 0, 0, 0.3), 0px 8px 20px 8px rgba(0, 0, 0, 0.15)',
				'md3-5': '0px 4px 16px 0px rgba(0, 0, 0, 0.3), 0px 12px 28px 12px rgba(0, 0, 0, 0.15)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'scale-in': 'scale-in 0.4s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
