/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    screens: {
      'xs': '375px',
      'xr': '414px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        maxime: {
          primary: '#222222',
          secondary: '#7B7B7B',
          tertiary: '#F8F8F8',
          white: '#FFFFFF',
          'dark-bg': '#222222',
          'dark-card': '#7B7B7B'
        }
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=2000&q=80')"
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        'slide-in-bottom': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'slide-in-top': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'text-reveal': {
          '0%': { transform: 'translateY(40%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'scale-up': {
          '0%': { transform: 'scale(0.97)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        'bounce-small': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' }
        },
        'char-reveal': {
          '0%': { 
            transform: 'translateY(40px) translateX(10px) rotate(10deg)', 
            opacity: '0',
            filter: 'blur(10px)'
          },
          '100%': { 
            transform: 'translateY(0) translateX(0) rotate(0)', 
            opacity: '1',
            filter: 'blur(0)'
          }
        },
        'float-particle': {
          '0%, 100%': { 
            transform: 'translateY(0) translateX(0)' 
          },
          '25%': { 
            transform: 'translateY(-20px) translateX(10px)' 
          },
          '50%': { 
            transform: 'translateY(0) translateX(20px)' 
          },
          '75%': { 
            transform: 'translateY(20px) translateX(10px)' 
          }
        },
        'text-slide-up': {
          '0%': { 
            transform: 'translateY(100%)', 
            opacity: '0'
          },
          '100%': { 
            transform: 'translateY(0)', 
            opacity: '1'
          }
        },
        'pulse-slow': {
          '0%, 100%': { 
            transform: 'scale(1)', 
            opacity: '0.3'
          },
          '50%': { 
            transform: 'scale(1.1)', 
            opacity: '0.5'
          }
        },
        'scroll-dot': {
          '0%': { 
            transform: 'translateY(0)',
            opacity: '0.7'
          },
          '50%': { 
            transform: 'translateY(6px)',
            opacity: '1'
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '0.7'
          }
        },
        'bounce-delayed': {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)'
          },
          '40%': {
            transform: 'translateY(-5px)'
          },
          '60%': {
            transform: 'translateY(-2px)'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'fade-in-right': 'fade-in-right 0.5s ease-out forwards',
        'slide-in-bottom': 'slide-in-bottom 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards',
        'slide-in-top': 'slide-in-top 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards',
        'text-reveal': 'text-reveal 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) forwards',
        'scale-up': 'scale-up 0.5s ease-out forwards',
        'bounce-small': 'bounce-small 1.5s ease-in-out infinite',
        'char-reveal': 'char-reveal 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) forwards',
        'float-particle': 'float-particle 15s ease-in-out infinite',
        'text-slide-up': 'text-slide-up 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) forwards',
        'pulse-slow': 'pulse-slow 6s ease-in-out infinite',
        'scroll-dot': 'scroll-dot 1.5s ease-in-out infinite',
        'bounce-delayed': 'bounce-delayed 2s infinite 1s'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} 