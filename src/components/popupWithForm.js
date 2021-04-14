import Popup from "./popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submit) {
    super(popupSelector);
    this._submit = submit;
    this._popupForm = document
      .querySelector(popupSelector)
      .querySelector(".form");
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._sendButton = this._popupForm.querySelector(".form__submit-button");
    this._sendButtonText = this._sendButton.textContent;
    this.close = this.close.bind(this);
    this.setEventListeners();
  }

  form() {
    return this._popupForm;
  }

  _getInputValues(form) {
    const values = Array.from(form.querySelectorAll(".form__input")).map(
      ({ value }) => {
        return value;
      }
    );
    const keys = Array.from(form.querySelectorAll(".form__input")).map(
      ({ name }) => {
        return name;
      }
    );
    const inputValues = {};
    keys.forEach((element, i) => {
      inputValues[element] = values[i];
    });
    return inputValues;
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();
    const inputValues = this._getInputValues(this._popupForm);
    this._submit(inputValues);
    setTimeout(this.close, 2000);
  }

  close() {
    this._popupForm.reset();
    super.close();
  }

  changeButtonText(buttonText) {
    this._sendButton.textContent = buttonText;
  }

  toggleButtonState() {
    if (this._sendButtonText === this._sendButton.textContent) {
      this._sendButton.textContent = "Отправка...";
    } else this._sendButton.textContent = this._sendButtonText;
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", this._handleFormSubmit);
    super.setEventListeners();
  }
}
