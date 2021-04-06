// Список адресо картинок
export const imagesURLList = ['./images/adornos1.jpg', './images/adornos2.jpg', './images/adornos3.jpg', './images/adornos4.jpg', './images/adornos5.jpg', './images/adornos6.jpg', './images/adornos7.jpg', './images/adornos8.jpg', './images/adornos9.jpg', './images/adornos10.jpg', './images/adornos11.jpg', './images/adornos12.jpg']

// Изначальные значения для настройки валидации форм
export const validationValues = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
};

// Объявление селекторов документа
export const bookingForm = document.forms.booking;
export const gallerySection = document.querySelector('.gallery');
export const popupWithFeachureCardMarkup = document.querySelector('.popup_content_feachure-card');
export const feachureCardPopupTitle = popupWithFeachureCardMarkup.querySelector('.popup__title');
export const feachureCardPopupImage = popupWithFeachureCardMarkup.querySelector('.popup__image');
export const feachureCardPopupText = popupWithFeachureCardMarkup.querySelector('.popup__text');
export const popupWithImageMarkup = document.querySelector('.popup_content_photo');
export const popupImage = popupWithImageMarkup.querySelector('.popup__photo');
export const feachureCardImages = document.querySelectorAll('.card__image');

// Объявляем элементы документа
export const galleryButton = document.querySelector('.gallery__button');

// Объявление кнопки для закрытия попапа
export const closeKey = 'Escape';
export const hamburger = document.querySelector('.hamburger');
export const mobileMenu = document.querySelector('.nav_device_mobile')
export const bookingButtonIntro = document.querySelector('.booking-button_place_intro')
export const introText = document.querySelectorAll('.intro_content_text');
export const bookingButtons = document.querySelectorAll('.booking-button');

// Запрос на разрешение для обеспечения функционирования частичного заполнения галереи изображениями
export const mediaQueryList = window.matchMedia("only screen and (min-width: 649px");
