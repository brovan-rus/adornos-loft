export default class HamburgerMenu {
  constructor() {
    this._hamburger = document.querySelector(".hamburger");
    this._mobileMenu = document.querySelector(".nav_device_mobile");
    this._handleHamburgerMenu = this._handleHamburgerMenu.bind(this);
  }
  _handleHamburgerMenu() {
    this._hamburger.classList.toggle("hamburger_active");
    this._mobileMenu.classList.toggle("nav_device_mobile_active");
  }
  enableHamburgerMenu() {
    this._hamburger.addEventListener("click", this._handleHamburgerMenu);
  }
}
