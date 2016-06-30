$('input, textarea').focusout(function(){
	var
	field = $(this),
	value = field.val().replace(/\s/g, '');   //remove space

	if( value != ''){
		field.addClass('filled');
	}else{
		field.removeClass('filled');
		field.val('');
	}

	field_validate(field);
});



function field_validate(field){
	var isValid = true;

	if(field.hasClass('mandatory')){
		if(field.val().trim() == ''){
			isValid = false;
		}else if(field.hasClass('mandatory-email')){
			//email validation
			var emailFilter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;

			if (!emailFilter.test(field.val())) {
				isValid = false;
			}
		}
		if(!isValid){
			field.addClass('error');
		}else{
			field.removeClass('error');
		}
	}

	return(isValid);
}



function form_validate(formSelector){
	var isValid = true;

	$(formSelector + ' .mandatory').each(function( index ){
		if(!field_validate($(this))){
			isValid = false;
		}
	});

	return(isValid);
}