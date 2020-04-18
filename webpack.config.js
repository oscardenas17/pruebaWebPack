const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require ('compression-webpack-plugin')

const javascriptRules ={
    test: /\.js$/,
    exclude: /node_modules/,
    use:{
        loader: 'babel-loader',
        options:{
            presets:['@babel/preset-react','@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-optional-chaining']
        }
    }
}

const productionPlugins = [
    new CompressionPlugin()
]

module.exports = (env, {mode}) =>({
    output:{
        filename: 'app.[contentHash].js'
    },
    module:{
        rules:[javascriptRules]
    },
    plugins:[
        mode === 'production' && [...productionPlugins],
        mode === 'development' && [...developmentPlugins],
        
        new HtmlWebpackPlugin({
            title: 'Webpack paso a paso',
            template: 'src/index.html'
        })
    ] .filter(Boolean)
})