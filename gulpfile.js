var gulp = require('gulp'),
	browserify = require('browserify'),
	source = require('vinyl-source-stream'),
	connect = require('gulp-connect');

gulp.task('server', function() {
	connect.server({
		root: "src",
		livereload: true,
		port: 3000
	});
});

gulp.task('js', function() {
	return browserify('./src/app.js')
			.bundle()
			.pipe(source('bundle.js'))
			.pipe(gulp.dest('./src/dist'))
			.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch(['**/*.js', '!src/dist/bundle.js'], ['js']);
});

gulp.task('default', ['server', 'watch']);
