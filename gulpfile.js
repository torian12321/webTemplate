// Libraries
var
gulp     = require('gulp'),
less     = require('gulp-less'),
cleanCSS = require('gulp-clean-css'),
prefix   = require('gulp-autoprefixer'),
concat   = require('gulp-concat'),
uglify   = require('gulp-uglify');

// Directories
var paths = {
	php    : './',
	html   : './',
	js     : './src/js/',
	jsApp  : './src/js/app/',
	jsLib  : './src/js/lib/',
	css    : './src/css/',
	less   : './src/less/'
};


function errorLog(error){
	console.log('ERROR');
	console.error.bind(error);
	this.emit('end');
}

// Javascript Tasks
gulp.task('scripts', ['js_libs', 'js_app'], function () {
	gulp.src(paths.js + '*.js')
		.pipe(uglify({mangle: false}))
		.on('error', errorLog)
		.pipe(gulp.dest(paths.js));
});
	gulp.task('js_libs', function () {
		return gulp.src([
				paths.jsLib + 'jquery-v3.0.0.js',
				paths.jsLib + 'angular-v1.5.6.js',
				paths.jsLib + 'angular-route-1.5.6.js'
			])
			.pipe(concat('libs.js'))
			.pipe(gulp.dest(paths.js));
	});
	gulp.task('js_app', function () {
		return gulp.src(paths.jsApp + '*.js')
			.pipe(concat('app.js'))
			.pipe(gulp.dest( paths.js));
	});

// Styles Tasks
gulp.task('styles', ['less_main', 'less_themes']);
	gulp.task('less_main', function(){
		return gulp.src(paths.less + 'style.less')
			.pipe(less())
			.pipe(prefix('last 2 versions'))
			.pipe(cleanCSS({compatibility: 'ie8'}))
			.pipe(gulp.dest(paths.css));
	});
	gulp.task('less_themes', function(){
		return gulp.src(paths.less + 'themes/*.less')
			.pipe(less())
			.on('error', errorLog)
			.pipe(prefix('last 2 versions'))
			.pipe(cleanCSS({compatibility: 'ie8'}))
			.pipe(gulp.dest(paths.css  + 'themes/'));
	});

// Watch tasks
gulp.task('watch', function(){
	gulp.watch( paths.less  + '*.less', ['less_main']);
	gulp.watch( paths.less  + 'themes/*.less', ['less_themes']);
	gulp.watch( paths.jsApp + '*.js', ['js_app']);
});


gulp.task('build'  , ['scripts', 'styles']);
gulp.task('default', ['styles']);