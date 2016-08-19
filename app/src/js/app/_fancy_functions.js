// Fancy functions contains any function that is made just for fun, a playground.
// Cancel the functions from the project, and it will work anyway, but without swag :(


var
fancy_functions = function(){
	// It gates data from manifest.js on project root
    loadJSON('manifest.json', function(response) {
        var
        appData = JSON.parse(response),
        text    = appData.name + ' - ' + appData.description;

        sayHello(text, appData.theme_color);
        animateTitle();
    });
},

// http://codepen.io/SamEureka/pen/GZVJvE?editors=0010
// Check the console
sayHello = function(console_text, color){
	var css_shadow = '';

	var lum = 0;
	var hex = String(color).replace(/[^0-9a-f]/gi, '');
	// convert to decimal and change luminosity
	var rgb = '', c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}


	for(i=-1; i<5; i++){
		css_shadow += i +'px '+ i +'px hsl('+ (200 + (5 * i)) +', 100%, 50%),';
	}
	css_shadow = css_shadow.slice(0, -1); //remove last coma

	var css = 'text-shadow: '+ css_shadow +';font-size: 50px; color: '+ color +';';
	console.log('%c %s', css, '\ud83c\udf10 '+ console_text);
},

// Add animaitions to the website title (browser tab)
animateTitle = function(){
	var
	intervaIteration = 0,
	title            = document.title;
    setInterval(function(){
		switch (intervaIteration % 4) {
		    case 0:
		        document.title = 'o--' + title + '--o';
		        break;
		    case 1:
		    case 3:
		        document.title = '-o-' + title + '-o-';
		        break;
		    case 2:
		        document.title = '--o' + title + 'o--';
		        break;
		    default:
		    	break;
		    }
		intervaIteration++;
    }, 250);
};