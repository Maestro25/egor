const nav = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');

const navSlide = () => {
	const burger = document.querySelector('.burger');
	

	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');

		burger.classList.toggle('open');
	});

}

const navClose = () => {
	navLinks.forEach((link) => {
		link.addEventListener('click', () => {
			nav.classList.toggle('nav-active');
		});
	});
}

navSlide();
navClose();