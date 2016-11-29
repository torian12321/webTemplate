var
_doc       = document,
_win       = window,
sidePanel  = _doc.getElementById('stylguide_sidePanel'),
page       = _doc.getElementById('stylguide_page'),
menuOpeners= _doc.querySelectorAll('.stylguide-toggle_sidePanel'),
init = function(){
    menu_func();
};


_doc.addEventListener('DOMContentLoaded', init);


var
menu_func = function(){
    
    Array.from(menuOpeners).forEach(menuOpener => {
        menuOpener.addEventListener('click', function(event) {
            sidePanel.classList.toggle('active');
        });
    });
};


// less.modifyVars({ themeColor_1 : 'black' });
