/**
 * Boilerplate setup
 */
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});
const cssPlugin = new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[id].css"
});

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: false,
        port: 7900
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
        ]
    },
    plugins: [
        htmlPlugin,
        cssPlugin,
    ]
};