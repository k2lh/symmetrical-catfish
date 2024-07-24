const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'production',
	// devtool: 'source-map',
  target: 'web',
  entry: './src/main.js',
  // entry: path.join(__dirname, 'src', 'main.js'),
	output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].chunk.js',
    // assetModuleFilename: 'images/[hash][ext][query]',
    clean: true
	},
  resolve: {
    extensions: [
     '.tsx', '.ts', '.js', '.vue'
   ],
   alias: {
     'vue$': 'vue/dist/vue.runtime.esm-bundler.js'
   }
  },
	optimization: {
		splitChunks: {
      chunks: 'all'
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
      template: 'src/index.html',
			// filename: path.join(__dirname, 'dist', 'index.html'),
      filename: path.join(__dirname, 'dist', 'index.html'),
      // template: path.join(__dirname, 'public', 'index.html'),
      inject: true,
			favicon: "./public/favicon.ico"
		}),
		new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
	],
	devServer: {
		port: 8080,
    hot: false,
    historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
        exclude: /node_modules/,
        use: {
          loader: 'vue-loader'
        }
			},
			{
				test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader'
        }
			},
      {
        test: /\.((c|sa|sc)ss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|gif|jpe?g|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '/images/[name].[ext]'
        }
      },
      {
        test: /\.(pdf|txt)$/i,
        loader: 'file-loader',
        options: {
          name: '/texts/[name].[ext]'
        }
      }
		]
	}
}
