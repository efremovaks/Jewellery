// SLIDER

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

var swiper = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
