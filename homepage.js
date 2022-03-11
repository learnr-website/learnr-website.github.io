// slideshow

function showSlides(n) {
	let i;
	let slides = document.querySelectorAll('.main-slideshow-media');
	console.log(slides);
	let dots = document.querySelectorAll('.dot');
	if (n > slides.length) {
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

const buttonList = [
	{ desc: 'Physics', imgSrc: './assets/svgs/physics.svg' },
	{ desc: 'Health', imgSrc: './assets/svgs/health.svg' },
	{ desc: 'French', imgSrc: './assets/svgs/french.svg' },
	{ desc: 'Finances', imgSrc: './assets/svgs/business.svg' },
	{ desc: 'College Apps', imgSrc: './assets/svgs/college.svg' },
	{ desc: 'Coding', imgSrc: './assets/svgs/coding.svg' },
	{ desc: 'Geography', imgSrc: './assets/svgs/geography.svg' },
	{ desc: 'Mathematics', imgSrc: './assets/svgs/math.svg' },
	{ desc: 'Chemistry', imgSrc: './assets/svgs/chemistry.svg' },
	{ desc: 'Biology', imgSrc: './assets/svgs/bio.svg' },
	{ desc: 'Chinese', imgSrc: './assets/svgs/chinese.svg' },
	{ desc: 'Video Editing', imgSrc: './assets/svgs/video-edit.svg' },
	{ desc: 'Photoshop', imgSrc: './assets/svgs/photoshop.svg' },
	{ desc: 'Physics', imgSrc: './assets/svgs/physics.svg' },
	{ desc: 'Health', imgSrc: './assets/svgs/health.svg' },
	{ desc: 'French', imgSrc: './assets/svgs/french.svg' },
	{ desc: 'Finances', imgSrc: './assets/svgs/business.svg' },
	{ desc: 'College Apps', imgSrc: './assets/svgs/college.svg' },
	{ desc: 'Coding', imgSrc: './assets/svgs/coding.svg' },
	{ desc: 'Geography', imgSrc: './assets/svgs/geography.svg' },
	{ desc: 'Mathematics', imgSrc: './assets/svgs/math.svg' },
	{ desc: 'Chemistry', imgSrc: './assets/svgs/chemistry.svg' },
	{ desc: 'Biology', imgSrc: './assets/svgs/bio.svg' },
	{ desc: 'Chinese', imgSrc: './assets/svgs/chinese.svg' },
	{ desc: 'Video Editing', imgSrc: './assets/svgs/video-edit.svg' },
	{ desc: 'Photoshop', imgSrc: './assets/svgs/photoshop.svg' },
];

const makeButtons = () => {
	document.querySelector('.subject-buttons').textContent = '';

	for (button of buttonList) {
		const btnDiv = document.createElement('div');
		const btn = document.createElement('button');
		const btnDesc = document.createElement('p');
		const btnImg = document.createElement('img');

		btnDiv.appendChild(btn);
		btnDiv.appendChild(btnDesc);
		btn.appendChild(btnImg);

		btnDiv.classList.add('button-label');
		btn.classList.add('button-bubble');
		btnDesc.classList.add('button-p');
		btnImg.classList.add('button-img');

		btnImg.src = button.imgSrc;
		btnDesc.innerText = button.desc;
		document.querySelector('.subject-buttons').appendChild(btnDiv);
	}
};

makeButtons();
// subject button click

const subjectRight = document.querySelector('.subject-arrow-right');
const subjectLeft = document.querySelector('.subject-arrow-left');

subjectRight.addEventListener('mouseover', function () {
	subjectRight.classList.add('subject-arrow-hovered');
	subjectRight.addEventListener('mouseout', function () {
		subjectRight.classList.remove('subject-arrow-hovered');
	});
});

subjectLeft.addEventListener('mouseover', function () {
	subjectLeft.classList.add('subject-arrow-hovered');
	subjectLeft.addEventListener('mouseout', function () {
		subjectLeft.classList.remove('subject-arrow-hovered');
	});
});

subjectRight.addEventListener('click', function () {
	document.querySelector('.subject-buttons').scrollLeft += 615;
});

subjectLeft.addEventListener('click', function () {
	document.querySelector('.subject-buttons').scrollLeft -= 615;
});
