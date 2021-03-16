import validator from 'is_js';

const checkEmpty = (val, key) => {
	if (validator.empty(val.trim())) {
		return `Please enter ${key}`;
	} else {
		return '';
	}
};

const checkMinLength = (val, minLength, key) => {
	if (val.trim().length < minLength) {
		return `Please enter valid ${key}`;
	} else {
		return '';
	}
};

export default function(data) {
	let error = '';
	const {name,  email, password, rePassword} = data;

	if (name !== undefined) {
		let emptyValidationText = checkEmpty(name, 'name');
		if (emptyValidationText !== '') {
			return emptyValidationText;
		} else {
			let minLengthValidation = checkMinLength(name, 3, ' name');
			if (minLengthValidation !== '') {
				return minLengthValidation;
			}
		}
	}

	

	if (email !== undefined) {
		let emptyValidationText = checkEmpty(email, 'email');
		if (emptyValidationText !== '') {
			return emptyValidationText;
		} else {
			if (!validator.email(email)) {
				return 'Please enter valid email';
			}
		}
	}



	if (password !== undefined) {
		let emptyValidationText = checkEmpty(password, 'password');
		if (emptyValidationText !== '') {
			return emptyValidationText;
		} else {
			let minLengthValidation = checkMinLength(password, 6, 'password');
			if (minLengthValidation !== '') {
				if(rePassword!=undefined){
					return "Password requires minimum 6 characters"
				}
				return "Password is incorrect";
			}
		}
	}
	if (rePassword !== undefined) {
		let emptyValidationText = checkEmpty(rePassword, 'rePassword');
		if (emptyValidationText !== '') {
			return emptyValidationText;
		} 
		if(rePassword!=password){
			return "Password and Confirm Password didn't matched"
		}
	}

	// if (phoneNumber !== undefined) {
	// 	let emptyValidationText = checkEmpty(phoneNumber, 'phone number');
	// 	if (emptyValidationText !== '') {
	// 		return emptyValidationText;
	// 	}
	// 	if (!/^[0][1-9]$|^[1-9]\d{8,14}$/.test(phoneNumber)) {
	// 		return 'Please enter valid mobile number';
	// 	}
	// }

	
}