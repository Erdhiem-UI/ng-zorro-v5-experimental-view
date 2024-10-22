module.exports = {
    printWidth: 120,
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    bracketSpacing: false,
    arrowParens: 'always',
    htmlWhitespaceSensitivity: 'strict',
    proseWrap: 'preserve',
    trailingComma: 'none',
    endOfLine: 'auto',
    overrides: [
        {
            files: ['*.html'],
            options: {
                parser: 'html'
            }
        },
        {
            files: ['*.component.html'],
            options: {
                parser: 'angular'
            }
        },
        {
            files: ['*.css', '*.scss'],
            options: {
                singleQuote: false
            }
        }
    ]
};
