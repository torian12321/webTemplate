var
_doc = document,
_win = window,
init = function(){
    smoothScrolling();
	fancy_functions();
    fitContentOnScreen();
},
resize = function(){
    fitContentOnScreen();
};


// $(_doc).ready(init);
// $(_win).resize(resize);
// Vanilla js functions
_doc.addEventListener('DOMContentLoaded', init);
_win.addEventListener('resize', resize);
