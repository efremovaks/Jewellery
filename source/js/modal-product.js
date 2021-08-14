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
