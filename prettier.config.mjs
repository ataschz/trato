/** @type {import('prettier').Config} */
export default {
  tabWidth: 2,
  trailingComma: 'es5',
  singleQuote: true,
  semi: true,
  tailwindFunctions: ['cn'],
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
  tailwindStylesheet: './src/app/globals.css',
};
