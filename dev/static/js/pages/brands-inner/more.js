(function(){
  $('.bic__more').click(function(e){
    e.preventDefault();
    $(this).hide();
    $('.bic__wrap--hidden').slideDown();
  });
})();