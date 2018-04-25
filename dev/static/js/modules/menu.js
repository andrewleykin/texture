// функция для главного меню
(function(){
	$('.header__burger').click(function(){
		$(this).toggleClass('active');
		$('.header__menu').slideToggle(400, function(){
			if(!$('.header__burger').hasClass('active')) {
				$(this).removeAttr('style');
			}
		});
	});

	$('.menu__item--sub').click(function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).find('.menu__sublist').slideToggle(300, function(){
			if(!$('.menu__item--sub').hasClass('active')) {
				$(this).removeAttr('style');
			}
		});
	});

	$('.menu__sublink').click(function(e){
		e.stopPropagation();
	});
})();