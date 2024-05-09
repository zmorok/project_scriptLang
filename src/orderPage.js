document.addEventListener('DOMContentLoaded', () => {
	const modal = document.createElement('div')
	modal.classList.add('modal')

	const modalContent = document.createElement('div')
	modalContent.classList.add('modal-content')

	modal.appendChild(modalContent)
	document.body.appendChild(modal)

	const showModal = (
		productName,
		productInfo,
		productPrice,
		productImageSrc
	) => {
		modalContent.innerHTML = `
      <img src="${productImageSrc}" alt="${productName}">
      <h2>${productName}</h2>
      <p class="product_desc">${productInfo}</p>
      <p class="product_price">${productPrice}</p>
      <button id="confirm_btn">Заказать</button>
    `

		modal.style.display = 'flex'
		modal.classList.remove('hide')
		modal.classList.add('show')
		document.body.classList.add('scroll-lock')

		setTimeout(() => {
			modalContent.scrollTop = 0
		}, 50)
	}

	const getData = (xml, pageTitle, goodId, callback) => {
		const xhr = new XMLHttpRequest()
		xhr.open('GET', xml, true)
		xhr.send()
		xhr.onload = function () {
			const xmlDesc = this.responseXML
			const data = xmlDesc.querySelectorAll('data')
			const descs = Array.from(data).find(
				data => data.querySelector('title').textContent === pageTitle
			)
			const desc = Array.from(descs.querySelectorAll('div')).find(
				div => div.id === goodId
			).textContent
			callback(desc)
		}
		xhr.onerror = function () {
			console.error('Произошла ошибка при получении данных.')
		}
	}

	document.querySelector('main').addEventListener('click', e => {
		if (e.target.classList.contains('btn_buy')) {
			const xml = 'xml/descriptions.xml'
			const pageTitle = document.title
			const goodId = e.target.parentElement.id

			getData(xml, pageTitle, goodId, function (description) {
				const productInfo = description
				const productDiv = e.target.parentElement
				const productName = productDiv.querySelector('h2').textContent
				const productPrice = productDiv.querySelector('p').textContent
				const productImageSrc = productDiv.querySelector('img').src

				showModal(productName, productInfo, productPrice, productImageSrc)
			})
		}
	})

	window.addEventListener('click', e => {
		if (e.target == modal) {
			modal.classList.remove('show')
			modal.classList.add('hide')
			document.body.classList.remove('scroll-lock')
			setTimeout(() => {
				modal.style.display = 'none'
				modal.classList.remove('hide')
				modalContent.innerHTML = ''
			}, 280)
		}
	})
})
