module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended','plugin:vue/recommended'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
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
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
