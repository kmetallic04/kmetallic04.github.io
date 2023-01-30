// Elements by Id
const domain = document.getElementById('domain');
const username = document.getElementById('username');
const email = document.getElementById('email');
const zone = document.getElementById('zone');
const center = document.getElementById('center');
const region = document.getElementById('region');
const password = document.getElementById('password');

// Query Selectors
const error_message = document.querySelector('.error_message');
const submit_button = document.querySelector('.login > button');
console.log(submit_button)

function checkInputs() {
	// trim to remove the whitespaces
  const domainValue = domain.value.trim();
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
  const zoneValue = zone.value.trim();
  const centerValue = center.value.trim();
  const regionValue = region.value.trim();
  const passwordValue = password.value.trim();

	if(usernameValue === '') {
		setError('Username cannot be blank');
	} else if (emailValue === '') {
		setError('Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor('Not a valid email');
	} else if(passwordValue === '') {
		setError('Password cannot be blank');
	} else if(domainValue === '') {
		setError('Username cannot be blank');
	} else {
    setError('Invalid Region/Zone combination');
  }
}

function setError(message) {
  error_message.setAttribute('style', 'display: block;')
	error_message.innerText = message
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

submit_button.onclick = checkInputs
