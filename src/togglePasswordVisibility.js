function togglePasswordVisibility() {
	var passwordInput = document.getElementById('passwordInput')
	var icon = document.querySelector('.toggle-password i')

	if (passwordInput.type === 'password') {
		passwordInput.type = 'text'
		icon.textContent = 'visibility_off'
	} else {
		passwordInput.type = 'password'
		icon.textContent = 'visibility'
	}
}
