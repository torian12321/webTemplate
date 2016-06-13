// Import libraries with koala
// @koala-append "lib/jquery.js"
// @koala-append "lib/parallax.js"
// @koala-append "lib/waypoint.js"



var
_doc = document,
_win = window;

checkJquery();


function checkJquery (method) {
    if (_win.jQuery){
    	ini();
    }else{
        setTimeout(function() { checkJquery(method) }, 50);
    }
}

var ini = function(){
	$(_doc).ready(function(){
		smoothScrolling();
		sayHello();
		// @koala-append "_forms.js"
	});
	$(_win).resize(function(){

	});
}


function sayHello(){
	//http://codepen.io/SamEureka/pen/GZVJvE?editors=0010
	//Check the console
	var css_shadow = '';

	for(i=-1; i<5; i++){
		css_shadow += i +'px '+ i +'px hsl('+ (200 + (5 * i)) +', 100%, 50%),';
	}
	css_shadow = css_shadow.slice(0, -1); //remove last coma

	var css = 'text-shadow: '+ css_shadow +';font-size: 50px; color: '+ colors.main +';';
	console.log('%c %s', css, '\ud83c\udf10 '+ project.title +' - '+ project.desc);
}

//Smooth Scrolling
function smoothScrolling() {
	$('a[href*=#]:not([href=#])').click(function() {

		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

			if (target.length) {
				$('html,body').stop().animate({
					scrollTop: target.offset().top
				}, 1250);
			return false;
			}
		}
	});
}