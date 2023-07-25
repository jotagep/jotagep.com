module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 80,
  tabWidth: 2,
  plugins: [
    require.resolve("prettier-plugin-tailwindcss", "prettier-plugin-astro"),
  ],
  tailwindConfig: "./tailwind.config.cjs",
  overrides: [
    {
      files: '*.astro',
      options: {
        astroAllowShorthand: true,
        parser: 'astro',
      },
    },
  ],
}
