const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: "development",
    devServer: {
        open: true,
        contentBase: "dist"
    },
    entry: "./src/main.js", 
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/clientes.html",  // arquivo que servirá como modelo
        filename: "index.html"               // arquivo que sera criado a partir do modelo acima
        })
    ],
    module: {
        rules: [ //regras que os modos vao passar
            {
                test: /\.css$/,   //identificar .arquivos .css
                use: ["style-loader", "css-loader"]  //informando quais loader ele vai usar
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.png$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]"
                    }
                }
            }
        ] 
    }
}
