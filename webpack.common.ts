import * as path from "path";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: Configuration = {
	entry: "./src/index.tsx",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		assetModuleFilename: "assets/[name]_[hash][ext][query]",
		clean: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			title: "Portfolio",
			favicon: "./public/favicon.svg"
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
				test: /\.png$/i,
				type: "asset/resource"
			},
			{
				test: /\.svg$/i,
				use: {
					loader: "svg-react-loader"
				},
			}
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	}
};

export default config;