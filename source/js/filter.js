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
