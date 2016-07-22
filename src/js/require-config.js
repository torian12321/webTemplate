// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
	baseUrl: '../../webTemplate/src/js/lib',
	paths  : {
		angular : [
			'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min',
			'angular-v1.5.6'
		],
		jquery  : [
			'https://code.jquery.com/jquery-3.0.0.min',
			'jquery-v3.0.0'
		],
		parallax: 'parallax',
		waypoint: 'waypoint-v2.0.3',
		htm5    : 'html5-v3.7.3',
		app     : '../app'
	},
    shim: {
        parallax: {
            deps: ['jquery'],
            //exports: 'parallax'
        },
        waypoint: {
        	deps: ['jquery'],
            //exports: 'waypoint'
        }
    }
});


// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main']);
requirejs(['app/fancy_functions']);