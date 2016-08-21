// The element:
// <button data-activate=".main-menu"></button>
// will toggle 'active' class to the element main-menu on be clicked
function element_selector(element, data_selector){
	switch(element.data(data_selector)) {
    case 'this':
        return element;
        break;
    case 'parent':
       	return element.parent();
        break;
    default:
    	return $(element.data(data_selector));
	}
};

$('[data-activate]').click(function(){
	element_selector($(this), 'activate').toggleClass('active');
});

$('[data-show-hide]').click(function(){
	element_selector($(this), 'show-hide').toggleClass('hidde');
});
$('[data-hidde]').click(function(){
	element_selector($(this), 'hidde').addClass('hidde');
});
$('[data-show]').click(function(){
	element_selector($(this), 'show').addClass('show');
});


// Tab openers
$('.tabs-header label').click(function(){
    console.log('hi');
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
});