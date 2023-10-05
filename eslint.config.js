import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: ['*.d.ts'],
  rules: {
    'unused-imports/no-unused-imports': 'warn',
    'antfu/top-level-function': 'off',
    'no-throw-literal': 'off',
    'no-console': 'off',
  },
})
