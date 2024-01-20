/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                primary: '#1d3556',
                accent: '#a8dadc',
                'primary-dark': '#0f1b2b',
                secondary: '#ff5a5f',
                white: '#f1faee'
            },
            fontFamily: {
                heading: 'Raleway, system-ui, sans-serif',
                sans: 'Inter, system-ui, sans-serif'
            }
        }
    },
    plugins: [require('@tailwindcss/typography')]
};
