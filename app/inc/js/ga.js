dataLayer = [{
	'pageCategory': 'signup',
	'visitorType' : 'high-value'
}];



// Google Analytics: change UA-XXXXX-X to be your site's ID
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-XXXXX-X', 'auto');
ga('send', 'pageview');



var
ga_sendValue = function(eventName, value){
    dataLayer.push({
        'event' : eventName,
        'value' : value
    });
},
ga_updateURL = function(url){
	// Manually indicate the page url
    dataLayer.push({
        'event'      : 'virtualPageview',
        'virtualUrl' : url.replace(/-/g, "_")
    });
};