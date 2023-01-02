import PurgecssPlugin from 'purgecss-webpack-plugin'
import glob from 'glob-all'

new PurgecssPlugin({
  paths: [paths.appHtml, ...glob.sync(`${paths.appSrc}/**/*`, { nodir: true })],
})
