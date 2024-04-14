document.addEventListener('DOMContentLoaded', function () {
	const slider = document.querySelector('.slider')
	const prevButton = document.querySelector('.btn-prev')
	const nextButton = document.querySelector('.btn-next')
	let counter = 0

	const slides = document.querySelectorAll('.slide')

	function updateSlider() {
		const translateValue = -counter * 100 + '%'
		slider.style.transform = 'translateX(' + translateValue + ')'
	}

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

	window.addEventListener('resize', function () {
		updateImageSizes()
		updateSlider()
	})

	function updateImageSizes() {
		const sliderWidth = document.querySelector('.slider-container').offsetWidth
		slides.forEach(slide => {
			const image = slide.querySelector('img')
			image.style.width = sliderWidth + 'px'
		})
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
	})

	prevButton.addEventListener('click', function () {
		clearInterval(intervalId)
		startAutoSlide()
	})
})
