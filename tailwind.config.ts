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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
                // Violet Luxe Theme
                violet: {
                    primary: '#7F00FF',    // Vivid Violet
                    secondary: '#9F5FFF',  // Soft Purple
                    accent: '#D580FF',     // Lavender Glow
                    text: '#FFFFFF',       // Text Primary
                    muted: '#D1C4E9',      // Text Secondary (Soft Lilac)
                    background: '#1A1A2E', // Dark Indigo Background
                },
                zexo: {
                    50: '#f0f4ff',
                    100: '#e1e9fe',
                    200: '#c9d7fd',
                    300: '#a5bcfb',
                    400: '#7a97f7',
                    500: '#5c72f2',
                    600: '#4551e7',
                    700: '#3941d0',
                    800: '#3338a8',
                    900: '#2f3485',
                    950: '#1c1f4d',
                },
                zexopurple: {
                    50: '#f4f3ff',
                    100: '#eae8ff',
                    200: '#d7d4ff',
                    300: '#b8b3fe',
                    400: '#9486fc',
                    500: '#7a5df9',
                    600: '#6a3aef',
                    700: '#5d2adb',
                    800: '#4e24b6',
                    900: '#402192',
                    950: '#251359',
                }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				'glow': {
					'0%': { boxShadow: '0 0 5px rgba(127, 0, 255, 0.3)' },
					'50%': { boxShadow: '0 0 20px rgba(127, 0, 255, 0.6)' },
					'100%': { boxShadow: '0 0 5px rgba(127, 0, 255, 0.3)' }
				},
				'pulse-glow': {
					'0%': { boxShadow: '0 0 0 0 rgba(159, 95, 255, 0.7)' },
					'70%': { boxShadow: '0 0 0 10px rgba(159, 95, 255, 0)' },
					'100%': { boxShadow: '0 0 0 0 rgba(159, 95, 255, 0)' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow': 'glow 2s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 1.5s ease-in-out infinite',
				'fade-in': 'fade-in 0.3s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
