const path = require('path')

// entry -> output
// module.exports is node and it's used to expose variables and other things.

module.exports = {
  mode: 'development',
  entry : "./src/app.js",
  output : {
      // absolute path
      // to obtain the absolute path: console.log(__dirname)
      // We will take advantage of node path  -> console.log(path.join(__dirname, 'public'))
      path: path.join(__dirname, "public"),
      filename: 'bundle.js',
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      // regular expression: we're looking for any file that ends with .css
      test: /\.js$/,
      exclude: /node_modules/,

    }, {
      // \ to escape the . and the ? to make sure that the program will look for both scss and css
      test: /\.s?css$/,
      // use lets us specify an array of loaders:
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',

      ]

    }]
  },
  // help in debugging -- links to the files I write not the generated bunde.js file
  devtool: 'cheap-module-source-map',
  devServer: {// contentBase was renamed static
    static: path.join(__dirname, "public")
  }

}