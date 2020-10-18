module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    parse: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        semi: 1,
        quotes: ['error', 'double'],
    },
};
