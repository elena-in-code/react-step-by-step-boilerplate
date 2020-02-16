const HtmlWebpackPlugin = require("html-webpack-plugin");
const CSPWebpackPlugin = require("csp-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new CSPWebpackPlugin({
      "object-src": "'none'",
      "base-uri": "'self'",
      "script-src": [
        "'unsafe-inline'",
        "'self'",
        "'unsafe-eval'",
        "http://ajax.googleapis.com"
      ],
      "worker-src": ["'self'", "blob:"]
    })
  ]
};
