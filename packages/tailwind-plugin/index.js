import plugin from 'tailwindcss/plugin'

module.exports = plugin(function ({ addComponents, theme }) {
    const components = {
        '.caption': {
            padding: `${theme('spacing.1')} 0`,
            color: 'var(--label-color-secondary)',
            fontSize: theme('fontSize.caption-1'),
            lineHeight: theme('lineHeight.caption-1'),
            fontWeight: theme('fontWeight.medium'),
            whiteSpace: 'pre',
            '-webkit-font-smoothing': 'antialiased',
            '-moz-osx-font-smoothing': 'grayscale',
            textTransform: 'uppercase',
        },
        '.label': {
            color: 'var(--label-color-primary)',
            fontSize: theme('fontSize.body'),
            lineHeight: theme('lineHeight.body'),
            '-webkit-font-smoothing': 'antialiased',
            '-moz-osx-font-smoothing': 'grayscale',
            whiteSpace: 'pre',
        },
        '.hint': {
            color: 'var(--label-color-secondary)',
            fontSize: theme('fontSize.footnote'),
            lineHeight: theme('lineHeight.footnote'),
            '-webkit-font-smoothing': 'antialiased',
            '-moz-osx-font-smoothing': 'grayscale',
        },
        '.field': {
            display: 'flex',
            width: theme('width.full'),
        },
        '.field-control': {
            padding: `0 ${theme('spacing.4')}`,
            width: theme('width.full'),
        },
        '.field-control > .switch': {
            marginLeft: 'auto',
        },
    }

    addComponents(components)
})
