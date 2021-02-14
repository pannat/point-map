const path = require('path');
const fs = require('fs');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const tsCustomTransformer = path.join(__dirname, 'tsCustomTransformer.js');

module.exports = {
    context: path.join(__dirname, ''),
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'js/[name].min.js',
        publicPath: '/',
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        open: false,
        port: 4000,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'thread-loader',
                        options: {
                            workers: ForkTsCheckerWebpackPlugin.TWO_CPUS_FREE,
                            poolTimeout: isProd ? 500 : Infinity
                        }
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: [
                                'react-hot-loader/babel',
                                '@babel/syntax-dynamic-import',
                                '@babel/plugin-transform-react-constant-elements',
                                '@babel/plugin-transform-react-inline-elements',
                                'transform-react-remove-prop-types'
                            ],
                            cacheDirectory: true,
                            cacheCompression: false
                        }
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            happyPackMode: true,
                            configFile: path.join(__dirname, 'tsconfig.json'),
                            getCustomTransformers: fs.existsSync(tsCustomTransformer) ? tsCustomTransformer : undefined
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: !isProd
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            },
                            sourceMap: !isProd
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: !isProd
                        }
                    }
                ]
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: 'file-loader'
            },
            {
                test: /\.(woff|woff2|ttf)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 100000
                    }
                }]
            },
            {
                test: /\.(gif|jpg|png)/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }]
            },
            {
                test: /\.svg$/,
                use: [{
                    loader: '@svgr/webpack',
                    options: {
                        svgoConfig: {
                            plugins: [{
                                removeViewBox: false
                            }, {
                            }, {
                                removeDimensions: false
                            }, {
                                removeUnknownsAndDefaults: false
                            }]
                        }
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    }
};
