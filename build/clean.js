const path = require('path');
const rimraf = require('rimraf');

const files = [path.resolve(__dirname, '../.public'), path.resolve(__dirname, '../.tmp')];

files.forEach((file) => {
  rimraf(file, err => {
    if (err) {
      process.exit(1);
    }
  });
});
