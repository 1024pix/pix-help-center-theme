const { src, dest, parallel, task, watch } = require('gulp');
var sass = require('gulp-sass');

const SASS_DIRECTORY = 'src/styles/**/*.scss';

function styles() {
  return src(SASS_DIRECTORY)
    .pipe(sass())
    .pipe(dest('tmp/css'));
}

task('styles', styles);

task('watch', function() {
    styles();
    watch([SASS_DIRECTORY], styles);
  }
);

exports.styles = styles;
exports.default = parallel(styles);