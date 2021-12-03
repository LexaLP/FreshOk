$(function () {

 $('.top-slider__inner').slick({
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"><img src="../images/slider_bg/arrow-left.svg" alt="left"></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="../images/slider_bg/arrow-right.svg" alt="right"></button>',
  fade: true,
  infinite: false
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
  size = 105 // кол-во символов  
 endCharacter = '...'; // окончание  

 cropElement.forEach(el => {
  let text = el.innerHTML;

  if (el.innerHTML.length > size) {
   text = text.substr(0, size);
   el.innerHTML = text + endCharacter;
  }
 });

})
