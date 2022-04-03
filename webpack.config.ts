import * as path from "path";
import * as webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
	entry: "./src/index.tsx",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		assetModuleFilename: "assets/[name]_[hash][ext][query]"
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			title: "Portfolio"
		})
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.png/,
				type: "asset/resource"
			}
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	devtool: "eval-source-map",
	mode: "development",
};

export default config;