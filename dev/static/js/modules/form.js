// Функция для Формы заказа в Модальном окне
(function(){
	var form = $('.order__form'),
			inputs = form.find('input, textarea');

	inputs.each(function() {
		$(this).focus(function() {
			$(this).siblings().addClass('hide');
		});
		$(this).blur(function(){
			if(!($(this).val())){
				$(this).siblings().removeClass('hide')
			};
		});
	});

	if(form) {
		clearForm();
	}

	function clearForm(){
		var newVal = '';

		for(i=0;i<inputs.length;i++) {
			inputs.eq(i).val(newVal);
		}
	}
})();