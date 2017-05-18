const webpack = require("webpack");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

const sourcePath = path.join(__dirname, "src");
const deployPath = path.join(__dirname, "dist");
const serverPort = 8080;

const config = {
  devtool: "cheap-module-source-map",
  entry: {
    "babel-polyfill": [
      "babel-polyfill",
    ],
    "index": [
      "./index.jsx",
    ],
  },
  context: sourcePath,
  output: {
    path: deployPath,
    filename: "[name].js",
  },
  resolve: {
    modules: [
      "node_modules"
    ],
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          "file-loader?name=[path][name].html",
          "extract-loader",
          "html-loader",
          "pug-html-loader",
        ],
      }, {
        test: /\.jsx?$/,
        include: sourcePath,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
        },
      }, {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
        // use: ExtractTextPlugin.extract({
        //   use: [
        //     "css-loader",
        //     "postcss-loader",
        //     "sass-loader",
        //   ]
        // }),
      },
    ]
  },
  externals: {
    // "gs": "gs",
    // "moment": "moment",
    // "createjs": "createjs",
    // "jquery": "$",
    // "angular-validation": "validation",
  },
  plugins: [
    new webpack.DefinePlugin({
      DEVELOPMENT: process.env.NODE_ENV === "development",
    }),
    new CopyWebpackPlugin([{ from: "assets" }])
    // new webpack.ProvidePlugin({
    //   "Promise": "bluebird"
    // }),
    // new ExtractTextPlugin({
    //   filename: "[name].css",
    //   allChunks: true,
    // }),
  ],
  devServer: {
    contentBase: deployPath,
    compress: true,
    port: serverPort,
    // enable HMR globally
    // needed if webpack-dev-server run without --hot
    // hot: true,
  }
};

if (process.env.NODE_ENV === "development") {
  config.devtool = "cheap-module-eval-source-map";
  config.plugins.push(new webpack.LoaderOptionsPlugin({
    debug: true,
  }));
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      warnings: false,
    },
    mangle: {
      props: {
        regex: /^rn_.+_rn$/,
      },
    },
    output: {
      comments: false,
    },
  }));

  // enable HMR globally
  // needed if webpack-dev-server run without --hot
  // config.entry["index"].unshift(`webpack-dev-server/client?http://localhost:${serverPort}/`, "webpack/hot/only-dev-server");
  // config.plugins.push(new webpack.HotModuleReplacementPlugin());

  // prints more readable module names in the browser console on HMR updates
  config.plugins.push(new webpack.NamedModulesPlugin());
}

module.exports = config;
