const { VueLoaderPlugin } = require("vue-loader"); // Import VueLoaderPlugin from vue-loader

module.exports = {
  entry: "./src/index.js", // Entry point for the application
  output: {
    filename: "[name].[contenthash].js",
  },
  resolve: {
    extensions: [".js", ".vue"],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i, // Apply this rule to image files
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.vue$/, // Apply this rule to .vue files
        use: "vue-loader", // Use this loader (vue-loader)
      },
      {
        test: /\.scss|\.css$/, // Apply this rule to .css files
        use: ["vue-style-loader", "style-loader", "css-loader", "sass-loader"], // Use these loaders (vue-style-loader, style-loader, css-loader, sass-loader)
      },
      {
        test: /\.m?js$/, // Apply this rule to files ending in .js
        exclude: /node_modules/, // Don't apply to files residing in node_modules
        use: {
          loader: "babel-loader", // Use this loader (babel-loader)
          options: {
            presets: ["@babel/preset-env"], // Transform modern JS to ES5
            plugins: ["@babel/plugin-transform-runtime"], // Polyfills and transforms object rest/spread
          },
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(), // Add VueLoaderPlugin to the plugins array
  ],
};
