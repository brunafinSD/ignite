// cada sistema operacional usa a barra de uma forma e o path vai fazer esse papel de saber qual barra usar no caminhos
const path = require ('path');

module.exports = {
    mode: 'development',
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
    // como a  aplicação vai ser comportar com esses arquivos
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modulues/,
                use: 'babel-loader'
            }
        ],
    }
};