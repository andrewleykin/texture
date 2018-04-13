// Начальная функция

// функция для Шапки сайта
(function(){
	
	function setHeaderFixed(){
		var scroll = $(window).scrollTop();

		if (scroll >= 35) {
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

// функция для слайдера на главной сверху
(function(){
	var slider = $('.top-banner__list');
	var prev = $('.top-banner__control--prev');
	var next = $('.top-banner__control--next');

	if(slider.length) {
		slider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			cssEase: 'linear'
		});

		prev.click(function(){
			slider.slick('slickPrev')
		});

		next.click(function(){
			slider.slick('slickNext')
		});
	}
})();

// функция для слайдера на главной проекты
(function(){
	var slider = $('.information__list');
	var prev = $('.information__control--prev');
	var next = $('.information__control--next');

	if(slider.length) {
		slider.slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: false,
			infinite: true,
			variableWidth: true
		});

		prev.click(function(){
			slider.slick('slickPrev')
		});

		next.click(function(){
			slider.slick('slickNext')
		});
	}
})();