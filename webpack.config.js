const path = require("path");

module.exports = {
  mode: "development",
  entry: "./model/init.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
};
