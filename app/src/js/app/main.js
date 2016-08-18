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


$(_doc).ready(function(){
    init();
});
$(window).resize(function(){
    resize();
});