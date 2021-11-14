module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: ['@nuxtjs/eslint-config-typescript', 'plugin:nuxt/recommended'],
    plugins: [],
    // add your custom rules here
    rules: {
        indent: 0,
        'comma-dangle': 0,
        'vue/html-self-closing': 0,
        'vue/html-indent': 0,
        'vue/multiline-html-element-content-newline': 0,
        'space-before-function-paren': 0,
        '@typescript-eslint/no-unused-vars': 1,
        camelcase: 0,
        'no-undef': 2,
        'vue/singleline-html-element-content-newline': 0,
        'arrow-parens': 0,
    },
}
