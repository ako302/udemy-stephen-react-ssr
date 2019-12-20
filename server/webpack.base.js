module.exports = {
  module: {
    //tell webpack to run babel for every files
    rules: [
      {
        test: /\.js?$/, //test every js files
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-0", //anyc calls
            ["env", { targets: { browsers: ["last 2 versions"] } }]
          ]
        }
      }
    ]
  }
};
