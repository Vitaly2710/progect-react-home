const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: "development",
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.s?css$/i,
                use: [MiniCssExtractPlugin.loader,"css-loader","postcss-loader","sass-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
                
            }
        ]
    },

    devtool: "source-map",



    devServer: {
        static: {
            directory: path.join(__dirname,"dist")
        },
        compress: true,
        port: 8090,
        hot: true,

    }
}