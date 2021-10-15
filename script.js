$(document).ready(function () {
// burger start
	$(".header__burger").click(() => {
		$(".header__nav").toggleClass('active');
		$(".header__burger").toggleClass('active');
		$("body").toggleClass('lock');
	});
// burger end

// contact start
	$(".gmail-link").click(() => {
		$(".gmail").toggleClass('gmail-active');
	});
// contact end

// links start
	document.querySelectorAll('.header__link').forEach((element) => {
		element.addEventListener('click', function () {
			$('.header__nav').removeClass('active');
			$('.header__burger').removeClass('active');
			$('body').removeClass('lock');
		});
	});
// links end

	$(window).scroll(() => {
		let scroll = $(window).scrollTop();

		if (scroll >= 80) {
			$(".header").addClass("scrolled");
		} else {
			$(".header").removeClass("scrolled");
		}
	});

	if (window.pageYOffset > 80){
		$(".header").addClass("scrolled");
	};
	
});