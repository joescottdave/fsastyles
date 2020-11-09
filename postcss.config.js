module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-mixins': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    },
    'postcss-nested': {},
    'postcss-normalize': {},
    'postcss-discard-comments': {}
  }
}
