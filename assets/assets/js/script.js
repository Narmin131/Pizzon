


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



// const one =document.querySelector('.one');
// const slider = document.querySelector('.van')
// function Salam(){
//     if(slider.classList.contains('swiper-slide-duplicate-active')){
//         one.classList.add('leftt');
//     }
//     else{
//         console.log('asdk');
//     }
// }
// Salam();

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



const swiper1 = new Swiper('.swiper-1', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
  
  });