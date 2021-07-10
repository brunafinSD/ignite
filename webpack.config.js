// cada sistema operacional usa a barra de uma forma e o path vai fazer esse papel de saber qual barra usar no caminhos
const path = require ('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    // aqui o arquivo principal da aplicação
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    // qual arquivo será gerado
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // por padrão ele lê arquivos js, adicionamos jsx também
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    // como a  aplicação vai ser comportar com esses arquivos
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            }
        ],
    }
};