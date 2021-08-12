'use strict';


// АККОРДЕОН

var accordionItems = document.querySelectorAll('.accordion__item');


accordionItems.forEach(function (item) {
  if (item.classList.contains('accordion__no-js')) {
    item.classList.remove('accordion__no-js');
  }
});


var closeOtherItems = function (currentIndex) {
  accordionItems.forEach(function (item, index) {
    if (index === currentIndex) {
      return;
    }
    item.classList.remove('accordion__item-show');
  });
};

accordionItems.forEach(function (item, index) {
  item.addEventListener('click', function () {
    if (item) {
      closeOtherItems(index);
      item.classList.toggle('accordion__item-show');
    }
  });
});

'use strict';

// Filter

var filter = document.querySelector('.catalog__filter');

if (filter) {
  var filterOpen = filter.querySelector('.catalog__filter-header');
  var filterClose = filter.querySelector('.catalog__filter-close');
}

if (filter) {

  if (filter.classList.contains('catalog__filter--nojs')) {
    filter.classList.remove('catalog__filter--nojs');
  }

  filterOpen.addEventListener('click', function () {
    if (filter.classList.contains('catalog__filter-closed')) {
      filter.classList.remove('catalog__filter-closed');
      filter.classList.add('catalog__filter-open');

    } else {
      filter.classList.add('catalog__filter-closed');
      filter.classList.remove('catalog__filter-open');
    }
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      if (filter.classList.contains('catalog__filter-open')) {
        evt.preventDefault();
        filter.classList.remove('catalog__filter-open');
        filter.classList.add('catalog__filter-closed');
      }
    }
  });

  filterClose.addEventListener('click', function () {
    if (filter.classList.contains('catalog__filter-closed')) {
      filter.classList.remove('catalog__filter-closed');
      filter.classList.add('catalog__filter-open');

    } else {
      filter.classList.add('catalog__filter-closed');
      filter.classList.remove('catalog__filter-open');
    }
  });
}

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
