$(function () {

 $('.top-slider__inner').slick({
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"><img src="../images/slider_bg/arrow-left.svg" alt="left"></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="../images/slider_bg/arrow-right.svg" alt="right"></button>',
  fade: true
  autoplay: true,
  autoplaySpeed: 3000
 });


 var mixer = mixitup('.top-items__content');

});