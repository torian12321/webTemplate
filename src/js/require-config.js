// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
	baseUrl: '../src/js/lib',
	paths  : {
		angular : [
			'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js',
			'angular-v1.5.6.js'
		],
		jquery  : [
			'https://code.jquery.com/jquery-3.0.0.min.js',
			'jquery-v3.0.0.js'
		],
		parallax: 'parallax.js',
		waypoint: 'waypoint-v2.0.3.js',
		htm5    : 'html5-v3.7.3.js',
		app    : '../app'
	}
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main']);