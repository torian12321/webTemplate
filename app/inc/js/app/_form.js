$('input, textarea').focusout(function(){
	var
	field = $(this),
	value = field.val().replace(/\s/g, '');   //remove space

	if( value !== ''){
		field.addClass('filled');
	}else{
		field.removeClass('filled');
		field.val('');
	}

	field_validate(field);
});


var
form_validate = function(formSelector){
	var isValid = true;

	$(formSelector + ' .mandatory').each(function( index ){
		if(!field_validate($(this))){
			isValid = false;
		}
	});

	return(isValid);
};
