const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.nav_device_mobile')
const bookingButtonIntro = document.querySelector('.booking-button_place_intro')
const introText = document.querySelectorAll('.intro_content_text');
const bookingButtons = document.querySelectorAll('.booking-button');
const popupWithForm = document.querySelector('.popup_content_booking-form')

hamburger.addEventListener('click', handleHamburgerMenu);

Array.from(bookingButtons).forEach((element) => {
  element.addEventListener('click', openPopupWithForm);
})

function handleHamburgerMenu() {
  hamburger.classList.toggle('hamburger_active');
  mobileMenu.classList.toggle('nav_device_mobile_active');
}

function openPopupWithForm() {
  console.log(popupWithForm);
  popupWithForm.classList.add('popup_opened');
}


bookingButtonIntro.addEventListener('mouseover', () => Array.from(introText).forEach((element) => {
  element.setAttribute('style', 'color:transparent');
}))

bookingButtonIntro.addEventListener('mouseout', () => Array.from(introText).forEach((element) => {
  element.removeAttribute('style', 'color:transparent');
}))
