// SLIDER MAIN

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';


var swiper = new Swiper('.slider-swiper', {
  loop: true,
  loopFillGroupWithBlank: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 15,
      slidesPerGroup: 2,
      pagination: {
        type: 'fraction',
      },
    },
    550: {
      slidesPerView: 3,
      spaceBetween: 15,
      slidesPerGroup: 3,
      pagination: {
        type: 'fraction',
      },
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
      pagination: {
        type: 'bullets',
      },
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
      slidesPerGroup: 4,
      pagination: {
        type: 'bullets',
      },
    },
    1210: {
      slidesPerView: 4,
      spaceBetween: 50,
      slidesPerGroup: 4,
      pagination: {
        type: 'bullets',
      },
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
