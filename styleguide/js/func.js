var
_doc       = document,
_win       = window,
sidePanel  = _doc.getElementById('stylguide_sidePanel'),
mainArea   = _doc.getElementById('stylguide_mainArea'),
menuOpener = _doc.getElementById('stylguide_sidePanel-opener'),
init = function(){
    menu_func();
};



_doc.addEventListener('DOMContentLoaded', init);



var
menu_func = function(){
    menuOpener.addEventListener('click', function(){
        sidePanel.classList.toggle('active');
    });
};
