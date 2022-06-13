const paths = require('@betteraskbot/paths')

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{css,ts,tsx}',
        // uncomment
        // paths.pkg('ui') + '/**/*.{css,ts,tsx}',
    ],
    darkMode: 'class',
    plugins: [require('@betteraskbot/tailwind-plugin')],
}
