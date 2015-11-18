var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  plumber = require('gulp-plumber'),
  livereload = require('gulp-livereload'),
  stylus = require('gulp-stylus'),
  csso = require('gulp-csso'),
  shorthand = require('gulp-shorthand'),
  autoprefixer = require('gulp-autoprefixer');

gulp.task('stylus', function () {
  gulp.src('./public/css/stylus/**/*.styl')
    .pipe(plumber())
    .pipe(stylus({
      'include css': true
    }))
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
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

gulp.task('watch', function () {
  gulp.watch('./public/css/stylus/**/*.styl', ['stylus']);
});

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
  'stylus',
  'develop',
  'watch'
]);
