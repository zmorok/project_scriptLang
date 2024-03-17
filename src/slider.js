document.addEventListener('DOMContentLoaded', function () {
	const slider = document.querySelector('.slider')
	const prevButton = document.querySelector('.btn-prev')
	const nextButton = document.querySelector('.btn-next')

	let counter = 0

	const slides = document.querySelectorAll('.slide')

	nextButton.addEventListener('click', function () {
		if (counter < slides.length - 1) {
			counter++
		} else {
			counter = 0
		}

		updateSlider()
	})

	prevButton.addEventListener('click', function () {
		if (counter > 0) {
			counter--
		} else {
			counter = slides.length - 1
		}

		updateSlider()
	})

	function updateSlider() {
		const translateValue = -counter * 100 + '%'

		slider.style.transform = 'translateX(' + translateValue + ')'
	}

	function startAutoSlide() {
		intervalId = setInterval(function () {
			if (counter < slides.length - 1) {
				counter++
			} else {
				counter = 0
			}

			updateSlider()
		}, 3000)
	}

	startAutoSlide()

	nextButton.addEventListener('click', function () {
		clearInterval(intervalId)
		startAutoSlide()
		nextSlide()
	})

	prevButton.addEventListener('click', function () {
		clearInterval(intervalId)
		startAutoSlide()
		prevSlide()
	})
})
