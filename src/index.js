import {
  hamburger,
  mediaQueryList,
  feachureCardImages,
  galleryButton,
  feachureCardPopupImage,
  popupImage,
  feachureCardPopupText,
  feachureCardPopupTitle,
  bookingForm,
  gallerySection,
  imagesURLList,
  validationValues,
  mobileMenu,
  bookingButtonIntro,
  bookingButtons,
  introText,
} from "./components/constants.js";
import Popup from "./components/popup.js";
import FormValidator from "./components/formValidator.js";
import "./pages/index.css";
//import { Viewer } from "photo-sphere-viewer";
// import "photo-sphere-viewer/dist/photo-sphere-viewer.css";
// import Page from "./components/Page.js";

// const mainPage = new Page([".intro", ".gallery", ".feachures", ".ending"]);
// const tourPage = new Page(".tour");
// const tourLink = document.querySelector("#link3");
// tourLink.addEventListener("click", openTourPage);
//
// function openTourPage() {
//   mainPage.hideContent();
//   tourPage.showContent();
// }
//
// const viewer = new Viewer({
//   container: tourSection,
//   panorama: panorama.href,
// });

// Объявление счётчика кликов на кнопку в галерею.
let clickCounter = 0;

// Экземляр класса для валидации формы
const bookingFormValidator = new FormValidator(validationValues, bookingForm);
bookingFormValidator.enableValidation();

// Создаём экзмемляры классов с модальными окнами
const popupWithForm = new Popup(".popup_content_booking-form");
popupWithForm.setEventListeners();
const popupWithImage = new Popup(".popup_content_photo");
popupWithImage.setEventListeners();
const popupWithFeachureCard = new Popup(".popup_content_feachure-card");
popupWithFeachureCard.setEventListeners();

function handleFeachurePopupOpen(evt) {
  const currentCardTitle = evt.path[1].querySelector(".card__title")
    .textContent;
  const currentCardText = evt.path[1].querySelector(".card__text").textContent;
  const currentCardImageSrc = evt.path[1].querySelector(".card__image").src;
  feachureCardPopupTitle.textContent = currentCardTitle;
  feachureCardPopupText.textContent = currentCardText;
  feachureCardPopupImage.src = currentCardImageSrc;
  feachureCardPopupImage.alt = currentCardTitle;
  popupWithFeachureCard.open();
}

function handleHamburgerMenu() {
  hamburger.classList.toggle("hamburger_active");
  mobileMenu.classList.toggle("nav_device_mobile_active");
}

function handleOpenPopupWithForm() {
  bookingForm.userName.value = "";
  bookingForm.phoneNumber.value = "";
  bookingForm.bookingDate.value = 0;
  bookingFormValidator.clearValidation();
  popupWithForm.open();
}

function handleSubmitForm(evt) {
  evt.preventDefault();
  popupWithForm.close();
}

function makeGalleryItem(url, title = "Интерьер лофта Адорнос") {
  const galleryItem = document.createElement("img");
  galleryItem.src = url;
  galleryItem.alt = title;
  galleryItem.classList.add("gallery__image");
  galleryItem.addEventListener("click", handleOpenPopupWithImage);
  return galleryItem;
}

function handleOpenPopupWithImage(evt) {
  popupImage.src = evt.target.src;
  popupWithImage.open();
}

function addPartOfGallery(clickCounter) {
  let currentGalleryLength = 2;
  let galleryImagesAdded = 0;
  if (clickCounter > 0) {
    currentGalleryLength = (clickCounter + 1) * 3 - 1;
    galleryImagesAdded = clickCounter * 3;
  }
  for (let i = galleryImagesAdded; i <= currentGalleryLength; i++) {
    gallerySection.append(makeGalleryItem(imagesURLList[i]));
  }
}

function handleGalleryButton() {
  if ((clickCounter + 2) * 3 < imagesURLList.length) {
    clickCounter++;
    addPartOfGallery(clickCounter);
  } else if ((clickCounter + 2) * 3 >= imagesURLList.length) {
    clickCounter++;
    addPartOfGallery(clickCounter);
    galleryButton.classList.add("gallery__button_inactive");
  }
}

//Добавление слушателей
galleryButton.addEventListener("click", handleGalleryButton);
hamburger.addEventListener("click", handleHamburgerMenu);
Array.from(feachureCardImages).forEach((element) => {
  element.addEventListener("click", handleFeachurePopupOpen);
});
Array.from(bookingButtons).forEach((element) => {
  element.addEventListener("click", handleOpenPopupWithForm);
});
bookingForm.addEventListener("submit", handleSubmitForm);
// Убираем текст с видео при наведении на клавишу "Забронировать"
bookingButtonIntro.addEventListener("mouseover", () =>
  Array.from(introText).forEach((element) => {
    element.setAttribute("style", "color:transparent");
  })
);
bookingButtonIntro.addEventListener("mouseout", () =>
  Array.from(introText).forEach((element) => {
    element.removeAttribute("style", "color:transparent");
  })
);

// Заполнение галлереи картинками из массива
if (mediaQueryList.matches) {
  imagesURLList.forEach((element) => {
    gallerySection.append(makeGalleryItem(element));
  });
} else {
  addPartOfGallery(clickCounter);
}
