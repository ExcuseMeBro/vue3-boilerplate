module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'vue/require-default-prop': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.d.ts', '.tsx', '.vue'],
      },
      typescript: {
        project: './tsconfig.json',
      },
      alias: {
        map: [
          ['~', './src'],
          ['@', './src'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.d.ts', '.tsx', '.vue'],
      },
    },
  },
}
