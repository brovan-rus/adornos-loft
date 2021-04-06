import {hamburger, imagesURLList, mobileMenu, bookingButtonIntro, bookingButtons, introText} from '../components/constants.js';
import Popup from '../components/popup.js';

const popupWithFeachureCardMarkup = document.querySelector('.popup_content_feachure-card');
const feachureCardPopupTitle = popupWithFeachureCardMarkup.querySelector('.popup__title');
const feachureCardPopupImage = popupWithFeachureCardMarkup.querySelector('.popup__image');
const feachureCardPopupText = popupWithFeachureCardMarkup.querySelector('.popup__text');

const popupWithImageMarkup = document.querySelector('.popup_content_photo');
const popupImage = popupWithImageMarkup.querySelector('.popup__photo');

const mediaQueryList = window.matchMedia("only screen and (min-width: 649px");
console.log(mediaQueryList);

const galleryButton = document.querySelector('.gallery__button');



const popupWithForm = new Popup('.popup_content_booking-form');
popupWithForm.setEventListeners();

const popupWithImage = new Popup ('.popup_content_photo');
popupWithImage.setEventListeners();

const popupWithFeachureCard = new Popup('.popup_content_feachure-card');
popupWithFeachureCard.setEventListeners();


const feachureCardImages = document.querySelectorAll('.card__image');
console.log(feachureCardImages);
Array.from(feachureCardImages).forEach((element) => {
  element.addEventListener('click', handleFeachurePopupOpen)});

function handleFeachurePopupOpen(evt) {
  const currentCardTitle = evt.path[1].querySelector('.card__title').textContent;
  const currentCardText = evt.path[1].querySelector('.card__text').textContent;
  const currentCardImageSrc = evt.path[1].querySelector('.card__image').src;
  feachureCardPopupTitle.textContent = currentCardTitle;
  feachureCardPopupText.textContent = currentCardText;
  feachureCardPopupImage.src = currentCardImageSrc;
  feachureCardPopupImage.alt = currentCardTitle
  popupWithFeachureCard.open();
}


hamburger.addEventListener('click', handleHamburgerMenu);


Array.from(bookingButtons).forEach((element) => {
  element.addEventListener('click', handleOpenPopupWithForm);
})

function handleHamburgerMenu() {
  hamburger.classList.toggle('hamburger_active');
  mobileMenu.classList.toggle('nav_device_mobile_active');
}

function handleOpenPopupWithForm() {
  popupWithForm.open();
}

function makeGalleryItem(url, title='Интерьер лофта Адорнос'){
  const galleryItem = document.createElement('img');
  galleryItem.src = url;
  galleryItem.alt = title;
  galleryItem.classList.add('gallery__image')
  galleryItem.addEventListener('click', handleOpenPopupWithImage);
  return galleryItem;
}

function handleOpenPopupWithImage(evt) {
  popupImage.src = evt.target.src;
  popupWithImage.open();
}

const gallerySection = document.querySelector('.gallery');
let clickCounter = 0;

if (mediaQueryList.matches) {
  imagesURLList.forEach((element) => {
    gallerySection.append(makeGalleryItem(element));
  })}
else {
  addPartOfGallery(clickCounter)
  }


function addPartOfGallery(clickCounter){
  let currentGalleryLength = 2;
  let galleryImagesAdded = 0;
  if (clickCounter > 0) {
    currentGalleryLength = ((clickCounter + 1) * 3) - 1;
    galleryImagesAdded = clickCounter * 3;
  }
  for (let i = galleryImagesAdded; i <= currentGalleryLength; i++) {
    gallerySection.append(makeGalleryItem(imagesURLList[i]));
  }
}

galleryButton.addEventListener('click', handleGalleryButton);

function handleGalleryButton() {
  if ((clickCounter + 2) * 3 < imagesURLList.length) {
    clickCounter++;
    addPartOfGallery(clickCounter);}

    else if ((clickCounter + 2) * 3 >= imagesURLList.length) {
    clickCounter++;
    addPartOfGallery(clickCounter);
    galleryButton.classList.add('gallery__button_inactive');
  }
}


console.log(makeGalleryItem(imagesURLList[1]));

bookingButtonIntro.addEventListener('mouseover', () => Array.from(introText).forEach((element) => {
  element.setAttribute('style', 'color:transparent');
}))

bookingButtonIntro.addEventListener('mouseout', () => Array.from(introText).forEach((element) => {
  element.removeAttribute('style', 'color:transparent');
}))
