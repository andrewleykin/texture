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