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