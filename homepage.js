// slideshow

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dotOne = document.querySelector('#dot-one');
const dotTwo = document.querySelector('#dot-two');
const dotThree = document.querySelector('#dot-three');

prev.addEventListener('click', () => {
	plusSlides(-1);
});

next.addEventListener('click', () => {
	plusSlides(1);
});

dotOne.addEventListener('click', () => {
	currentSlide(1);
});

dotTwo.addEventListener('click', () => {
	currentSlide(2);
});

dotThree.addEventListener('click', () => {
	currentSlide(3);
});

function showSlides(n) {
	let i;
	let slides = document.querySelectorAll('.main-slideshow-media');
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
	{ desc: 'Video Editing', imgSrc: './assets/svgs/videoedit.svg' },
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
	{ desc: 'Video Editing', imgSrc: './assets/svgs/videoedit.svg' },
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

// posts of the day

const postInfo = {
	postTitles: {
		questions: [
			'What is on your mind?',
			'Why do echo chambers exist?',
			`Has the Big Bang theory been 100% scientifically proven yet?`,
		],
		polls: [
			'Are there more doors or wheels in the world?',
			'Are we heading towards a great depression?',
			`Should I get a doctorate's?`,
		],
		stories: ['random story here', 'random story there', 'random story again'],
	},
	postDescs: {
		questions: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia velit sapien, eget venenatis justo vulputate sit amet. Aenean enim leo, consequat quis vestibulum in, eleifend fermentum magna.',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia velit sapien, eget venenatis justo vulputate sit amet. Aenean enim leo, consequat quis vestibulum in, eleifend fermentum magna.',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia velit sapien, eget venenatis justo vulputate sit amet. Aenean enim leo, consequat quis ',
		],
		polls: [
			'If you counted them all, which one would have a bigger amount?',
			'Economy blah blah blah blah blah',
			'',
		],
		stories: [],
	},
	topReplies: {
		questions: [
			'insert the answer to what is on your mind',
			'insert the answer to why echo chambers exist',
			'insert the answer to the reason the big bang theory is accurate',
		],
		polls: ['insert interesting reply', 'insert interesting reply'],
		stories: [],
	},
	posterNames: {
		questions: ['LEARNERNAME', 'GENERICCARP', 'WHOSHALLNOTBENAMED'],
		polls: ['JOEDUDE333', 'ECONOMICSBAHA'],
		stories: [],
	},
	likeCounts: {
		questions: ['1.3K', '598', '789'],
		polls: ['2.4K', '1.5K'],
		stories: [],
	},
	commentCounts: {
		questions: ['2.2K', '991', '405'],
		polls: ['2.6K', '1.1K'],
		stories: [],
	},
	categoryNames: {
		questions: ['GENERAL KNOWLEDGE', 'POLITICS', 'PHYSICS'],
		polls: ['JUST FOR FUN', 'ECONOMICS'],
		stories: [],
	},
};

document.querySelector('.top-questions').innerHTML = '';

for (let i = 0; i < postInfo.postTitles.questions.length; i++) {
	const wrapper = document.createElement('div');
	const threadBox = document.createElement('div');
	const leftSide = document.createElement('div');
	const rightSide = document.createElement('div');
	const postTitle = document.createElement('h3');
	const postDesc = document.createElement('p');
	const topReply = document.createElement('p');
	const postButton = document.createElement('button');
	const posterName = document.createElement('h4');
	const likeCount = document.createElement('p');
	const commentCount = document.createElement('p');
	const categoryName = document.createElement('h3');

	wrapper.appendChild(threadBox);
	threadBox.appendChild(leftSide);
	threadBox.appendChild(rightSide);
	leftSide.appendChild(postTitle);
	leftSide.appendChild(postDesc);
	leftSide.appendChild(topReply);
	leftSide.appendChild(postButton);
	rightSide.appendChild(posterName);
	rightSide.appendChild(likeCount);
	rightSide.appendChild(commentCount);
	rightSide.appendChild(categoryName);

	threadBox.classList.add('thread-box');
	leftSide.classList.add('top-question-left-side');
	rightSide.classList.add('top-question-right-side');
	postButton.classList.add('top-question-button');
	wrapper.classList.add('wrapper');

	postTitle.innerHTML = `${postInfo.postTitles.questions[i]}`;
	postDesc.innerHTML = `${postInfo.postDescs.questions[i]}`;
	topReply.innerHTML = `<b>Top reply:</b> ${postInfo.topReplies.questions[i]}`;
	postButton.innerHTML = `<span>More replies</span> &#8594;`;
	posterName.innerHTML = `BY ${postInfo.posterNames.questions[i]}`;
	likeCount.innerHTML = `<b>${postInfo.likeCounts.questions[i]}</b> <img src="assets/svgs/like.svg" alt="LIKES" />`;
	commentCount.innerHTML = `<b>${postInfo.commentCounts.questions[i]}</b> <img src="assets/svgs/comment.svg" alt="COMMENTS" />`;
	categoryName.innerHTML = `${postInfo.categoryNames.questions[i]}`;

	// postButton.addEventListener('mouseover', () => {
	// 	postButton.style.transform = 'scale(1.05)';
	// 	postButton.style.backgroundColor = 'black';
	// 	postButton.addEventListener('mouseout', () => {
	// 		postButton.style.transform = 'scale(1.0)';
	// 		postButton.style.backgroundColor = 'rgb(128, 224, 248)';
	// 	});
	// 	console.log('works');
	// });

	document.querySelector('.top-questions').appendChild(wrapper);
}

for (let i = 0; i < postInfo.postTitles.polls.length; i++) {
	const wrapper = document.createElement('div');
	const threadBox = document.createElement('div');
	const leftSide = document.createElement('div');
	const rightSide = document.createElement('div');
	const postTitle = document.createElement('h3');
	const postDesc = document.createElement('p');
	const topReply = document.createElement('p');
	const postButton = document.createElement('button');
	const posterName = document.createElement('h4');
	const likeCount = document.createElement('p');
	const commentCount = document.createElement('p');
	const categoryName = document.createElement('h3');

	wrapper.appendChild(threadBox);
	threadBox.appendChild(leftSide);
	threadBox.appendChild(rightSide);
	leftSide.appendChild(postTitle);
	leftSide.appendChild(postDesc);
	leftSide.appendChild(topReply);
	leftSide.appendChild(postButton);
	rightSide.appendChild(posterName);
	rightSide.appendChild(likeCount);
	rightSide.appendChild(commentCount);
	rightSide.appendChild(categoryName);

	threadBox.classList.add('thread-box');
	leftSide.classList.add('top-question-left-side');
	rightSide.classList.add('top-question-right-side');
	postButton.classList.add('top-question-button');
	wrapper.classList.add('wrapper');

	postTitle.innerHTML = `${postInfo.postTitles.polls[i]}`;
	postDesc.innerHTML = `${postInfo.postDescs.polls[i]}`;
	topReply.innerHTML = `<b>Top reply:</b> ${postInfo.topReplies.polls[i]}`;
	postButton.innerHTML = `<span>More replies</span> &#8594;`;
	posterName.innerHTML = `BY ${postInfo.posterNames.polls[i]}`;
	likeCount.innerHTML = `<b>${postInfo.likeCounts.polls[i]}</b> <img src="assets/svgs/like.svg" alt="LIKES" />`;
	commentCount.innerHTML = `<b>${postInfo.commentCounts.polls[i]}</b> <img src="assets/svgs/comment.svg" alt="COMMENTS" />`;
	categoryName.innerHTML = `${postInfo.categoryNames.polls[i]}`;

	// postButton.addEventListener('mouseover', () => {
	// 	postButton.style.transform = 'scale(1.05)';
	// 	postButton.style.backgroundColor = 'black';
	// 	postButton.addEventListener('mouseout', () => {
	// 		postButton.style.transform = 'scale(1.0)';
	// 		postButton.style.backgroundColor = 'rgb(128, 224, 248)';
	// 	});
	// 	console.log('works');
	// });

	document.querySelector('.top-polls').appendChild(wrapper);
}

for (let i = 0; i < postInfo.postTitles.stories.length; i++) {
	const wrapper = document.createElement('div');
	const threadBox = document.createElement('div');
	const leftSide = document.createElement('div');
	const rightSide = document.createElement('div');
	const postTitle = document.createElement('h3');
	const postDesc = document.createElement('p');
	const topReply = document.createElement('p');
	const postButton = document.createElement('button');
	const posterName = document.createElement('h4');
	const likeCount = document.createElement('p');
	const commentCount = document.createElement('p');
	const categoryName = document.createElement('h3');

	wrapper.appendChild(threadBox);
	threadBox.appendChild(leftSide);
	threadBox.appendChild(rightSide);
	leftSide.appendChild(postTitle);
	leftSide.appendChild(postDesc);
	leftSide.appendChild(topReply);
	leftSide.appendChild(postButton);
	rightSide.appendChild(posterName);
	rightSide.appendChild(likeCount);
	rightSide.appendChild(commentCount);
	rightSide.appendChild(categoryName);

	threadBox.classList.add('thread-box');
	leftSide.classList.add('top-question-left-side');
	rightSide.classList.add('top-question-right-side');
	postButton.classList.add('top-question-button');
	wrapper.classList.add('wrapper');

	postTitle.innerHTML = `${postInfo.postTitles.stories[i]}`;
	postDesc.innerHTML = `${postInfo.postDescs.stories[i]}`;
	topReply.innerHTML = `<b>Top reply:</b> ${postInfo.topReplies.stories[i]}`;
	postButton.innerHTML = `<span>More replies</span> &#8594;`;
	posterName.innerHTML = `BY ${postInfo.posterNames.stories[i]}`;
	likeCount.innerHTML = `<b>${postInfo.likeCounts.stories[i]}</b> <img src="assets/svgs/like.svg" alt="LIKES" />`;
	commentCount.innerHTML = `<b>${postInfo.commentCounts.stories[i]}</b> <img src="assets/svgs/comment.svg" alt="COMMENTS" />`;
	categoryName.innerHTML = `${postInfo.categoryNames.stories[i]}`;

	// postButton.addEventListener('mouseover', () => {
	// 	postButton.style.transform = 'scale(1.05)';
	// 	postButton.style.backgroundColor = 'black';
	// 	postButton.addEventListener('mouseout', () => {
	// 		postButton.style.transform = 'scale(1.0)';
	// 		postButton.style.backgroundColor = 'rgb(128, 224, 248)';
	// 	});
	// 	console.log('works');
	// });

	document.querySelector('.top-stories').appendChild(wrapper);
}

// wipe-in animation
// Create the observer
let observer = new IntersectionObserver((entries) => {
	// Loop over the entries
	entries.forEach((entry) => {
		const square = entry.target.querySelector('.thread-box');
		// If the element is visible
		if (entry.isIntersecting) {
			square.classList.add('thread-box-animation');
			return; // if we added the class, exit the function
		}

		// We're not intersecting, so remove the class!
		square.classList.remove('thread-box-animation');
	});
});

console.log(document.querySelectorAll('.wrapper'));
// Tell the observer which elements to track
for (let wrapper of document.querySelectorAll('.wrapper')) {
	observer.observe(wrapper);
}
