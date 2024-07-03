/* eslint-disable @typescript-eslint/no-var-requires */
import * as path from "path";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
const InjectBodyPlugin = require("inject-body-webpack-plugin").default;

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
			title: "Shane's Portfolio",
			favicon: "./public/favicon.svg",
			meta: {
				description: "哈囉我是Shane，是一名遊戲前端工程師，這是我的 Portfolio.",
				keyword: "YY, Portfolio, Shane's Portfolio, Shane",
				"og:title": "Shane's Portfolio",
				"og:description": "哈囉我是Shane，是一名遊戲前端工程師，這是我的 Portfolio.",
				"og:type": "website",
				"og:url": "https://avt1745zet.github.io/portfolio/",
				"og:image": "https://avt1745zet.github.io/portfolio/public/ogimage.png",
				"theme-color": "000000"
			},
		}),
		new InjectBodyPlugin({
			content: "<div id=\"root\"></div>"
		}),
		new CopyWebpackPlugin({
			patterns: [{
				from: "./public", to: "./public"
			}]
		}),
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