function togglePasswordVisibility() {
	let passwordInput = document.getElementById('passwordInput')
	let img = document.querySelector('.toggle-password img')

	if (passwordInput.type === 'password') {
		passwordInput.type = 'text'
		img.src = '../../images/svg/icons/visibility_off.svg'
	} else {
		passwordInput.type = 'password'
		img.src = '../../images/svg/icons/visibility.svg'
	}
}
