$(document).ready(function() {
  $('.story__slider').slick({
    slidesToShow: 1,
    nextArrow: '<button class="story__next-button">\
        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">\
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9393 7.66672L8.803 1.53039L9.86366 0.469727L17.0607 7.66672L9.86366 14.8637L8.803 13.8031L14.9393 7.66672Z" fill="white"/>\
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.31134e-07 6.91672L16 6.91672V8.41672L0 8.41672L1.31134e-07 6.91672Z" fill="white"/>\
        </svg>\
      </button>',
    prevArrow: '<button class="story__prev-button">\
        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">\
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.06067 7.66672L9.197 1.53039L8.13634 0.469727L0.939346 7.66672L8.13634 14.8637L9.197 13.8031L3.06067 7.66672Z" fill="white"/>\
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18 6.91672L2.00001 6.91672L2.00001 8.41672L18 8.41672V6.91672Z" fill="white"/>\
        </svg>\
      </button>',
    appendArrows: $('.story__slider-arrows-container'),
    dots: true,
    draggable: false,
    loop: true,
    dotsClass: "story__dots"
  })
})


$('.story__thumbnail, .story__play-button').click(function() {
  $(this).siblings('.story__video').show()
  $(this).hide()
  $(this).siblings('.story__thumbnail, .story__play-button').hide()
})