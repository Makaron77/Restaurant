// src/context/context.tsx
import React, { createContext, ReactNode, useRef, useState } from 'react';

interface UserContextType {
	reserveActiveMenu: boolean;
	setReserveActiveMenu: (value: boolean) => void;
	scrollTo: (key: string) => void;
	registerRef: (key: string, ref: HTMLDivElement | null) => void;
}

export const UserContext = createContext<UserContextType>({
	reserveActiveMenu: false,
	setReserveActiveMenu: () => {},
	scrollTo: () => {},
	registerRef: () => {},
});

interface UserAppContextProps {
	children: ReactNode;
}

export const UserAppContext = ({ children }: UserAppContextProps) => {
	const [reserveActiveMenu, setReserveActiveMenu] = useState(false);
	const refs = useRef<Map<string, HTMLDivElement | null>>(new Map());

	const scrollTo = (key: string) => {
		const element = refs.current.get(key);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const registerRef = (key: string, ref: HTMLDivElement | null) => {
		if (ref) {
			refs.current.set(key, ref);
		} else {
			refs.current.delete(key);
		}
	};

	return (
		<UserContext.Provider
			value={{ reserveActiveMenu, setReserveActiveMenu, scrollTo, registerRef }}
		>
			{children}
		</UserContext.Provider>
	);
};
