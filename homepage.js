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
