const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {

    mode: 'development',
    module: {
        rules: [
            {
test: /\.css$/,
use:[
    'style-loader',
    'css-loader'
]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize:false,
                            attributes: false,
                        },
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template:'./src/index.html',
            filename: './index.html'
        }),
    ]




}



