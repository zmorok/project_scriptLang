document.addEventListener('DOMContentLoaded', function () {
	const getData = () => {
		const footer = document.querySelector('footer')
		const xhttp = new XMLHttpRequest()
		const pathToFooter = window.location.pathname.startsWith('/pages/')
			? '../xml/footer.xml'
			: '/xml/footer.xml'
		xhttp.open('GET', pathToFooter, true)
		xhttp.send()
		xhttp.onload = function () {
			const xmlData = this.responseXML
			const footerXML = xmlData.querySelector('.footer-container')
			footer.appendChild(footerXML)
			footer.innerHTML += `<div class="copyright"><p>&#169; 2024 TradeUnity. Все права защищены.</p></div>`
		}
	}

	getData()
})
