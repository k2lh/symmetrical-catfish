const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: "production",
	devtool: "source-map",
	entry: {
		main: "./src/main.js",
	},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].chunk.js',
        // filename: "[name].[contenthash:8].js",
        // chunkFilename: "[name].[contenthash:8].js",			
    },
    plugins: [
        // new HtmlWebpackPlugin({
            // template: 'src/index.html' // to import index.html file inside index.js
        // }),
	    new VueLoaderPlugin(),
	    new CleanWebpackPlugin(),
	    new MiniCssExtractPlugin({
	      filename: "[name].[contenthash:8].css",
	      chunkFilename: "[name].[contenthash:8].css",
	    }),
	    new htmlWebpackPlugin({
	      template: path.resolve(__dirname, "public", "index.html"),
	      favicon: "./public/favicon.ico",
	    })
    ],
    devServer: {
        port: 6000 // you can change the port
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader',
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
	      {
	        test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
	        loader: "file-loader",
	        options: {
	          name: "[name][contenthash:8].[ext]",
	        }
	      },
	      {
	        test: /\.(png|jpe?g|gif|webm|mp4|svg)$/,
	        loader: "file-loader",
	        options: {
	          name: "[name][contenthash:8].[ext]",
	          outputPath: "assets/img",
	          esModule: false,
	        }
	      },
	      {
	        test: /\.s?css$/,
	        use: [
	          "style-loader",
	          MiniCssExtractPlugin.loader,
	          "css-loader",
	          {
	            loader: "postcss-loader",
	            options: {
	              plugins: () => [autoprefixer()],
	            },
	          },
	          "sass-loader",
	        ]
	      }						
        ]
    },
	resolve: {
	    alias: {
	      vue$: "vue/dist/vue.runtime.esm.js",
	    },
	    extensions: ["*", ".js", ".vue", ".json"],
	  },
	  optimization: {
	    moduleIds: "hashed",
	    runtimeChunk: "single",
	    splitChunks: {
	      cacheGroups: {
	        vendor: {
	          test: /[\\/]node_modules[\\/]/,
	          name: "vendors",
	          priority: -10,
	          chunks: "all",
	        },
	      },
	    },
	  },
	  devServer: {
	    historyApiFallback: true,
	  }
};