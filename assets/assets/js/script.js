


$(function(){
const nexticon = '<i class="fa-solid fa-chevron-right"></i>'
const previcon = '<i class="fa-solid fa-chevron-left"></i>'
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:25,
    nav:true,
    navText:[previcon,nexticon],
    dots:false,
    items:4,
    autoplay:true,
    autoplayTimeout:4000,
    responsive:{
        0:{
            items:2,
            nav:true,
            loop:true,
           
        },
        600:{
            items:3,
            nav:true,
            loop:true,
        },
        1000:{
            items:4,
            nav:true,
            loop:true,
        }
    }
});


});


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // autoplay:true,
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });



