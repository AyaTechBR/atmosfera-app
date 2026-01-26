/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#050505',
                surface: '#0a0a0a',
                primary: '#ff5500', // Logo Orange
                secondary: '#550099', // Logo Purple
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            },
            animation: {
                aurora: "aurora 60s linear infinite",
                "shimmer-slide": "shimmer-slide 2s linear infinite",
            },
            keyframes: {
                aurora: {
                    from: { backgroundPosition: "50% 50%, 50% 50%" },
                    to: { backgroundPosition: "350% 50%, 350% 50%" },
                },
                "shimmer-slide": {
                    to: { transform: "translateX(100%)" },
                },
            },
        },
    },
    plugins: [],
}
