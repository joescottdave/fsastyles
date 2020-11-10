module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-mixins': {},
    'postcss-custom-media': {},
    'postcss-custom-selectors': {},
    'postcss-nested': {},
    'postcss-normalize': {},
    'postcss-discard-comments': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    }
  }
}
