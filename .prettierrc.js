module.exports = {
    singleQuote: true,
    tabWidth: 4,
    printWidth: 100,
    overrides: [
        {
            files: ['*.liquid'],
            options: {
                singleQuote: false,
            },
        },
    ],
};
