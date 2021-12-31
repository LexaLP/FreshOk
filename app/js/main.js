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

 $('.produce-slide__small').slick({
  asNavFor: '.produce-slide__big',
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"><img src="../images/slider_bg/arrow-left.svg" alt="left"></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="../images/slider_bg/arrow-right.svg" alt="right"></button>'
 })
 $('.produce-slide__big').slick({
  asNavFor: '.produce-slide__small',
  slidesToShow: 1,
  slidesToScroll: 1
 })

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

  $(".stars").rateYo({
   numStars: 5,
   starWidth: "16px"
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

 $('.shop-content__tel-btn').click(function () {
  $('.shop__filters').toggleClass('shop__filters--active');
 })

 $('.shop__filter-close').click(function () {
  $('.shop__filters').removeClass('shop__filters--active');
 })

 $('.pagination__link').on('click', function () {
  $('.pagination__prev').addClass('pagination__prev--active');
 });

 $('.dis').on('click', function () {
  $('.pagination__prev').removeClass('pagination__prev--active');
 });

 $('.pagination__link').on('click', function () {
  $('.pagination__next').removeClass('pagination__next--active');
  $('.act').on('click', function () {
   $('.pagination__next').addClass('pagination__next--active');
  });
 });

 $('.pagination__link').on('click', function () {
  $('.pagination__link').removeClass('pagination__link--active');
  $(this).addClass('pagination__link--active')
 });


  $('.produce-tabs__top-item').on('click', function (e) {
   e.preventDefault();
   $('.produce-tabs__top-item').removeClass('produce-tabs__top-item--active');
    $(this).addClass('produce-tabs__top-item--active')

    $('.produce-tabs__content-item').removeClass('produce-tabs__content-item--active');
    $($(this).attr('href')).addClass('produce-tabs__content-item--active');
  });


 $('.select-styler, .produce__item-num').styler();
})

$(function () {
 const cropElement = document.querySelectorAll('.shop-content__wrapper .product__name-title'), // выбор элементов  
  size = 62 // кол-во символов  
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
 $('.shop-content__filter-btn').on('click', function () {
  $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
  $(this).addClass('shop-content__filter-btn--active')
 });

 $('.button-list').on('click', function () {
  $('.top-items__content').addClass('shop-content__wrapper')
 });

 $('.button-grid').on('click', function () {
  $('.top-items__content').removeClass('shop-content__wrapper')
 });
})


var $range = $(".filter-price__input"),
 $inputFrom = $(".filter-price__from"),
 $inputTo = $(".filter-price__to"),
 instance,
 min = 0,
 max = 1000,
 from = 0,
 to = 0;

$range.ionRangeSlider({
 skin: "round",
 type: "double",
 min: min,
 max: max,
 onStart: updateInputs,
 onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs(data) {
 from = data.from;
 to = data.to;

 $inputFrom.prop("value", from);
 $inputTo.prop("value", to);
}

$inputFrom.on("input", function () {
 var val = $(this).prop("value");

 // validate
 if (val < min) {
  val = min;
 } else if (val > to) {
  val = to;
 }

 instance.update({
  from: val
 });
});

$inputTo.on("input", function () {
 var val = $(this).prop("value");

 // validate
 if (val < from) {
  val = from;
 } else if (val > max) {
  val = max;
 }

 instance.update({
  to: val
 });
});

$(function () {
 $(".filter-category, .filter-offer, .filter-brand, .filter-price").each(function () {
  let more = $(this).find(".filter__btn");
  let hide = $(this).find(".filter__content");
  more.click(function () {
   hide.slideToggle(20);
  });
 });
})


var selector = '.slick-slide:not(.slick-cloned)';

// Init fancybox, skip cloned elements 
$().fancybox({
 selector: selector,
 backFocus: false,
 animationEffect: "fade"
});

// Custom click event on cloned elements,  
$(document).on('click', '.slick-cloned', function (e) {
 $(selector)
  .eq(($(this).attr("data-slick-index") || 0) % $(selector).length)
  .trigger("click.fb-start", {
   $trigger: $(this)
  });

 return false;
});

$('.slick-cloned').removeAttr('data-fancybox');
$().fancybox({
 selector: selector
});


$('[data-fancybox="gallery"]').fancybox({
 loop: true,
 autoFocus: false,
 dots: true
});