const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		const offset = button.classList.contains('next') ? 1 : -1;
		const slides = button.closest('.slider').querySelector('.slide-container');

		const activeSlide = slides.querySelector('.active');
		let newIndex = [...slides.children].indexOf(activeSlide) + offset;

		if (newIndex < 0) newIndex = slides.children.length - 1;
		if (newIndex >= slides.children.length) newIndex = 0;

		slides.children[newIndex].classList.add('active');
		delete activeSlide.classList.remove('active');
	});
});
