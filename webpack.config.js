const path = require('path');
const env = process.env.NODE_ENV || process.env.VUE_APP_ENV_NAME || 'production';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "production",
	devtool: "source-map",
	// entry: {	main: "./src/main.js" },
	entry: path.join(__dirname, 'src', 'main.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].chunk.js'
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: path.join(__dirname, 'dist', 'index.html'),
			// template: path.join(__dirname, 'static', 'index.html'),
			inject: true,
			// template: 'src/index.html', // to import index.html file inside index.js
			// template: path.resolve(__dirname, "public", "index.html")
			favicon: "./public/favicon.ico"
		}),
		new VueLoaderPlugin(),
    new MiniCssExtractPlugin()
	],
	devServer: {
		port: 6000 // you can change the port
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [path.join(__dirname, 'src')]
			},
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
					}
				]
			},
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
		]
	},
	resolve: {
		extensions: [
			'.tsx', '.ts', '.js', '.vue'
		]
	},
	devServer: {
		historyApiFallback: true,
	}
}
