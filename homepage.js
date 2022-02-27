// slideshow

function showSlides(n) {
	let i;
	let slides = document.querySelectorAll('.main-slideshow-media');
	let dots = document.querySelectorAll('.dot');
	if (n > slides.length) {
		console.log(slides.length);
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace('active', '');
	}
	slides[slideIndex - 1].style.display = 'block';
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	let video = document.querySelector(`#video${slideIndex}`);
	video.pause();
	showSlides((slideIndex += n));
}

function currentSlide(n) {
	showSlides((slideIndex = n));
}

// subject buttons
buttonsColumn = document.querySelectorAll('.button-label');
buttons = document.querySelectorAll('#button');
buttonPs = document.querySelectorAll('#button-p');

// for (let button of buttons) {
// 	for (let buttonP of buttonPs) {
// 		button.addEventListener('mouseover', function () {
// 			buttonP.style.color = 'white';
// 		});
// 		button.addEventListener('mouseout', function () {
// 			buttonP.style.color = 'black';
// 		});
// 	}
// }
