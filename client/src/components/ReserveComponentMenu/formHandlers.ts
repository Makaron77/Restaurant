import { validateFullName, validateEmail, validatePhone } from './validate'; // Убедись, что импортируешь эти функции

export const handleInputChange = (event, setValidateForm) => {
	const { name, value } = event.target;
	setValidateForm(prevItem => ({ ...prevItem, [name]: value }));
};

export const sendHandler = async (
	setValidateForm,
	validateForm,
	event,
	message,
	setReserveActiveMenu,
) => {
	event.preventDefault();

	const { fullName, email, mobile, date } = validateForm;

	if (!validateFullName(fullName)) {
		message.warning(
			'Пожалуйста, введите корректное ФИО (Имя и Фамилия с заглавных букв)',
		);
		return;
	}

	if (!validateEmail(email)) {
		message.warning('Некорректный Email');
		return;
	}

	if (!date) {
		message.warning('Укажите дату');
		return;
	}

	if (!validatePhone(mobile)) {
		message.warning(
			'Номер телефона должен начинаться с 8 и содержать 11 символов',
		);
		return;
	}

	message.info('Отправка...');

	try {
		await handleFormSubmissionAPI(validateForm);
		message.success(
			'Бронь успешно отправлена, в ближайшее время с вами свяжутся!',
		);
		setReserveActiveMenu(false);
		setValidateForm({
			fullName: '',
			email: '',
			mobile: '',
			comment: '',
			date: '',
		});
		
		
	} catch (error) {
		message.error('Произошла ошибка при отправке формы');
	}
};

const handleFormSubmissionAPI = async validateForm => {
	const formData = new FormData();
	formData.append('ФИО', validateForm.fullName);
	formData.append('Email', validateForm.email);
	formData.append('Телефон', validateForm.mobile);
	formData.append('Комментарий', validateForm.comment);
	formData.append('Дата/время брони', validateForm.date);
	formData.append('access_key', '3071994e-2a7a-492b-99ce-eaefd6a667dc');
	//! ЧТОБЫ ПРИХОДИЛИ ДАННЫЕ С ФОРМЫ на почту: зайти -> https://web3forms.com/ -> указать свою почту -> на почту приходит код который нужно указать выше
	const response = await fetch('https://api.web3forms.com/submit', {
		method: 'POST',
		body: formData,
	});

	const data = await response.json();
	if (!data.success) {
		throw new Error(data.message || 'Ошибка');
	}
};
