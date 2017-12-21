"use strict";

var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
    context: __dirname + "/programming club",
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./script.js",
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modles|bower_components)/,
            loader: "babel-loader",
            query: {
                presets: ['react']
            }

        }]
    },
    output: {
        path: __dirname + "/programming club/",
        filename: "script.min.js"

    },
    plugins: debug ? [] : [new webpack.optimize.DedupePlugin(), new webpack.optimize.OccurenceOrderPlugin(), new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })]
};
//# sourceMappingURL=webpack.config.js.map