/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0A0A0A',
                surface: '#111111',
                gold: '#F5A623',
                'gold-light': '#FFB800',
                'gold-dark': '#D4891A',
                'gray-text': '#999999',
                'gray-secondary': '#BBBBBB',
                'gray-border': '#222222',
                'gray-border-light': '#333333',
            },
            fontFamily: {
                display: ['"Sora"', 'sans-serif'],
                body: ['"DM Sans"', 'sans-serif'],
            },
            letterSpacing: {
                'widest-xl': '0.3em',
                'widest-2xl': '0.5em',
            },
            animation: {
                'fade-up': 'fadeUp 0.8s ease forwards',
                'fade-in': 'fadeIn 1s ease forwards',
                'spin-slow': 'spin 20s linear infinite',
                'pulse-slow': 'pulse 4s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
        },
    },
    plugins: [],
}
