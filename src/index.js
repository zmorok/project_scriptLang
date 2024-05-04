document.addEventListener('DOMContentLoaded', () => {
	function updateImageSizes() {
		const sections = document.querySelector('main').querySelectorAll('div')
		sections.forEach(div => {
			const image = div.querySelector('img')
			const width =
				image.offsetWidth < div.offsetWidth
					? image.style.width
					: div.offsetWidth
			image.style.width = width + 'px'
		})
	}
	window.addEventListener('resize', function () {
		updateImageSizes()
	})
})
