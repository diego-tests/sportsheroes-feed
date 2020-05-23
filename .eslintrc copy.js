module.exports = {
    root: true,

    env: {
        node: true,
        jest: true,
    },

    extends: ['eslint:recommended','plugin:vue/recommended'],

    rules: {
        "comma-dangle": ["error", "always-multiline"],
        'comma-spacing': ["error", { "before": false, "after": true }],
        'no-console': 'off',
        'no-debugger': 'off',
        'object-curly-spacing': ["error", "always"],
        'no-unused-vars': "warn",
        quotes: ['error', 'single'],
        indent: ['error', 2],
        semi: 0,
        'vue/order-in-components': 0,
        'vue/html-indent': ['error', 4],

        'vue/max-attributes-per-line': 1,

        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'never',
                    normal: 'always',
                    component: 'always',
                },
                svg: 'never',
                math: 'always',
            },
        ],
    },

    parserOptions: {
        parser: 'babel-eslint',
    },
}
