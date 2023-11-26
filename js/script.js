$(document).ready(function() {
	$('.menu-burger__header').click(function(event){
                $('menu-burger__header,.nav-bottom').toggleClass('active');
	});
});

new Swiper('.swiper-2-container', {
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },  

  spaceBetween: 20,

  centeredSlides: true,

  loop:true,

  touchRatio:0.4,

  breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is <= 480px
    960: {
      slidesPerView: 2.5,
    },
    // when window width is <= 640px
    1401: {
      slidesPerView: 3,
    }
  }
  
});