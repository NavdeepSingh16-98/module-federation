// const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPLugin');

module.exports ={

    entry : './src/index.js',
    mode: 'development',
    devServer : {
        port:3001
    },
    plugins:[
        new HTMLWebpackPlugin({
            template:'./public/index.html'
        }),
        new ModuleFederationPlugin({
            name:'app1',
            remotes:{
                app2:'app2@http://localhost:3002/remoteEntry.js'
            },
            shared:[react,react-dom]
        })
    ]
}



