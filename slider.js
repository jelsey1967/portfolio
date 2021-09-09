// slider start
let sliderItems = [
	'img/icon/html.png',
	'img/icon/css.png',
	'img/icon/vue.png',
	'img/icon/scss.png',
	'img/icon/figma.png',
	'img/icon/git.png',
	'img/icon/js.png',
];

let counter = 0;

let btnPrev = document.querySelector('.slider__prev');
let btnNext = document.querySelector('.slider__next');

let slidePrev = document.querySelector('.slider__prev-slide');
let slideMain = document.querySelector('.slider__main-slide');
let slideNext = document.querySelector('.slider__next-slide');

btnPrev.addEventListener("click", function(){
	counter--;

	if (counter < 0){
		counter = sliderItems.length - 1;
		slideNext.src = sliderItems[0];
		slidePrev.src = sliderItems[sliderItems.length - 2];
	} else if (counter == 0){
		slidePrev.src = sliderItems[sliderItems.length - 1];
	} else {
		slidePrev.src = sliderItems[counter - 1];
		slideNext.src = sliderItems[counter + 1];
	}
	
	slideMain.src = sliderItems[counter];

	console.log(counter);
});

btnNext.addEventListener("click", function(){

	counter++;

	if (counter == sliderItems.length - 1){
		slideNext.src = sliderItems[0];
	} else if (counter == sliderItems.length){
		counter = 0;
		slidePrev.src = sliderItems[sliderItems.length - 1];
		slideNext.src = sliderItems[counter + 1];
	} else {
		slidePrev.src = sliderItems[counter - 1];
		slideNext.src = sliderItems[counter + 1];
	}

	slideMain.src = sliderItems[counter];

	console.log(counter);
});
// slider end