const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: path.join(__dirname, 'src', 'main', 'resources', 'static', 'js', 'main.js'),
    devServer: {
        contentBase: './dist',
        compress: true,
        port: 8000,
        allowedHosts: [
            'localhost:8080'
        ],
        stats: 'errors-only',
        clientLogLevel: 'error',

    },
    plugins: [
        new VueLoaderPlugin()
    ],

    module: {
        rules:  [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            { test: /\.vue$/,
                include: /src/,
                loader: 'vue-loader',
                options: { loaders: { js: 'awesome-typescript-loader?silent=true' } }
            },


            {

                test: /\.s(c|a)ss$/,
                loader: ['style-loader', 'css-loader', 'stylus-loader',  'vue-style-loader', {
                    loader: 'vuetify-loader',
                    options: {
                        theme: path.resolve('./node_modules/vuetify/src/stylus/theme.styl')
                    }
                }],

            },

        ]
    },

    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        modules: [
            path.join(__dirname, 'src', 'main', 'resources', 'static', 'js'),
            path.join(__dirname, 'node_modules'),
        ],
    }
}