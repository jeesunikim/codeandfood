const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
	mode: "development",
	entry: "./_assets/_js/index.js",
	output: {
		path: path.resolve(__dirname, "assets/js"),
		filename: "app.bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [path.resolve(__dirname, "./_assets/_js")],
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					},
					{
						loader: "sass-loader"
					}
				]
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, "_site"),
		watchContentBase: true
	},
	resolve: {
		modules: ["node_modules", path.resolve(__dirname, "_assets/_js")]
		// alias: { "barba": path.resolve('node_modules', 'barba.js/dist/barba.min'), }
	},
	watchOptions: {
		poll: true
	},
	plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "style.css",
            chunkFilename: "[id].css"
        })
    ]
};