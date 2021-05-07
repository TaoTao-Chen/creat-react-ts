var HappyPack = require("happypack");
var ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
// var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin'); //打包时进行提示
var CleanWebpackPlugin = require('clean-webpack-plugin')

const path = require("path");
var babelLoader = {
  loader: "babel-loader",
  options: {
    presets: [
      [
        "@babel/env",
        {
          modules: false
        }
      ],
      "@babel/react"
    ]
  }
};
module.exports = {
  mode: "production", // "production" | "development" | "none"
  entry: {
    polyfills: "./src/polyfill.ts",
    index: "./src/index.tsx"
    // 通常用来分离 1. 多页面（据经验：每个 HTML 文档只使用一个入口起点）2. 第三方库和app
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist'),
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 600,
    poll: 1000
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  context: __dirname, // string（绝对路径！）
  target: "web", // 枚举
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        use: [babelLoader, "happypack/loader?id=ts"]
      },
      {
        test: /\.jsx?$/,
        use: [babelLoader]
      },
        { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { test: /\.css$/, use: "css-loader" }
    ]
  },

  plugins: [
    new HappyPack({ //提升打包速度
      id: "ts",
      loaders: [
        {
          loader: "ts-loader",
          options: { happyPackMode: true, transpileOnly: true }
        }
      ]
    }),
    new ForkTsCheckerWebpackPlugin({ //ts语法校验
      tsconfig: path.resolve(__dirname, `tsconfig.json`)
    }),
    new CleanWebpackPlugin(['dist'], {
      root:  path.resolve(__dirname),
      exclude:  [],
      verbose:  true,
      dry: false
    }),
    // new FriendlyErrorsWebpackPlugin(),

  ],
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
};
