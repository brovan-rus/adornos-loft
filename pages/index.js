const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.nav_device_mobile')
hamburger.addEventListener('click', handleHamburgerMenu);

function handleHamburgerMenu() {
  hamburger.classList.toggle('hamburger_active');
  mobileMenu.classList.toggle('nav_device_mobile_active');
}

const bookingButtonIntro = document.querySelector('.booking-button_place_intro')
const introText = document.querySelectorAll('.intro_content_text');
bookingButtonIntro.addEventListener('mouseover', () => Array.from(introText).forEach((element) => {
  element.setAttribute('style', 'color:transparent');
  console.log('down');
}))

bookingButtonIntro.addEventListener('mouseout', () => Array.from(introText).forEach((element) => {
  element.removeAttribute('style', 'color:transparent');
  console.log('down');
}))
console.log(bookingButtonIntro);
