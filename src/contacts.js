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
import { Email } from "./components/smtp";
const hamburgerMenu = new HamburgerMenu();
if (!mediaQueryList.matches) {
  hamburgerMenu.enableHamburgerMenu();
}

const contactsFormName = document.querySelector("#user-name-input");
const contactsFormPhone = document.querySelector("#phone-number-input");
const contactsFormSubmit = document.querySelector(".form__submit-button");
const contactsForm = document.querySelector(".form");

function handleContactsFormSubmit(evt) {
  evt.preventDefault();
  contactsFormSubmit.textContent = "Отправка";
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "brovan@gmail.com",
    Password: "815DBF0EB5A96D942173188498531472E32C",
    To: "loft@adornos.ru",
    From: "brovan@gmail.com",
    Subject: `Заявка на обратный звонок от пользователя ${contactsFormName.value}`,
    Body: `Отправлена заявка на обратный звонок от пользователя ${contactsFormName.value} Телефонный номер - ${contactsFormPhone.value}`,
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
const formValidator = new FormValidator(validationValues, contactsForm);
formValidator.clearValidation();
formValidator.enableValidation();
