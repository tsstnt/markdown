```js
var happyPackConfig = {
    plugins:[
        new HappyPack({
           id: 'happyBabel',
           threads: 4,
           cache: true,
           loaders:[
               {
                   path: 'babel',
                   query: BABEL_CONFIG
               }
           ]
        }),
        new HappyPack({
            id: 'happyEslint',
            threads: 4,
            cache: true,
            loaders: ['eslint']
        })
    ]
}
var config = module.exports = {
    //................
    module: {
        loaders: [
            // 变动这两个
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'HappyPack/loader?id=happyBabel'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules|\.spec\.js/,
                loader: 'HappyPack/loader?id=happyEslint'
            },
            // 其它的并未改动
            {
                test: /\.(eot|woff2?|ttf|svg|png)$/,
                loader: "file-loader"
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?" + JSON.stringify(CSS_CONFIG) + "!postcss-loader")
            }
        ]
    }
    //...............
}
// 在module.loader中引用
```

