define(function (require) {
	var $ = require('jquery');

	function setCookie(cname, cvalue, exdays) {
		//    var d = new Date();
		//    d.setTime(d.getTime() + (exdays*24*60*60*1000));
		//    var expires = "expires="+d.toUTCString();
	    document.cookie = cname + "=" + cvalue + "; "/* + expires*/;
	}


	function getCookie(cname) {
	    var name = cname + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0; i<ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1);
	        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
	    }
	    return "";
	}


	function resetCookies(){
		$('input[type="text"], input[type="tel"], select').each(function(){
			$(this).val("");
			setCookie(this.id, "" );
		});

		$('input:checkbox').each(function(){
			$(this).removeAttr( "checked" )
			$(this).parent().find('i').css( "display", "none" );
			setCookie($(this).attr('id'), "");
		});
	}

});