const express = require("express");
const skipMap = require("skip-map");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpackConfig = require("./webpack.config");

const app = express();

const isDevelopment = process.env.NODE_ENV === "development";
if (isDevelopment) {
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    // publicPath: webpackConfig.output.path,
  }));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use(express.static("dist"));
}

app.use(skipMap());

const port = process.env.PORT || 8080;
app.listen(port, () => {
  if (isDevelopment) {
    require("opn")(`http://localhost:${port}`);
  }
});
