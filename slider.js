// slider start
let sliderItems = [
	`<img src="img/icon/html.png"><p>HTML5</p>`,
	`<img src="img/icon/css.png"><p>CSS3</p>`,
	`<img src="img/icon/js.png"><p>JavaScript</p>`,
	`<img src="img/icon/scss.png"><p>SCSS</p>`,
	`<img src="img/icon/git.png"><p>Git</p>`,
	`<img src="img/icon/figma.png"><p>Figma</p>`,
];

let counter = 0;

let btnPrev = document.querySelector('.slider__prev');
let btnNext = document.querySelector('.slider__next');

let slidePrev = document.querySelector('.slider__prev-slide');
let slideMain = document.querySelector('.slider__main-slide');
let slideNext = document.querySelector('.slider__next-slide');

slidePrev.innerHTML = sliderItems[sliderItems.length - 1];
slideMain.innerHTML = sliderItems[0];
slideNext.innerHTML = sliderItems[1];

btnPrev.addEventListener("click", function(){
	counter--;

	if (counter < 0){
		counter = sliderItems.length - 1;
		slideNext.innerHTML = sliderItems[0];
		slidePrev.innerHTML = sliderItems[sliderItems.length - 2];
	} else if (counter == 0){
		slidePrev.innerHTML = sliderItems[sliderItems.length - 1];
	} else {
		slidePrev.innerHTML = sliderItems[counter - 1];
		slideNext.innerHTML = sliderItems[counter + 1];
	}
	
	slideMain.innerHTML = sliderItems[counter];
});

btnNext.addEventListener("click", function(){

	counter++;

	if (counter == sliderItems.length - 1){
		slideNext.innerHTML = sliderItems[0];
	} else if (counter == sliderItems.length){
		counter = 0;
		slidePrev.innerHTML = sliderItems[sliderItems.length - 1];
		slideNext.innerHTML = sliderItems[counter + 1];
	} else {
		slidePrev.innerHTML = sliderItems[counter - 1];
		slideNext.innerHTML = sliderItems[counter + 1];
	}

	slideMain.innerHTML = sliderItems[counter];
});
// slider end