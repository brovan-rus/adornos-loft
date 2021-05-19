import "./pages/index.css";
const mediaQueryList = window.matchMedia("only screen and (min-width: 649px)");
// Изначальные значения для настройки валидации форм
const validationValues = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: "form__submit-button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

// Импортируем класс чата и включаем его при в мобильной версии
import Chat from "./components/Chat.js";
const chat = new Chat();
if (!mediaQueryList.matches) {
  chat.enableChat();
}

// Импортируем класс гамбургер меню и включаем его в мобильной версии
import HamburgerMenu from "./components/Hamburger.js";
const hamburgerMenu = new HamburgerMenu();
if (!mediaQueryList.matches) {
  hamburgerMenu.enableHamburgerMenu();
}

const contactsFormName = document.querySelector("#user-name-input");
const contactsFormPhone = document.querySelector("#phone-number-input");
const contactsFormSubmit = document.querySelector(".form__submit-button");
const contactsForm = document.querySelector(".form");
const phoneMail = "template_iwsoimp";
const gmail = "service_l39504m";
emailjs.init("user_jPVRgLVLaYU3upvPx5EuS");

function handleContactsFormSubmit(evt) {
  evt.preventDefault();
  contactsFormSubmit.textContent = "Отправка";
  emailjs
    .send(gmail, phoneMail, {
      name: contactsFormName.value,
      phone: contactsFormPhone.value,
    })
    .then((message) => {
      contactsFormSubmit.textContent = "Мы свяжемся с вами в ближайшее время!";
    })
    .catch((message) => {
      contactsFormSubmit.textContent = "Произошла ошибка при отправке формы...";
    })
    .finally(() => {
      evt.target.reset();
      setTimeout(() => {
        contactsFormSubmit.textContent = "Обратный звонок";
        formValidator.clearValidation();
      }, 2000);
    });
}

contactsForm.addEventListener("submit", handleContactsFormSubmit);

import FormValidator from "./components/formValidator";
import emailjs from "emailjs-com";
const formValidator = new FormValidator(validationValues, contactsForm);
formValidator.clearValidation();
formValidator.enableValidation();
