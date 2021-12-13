$(function () {

 $('.top-slider__inner').slick({
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"><img src="../images/slider_bg/arrow-left.svg" alt="left"></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="../images/slider_bg/arrow-right.svg" alt="right"></button>',
  fade: true,
  infinite: false,
  dots: true
 });

 $('.partners__list').slick({
  arrows: false,

  fade: false,
  autoplay: true,
  slidesToShow: 6,
  slidesToScroll: 1,


  responsive: [{
    breakpoint: 9999,
    settings: "unslick"
   },
   {
    breakpoint: 768,
    settings: {

     slidesToShow: 4,

    }
   },
   {
    breakpoint: 560,
    settings: {

     slidesToShow: 2,
     slidesToScroll: 2
    }
   }
  ]
 });



 const cropElement = document.querySelectorAll('.product__name-title'), // выбор элементов  
  size = 92 // кол-во символов  
 endCharacter = '...'; // окончание  

 cropElement.forEach(el => {
  let text = el.innerHTML;

  if (el.innerHTML.length > size) {
   text = text.substr(0, size);
   el.innerHTML = text + endCharacter;
  }
 });

 $(".star").rateYo({
  numStars: 1,
  starWidth: "16px",
  readOnly: true
 });

 var top = document.querySelector('[data-ref="mix1"]');
 var sale = document.querySelector('[data-ref="mix2"]');

 var config = {
  controls: {
   scope: 'local'
  }
 };


 var mixer1 = mixitup(top, config);
 var mixer1 = mixitup(sale, config);
});


$(function () {
 const cropElement = document.querySelectorAll('.sale__wrapper .product__name-title'), // выбор элементов  
  size = 70 // кол-во символов  
 endCharacter = '...'; // окончание  

 cropElement.forEach(el => {
  let text = el.innerHTML;

  if (el.innerHTML.length > size) {
   text = text.substr(0, size);
   el.innerHTML = text + endCharacter;
  }
 });

})

$(function () {
 const cropElement = document.querySelectorAll('.news__link-text'), // выбор элементов  
  size = 113 // кол-во символов  
 endCharacter = '...'; // окончание  

 cropElement.forEach(el => {
  let text = el.innerHTML;

  if (el.innerHTML.length > size) {
   text = text.substr(0, size);
   el.innerHTML = text + endCharacter;
  }
 });

 $('.header__menu-btn, .tel-menu__btn, .tel-menu a').click(function () {
  $('.header__menu').toggleClass('header__menu--active');
 })

 $('.form__img').click(function () {
  $('.form__tel').toggleClass('form__tel--active');
 })

$('.select-styler').styler();


 $('.filter-price__input').ionRangeSlider({
  type: "double",
  skin: "round",
  onStart: function (data) {
    $('input[name=sum]').val(data.from);
    $('input[name=sum-to]').val(data.to);
   },

   onChange: function (data) {
    $('input[name=sum]').val(data.from);
    $('input[name=sum-to]').val(data.to);
   },
 });

})


// Нашел функцию для мышки, но не работает:( вдруг натолкнет на мысль
$(function removeHover() {
 var anchors = document.getElementsByTagName('a');
 for (i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener('touchstart', function (e) {
   $('a').mouseleave();
  }, false);
 }
})