import antfu from '@antfu/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'

export default antfu({
  typescript: true,
  react: true,
  ignores: ['./src/components/iphone.tsx'],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'react/no-array-index-key': 'off',
    'antfu/if-newline': 'off',
    'style/jsx-wrap-multilines': 'off',
    'style/brace-style': 'off',
    'style/quote-props': 'off',
    'style/jsx-curly-newline': 'off',
    'style/arrow-parens': 'off',
    'style/multiline-ternary': 'off',
    'style/indent': 'off',
    'style/operator-linebreak': 'off',
    'jsdoc/check-alignment': 'off',
  },
}).append(...tailwind.configs['flat/recommended'], {
  rules: {
    'tailwindcss/no-custom-classname': 'off',
  },
})
