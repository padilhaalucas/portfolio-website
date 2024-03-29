import purgecss from '@fullhuman/postcss-purgecss'

module.exports = {
  style: {
    postcss: {
      plugins: [
        purgecss({
          content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
        }),
      ],
    },
  },
}
