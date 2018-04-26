const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss/,
        loaders: ["style-loader", "css-loader", "sass-loader",{
          loader: 'vuetify-loader',
          options: {
            theme: path.resolve(__dirname, '../src/scss/')
          }
        }],
        include: path.resolve(__dirname, '../src')
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue: 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '../src/')
    }
  }
}