let mix = require('laravel-mix');
mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css');


    mix.webpackConfig({
        devtool: 'source-map',
        resolve: {extensions: ['.js']},
        module: {
            // this forces the sourceType of the I18n file to module, otherwise
            rules: [
                {
                    loader: 'babel-loader',
                    type: 'javascript/auto',
                    options: {
                        sourceType: 'module'
                    }
                }
            ]
        }
    })
        .sourceMaps();