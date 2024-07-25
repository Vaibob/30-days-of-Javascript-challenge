const path = require('path');

module.exports = {
    entry: './src/day_13_p5.mjs',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development'
};
