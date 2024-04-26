document.addEventListener('DOMContentLoaded', function () {
	const slider = document.querySelector('.slider')
	const prevButton = document.querySelector('.btn-prev')
	const nextButton = document.querySelector('.btn-next')
	let counter = 0

	const slides = document.querySelectorAll('.slide')
	updateImageSizes()

	function updateSlider() {
		const translateValue = -counter * 100 + '%'
		slider.style.transform = 'translateX(' + translateValue + ')'
	}

	nextButton.addEventListener('click', function () {
		counter < slides.length - 1 ? counter++ : (counter = 0)
		updateSlider()
	})

	prevButton.addEventListener('click', function () {
		counter > 0 ? counter-- : (counter = slides.length - 1)
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
			counter < slides.length - 1 ? counter++ : (counter = 0)
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
