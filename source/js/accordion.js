'use strict';


// АККОРДЕОН

var accordionItems = document.querySelectorAll('.accordion__item');


accordionItems.forEach(function (item) {
  if (item.classList.contains('accordion__no-js')) {
    item.classList.remove('accordion__no-js');
  }
});

accordionItems.forEach(function (item) {
  item.addEventListener('click', function () {
    if (item) {
      item.classList.toggle('accordion__item-show');
    }
  });
});
