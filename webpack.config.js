var path = require('path');
var config = {
    context: __dirname + "/src",
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
		'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
		"./main.js",
	],
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist/js",
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }				
            },
			{
				test: /\.jsx?$/,
				loaders: ['react-hot', 'jsx?harmony'],
				include: path.join(__dirname, 'src')
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.css$/,
				exclude: /\.useable\.css$/,
				loader: "style!css"
			},
			{
				test: /\.useable\.css$/,
				loader: "style/useable!css"			
			}			
        ],
    }
};
module.exports = config;