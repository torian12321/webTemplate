// Libraries
var
gulp     = require('gulp'),
less     = require('gulp-less'),
cleanCSS = require('gulp-clean-css'),
inlineCss= require('gulp-inline-css'),
prefix   = require('gulp-autoprefixer'),
concat   = require('gulp-concat'),
uglify   = require('gulp-uglify'),
php2html = require("gulp-php2html"),
htmlmin  = require('gulp-htmlmin'),
imagemin = require('gulp-imagemin'),
chalk    = require('chalk'),
clean    = require('gulp-clean');

// Directories
var paths = {
	app    : './app/',			// folder for development purposes
	dist   : './dist/',			// folder for optimized files for the production site (distribution)
	js     : './inc/js/',
	jsApp  : './inc/js/app/',
	jsLib  : './inc/js/lib/',
	css    : './inc/css/',
	less   : './inc/less/',
	img    : './inc/img/',
	fonts  : './inc/fonts/',
	views  : './views/'
};


// Main tasks
gulp.task('help',      ['info']);
gulp.task('default',   ['build']);
gulp.task('build'    , ['scripts', 'styles']);
gulp.task('build-all', ['build-dist']);


// Watch tasks
gulp.task('watch', function(){
	gulp.watch(paths.app + paths.less  + 'themes/*.less', ['less_themes']);
	gulp.watch(paths.app + paths.less  + '**/*.less'    , ['less_main']);
	gulp.watch(paths.app + paths.jsApp + '**/*.js'      , ['js_app']);
});


/*****************************************************/
/*--------------------TASKS--------------------------*/
/*****************************************************/
gulp.task('info', function() {
	console.log(
        chalk.green(' <<---------------- Info ---------------->> \n') +
        '1 - Type '+ chalk.bold('gulp build') +' to combine js and less->css (once) \n' + 
        '2 - Type '+ chalk.bold('gulp watch') +' to combine js and less->css (on save .js/.less) \n' + 
        '3 - Type '+ chalk.bold('gulp build-all') +' to create the distribution version on '+ chalk.bold('./dist') +'\n' +
        '      - Removes previous version of ./dist folder \n' +
        '      - Hardcode HTML to PHP \n' +
        '      - Minimaze js/css/htm \n' +
        '      - Optimize images \n' +
        chalk.green(' <<------------ END Info ---------------->> \n')
    );
});

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
				//paths.app + paths.jsLib + 'angular-v1.5.6.js',
				//paths.app + paths.jsLib + 'angular-route-1.5.6.js'
			])
			.pipe(concat('libs.js'))
			.pipe(uglify())
			.on('error', errorLog)
			.pipe(gulp.dest(paths.app + paths.js));
	});
	gulp.task('js_app', function () {
		return gulp.src(paths.app + paths.jsApp + '*.js')
			.pipe(concat('app.js'))
			// Use 'Mangle: false' just if using angular
			//.pipe(uglify({mangle: false}))
			.pipe(uglify())
			.on('error', errorLog)
			.pipe(gulp.dest(paths.app + paths.js));
	});

// Styles Tasks
gulp.task('styles', function () {
	gulp.start('less_main');
	gulp.start('less_error');
	gulp.start('less_themes');
	});
	gulp.task('less_main', function(){
		return gulp.src(paths.app + paths.less + 'style.less')
			.pipe(less())
			.pipe(prefix('last 2 versions'))
			.pipe(cleanCSS({compatibility: 'ie8'}))
			.on('error', errorLog)
			.pipe(gulp.dest(paths.app + paths.css));
	});
	gulp.task('less_error', function(){
		return gulp.src(paths.app + paths.less + 'style_error.less')
			.pipe(less())
			.pipe(prefix('last 2 versions'))
			.pipe(cleanCSS({compatibility: 'ie8'}))
			.on('error', errorLog)
			.pipe(gulp.dest(paths.app + paths.css));
	});
	gulp.task('less_themes', function(){
		return gulp.src(paths.app + paths.less + 'themes/*.less')
			.pipe(less())
			.pipe(prefix('last 2 versions'))
			.pipe(cleanCSS({compatibility: 'ie8'}))
			.on('error', errorLog)
			.pipe(gulp.dest(paths.app + paths.css  + 'themes/'));
	});
	gulp.task('styles-remove', function(){
		return gulp.src(paths.app + paths.css, {read: false})
		    .on('error', errorLog)
		    .pipe(clean({force: true}));
		    console.log('Revmoved previous CSS files');
	});



// Build the distribution version
gulp.task('build-dist', ['build_dist-remove'], function(){
	gulp.start('build_dist-styles');
	gulp.start('build_dist-scripts');
	gulp.start('build-dist-errorpage');
	gulp.start('build_dist-php2html');
	gulp.start('build_dist-images');
	gulp.start('build_dist-extraFiles');
});
	gulp.task('build-dist-errorpage', ['less_error'], function(){
		// Needs to be reviewed
		return gulp.src(paths.app + '404.html')
			.pipe(inlineCss())
			.pipe(gulp.dest(paths.dist));
	});
	// Distributions tasks
	gulp.task('build_dist-remove', function(){
	    return gulp.src(paths.dist, {read: false})
		    .on('error', errorLog)
		    .pipe(clean({force: true}));
	});
	gulp.task('build_dist-styles', ['styles'], function(){
		return gulp.src(paths.app + paths.css + '**/*.css')
			.on('error', errorLog)
			.pipe(gulp.dest(paths.dist + paths.css));
	});
	gulp.task('build_dist-scripts', ['scripts'], function(){
		return gulp.src(paths.app + paths.js + '*.js')
			.on('error', errorLog)
			.pipe(gulp.dest(paths.dist + paths.js));
	});
	gulp.task('build_dist-php2html', function(){
		return gulp.src(paths.app + '*.php')
		    .pipe(php2html())
		    .pipe(htmlmin({collapseWhitespace: true}))
		    .on('error', errorLog)
		    .pipe(gulp.dest(paths.dist ))
	});
	gulp.task('build_dist-images', function(){
		return gulp.src([
				paths.app + paths.img + '**/*.svg',
				paths.app + paths.img + '**/*.jpg',
				paths.app + paths.img + '**/*.png',
				paths.app + paths.img + '**/*.gif',
				paths.app + paths.img + '**/*.ico'
	 		])
			.pipe(imagemin())
			.on('error', errorLog)
			.pipe(gulp.dest(paths.dist + paths.img));
	});
	gulp.task('build_dist-extraFiles', function(){
		gulp.src(paths.app + paths.fonts + '**/*.*')
			.on('error', errorLog)
			.pipe(gulp.dest(paths.dist + paths.fonts));

		gulp.src(paths.app + paths.views + '**/*.html')
			.on('error', errorLog)
			.pipe(gulp.dest(paths.dist + paths.views));

		gulp.src([
				paths.app + '.htaccess',
				paths.app + 'manifest.json',
				paths.app + 'manifest.webapp',
                paths.app + 'service-worker.js',
				paths.app + 'robots.txt'
			])
			.on('error', errorLog)
			.pipe(gulp.dest(paths.dist));
	});
