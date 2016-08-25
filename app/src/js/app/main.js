var
_doc = document,
_win = window,
init = function(){
	fancy_functions();
    fitContentOnScreen();
},
resize = function(){
    fitContentOnScreen();
};


$(_doc).ready(init);
$(_win).resize(resize);