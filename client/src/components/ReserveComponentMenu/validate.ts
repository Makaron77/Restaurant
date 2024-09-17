

export const validateFullName = fullName => {
	const fullNameRegex = /^[А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+( [А-ЯЁ][а-яё]+)?$/;
	return fullNameRegex.test(fullName);
};

export const validateEmail = email => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

export const validatePhone = mobile => {
	return /^8\d{10}$/.test(mobile);
};
