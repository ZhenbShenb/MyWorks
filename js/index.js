const iconMenu = document.querySelector('.burger__icon');
const menuBody = document.querySelector('.header__navigation');
const about = document.querySelector('.about');
const aboutCard = document.querySelector('.about__cards');
const slider = document.querySelector('.home__arrow--about');
const servCards = document.querySelector('.servicing__cards');
const servArrow = document.querySelector('.servicing__arrow--about');
const priceCard = document.querySelector('.pricing__cards');
const priceArrow = document.querySelector('.pricing__arrow--about');
const teamCard = document.querySelector('.team__cards');
const teamArrow = document.querySelector('.team__arrow--about');
const blogCard = document.querySelector('.blog__cards');
const blogArrow = document.querySelector('.blog__arrow--about');
const contactSocial = document.querySelector('.contact__social');
const contactForm = document.querySelector('.contact__form');
const contactArrow = document.querySelector('.home__arrow--contacts');
const btn1Trans = document.querySelector('.btn1');
const btn2Green = document.querySelector('.btn2');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}


if (slider) {
	slider.addEventListener("click", function (e) {
        about.classList.toggle('_active');
		aboutCard.classList.toggle('_active');
		slider.classList.toggle('_active');
	});
}

if (servArrow) {
	servArrow.addEventListener("click", function (e) {
		servCards.classList.toggle('_active');
		servArrow.classList.toggle('_active');
	});
}
if (priceArrow) {
	priceArrow.addEventListener("click", function (e) {
		priceCard.classList.toggle('_active');
		priceArrow.classList.toggle('_active');
	});
}
if (teamArrow) {
	teamArrow.addEventListener("click", function (e) {
		teamCard.classList.toggle('_active');
		teamArrow.classList.toggle('_active');
	});
}
if (blogArrow) {
	blogArrow.addEventListener("click", function (e) {
		blogCard.classList.toggle('_active');
		blogArrow.classList.toggle('_active');
	});
}
if (contactArrow) {
	contactArrow.addEventListener("click", function (e) {
		contactSocial.classList.toggle('_active');
		contactForm.classList.toggle('_active');
		contactArrow.classList.toggle('_active');
	});
}



btn1Trans.addEventListener('click', (e) => {
  // при клике на изначально прозрачную кнопку навешиваем класс
  e.target.classList.toggle('green');
  btn2Green.classList.toggle('transparent');
});

btn2Green.addEventListener('click', (e) => {
  // при клике на изначально зеленую кнопку навешиваем класс
  e.target.classList.toggle('transparent');
  btn2Green.classList.toggle('green');
});