// webpack.config.js
const path = require('path');

module.exports = {
    entry: './src/main.ts', // Entry point of your Angular application
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-angular-app.bundle.js', // Output file name
    },
    resolve: {
        extensions: ['.ts', '.js'], // Add other extensions if needed
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
};
