import { Configuration } from "webpack";
import { merge } from "webpack-merge";
import common from "./webpack.common";

const config: Configuration = merge(common, {
	devtool: "eval-source-map",
	mode: "development"
});

export default config;