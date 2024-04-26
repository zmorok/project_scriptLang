function togglePasswordVisibility() {
	let passwordInput = document.getElementById('passwordInput')
	let img = document.querySelector('.toggle-password img')

	if (passwordInput.type === 'password') {
		passwordInput.type = 'text'
		img.src = '../../images/svg/icons/visibility.svg'
		img.alt = 'visibility.svg'
	} else {
		passwordInput.type = 'password'
		img.src = '../../images/svg/icons/visibility_off.svg'
		img.alt = 'visibility_off.svg'
	}
}
