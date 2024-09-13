import './CalendarComponent.scss';
import React, { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ReserveComponentMenu = () => {
	const [startDate, setStartDate] = useState(null); //new Date()

	const ExampleCustomInput = forwardRef(
		({ value, onClick, className }, ref) => (
			<input
				className={className}
				onClick={onClick}
				ref={ref}
				value={value}
				placeholder='Дата и время бронирования*'
				readOnly
			/>
		),
	);

	return (
		<DatePicker
			selected={startDate}
			onChange={date => setStartDate(date)}
			customInput={<ExampleCustomInput className='example-custom-input' />}
		/>
	);
};

export default ReserveComponentMenu;
