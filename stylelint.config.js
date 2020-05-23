module.exports = {
    plugins: ['stylelint-order', 'stylelint-scss'],
    extends: 'stylelint-config-standard',
    rules: {
        // @see https://github.com/stylelint/stylelint/issues/3190#issuecomment-368412175
        'at-rule-no-unknown': null,
        'selector-pseudo-element-no-unknown': [
            true,
            {
                ignorePseudoElements: ['v-deep'],
            },
        ],
        'selector-type-no-unknown': [true, { ignoreTypes: ['_'] }],
        'font-family-no-missing-generic-family-keyword': null,

        'max-empty-lines': null,
        'no-duplicate-selectors': null,
        'no-descending-specificity': null,

        'order/order': ['custom-properties', 'declarations'],
        'order/properties-alphabetical-order': true,
        indentation: [4]
    },
}
