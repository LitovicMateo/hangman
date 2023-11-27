export const keyboardValidator = (ev: KeyboardEvent) => {
	// get key code
	const code = ev.keyCode
	console.log(code);
	
	let valid;
	if (code >= 65 && code <= 90) {
		valid = true
	} else if (code >= 97 && code <= 122) {
		valid = true
	} else {
		valid = false
	}

	return valid
}