const TerserPlugin = require("terser-webpack-plugin");
const path = require('path');
const nodeExternals = require("webpack-node-externals");
const Dotenv = require('dotenv-webpack');
module.exports = {
    // モジュールバンドルを行う起点となるファイルの指定
    // 指定できる値としては、ファイル名の文字列や、それを並べた配列やオブジェクト
    // 下記はオブジェクトとして指定した例 
    entry: {
        bundle: './src/main.ts'
    },
    externals: [nodeExternals()],
    output: {
        // モジュールバンドルを行った結果を出力する場所やファイル名の指定
        // "__dirname"はこのファイルが存在するディレクトリを表すnode.jsで定義済みの定数
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'  // [name]はentryで記述した名前(この例ではbundle）が入る
    },
    // モジュールとして扱いたいファイルの拡張子を指定する
    // 例えば「import Foo from './foo'」という記述に対して"foo.ts"という名前のファイルをモジュールとして探す
    // デフォルトは['.js', '.json']
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '~': path.resolve('./', '/src'), // rootPath にはルートのパスが入る。
        },
    },
    devServer: {
        // webpack-dev-serverの公開フォルダ
        contentBase: path.join(__dirname, 'dist')
    },
    // モジュールに適用するルールの設定（ここではローダーの設定を行う事が多い）
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: "ts-loader",
                options: {
                    configFile: "tsconfig.json"
                }
            }
        ]
    },
    plugins: [
        // { systemvars: true },
        new Dotenv({ systemvars: true }),
    ],
    optimization: {
        // セキュリティ目的で、本番Build後のファイルの可視性を下げる。
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
}