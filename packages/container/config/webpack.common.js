module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/, // Apply this rule to files ending in .js
        exclude: /node_modules/, // Don't apply to files residing in node_modules
        use: {
          loader: "babel-loader", // Use this loader (babel-loader)
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"], // Transform modern JS to ES5
            plugins: ["@babel/plugin-transform-runtime"], // Polyfills and transforms object rest/spread
          },
        },
      },
    ],
  },
};
