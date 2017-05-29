var gulp = require ('gulp'),
	less = require('gulp-less'),
	connect = require('gulp-connect')

gulp.task('less',function () {
	gulp.src('src/less/*.less')
		.pipe(less())
		.pipe(gulp.dest('src/css'));
})

gulp.task('reload',function(){
	gulp.src('src/**/*.*')
		.pipe(connect.reload());
})

gulp.task('connect',function(){
	connect.server({
		root:'src',
		port: 8080,
		livereload: true
	})
})

gulp.task('watch',function(){
	gulp.watch('src/less/*.less',['less']);
	gulp.watch('src/**/*.*',['reload']);
})

gulp.task('default',['connect','watch']);