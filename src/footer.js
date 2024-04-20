document.addEventListener('DOMContentLoaded', function () {
	const getData = () => {
		const footer = document.querySelector('footer')
		const xhttp = new XMLHttpRequest()
		xhttp.open('GET', '../footer.xml', true)
		xhttp.send()
		xhttp.onload = function () {
			const xmlString = this.responseText
			const parser = new DOMParser()
			const xmlDoc = parser.parseFromString(xmlString, 'text/xml')
			const footerXML = xmlDoc.querySelector('.footer-container')
			const clonedContent = footerXML.cloneNode(true)
			footer.innerHTML = ''
			footer.appendChild(clonedContent)
			footer.innerHTML += `<div class="copyright"><p>&#169; 2024 TradeUnity. Все права защищены.</p></div>`
		}
	}

	getData()
})
