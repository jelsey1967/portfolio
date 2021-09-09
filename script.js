// burger start
let burgerBtn = document.querySelector('.header__burger');
let headerNav = document.querySelector('.header__nav');
let body = document.querySelector('body');

burgerBtn.addEventListener('click', function () {
	headerNav.classList.toggle('active');
	burgerBtn.classList.toggle('active');
	body.classList.toggle('lock');
});
// burger end

// contact start
let linkGmail = document.querySelector('.gmail-link');
let textGmail = document.querySelector('.gmail');

linkGmail.addEventListener('click', function(){
	textGmail.classList.toggle('gmail-active');
});
// contact end

// links start
document.querySelectorAll('.header__link').forEach((element) => {
	element.addEventListener('click', function () {
		headerNav.classList.remove('active');
		burgerBtn.classList.remove('active');
		body.classList.remove('lock');
	});
});
// links end