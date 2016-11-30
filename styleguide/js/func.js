var
_doc       = document,
_win       = window,
sidePanel  = _doc.getElementById('stylguide_sidePanel'),
page       = _doc.getElementById('stylguide_page'),
menuOpeners= _doc.querySelectorAll('.stylguide-toggle_sidePanel'),
init = function(){
    menu_func();
    hljs.initHighlightingOnLoad();
    
    //console.log(printHTML('<h1>Hello world</h1>'));
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



var
htmlEntities = function(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
},
printHTML = function(str){
    return '<pre><code class="html">' + htmlEntities(str) + '</code></pre>'
};

// less.modifyVars({ themeColor_1 : 'black' });
