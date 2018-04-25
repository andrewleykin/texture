// функция для Шапки сайта
(function(){
	
	function setHeaderFixed(){
		var scroll = $(window).scrollTop();

		if (scroll >= 15) {
				$('.header').addClass('header--fixed');
				// $('.page').addClass('page--js-top');
		}
		else {
				$('.header').removeClass('header--fixed');
				// $('.page').removeClass('page--js-top');
				
		}
	}

	$(window).on('scroll', function() {
			setHeaderFixed();
	})
})();