'use strict';

// menu

// var body = document.querySelector('.page-body');
var navMain = document.querySelector('.main-nav');
var navButton = document.querySelector('.main-nav__menu-button');
var navItem = document.querySelectorAll('.main-nav__list');

if (navMain.classList.contains('main-nav--nojs')) {
  navMain.classList.remove('main-nav--nojs');
}

navButton.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--open');
    // body.style.overflow = 'hidden';

  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--open');
    // body.style.overflow = 'auto';
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    if (navMain.classList.contains('main-nav--open')) {
      evt.preventDefault();
      navMain.classList.remove('main-nav--open');
      navMain.classList.add('main-nav--closed');
      // body.style.overflow = 'auto';
    }
  }
});

for (var i = 0; i < navItem.length; i++) {

  navItem[i].addEventListener('click', function () {

    if (navMain.classList.contains('main-nav--open')) {
      navMain.classList.remove('main-nav--open');
      navMain.classList.add('main-nav--closed');
      // body.style.overflow = 'auto';
    }
  });
}

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
