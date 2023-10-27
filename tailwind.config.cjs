/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                'primary': '#1d3556',
                'accent': '#a8dadc'
            },
            fontFamily: {
                'heading': 'Raleway, system-ui, sans-serif',
                'sans': 'Inter, system-ui, sans-serif'
            }
        }
    },
    plugins: []
};
