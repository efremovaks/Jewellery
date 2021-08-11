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
