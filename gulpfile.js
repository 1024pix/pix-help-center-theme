const { src, dest, parallel, task, watch } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer')
const postcss = require('gulp-postcss')

const SASS_DIRECTORY = 'src/styles/**/*.scss';

function styles() {
  return src(SASS_DIRECTORY)
    .pipe(sass())
    .pipe(autoprefixer({grid: 'autoplace'}, "last 4 versions", "> 1%"))
    .pipe(dest('tmp/css'));
}

task('styles', styles);

task('watch', function () {
  styles();
  watch([SASS_DIRECTORY], styles);
});

exports.styles = styles;
exports.default = parallel(styles);