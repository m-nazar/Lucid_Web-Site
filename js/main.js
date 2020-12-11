$(function() {

  $('.burger__menu').on('click', function() {
    $('.menu__list').slideToggle();
  });

  $('.pricing__slider').slick({
    slidesToShow: 2,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false
        }
      }],
  });

  $('.burger-menu').on('click', function() {
    $('.menu').slideToggle();
  });

});