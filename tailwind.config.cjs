/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,vue}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: 'Proxima Nova'
            },
            colors: {
                primary: {
                    DEFAULT: 'var(--primary-color)',
                    light: 'var(--primary-color-light)',
                }
            }
        },
    },
    plugins: [],
};