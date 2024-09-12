import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	size?: 'small' | 'medium' | 'large';
	className?: string;
}

export default function Button({
	children,
	onClick = () => {},
	size = 'medium',
	className = '',
}: ButtonProps) {
	return (
		<button
			className={`${styles.btn} ${styles[`btn--${size}`]} ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
