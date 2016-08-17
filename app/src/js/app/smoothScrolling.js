// Smooth Scrolling
// TODO: check how to do it vanilla js
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