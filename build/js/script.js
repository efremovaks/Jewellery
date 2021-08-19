'use strict';


// АККОРДЕОН

var accordionItems = document.querySelectorAll('.accordion__item');
var accordionHeader = document.querySelectorAll('.accordion__item-header');


if (accordionItems) {
  accordionItems.forEach(function (item) {
    if (item.classList.contains('accordion__no-js')) {
      item.classList.remove('accordion__no-js');
    }
  });


  var accordionItemsToggle = function (currentIndex) {
    accordionItems.forEach(function (item, index) {
      if (index === currentIndex) {
        item.classList.toggle('accordion__item-show');
        return;
      }
    });
  };

  accordionHeader.forEach(function (item, index) {
    item.addEventListener('click', function () {
      if (item) {
        accordionItemsToggle(index);
      }
    });
  });
}

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

var body = document.querySelector('.page-body');
var navMain = document.querySelector('.main-nav');
var navButton = document.querySelector('.main-nav__menu-button');
var navItem = document.querySelectorAll('.main-nav__list');

if (navMain.classList.contains('main-nav--nojs')) {
  navMain.classList.remove('main-nav--nojs');
}

if (navButton) {
  navButton.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--open');
      body.style.overflow = 'hidden';

    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--open');
      body.style.overflow = 'auto';
    }
  });
}

window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    if (navMain.classList.contains('main-nav--open')) {
      evt.preventDefault();
      navMain.classList.remove('main-nav--open');
      navMain.classList.add('main-nav--closed');
      body.style.overflow = 'auto';
    }
  }
});

for (var i = 0; i < navItem.length; i++) {

  navItem[i].addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--open')) {
      navMain.classList.remove('main-nav--open');
      navMain.classList.add('main-nav--closed');

      if (!navItem[i].classList.contains('popap-forever')) {
        body.style.overflow = 'auto';
      }
    }
  });
}

'use strict';

// LOGIN POPAP

var body = document.querySelector('.page-body');
var login = document.querySelector('.main-nav__login');
var modal = document.querySelector('.modal-login');
var modalClose = modal.querySelector('.modal-login__close');
var modalForm = modal.querySelector('form');
var formMail = modalForm.querySelector('input[name=Email]');
var formPass = modalForm.querySelector('input[name=Password]');

// eslint-disable-next-line no-unused-vars
var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

if (modal.classList.contains('modal-login--nojs')) {
  modal.classList.remove('modal-login--nojs');
}

if (login) {
  login.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add('modal-login__show');
    body.style.overflow = ('hidden');
    body.style.padding = ('0 17px 0 0');

    if (storage) {
      formMail.value = storage;
    } else {
      formMail.focus();
    }
  });
}

if (modalClose) {
  modalClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.remove('modal-login__show');
    body.style.overflow = 'auto';
    body.style.padding = ('0');
  });
}

document.addEventListener('click', function (evt) {
  var wrap = evt.target.classList.contains('modal-login__wrapper');
  if (!wrap) {
    return;
  }

  evt.preventDefault();
  document.querySelector('section.modal-login').classList.remove('modal-login__show');
  body.style.overflow = 'auto';
  body.style.padding = ('0');
});

window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    if (modal.classList.contains('modal-login__show')) {
      evt.preventDefault();
      modal.classList.remove('modal-login__show');
      body.style.overflow = 'auto';
      body.style.padding = ('0');
    }
  }
});

if (modalForm) {
  modalForm.addEventListener('submit', function (evt) {
    if (!formMail.value || !formPass.value) {
      evt.preventDefault();
    } else {
      localStorage.setItem('login', formMail.value);
      localStorage.setItem('login', formPass.value);
    }
  });
}

'use strict';

// PRODUCT POPAP

var body = document.querySelector('.page-body');
var addToCart = document.querySelector('.product-card__description-about-btn');
var modalProduct = document.querySelector('.modal-product');

if (modalProduct) {
  var modalProductClose = modalProduct.querySelector('.modal-product__close');


  if (modalProduct.classList.contains('modal-product--nojs')) {
    modalProduct.classList.remove('modal-product--nojs');
  }

  if (addToCart) {
    addToCart.addEventListener('click', function (evt) {
      evt.preventDefault();
      modalProduct.classList.add('modal-product__show');
      body.style.overflow = ('hidden');
      body.style.padding = ('0 17px 0 0');
    });
  }

  if (modalProductClose) {
    modalProductClose.addEventListener('click', function (evt) {
      evt.preventDefault();
      modalProduct.classList.remove('modal-product__show');
      body.style.overflow = 'auto';
      body.style.padding = ('0');
    });
  }

  document.addEventListener('click', function (evt) {
    var wrap = evt.target.classList.contains('modal-product__wrapper');
    if (!wrap) {
      return;
    }

    evt.preventDefault();
    document.querySelector('section.modal-product').classList.remove('modal-product__show');
    body.style.overflow = 'auto';
    body.style.padding = ('0');
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      if (modalProduct.classList.contains('modal-product__show')) {
        evt.preventDefault();
        modalProduct.classList.remove('modal-product__show');
        body.style.overflow = 'auto';
        body.style.padding = ('0');
      }
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
