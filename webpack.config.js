module.exports = {
  devtool: "(none)",
  mode: "development",
  watch: true,
  entry: {
    index: "./index.js"
  },
  output: {
    path: `${__dirname}/dist`
  }
};
