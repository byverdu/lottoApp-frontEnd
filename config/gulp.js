// Path folders for gulp
module.exports = {
  scss: {
    source: './scss/style.scss',
    dest: './app/public/css/',
    autoprefixer: 'last 2 versions',
    message: 'All scss files compiled'
  },
  clean: {
    message: 'All dest/ files deleted'
  }
};
