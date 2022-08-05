$(document).ready(function () {
   $('.carousel__inner').slick({
      speed: 1200,
      /* adaptiveHeight: true, */

      prevArrow: ' <button type="button" class="slick-prev"><img src="icons/section_4/arrow_l.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/section_4/arrow_r.svg"></button>',
      responsive: [
         {
            breakpoint: 768,
            settings: {
               dots: true,
               arrows: false
            }
         }
      ]
   });
});