module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    testMatch: ['<rootDir>/src/**/*.spec.{js,vue}'],
    transformIgnorePatterns: [
      '<rootDir>/node_modules/(?!vee-validate/dist/rules)',
    ],
  }
  