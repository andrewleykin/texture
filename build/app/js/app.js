// Начальная функция

(function(){
	// Писать код здесь
})();
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
// Функция для добавления класса стрелкам переключения
(function(){
	var controlBlock = $('.js-control');
			prev = controlBlock.find('.js-control--prev'),
			next = controlBlock.find('.js-control--next');

			prev.mouseenter(function(){
				controlBlock.addClass('prev')
			});
			prev.mouseleave(function(){
				controlBlock.removeClass('prev')
			});
			next.mouseenter(function(){
				controlBlock.addClass('next')
			});
			next.mouseleave(function(){
				controlBlock.removeClass('next')
			});
})();
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
// функция для слайдера на главной сверху
(function(){
	var slider = $('.top-banner__list');
	var controls = slider.siblings('.top-banner__controls')
	var prev = controls.find('.control--prev');
	var next = controls.find('.control--next');

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
			variableWidth: true,
			responsive: [
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});

		prev.click(function(){
			slider.slick('slickPrev')
		});

		next.click(function(){
			slider.slick('slickNext')
		});
	}
})();
// функция для слайдера на странице о компании
(function(){
	var slider = $('.about__list');
	var controls = slider.siblings('.about__controls')
	var prev = controls.find('.control--prev');
	var next = controls.find('.control--next');

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
// функция для страниц Контакты
(function(){
	if($('.contacts').length) {
		$('.wrapper').addClass('wrapper--contacts')
	}
})();
$(document).ready(function () {
    svg4everybody({});
});
// Библиотека wow.js для анимации

(function () {
	new WOW().init();
})();