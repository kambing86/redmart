const autoprefixer = require("autoprefixer");
const cleancss = require("postcss-clean");

module.exports =
  () => {
    // (ctx) => {
    // console.log(ctx);
    // console.log(ctx.webpack.resourcePath);
    return {
      plugins:
      [
        autoprefixer(),
        cleancss()
      ]
    };
  };
