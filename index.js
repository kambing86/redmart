const express = require("express");
const skipMap = require("skip-map");
// const webpack = require("webpack");
// const webpackDevMiddleware = require("webpack-dev-middleware");
// const webpackConfig = require("./webpack.config");

const app = express();
// const compiler = webpack(webpackConfig);

// app.use(webpackDevMiddleware(compiler, {
//   publicPath: "/" // Same as `output.publicPath` in most cases.
// }));

app.use(skipMap());
app.use(express.static("dist"));

app.listen(8080, function () {
});
