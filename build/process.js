const webpack = require('webpack');
const args = process.argv.slice(2);
const isClientBuild = args[0] === '--client';
const isWatch = args[0] === '--watch';
const config = require('./webpack.client.config.js');
const compiler = webpack(config);

const watchOptions = {
  aggregateTimeout: 300,
  poll: true,
};

function compilerCallback(err, stats) {
  if (err) {
    process.exit(1);
  }

  process.stdout.write(`${stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
  })}\n`);
}

if (isWatch) {
  compiler.watch(watchOptions, compilerCallback);
} else {
  compiler.run(compilerCallback);
}
