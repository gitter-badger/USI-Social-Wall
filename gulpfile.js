var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  plumber = require('gulp-plumber'),
  livereload = require('gulp-livereload'),
  sass = require('gulp-sass'),
  csso = require('gulp-csso'),
  shorthand = require('gulp-shorthand'),
  autoprefixer = require('gulp-autoprefixer');

  gulp.task('sass', function () {
    gulp.src('./public/css/sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./public/css'))
      .pipe(livereload());
  });

  gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('./public/css/sass/**/*.scss', ['sass']);
  });

gulp.task('css', function () {
  gulp.src('./public/css/style.css')
    .pipe(plumber())
    .pipe(shorthand())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(csso())
    .pipe(gulp.dest('./public/css'));
})

gulp.task('develop', function () {
  livereload.listen();
  nodemon({
    script: 'bin/www',
    ext: 'js jade coffee',
    stdout: false
  }).on('readable', function () {
    this.stdout.on('data', function (chunk) {
      if (/^Express server listening on port/.test(chunk)) {
        livereload.changed(__dirname);
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});

gulp.task('default', [
  'sass',
  'develop',
  'watch'
]);
