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