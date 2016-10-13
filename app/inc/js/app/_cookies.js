var
setCookie = function(cname, cvalue, exdays) {
	//    var d = new Date();
	//    d.setTime(d.getTime() + (exdays*24*60*60*1000));
	//    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; "/* + expires*/;
},
getCookie = function(cname) {
    var
    name = cname + "=",
    ca   = document.cookie.split(';');

    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) === 0) return c.substring(name.length,c.length);
    }
    return "";
},
resetCookie = function(cname){
	document.cookie = cname + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
},
resetCookie_all = function(){
	var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
    	var
		cookie = cookies[i],
		eqPos  = cookie.indexOf("="),
		cname  = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    	resetCookie(cname);
    }
};
