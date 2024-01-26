const path = require("path");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.css$/i, //here look for the file types if js, then \.js$
        use: ["style-loader", "css-loader"], //the loaders you installed via npm
      },
    ],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
