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
buttons = document.querySelectorAll('.button-label');
button = buttons.querySelector('button');

$(document).ready(function () {
	$('button').hover(
		function () {
			$(this).siblings('p').addClass('subject-hover-text');
		},
		function () {
			$(this).siblings('p').removeClass('subject-hover-text');
		}
	);
});
