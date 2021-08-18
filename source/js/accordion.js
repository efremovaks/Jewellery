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
