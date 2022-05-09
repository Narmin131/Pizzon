// OWL SLIDER
$(function(){
const nexticon = '<i class="fa-solid fa-chevron-right"></i>'
const previcon = '<i class="fa-solid fa-chevron-left"></i>'
$('.home-slider-1').owlCarousel({
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




$('.home-slider').owlCarousel({
    loop:true,
    margin:10,
    items:1,
    responsiveClass:true,
    nav:false,
  autoplay:true,
  autoplayTimeout:3000,
})

// preloader
$(window).on('load',function(){
    $('.preloader').delay(2000).fadeOut(500);
});





// MENU PRODUCTS
$('.btnProduct').click(function(){
    $('.btnProduct').removeClass('active');
    $(this).addClass('active');
})

$('.all').click(function(){
    $('.iki').removeClass('app');
    $('.bir').removeClass('app');
    $('.uc').removeClass('app');
    $('.dord').removeClass('app');
    $('.bes').removeClass('app');
    $('.alti').removeClass('app');
    $('.yeddi').removeClass('app');
    $('.sekkiz').removeClass('app');
})

$('.drink').click(function(){
    $('.bir').addClass('app');
    $('.uc').addClass('app');
    $('.dord').addClass('app');
    $('.bes').addClass('app');
    $('.alti').addClass('app');
    $('.yeddi').addClass('app');
    $('.sekkiz').addClass('app');
    $('.iki').removeClass('app');

})

$('.salad').click(function(){
    $('.bir').addClass('app');
    $('.iki').addClass('app');
    $('.dord').addClass('app');
    $('.bes').addClass('app');
    $('.alti').addClass('app');
    $('.yeddi').addClass('app');
    $('.uc').removeClass('app');
    $('.sekkiz').addClass('app');
})

$('.pasta').click(function(){
    $('.bir').addClass('app');
    $('.iki').addClass('app');
    $('.uc').addClass('app');
    $('.dord').removeClass('app');
    $('.bes').addClass('app');
    $('.alti').addClass('app');
    $('.yeddi').addClass('app');
    $('.sekkiz').addClass('app');
})

$('.burger').click(function(){
    $('.bir').addClass('app');
    $('.iki').addClass('app');
    $('.dord').removeClass('app');
    $('.bes').addClass('app');
    $('.alti').addClass('app');
    $('.yeddi').removeClass('app');
    $('.uc').removeClass('app');
    $('.sekkiz').removeClass('app');
})

$('.desert').click(function(){
    $('.iki').removeClass('app');
    $('.bir').addClass('app');
    $('.uc').addClass('app');
    $('.dord').addClass('app');
    $('.bes').removeClass('app');
    $('.alti').addClass('app');
    $('.yeddi').addClass('app');
    $('.sekkiz').addClass('app');
})

$('.pizza').click(function(){
    $('.iki').removeClass('app');
    $('.bir').removeClass('app');
    $('.uc').addClass('app');
    $('.dord').removeClass('app');
    $('.bes').addClass('app');
    $('.alti').addClass('app');
    $('.yeddi').addClass('app');
    $('.sekkiz').addClass('app');
    
})

// SWIPER SLIDER

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
   
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
  });


// 

