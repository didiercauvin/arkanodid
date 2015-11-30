var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	browserify = require('browserify'),
	source = require('vinyl-source-stream');

gulp.task('server', function() {
	browserSync.init({
		server: {
			baseDir: "./src"
		}
	});

	gulp.watch(['**/*.js', '!src/dist/bundle.js'], ['js-watch']);
});

gulp.task('js', function() {
	return browserify('./src/app.js')
			.bundle()
			.pipe(source('bundle.js'))
			.pipe(gulp.dest('./src/dist'));


});

gulp.task('js-watch', ['js'], function() {
	browserSync.reload();
});

gulp.task('default', ['server']);
