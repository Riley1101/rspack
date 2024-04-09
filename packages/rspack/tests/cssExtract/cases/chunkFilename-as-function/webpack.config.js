const { CssExtractRspackPlugin } = require("../../../../");

module.exports = {
	entry: "./index.js",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [CssExtractRspackPlugin.loader, "css-loader"]
			}
		]
	},
	plugins: [
		new CssExtractRspackPlugin({
			filename: "[name].css",
			chunkFilename: ({ chunk }) => `${chunk.id}.${chunk.name}.css`
		})
	]
};