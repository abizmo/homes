var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var gulp = require('gulp');
var inject = require('gulp-inject');
var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');
var reload = browserSync.reload;
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sassLint = require('gulp-sass-lint');
var uglify = require('gulp-uglify');

gulp.task('minify-js', function () {
  gulp.src(['client/app/app.js', 'client/app/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('client/dist/'));
});

gulp.task('watch-js', function () {
  gulp.watch(['client/app/*.js', 'client/app/**/*.js'], ['minify-js']);
});

gulp.task('compile-sass', function () {
  gulp.src(['client/sass/**/*.sass'])
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest('client/dist/'))
    .pipe(reload({ stream: true }));
});

gulp.task('inject', function () {
  gulp.src('client/views/index.html')
    .pipe(inject(gulp.src(['client/dist/*.js', 'client/dist/*.css'], { read: false }),{
      relative : true
    }))
    .pipe(gulp.dest('client/views/'));
});

gulp.task('serve', ['nodemon'], function () {
  browserSync.init(null, {
		proxy: "http://localhost:8080",
    files: ["client/**/*.*"],
    browser: "google chrome",
    port: 7000,
	});

  gulp.watch(['client/sass/**/*.sass'], ['compile-sass']);
  gulp.watch(['client/views/*.html', 'client/views/**/*.html']).on('change', reload);
});

gulp.task('nodemon', function (cb) {
	var started = false;

	return nodemon({
		script: 'index.js'
	}).on('start', function () {
		if (!started) {
			cb();
			started = true;
		}
	});
});

gulp.task('default', ['minify-js', 'compile-sass', 'inject', 'watch-js', 'serve']);
