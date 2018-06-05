// Функция для слайдера в модальном окне
(function(){
  $("[data-fancybox]").fancybox({
		loop: true,
		buttons: [
			"zoom",
			"fullScreen",
			"download",
			"close"
		],
		transitionEffect: 'slide',
		lang: "ru",
    i18n: {
      ru: {
        CLOSE: "Закрыть",
        NEXT: "Следующий",
        PREV: "Предыдущий",
        ERROR: "Ошибка загрузки",
        PLAY_START: "Начать показ",
        PLAY_STOP: "Завершить",
        FULL_SCREEN: "Весь экран",
        THUMBS: "Миниатюры",
        DOWNLOAD: "Скачать",
        SHARE: "Поделиться",
        ZOOM: "Увеличить"
      }
    }
	});
})();