function toggle(el) {
	if (el.className !== 'init-profile') {
		el.src = './assets/images/profilepic.png';
		el.className = 'init-profile';
	} else if (el.className === 'init-profile') {
		el.src = './assets/images/profilepic.png';
		el.className = 'clicked-profile';
	}
	return false;
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName('main-slideshow-media');
	console.log(slides);
	let dots = document.getElementsByClassName('dot');
	console.log(dots);
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
	console.log(slideIndex - 1);
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	let video = document.getElementById(`video${slideIndex}`);
	video.pause();
	showSlides((slideIndex += n));
}

function currentSlide(n) {
	showSlides((slideIndex = n));
}
