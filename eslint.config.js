import antfu from '@antfu/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'

export default antfu({
  typescript: true,
  react: true,
}).append(...tailwind.configs['flat/recommended'], {
  rules: {
    'tailwindcss/no-custom-classname': 'off',
  },
})
