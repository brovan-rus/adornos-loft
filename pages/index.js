const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger_active');
});

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
