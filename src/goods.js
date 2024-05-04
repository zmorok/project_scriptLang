document.addEventListener('DOMContentLoaded', () => {
	const xml = 'xml/goods.xml'
	const pageTitle = document.title
	const getData = (xml, pageTitle) => {
		const main = document.querySelector('main')
		const xhttp = new XMLHttpRequest()
		xhttp.open('GET', xml, true)
		xhttp.send()
		xhttp.onload = function () {
			const xmlData = this.responseXML
			const data = xmlData.querySelectorAll('data')
			data.forEach(data => {
				if (data.querySelector('title').textContent === pageTitle) {
					const content = data.querySelector('main').innerHTML
					main.innerHTML += content
				}
			})
		}
	}

	getData(xml, pageTitle)
})
