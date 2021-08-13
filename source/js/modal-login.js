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
