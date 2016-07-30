// Libraries
var
gulp     = require('gulp'),
less     = require('gulp-less'),
cleanCSS = require('gulp-clean-css'),
prefix   = require('gulp-autoprefixer'),
concat   = require('gulp-concat'),
uglify   = require('gulp-uglify'),
php2html = require("gulp-php2html"),
htmlmin  = require('gulp-htmlmin'),
imagemin = require('gulp-imagemin'),
clean    = require('gulp-clean');

// Directories
var paths = {
	app    : './app/',			// folder for development purposes
	dist   : './dist/',			// folder for optimized files for the production site (distribution)
	js     : './src/js/',
	jsApp  : './src/js/app/',
	jsLib  : './src/js/lib/',
	css    : './src/css/',
	less   : './src/less/',
	img    : './src/img/',
	fonts  : './src/fonts/',
	views  : './views/'
};

// Watch tasks
gulp.task('watch', function(){
	gulp.watch(paths.app + paths.less  + '*.less', ['less_main']);
	gulp.watch(paths.app + paths.less  + 'themes/*.less', ['less_themes']);
	gulp.watch(paths.app + paths.jsApp + '*.js', ['js_app']);
});

// Main tasks
gulp.task('build'    , ['scripts', 'styles']);
gulp.task('build_all', ['build_dist']);



/*****************************************************/
/*****************************************************/
/*****************************************************/
function errorLog(error){
	console.log('ERROR');
	console.error.bind(error);
	this.emit('end');
}

// Javascript Tasks
gulp.task('scripts', ['js_libs', 'js_app']);
	gulp.task('js_libs', function () {
		return gulp.src([
				paths.app + paths.jsLib + 'jquery-v3.0.0.js',
				paths.app + paths.jsLib + 'angular-v1.5.6.js',
				paths.app + paths.jsLib + 'angular-route-1.5.6.js'
			])
			.pipe(concat('libs.js'))
			.pipe(uglify())
			.pipe(gulp.dest(paths.app + paths.js));
	});
	gulp.task('js_app', function () {
		return gulp.src(paths.app + paths.jsApp + '*.js')
			.pipe(concat('app.js'))
			.pipe(gulp.dest(paths.app + paths.js));
	});

// Styles Tasks
gulp.task('styles', ['less_main', 'less_themes']);
	gulp.task('less_main', function(){
		return gulp.src(paths.app + paths.less + 'style.less')
			.pipe(less())
			.pipe(prefix('last 2 versions'))
			.pipe(cleanCSS({compatibility: 'ie8'}))
			.pipe(gulp.dest(paths.app + paths.css));
	});
	gulp.task('less_themes', function(){
		return gulp.src(paths.app + paths.less + 'themes/*.less')
			.pipe(less())
			.on('error', errorLog)
			.pipe(prefix('last 2 versions'))
			.pipe(cleanCSS({compatibility: 'ie8'}))
			.pipe(gulp.dest(paths.app + paths.css  + 'themes/'));
	});


// Build the distribution version
gulp.task('build_dist', ['build', 'build_dist_clean'], function(){
	gulp.src(paths.app + paths.css + '**/*.css')
		.pipe(gulp.dest(paths.dist + paths.css));
		console.log('Copied and minified: Style files');

	gulp.src(paths.app + paths.js + '*.js')
		.pipe(uglify({mangle: false}))
		.on('error', errorLog)
		.pipe(gulp.dest(paths.dist + paths.js));
		console.log('Copied and minified: Script files');

	gulp.src(paths.app + '*.php')
	    .pipe(php2html())
	    .pipe(htmlmin({collapseWhitespace: true}))
	    .pipe(gulp.dest(paths.dist ))
	    console.log('Copied and minified: PHP to HTML');

	gulp.src(paths.app + paths.fonts + '*.*')
		.pipe(gulp.dest(paths.dist + paths.fonts));
		console.log('Copied and minified: Fonts');

	gulp.src(paths.app + paths.views + '*.html')
		.pipe(gulp.dest(paths.dist + paths.views));
		console.log('Copied and minified: Views (HTML)');

	gulp.src([
			paths.app + '.htaccess',
			paths.app + 'manifest.json',
			paths.app + 'robots.txt'
		])
		.pipe(gulp.dest(paths.dist));
		console.log('Copied and minified: Additional files');

 	gulp.src([
			paths.app + paths.img + '**/*.svg',
			paths.app + paths.img + '**/*.jpg',
			paths.app + paths.img + '**/*.png',
			paths.app + paths.img + '**/*.ico'
 		])
		.pipe(imagemin())
		.on('error', errorLog)
		.pipe(gulp.dest(paths.dist + paths.img));
		console.log('Images compressed; be sure than the compression did not compromise the quality');
	});

	// Distributions tasks
	gulp.task('build_dist_clean', function(){
		return gulp.src(paths.dist, {read: false})
		    .pipe(clean({force: true}));
	});