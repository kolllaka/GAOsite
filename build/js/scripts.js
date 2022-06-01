// Custom Scripts
const form = document.querySelector('.form__body');
function stepForm() {
	const steps = form.querySelectorAll('.form__step'),
		backBtn = form.querySelector('.btn__back'),
		nextBtn = form.querySelector('.btn__next'),
		icons = form.querySelectorAll('.headerform__icon'),
		progress = form.querySelector('.headerform__success'),
		finish = form.querySelector('.form__finish');

	let stepIndex = 0;
	updateForm()

	backBtn.addEventListener('click', e => {
		if (stepIndex > 0) {
			icons[stepIndex].classList.remove('active');

			stepIndex--;
			updateForm();
		};
	});

	nextBtn.addEventListener('click', e => {
		stepIndex++;
		updateForm();
	});

	function updateForm() {
		removeAllStep(steps)

		if (stepIndex === 0) {
			backBtn.style.display = 'none';
		} else {
			backBtn.style.display = 'block';
		};

		if (stepIndex === steps.length) {
			// TODO finish logic
			removeAllStep(steps)
			form.querySelector('.form__header').style.display = 'none';
			backBtn.style.display = 'none';
			nextBtn.style.display = 'none';
			finish.style.display = 'block';

			return
		};

		steps[stepIndex].classList.add('active');
		icons[stepIndex].classList.add('active');

		prosent = (stepIndex / (steps.length - 1)) * 100 + '%';
		progress.style.width = prosent;
	};
};
if (form) {
	form.addEventListener('submit', e => e.preventDefault())
	stepForm();
};

// Remove active class from steps
function removeAllStep(steps) {
	steps.forEach(step => {
		step.classList.contains('active') && step.classList.remove('active');
	});
};